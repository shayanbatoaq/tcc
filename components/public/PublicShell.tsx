import { Footer } from "@/components/public/Footer";
import { Header } from "@/components/public/Header";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
