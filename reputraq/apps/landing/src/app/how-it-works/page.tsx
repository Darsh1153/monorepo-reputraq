import { Navbar } from "@/components/navbar";
import { HowReputraqWorks } from "@/components/how-reputraq-works";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <HowReputraqWorks />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
