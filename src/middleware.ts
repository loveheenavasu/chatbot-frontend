import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // const authToken = request.cookies.get("authToken");
  // if (authToken && !request.nextUrl.pathname.startsWith("/chat/admin")) {
  //   return NextResponse.redirect(new URL("/chat/admin", request.url));
  // }
  // if (!authToken) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
