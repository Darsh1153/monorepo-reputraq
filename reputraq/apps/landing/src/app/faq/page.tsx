import { Navbar } from "@/components/navbar";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <FAQ />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
