import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    // 🔴 حط ايميلك هنا لاحقاً
    const YOUR_EMAIL = "(pmidas93@gmail.com)";

    // هذا مكان الإرسال الحقيقي (حالياً mock)
    console.log("New Message:");
    console.log("To:", YOUR_EMAIL);
    console.log({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}