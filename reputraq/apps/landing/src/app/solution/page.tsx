import { Navbar } from "@/components/navbar";
import { TheReputraqSolution } from "@/components/the-reputraq-solution";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingActionButton } from "@/components/floating-action-button";

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <TheReputraqSolution />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
