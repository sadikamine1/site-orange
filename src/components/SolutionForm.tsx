import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const SolutionForm = ({ onSubmit }: { onSubmit: (problem: string) => void }) => {
  const [problem, setProblem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (problem.trim().length < 10) {
      toast.error("Veuillez fournir plus de détails sur votre problème");
      return;
    }
    onSubmit(problem);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl">
      <div className="space-y-2">
        <label htmlFor="problem" className="text-lg font-medium text-white">
          Décrivez votre défi professionnel
        </label>
        <Textarea
          id="problem"
          placeholder="Ex: Nous devons améliorer notre infrastructure de cybersécurité pour nous protéger contre les menaces croissantes..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="h-32 resize-none"
        />
      </div>
      <Button type="submit" className="w-full bg-orange hover:bg-orange-dark">
        Générer une Solution
      </Button>
    </form>
  );
};