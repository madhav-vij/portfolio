const basePath = process.env.LOCAL_DEV === "true" ? "" : "/portfolio"

export const img = (src: string) => `${basePath}${src}`
