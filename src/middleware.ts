import { type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request?.cookies?.get?.("authToken")?.value;
  if (currentUser && !request.nextUrl.pathname.startsWith("/chat/admin")) {
    return Response.redirect(new URL("/chat/admin", request.url));
  }
  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/login", "/chat/:path*"],
};
