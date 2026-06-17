"use client"

import React, { CSSProperties, forwardRef, useRef } from "react"
import {
  motion,
  motionValue,
  useAnimationFrame,
  useTransform,
  type MotionValue,
} from "motion/react"
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref"

type CSSPropertiesWithValues = {
  [K in keyof CSSProperties]: string | number
}

interface StyleValue<T extends keyof CSSPropertiesWithValues> {
  from: CSSPropertiesWithValues[T]
  to: CSSPropertiesWithValues[T]
}

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string
  styles: Partial<{
    [K in keyof CSSPropertiesWithValues]: StyleValue<K>
  }>
  containerRef: React.RefObject<HTMLDivElement | null>
  radius?: number
  falloff?: "linear" | "exponential" | "gaussian"
}

interface ProximityLetterProps {
  letter: string
  letterRef: (el: HTMLSpanElement | null) => void
  proximity: MotionValue<number>
  styles: TextProps["styles"]
}

function ProximityLetter({ letter, letterRef, proximity, styles }: ProximityLetterProps) {
  const color =
    styles.color &&
    useTransform(proximity, [0, 1], [styles.color.from as string, styles.color.to as string])

  const opacity =
    styles.opacity &&
    useTransform(proximity, [0, 1], [styles.opacity.from as number, styles.opacity.to as number])

  const transform =
    styles.transform &&
    useTransform(
      proximity,
      [0, 1],
      [styles.transform.from as string, styles.transform.to as string],
    )

  const motionStyle: {
    color?: MotionValue<string>
    opacity?: MotionValue<number>
    transform?: MotionValue<string>
  } = {
    color,
    opacity,
    transform,
  }

  return (
    <motion.span
      ref={letterRef}
      className="inline-block"
      aria-hidden="true"
      style={motionStyle}
    >
      {letter}
    </motion.span>
  )
}

const TextCursorProximity = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      label,
      styles,
      containerRef,
      radius = 50,
      falloff = "linear",
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
    const mousePositionRef = useMousePositionRef(containerRef)
    const letterCount = label.replace(/\s/g, "").length
    const letterProximities = useRef<MotionValue<number>[]>([])

    if (letterProximities.current.length !== letterCount) {
      letterProximities.current = Array.from({ length: letterCount }, () => motionValue(0))
    }

    const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }

    const calculateFalloff = (distance: number): number => {
      const normalizedDistance = Math.min(Math.max(1 - distance / radius, 0), 1)

      switch (falloff) {
        case "exponential":
          return Math.pow(normalizedDistance, 2)
        case "gaussian":
          return Math.exp(-Math.pow(distance / (radius / 2), 2) / 2)
        case "linear":
        default:
          return normalizedDistance
      }
    }

    useAnimationFrame(() => {
      if (!containerRef.current) return
      const containerRect = containerRef.current.getBoundingClientRect()

      letterRefs.current.forEach((letterRef, index) => {
        if (!letterRef) return

        const rect = letterRef.getBoundingClientRect()
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top

        const distance = calculateDistance(
          mousePositionRef.current.x,
          mousePositionRef.current.y,
          letterCenterX,
          letterCenterY,
        )

        const proximity = calculateFalloff(distance)
        letterProximities.current[index]?.set(proximity)
      })
    })

    const words = label.split(" ")
    let letterIndex = 0

    return (
      <span ref={ref} className={`${className} inline`} onClick={onClick} {...props}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((letter) => {
              const currentLetterIndex = letterIndex++
              const proximity = letterProximities.current[currentLetterIndex]

              return (
                <ProximityLetter
                  key={currentLetterIndex}
                  letter={letter}
                  letterRef={(el) => {
                    letterRefs.current[currentLetterIndex] = el
                  }}
                  proximity={proximity}
                  styles={styles}
                />
              )
            })}
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    )
  },
)

TextCursorProximity.displayName = "TextCursorProximity"
export default TextCursorProximity
