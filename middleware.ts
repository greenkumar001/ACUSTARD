import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  const pathname = req.nextUrl.pathname;

  console.log("PATH:", pathname);
  console.log("TOKEN EXISTS:", !!token);

  if (pathname === "/admin/login") {
    if (!token) {
      return NextResponse.next();
    }

    try {
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET!)
      );

      console.log("✅ LOGIN TOKEN VERIFIED");

      return NextResponse.redirect(new URL("/admin/dashboard", req.url));

    } catch (err) {

      console.log("❌ LOGIN TOKEN INVALID");
      console.log(err);

      return NextResponse.next();
    }
  }

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {

      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET!)
      );

      console.log("✅ DASHBOARD TOKEN VERIFIED");

      return NextResponse.next();

    } catch (err) {

      console.log("❌ DASHBOARD TOKEN INVALID");
      console.log(err);

      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};