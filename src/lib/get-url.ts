export function getURL(path?: string) {
    const baseUrl = process.env.PUBLIC_URL || "" 
    const normalizedUrl = path && !path.startsWith("/") ? `/${path}` : path || ""
    return `${baseUrl}${normalizedUrl}`
}