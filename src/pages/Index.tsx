import { useState } from "react";
import { SolutionForm } from "@/components/SolutionForm";
import { Solution, SolutionData } from "@/components/Solution";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [solution, setSolution] = useState<SolutionData | null>(null);

  const generateSolution = async (problem: string) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockSolution: SolutionData = {
        plan: [
          "Mettre en place une infrastructure de pare-feu de nouvelle génération",
          "Déployer une solution de détection et de réponse aux menaces (EDR)",
          "Établir un centre des opérations de sécurité (SOC)",
          "Implémenter une architecture Zero-Trust",
        ],
        advantages: [
          "Protection renforcée contre les cybermenaces avancées",
          "Détection et réponse aux menaces en temps réel",
          "Conformité améliorée avec les réglementations du secteur",
          "Réduction des risques de violations de données",
        ],
        resources: [
          "Équipe des Opérations de Sécurité (5 membres)",
          "Ingénieur Infrastructure Sécurité",
          "Spécialiste de la Conformité",
          "Spécialiste Formation et Documentation",
        ],
        timeline: [
          "Mois 1-2 : Évaluation et planification de l'infrastructure",
          "Mois 3-4 : Mise en place du pare-feu et de l'EDR",
          "Mois 5-6 : Établissement du SOC et formation de l'équipe",
          "Mois 7-8 : Implémentation de l'architecture Zero-Trust",
        ],
        costs: [
          "Investissement Initial : 500 000 € - 750 000 €",
          "Coûts Opérationnels Annuels : 200 000 € - 300 000 €",
          "ROI Attendu : 150% sur 3 ans",
          "Économies sur les Violations Évitées : 1,5M € par an",
        ],
      };
      setSolution(mockSolution);
    } catch (error) {
      console.error("Erreur lors de la génération de la solution:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange mb-4">
            Générateur de Solutions IA
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Décrivez votre défi professionnel, et notre IA générera une solution complète et personnalisée, alimentée par l'expertise d'Orange Business.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <SolutionForm onSubmit={generateSolution} />
          
          {loading && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 border-4 border-orange border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-gray-300 animate-pulse-slow">
                Génération de votre solution personnalisée...
              </p>
            </div>
          )}

          {solution && !loading && <Solution data={solution} />}
        </div>
      </div>
    </div>
  );
};

export default Index;