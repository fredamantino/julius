import { NextRequest, NextResponse } from "next/server"
import { getURL } from "./lib/get-url"

export function middleware(request: NextRequest) {
    const token = request.cookies.get("authjs.session-token")
    const pathname = request.nextUrl.pathname

    if (token && pathname === "/auth") {
        return NextResponse.redirect(new URL(getURL("/app")))
    }
    if (!token && pathname.includes("/app")) {
        return NextResponse.redirect(new URL(getURL("/auth")))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}