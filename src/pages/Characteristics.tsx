import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import waterVascularImage from "@/assets/water-vascular-system.jpg";
import { CheckCircle2 } from "lucide-react";

export const Characteristics = () => {
  const characteristics = [
    {
      title: "Simetria Radial",
      description: "Os adultos apresentam simetria radial pentarradial (cinco raios), uma característica única que facilita a interação com o ambiente em todas as direções."
    },
    {
      title: "Endoesqueleto Calcário",
      description: "Possuem um esqueleto interno formado por placas de carbonato de cálcio, que fornece suporte estrutural e proteção."
    },
    {
      title: "Sistema Vascular Aquífero",
      description: "Sistema hidráulico único usado para locomoção, captura de alimentos, respiração e excreção. Funciona através de pés ambulacrários preenchidos com líquido."
    },
    {
      title: "Sistema Nervoso Descentralizado",
      description: "Ausência de cabeça e cérebro centralizado. O sistema nervoso é organizado em uma rede radial que permite respostas coordenadas."
    },
    {
      title: "Capacidade de Regeneração",
      description: "Habilidade excepcional de regenerar partes perdidas do corpo, incluindo braços inteiros em algumas espécies de estrelas-do-mar."
    },
    {
      title: "Habitat Marinho Exclusivo",
      description: "Todos os equinodermos vivem exclusivamente em ambientes marinhos, desde águas rasas até grandes profundidades oceânicas."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          O que Define os <span className="text-gradient">Equinodermos</span>?
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Os equinodermos (Filo Echinodermata) são um grupo fascinante de animais marinhos com características únicas que os distinguem de todos os outros filos animais.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {characteristics.map((char, index) => (
          <Card key={index} className="smooth-transition hover:ocean-shadow hover:scale-105">
            <CardHeader>
              <div className="mb-2 flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <CardTitle className="text-xl">{char.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{char.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Water Vascular System Section */}
      <Card className="mb-12 ocean-shadow">
        <CardContent className="p-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Sistema Vascular Aquífero</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                O sistema vascular aquífero é uma das características mais fascinantes e exclusivas dos equinodermos. 
                Este sistema hidráulico é composto por uma rede de canais preenchidos com líquido que se conectam a pequenas estruturas chamadas pés ambulacrários.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                <strong>Funções principais:</strong>
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Locomoção:</strong> Os pés ambulacrários permitem movimento coordenado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Alimentação:</strong> Captura e manipulação de alimentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Respiração:</strong> Troca gasosa através das paredes dos pés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Percepção sensorial:</strong> Detecção de estímulos químicos e tácteis</span>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <img
                src={waterVascularImage}
                alt="Diagrama do sistema vascular aquífero"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Diagrama do sistema vascular aquífero mostrando os canais radiais e pés ambulacrários
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="ocean-gradient text-primary-foreground">
        <CardContent className="p-8">
          <h3 className="mb-4 text-2xl font-bold">Por que estudar equinodermos?</h3>
          <p className="mb-4 leading-relaxed">
            Os equinodermos desempenham papéis ecológicos cruciais nos ecossistemas marinhos. Algumas estrelas-do-mar 
            são predadores-chave que controlam populações de moluscos, enquanto pepinos-do-mar são importantes 
            detritívoros que reciclam nutrientes no fundo oceânico.
          </p>
          <p className="leading-relaxed">
            Além disso, os equinodermos são parentes próximos dos cordados (que incluem os vertebrados), 
            compartilhando um ancestral comum. Estudá-los nos ajuda a compreender melhor a evolução dos deuterostômios 
            e a origem dos vertebrados.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
