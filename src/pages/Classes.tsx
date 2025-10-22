import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import starfishImage from "@/assets/hero-starfish.jpg";
import brittleStarImage from "@/assets/brittle-star.jpg";
import seaUrchinImage from "@/assets/sea-urchin.jpg";
import seaCucumberImage from "@/assets/sea-cucumber.jpg";
import featherStarImage from "@/assets/feather-star.jpg";

export const Classes = () => {
  const classes = [
    {
      name: "Asteroidea",
      commonName: "Estrelas-do-mar",
      example: "Asterias rubens (estrela-do-mar-comum)",
      description: "Corpo em forma de estrela com 5 braços (ou múltiplos de 5 em algumas espécies). São predadores carnívoros que se alimentam de moluscos, usando seus pés ambulacrários para abrir conchas. Podem regenerar braços perdidos.",
      characteristics: [
        "Corpo achatado com simetria pentarradial",
        "Braços não claramente delimitados do disco central",
        "Alimentação carnívora, especialmente de moluscos bivalves",
        "Capacidade de eversão do estômago para digestão externa",
        "Aproximadamente 1.900 espécies conhecidas"
      ],
      image: starfishImage,
      imageAlt: "Estrela-do-mar laranja no fundo do oceano"
    },
    {
      name: "Ophiuroidea",
      commonName: "Ofíuros (Serpentes-do-mar)",
      example: "Ophiura ophiura",
      description: "Caracterizados por braços longos, finos e flexíveis claramente distintos do disco central. São ágeis e movem-se rapidamente usando movimentos serpentiformes dos braços. Alimentam-se de detritos e pequenos organismos.",
      characteristics: [
        "Braços longos e flexíveis, bem separados do disco",
        "Movimento rápido e ágil através dos braços",
        "Alimentação detritívora e carnívora",
        "Sem ânus funcional; rejeitos expelidos pela boca",
        "Cerca de 2.000 espécies descritas"
      ],
      image: brittleStarImage,
      imageAlt: "Ofíuro com braços longos e flexíveis"
    },
    {
      name: "Echinoidea",
      commonName: "Ouriços-do-mar e bolachas-da-praia",
      example: "Strongylocentrotus purpuratus",
      description: "Corpo globular ou achatado coberto por espinhos móveis. Os espinhos servem para defesa, locomoção e escavação. Alimentam-se principalmente de algas, raspando superfícies com uma estrutura chamada lanterna de Aristóteles.",
      characteristics: [
        "Corpo globular (ouriços) ou achatado (bolachas)",
        "Espinhos móveis para defesa e locomoção",
        "Lanterna de Aristóteles para alimentação",
        "Herbívoros importantes em ecossistemas de algas marinhas",
        "Aproximadamente 950 espécies vivas"
      ],
      image: seaUrchinImage,
      imageAlt: "Ouriço-do-mar roxo com espinhos longos"
    },
    {
      name: "Holothuroidea",
      commonName: "Pepinos-do-mar",
      example: "Holothuria forskali",
      description: "Corpo alongado e cilíndrico com consistência macia. Vivem no fundo do mar alimentando-se de detritos e sedimentos. Possuem tentáculos modificados ao redor da boca para captura de alimentos.",
      characteristics: [
        "Corpo alongado e cilíndrico com paredes musculares",
        "Orientação horizontal (simetria bilateral secundária)",
        "Alimentação detritívora através de tentáculos bucais",
        "Capacidade de evisceração como defesa",
        "Importantes recicladores de nutrientes no fundo oceânico",
        "Cerca de 1.400 espécies conhecidas"
      ],
      image: seaCucumberImage,
      imageAlt: "Pepino-do-mar marrom no fundo arenoso"
    },
    {
      name: "Crinoidea",
      commonName: "Crinoides (Lírios-do-mar)",
      example: "Antedon mediterranea",
      description: "Grupo mais antigo de equinodermos, com aparência de pluma ou flor. Alguns são sésseis (fixos), outros móveis. Alimentam-se por filtração, capturando partículas suspensas na água com seus braços ramificados.",
      characteristics: [
        "Corpo em forma de cálice com braços ramificados plumosos",
        "Boca voltada para cima (única entre equinodermos)",
        "Alimentação por filtração de partículas",
        "Alguns fixos por pedúnculo, outros móveis",
        "Registro fóssil extenso desde o Paleozoico",
        "Aproximadamente 600 espécies viventes"
      ],
      image: featherStarImage,
      imageAlt: "Crinoide com braços plumosos vermelhos"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          As <span className="text-gradient">Classes</span> dos Equinodermos
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          O filo Echinodermata é dividido em cinco classes principais, cada uma com características morfológicas, 
          comportamentais e ecológicas distintas. Conheça a diversidade destes fascinantes animais marinhos.
        </p>
      </div>

      <div className="space-y-12">
        {classes.map((cls, index) => (
          <Card key={index} className="overflow-hidden ocean-shadow smooth-transition hover:scale-[1.02]">
            <div className="grid gap-6 md:grid-cols-2">
              <div className={`${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
                <img
                  src={cls.image}
                  alt={cls.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-primary">Classe</span>
                  </div>
                  <CardTitle className="text-3xl mb-2">{cls.name}</CardTitle>
                  <p className="text-xl text-muted-foreground font-semibold">{cls.commonName}</p>
                </CardHeader>
                
                <CardContent className="p-0 space-y-4">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Exemplo:</p>
                    <p className="italic">{cls.example}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{cls.description}</p>
                  
                  <div>
                    <p className="font-semibold mb-3">Características principais:</p>
                    <ul className="space-y-2">
                      {cls.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      <Card className="mt-12 ocean-gradient text-primary-foreground">
        <CardContent className="p-8">
          <h2 className="mb-6 text-3xl font-bold">Comparação Rápida</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-primary-foreground/30">
                  <th className="pb-3 pr-4 font-semibold">Classe</th>
                  <th className="pb-3 pr-4 font-semibold">Locomoção</th>
                  <th className="pb-3 pr-4 font-semibold">Alimentação</th>
                  <th className="pb-3 font-semibold">Habitat Típico</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4">Asteroidea</td>
                  <td className="py-3 pr-4">Pés ambulacrários</td>
                  <td className="py-3 pr-4">Carnívoro</td>
                  <td className="py-3">Fundo rochoso</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4">Ophiuroidea</td>
                  <td className="py-3 pr-4">Movimentos dos braços</td>
                  <td className="py-3 pr-4">Detritívoro/Carnívoro</td>
                  <td className="py-3">Fundo variado</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4">Echinoidea</td>
                  <td className="py-3 pr-4">Espinhos e pés</td>
                  <td className="py-3 pr-4">Herbívoro</td>
                  <td className="py-3">Recifes e rochas</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4">Holothuroidea</td>
                  <td className="py-3 pr-4">Ondulações musculares</td>
                  <td className="py-3 pr-4">Detritívoro</td>
                  <td className="py-3">Fundo arenoso</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Crinoidea</td>
                  <td className="py-3 pr-4">Braços (móveis) / Fixos</td>
                  <td className="py-3 pr-4">Filtrador</td>
                  <td className="py-3">Recifes e águas profundas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
