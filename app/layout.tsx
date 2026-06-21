import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white">

        {/* 🌌 GLOBAL BACKGROUND (fixed = ما ينقطع مع السكرول) */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="bg-glow w-full h-full" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}