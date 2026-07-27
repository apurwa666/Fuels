import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-secondary/50">{children}</main>
      <Footer />
    </div>
  );
}
