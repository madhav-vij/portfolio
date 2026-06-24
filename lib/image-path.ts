const basePath = process.env.NODE_ENV === "development" ? "" : "/portfolio"

export const img = (src: string) => `${basePath}${src}`
