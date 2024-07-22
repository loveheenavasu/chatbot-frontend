import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const parts = pathname.split("/");
  const pathId = parts[parts.length - 1];
  const currentUser = request.cookies.get("authToken")?.value;
  if (pathname.startsWith(`/chatbot/${pathId}`)) {
    if (currentUser) {
      // If authToken exists, allow access to the chatbot page
      return;
    } else {
      // If authToken does not exist, redirect to login page
      return Response.redirect(new URL("/login", request.url));
    }
  }
  if (currentUser && !request.nextUrl.pathname.startsWith("/chat/admin")) {
    return Response.redirect(new URL("/chat/admin", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
