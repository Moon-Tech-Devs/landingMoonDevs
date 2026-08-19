export interface AppFeature {
  title: string
  description: string
  iconName: "gamepad" | "shield" | "heart" | "trophy" | "activity" | "zap" | "lock" | "sparkles" | "target" | "flame"
}

export interface AppMetric {
  label: string
  value: string
  detail?: string
}

export interface AppItem {
  id: string
  slug: string
  title: string
  tagline: string
  subtitle: string
  badgeText: string
  description: string
  longDescription: string
  category: string
  themeColor: {
    primary: string
    accent: string
    glow: string
    badgeBg: string
    badgeText: string
    border: string
  }
  platform: {
    android: boolean
    ios: boolean
    playStoreUrl?: string
    appStoreUrl?: string
  }
  privacyNotes: {
    isOffline: boolean
    hasAds: boolean
    requiresCloudAccount: boolean
    summary: string
  }
  medicalDisclaimer?: string
  metrics: AppMetric[]
  features: AppFeature[]
  tags: string[]
  highlights: string[]
  previewHighlights: {
    screenName: string
    actionLabel: string
    stateBadge: string
    description: string
  }[]
}

export const APPS_DATA: AppItem[] = [
  {
    id: "nutriapp",
    slug: "nutriapp",
    title: "NutriApp",
    tagline: "Hábitos Saludables Jugando en Familia",
    subtitle: "Juego educativo e interactivo para padres, madres e hijos.",
    badgeText: "Educación & Salud Infantil",
    description:
      "Un sendero interactivo de niveles, minijuegos y recompensas diseñado para aprender y consolidar hábitos de nutrición balanceada y movimiento de forma divertida.",
    longDescription:
      "NutriApp transforma la educación nutricional en una aventura compartida entre padres e hijos. Permite registrar el perfil del menor (nombre, edad, peso y estatura) calculando un indicador orientativo de IMC y brindando desafíos diarios dinámicos sin fricción digital.",
    category: "Educación y Salud Familiar",
    themeColor: {
      primary: "#1D9B52",
      accent: "#3C9F5A",
      glow: "rgba(29, 155, 82, 0.25)",
      badgeBg: "rgba(29, 155, 82, 0.12)",
      badgeText: "#15803d",
      border: "rgba(29, 155, 82, 0.25)",
    },
    platform: {
      android: true,
      ios: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.codidevs.nutriapp",
    },
    privacyNotes: {
      isOffline: true,
      hasAds: false,
      requiresCloudAccount: false,
      summary: "100% Offline y Privado: Los datos nunca salen de tu teléfono. Sin cuentas, sin rastreadores y sin publicidad.",
    },
    medicalDisclaimer:
      "NutriApp no es un dispositivo médico y no diagnostica, trata ni previene ninguna condición clínica. El indicador de IMC y las recomendaciones son meramente orientativas. Consulta siempre a un profesional de la salud matriculado.",
    metrics: [
      { label: "Privacidad", value: "100% Local", detail: "Sin conexión requerida" },
      { label: "Publicidad", value: "0 Anuncios", detail: "Experiencia limpia para niños" },
      { label: "Gamificación", value: "Niveles & Retos", detail: "Minijuegos interactivos" },
    ],
    features: [
      {
        title: "Sendero de Niveles y Minijuegos",
        description: "Aprender sobre grupos de alimentos, hidratación y ejercicio físico superando mundos y minijuegos didácticos.",
        iconName: "gamepad",
      },
      {
        title: "Perfil Infantil e Indicador IMC",
        description: "Registro seguro de peso, estatura y edad con cálculo orientativo de percentiles infantiles para seguimiento familiar.",
        iconName: "activity",
      },
      {
        title: "Recompensas y Desafíos en Familia",
        description: "Sistema de medallas y logros que incentivan la preparación de recetas saludables y pausas activas en casa.",
        iconName: "trophy",
      },
      {
        title: "Seguridad Absoluta Offline",
        description: "Cero recopilación de datos en la nube. Máxima protección y tranquilidad para la privacidad de tus hijos.",
        iconName: "lock",
      },
    ],
    tags: ["Educativo", "Gamificación", "Salud Infantil", "Offline-First", "Sin Anuncios"],
    highlights: [
      "Dinámicas familiares para comer mejor y moverse más",
      "Minijuegos rápidos con feedback visual inmediato",
      "Modo 100% autónomo sin necesidad de red Wi-Fi o datos móviles",
    ],
    previewHighlights: [
      {
        screenName: "Sendero de Hábitos",
        actionLabel: "Nivel 4: Frutas & Energía",
        stateBadge: "+150 Puntos",
        description: "Desafío de clasificación de nutrientes completado.",
      },
      {
        screenName: "Perfil & Crecimiento",
        actionLabel: "Seguimiento Orientativo",
        stateBadge: "Saludable",
        description: "Estatura y peso registrados localmente con seguridad total.",
      },
    ],
  },
  {
    id: "g-learn",
    slug: "g-learn",
    title: "G-Learn",
    tagline: "Habit Tracker Gamificado con Bosses Semanales",
    subtitle: "Mobile-First & PWA: Transforma tus hábitos diarios en victorias RPG.",
    badgeText: "Gamification Engine & Social Leaderboard",
    description:
      "Completa tus hábitos diarios, acumula XP, sube de nivel y enfrenta al Boss Semanal. Un habit tracker inteligente diseñado para vencer la procrastinación con disciplina y recompensas RPG.",
    longDescription:
      "G-Learn es un habit tracker gamificado desarrollado en React 19 y Supabase. Cada hábito registrado otorga XP base (+10 XP) y bonus diario (+25 XP) para subir de nivel. Cada lunes se invoca un Boss Semanal con vida calculada según tu carga de hábitos; cumplir tus metas inflige daño y derrotarlo te premia con +200 XP de bonificación.",
    category: "Productividad & Gamificación RPG",
    themeColor: {
      primary: "#2563EB",
      accent: "#3B82F6",
      glow: "rgba(37, 99, 235, 0.25)",
      badgeBg: "rgba(37, 99, 235, 0.12)",
      badgeText: "#1d4ed8",
      border: "rgba(37, 99, 235, 0.25)",
    },
    platform: {
      android: true,
      ios: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.codidevs.glearn",
    },
    privacyNotes: {
      isOffline: false,
      hasAds: false,
      requiresCloudAccount: true,
      summary: "Autenticación segura con Clerk, base de datos protegida con Row Level Security (RLS) en Supabase y cero anuncios.",
    },
    metrics: [
      { label: "Boss Semanal", value: "Reinicio Lunes", detail: "HP según carga de hábitos" },
      { label: "Progreso RPG", value: "XP & Niveles", detail: "+200 XP por victoria semanal" },
      { label: "Comunidad", value: "Top 50 Global", detail: "Leaderboard & Feed de amigos" },
    ],
    features: [
      {
        title: "Batallas de Bosses Semanales",
        description: "Cada lunes inicia un combate contra un jefe adaptado a tus hábitos. Inflige daño al completar tareas y reclama +200 XP al vencerlo.",
        iconName: "flame",
      },
      {
        title: "Límite de Daño Diario Inteligente",
        description: "Tope de 55 de daño diario para evitar el agotamiento y promover hábitos consistentes y sostenibles día a día.",
        iconName: "zap",
      },
      {
        title: "Leaderboard Global & Feed Social",
        description: "Compite en el ranking mundial diario por XP acumulado, conecta con amigos y celebra los ascensos de nivel en tiempo real.",
        iconName: "trophy",
      },
      {
        title: "Arquitectura PWA & Datos Protegidos",
        description: "Soporte offline con TanStack Query, autenticación segura mediante Clerk y políticas Row Level Security (RLS) en Supabase.",
        iconName: "lock",
      },
    ],
    tags: ["Habit Tracker", "Gamificación RPG", "Bosses Semanales", "Leaderboard Global", "PWA Offline", "Supabase & Clerk"],
    highlights: [
      "Mecánica de combate semanal diseñada contra la procrastinación",
      "Progresión lineal de niveles con recompensas de XP por constancia",
      "Ranking mundial y feed de logros compartido con amigos",
    ],
    previewHighlights: [
      {
        screenName: "Arena del Boss Semanal",
        actionLabel: "Boss: Titán del Tiempo",
        stateBadge: "HP: 350 / 1200",
        description: "Completar hábitos diarios inflige entre 20 y 30 de daño.",
      },
      {
        screenName: "Leaderboard & XP",
        actionLabel: "Nivel 8 Warrior",
        stateBadge: "+25 XP Bonus",
        description: "Todos los hábitos del día completados. Racha de 14 días.",
      },
    ],
  },
]
