import { NextRequest, NextResponse } from 'next/server'

// ══════════════════════════════════════════════════════════
//  🚫  BANNED IPs — Ajoute / retire des IPs ici
// ══════════════════════════════════════════════════════════
const BANNED_IPS: string[] = [
  '129.45.70.81', // ← Remplace par la vraie IP du spammeur
]

function getClientIP(request: NextRequest): string {
  // Sur Vercel, l'IP réelle est toujours dans x-forwarded-for
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    // x-forwarded-for peut contenir une liste : "ip1, ip2, ..."
    return forwarded.split(',')[0].trim()
  }
  return 'unknown'
}

export function middleware(request: NextRequest) {
  const clientIP = getClientIP(request)

  if (BANNED_IPS.includes(clientIP)) {
    console.warn(`🚫 [MIDDLEWARE] Accès bloqué pour l'IP bannie : ${clientIP} — ${request.method} ${request.nextUrl.pathname}`)

    return new NextResponse(

      `<h1 style="color:red; font-family:sans-serif; text-align:center; margin-top:100px;">
     nbi3333 locale ou roh nik mokkkkkkkkk yadek f zebi ya 9a7ba ya wlid kalitouss.😎
   </h1>`,
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }

  return NextResponse.next()
}

// ══════════════════════════════════════════════════════════
//  🎯  Matcher — uniquement sur les routes API des commandes
//  Ajoute d'autres routes si besoin
// ══════════════════════════════════════════════════════════
export const config = {
  matcher: ['/api/orders', '/api/orders/:path*'],
}
