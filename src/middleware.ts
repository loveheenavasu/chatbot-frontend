import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentUser = request?.cookies?.get?.("authToken")?.value;
  if (currentUser && !request.nextUrl.pathname.startsWith("/")) {
    return Response.redirect(new URL("/", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/login", "/"],
};
