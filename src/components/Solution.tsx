import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

export interface SolutionData {
  plan: string[];
  advantages: string[];
  resources: string[];
  timeline: string[];
  costs: string[];
}

export const Solution = ({ data }: { data: SolutionData }) => {
  const handleExport = () => {
    const content = `
Proposition de Solution Orange Business

Plan Détaillé :
${data.plan.join("\n")}

Avantages Clés :
${data.advantages.join("\n")}

Ressources Nécessaires :
${data.resources.join("\n")}

Calendrier de Mise en Œuvre :
${data.timeline.join("\n")}

Estimation des Coûts et ROI :
${data.costs.join("\n")}
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "solution-orange-business.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 w-full max-w-4xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-orange-500">Votre Solution Personnalisée</h2>
        <Button onClick={handleExport} variant="outline" className="gap-2">
          <Download size={16} />
          Exporter
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Plan Détaillé</h3>
          <ul className="list-disc pl-6 space-y-2">
            {data.plan.map((item, i) => (
              <li key={i} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Avantages Clés</h3>
          <ul className="list-disc pl-6 space-y-2">
            {data.advantages.map((item, i) => (
              <li key={i} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Ressources Nécessaires</h3>
          <ul className="list-disc pl-6 space-y-2">
            {data.resources.map((item, i) => (
              <li key={i} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Calendrier de Mise en Œuvre</h3>
          <ul className="list-disc pl-6 space-y-2">
            {data.timeline.map((item, i) => (
              <li key={i} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Estimation des Coûts et ROI</h3>
          <ul className="list-disc pl-6 space-y-2">
            {data.costs.map((item, i) => (
              <li key={i} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};