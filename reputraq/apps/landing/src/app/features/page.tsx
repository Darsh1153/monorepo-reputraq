import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <Features />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
