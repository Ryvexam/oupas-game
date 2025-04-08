import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Database,
  Server,
  Award,
  GraduationCap,
  RollerCoaster,
  Network,
  FolderKanban,
  Briefcase,
  Code2,
  Terminal,
  Globe,
  Cpu,
  Shield,
  Globe2,
  BookOpen
} from "lucide-react";

const responses = {
  normal: ["Oui.", "Pas."],
  yolo: ["Grave ouais !", "Oublie, frère."],
  sage: ["C’est raisonnable.", "Je te le déconseille."],
  maman: ["Oui mon chéri(e).", "Non, tu vas te faire mal."]
};

function Footer({
  socialLinks,
  name
}: {
  socialLinks: { github: string; linkedin: string; email: string };
  name: string;
}) {
  return (
    <footer className="bg-black/30 backdrop-blur-sm py-6 sm:py-8 w-full mt-auto">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center gap-4 sm:gap-6 mb-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a href={`mailto:${socialLinks.email}`} className="hover:text-blue-400 transition-colors">
            <Mail size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>
        <p className="text-sm text-blue-200">© {new Date().getFullYear()} {name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default function OuPas() {
  const [answer, setAnswer] = useState("");
  const [mode, setMode] = useState("normal");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setAnswer("");
    setTimeout(() => {
      const options = responses[mode];
      const result = options[Math.floor(Math.random() * options.length)];
      setAnswer(result);
      setLoading(false);
    }, 600); // petit délai pour simuler un chargement
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <main className="flex flex-col items-center justify-center gap-4 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">OuPas 🤔</h1>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Pose une question dans ta tête, choisis un thème de réponse, clique, et laisse le destin décider. Ultra simple, zéro pression.
          </p>
        </div>
        <div className="text-center">
          <label htmlFor="mode" className="block mb-1 text-sm text-gray-300">Thème des réponses :</label>
          <select
            id="mode"
            className="border border-gray-600 bg-gray-800 text-white rounded p-2"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="normal">Classique</option>
            <option value="yolo">YOLO</option>
            <option value="sage">Mode Sage</option>
            <option value="maman">Maman</option>
          </select>
        </div>
        <Button className="mt-2" onClick={handleClick}>Clique pour savoir</Button>
        {loading && <p className="text-sm text-gray-400 animate-pulse">Réflexion intense en cours...</p>}
        {answer && !loading && (
          <Card className="mt-4 bg-gray-800 border border-blue-500">
            <CardContent className="p-6 text-xl text-center text-blue-200">{answer}</CardContent>
          </Card>
        )}
      </main>

      <Footer
        name="Ryvexam"
        socialLinks={{
          github: "https://github.com/ryvexam",
          linkedin: "https://www.linkedin.com/in/ryvexam",
          email: "contact@ryvexam.fr"
        }}
      />
    </div>
  );
}
