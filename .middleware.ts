import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./src/i18n/routing"; // adapte le chemin si besoin

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Redirige seulement la racine /
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, req.url));
  }

  return NextResponse.next();
}