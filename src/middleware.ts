import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { auth } from "./auth";
import { defaultLocale, localePrefix, locales, pathnames } from "@/i18n/routing";
import { apiAuthPrefix, DEFAULT_LOGIN_REDIRECT, DEFAULT_LOGOUT_REDIRECT } from "./routes";

// // Create the internationalization middleware
const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  pathnames,
});

export default auth(req => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const pathname = nextUrl.pathname;
  const isLoginPage = pathname === DEFAULT_LOGOUT_REDIRECT;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isDashboardAuthRegisterPage = pathname === "/dashboard/auth/register";
  const isPrivateRoutes = pathname.startsWith("/dashboard") && !pathname.includes("/auth");
  const isDashboardRoutes = pathname.startsWith("/dashboard");
  const isUploadthingRoute = pathname.startsWith("/api/uploadthing");

  if (isApiAuthRoute || isUploadthingRoute) return NextResponse.next();

  if (!isDashboardRoutes) {
    console.log("IS NOT DASHBOARD");
    return intlMiddleware(req);
  }

  if (isLoginPage || isDashboardAuthRegisterPage) {
    console.log("IS DASHBOARD AUTH PAGE");
    if (isLoggedIn) {
      console.log("LOGGED IN AND REDIRECTED TO DASHBOARD");
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  if (isPrivateRoutes && !isLoggedIn) {
    console.log("LOGGED OUT");
    return NextResponse.redirect(new URL(DEFAULT_LOGOUT_REDIRECT, nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/", // Match the root path
    "/(ru|en|am)/:path*", // Match paths with locale prefixes
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", // Match non-static asset paths
    "/(api|trpc)(.*)", // Match API or trpc routes
  ],
};
