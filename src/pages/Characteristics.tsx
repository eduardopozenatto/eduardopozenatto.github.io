import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import waterVascularImage from "@/assets/water-vascular-system.jpg";
import radialSymmetry from "@/assets/radial_symmetry.jpg";
import endoskeleton from "@/assets/endoesqueleto.jpg";
import digestiveSystem from "@/assets/digestive-system.jpg";
import nervousSystem from "@/assets/nervous-system.jpg";
import regeneration from "@/assets/regeneration.jpg";
import pedicellariae from "@/assets/pedicellariae.jpg";
import madreporite from "@/assets/madreporite.jpg";
import { CheckCircle2, Microscope, Network, Shield, Dna } from "lucide-react";

export const Characteristics = () => {
  const mainCharacteristics = [
    {
      title: "Simetria Radial (Formato de Estrela)",
      description: "O corpo dos equinodermos é organizado em forma de estrela com 5 partes (ou múltiplos de 5). É como se desenhássemos uma estrela de 5 pontas! Curiosamente, quando são bebês (larvas), eles têm formato bilateral (como nós), mas ao crescer mudam para o formato radial. Isso ajuda eles a interagirem com o ambiente em todas as direções, sem ter 'frente' ou 'trás'.",
      icon: Network
    },
    {
      title: "Esqueleto Interno de Calcário",
      description: "Eles têm um esqueleto por dentro do corpo, feito de calcário (o mesmo material das conchas). É como se tivessem pequenas placas de pedra embaixo da pele! Em ouriços-do-mar, é bem duro e rígido. Em estrelas-do-mar é mais flexível. E nos pepinos-do-mar é bem molinho. Muitos têm espinhos saindo dessas placas, o que dá o nome 'pele espinhosa'.",
      icon: Shield
    },
    {
      title: "Sistema Hidráulico de Movimento",
      description: "Esta é a característica mais especial! Eles têm um sistema de tubos cheios de água que funciona como um sistema hidráulico. Imagine mangueiras conectadas com centenas de 'pezinhos' com ventosas. Quando a água é bombeada para os pezinhos, eles esticam e grudam nas superfícies. Quando a água sai, eles encolhem. É assim que se movem! Este sistema também ajuda na respiração, alimentação e até para sentir o ambiente.",
      icon: Microscope
    },
    {
      title: "Parentes dos Vertebrados",
      description: "Acredite ou não, equinodermos são parentes evolutivos mais próximos de nós (humanos) do que de insetos ou moluscos! Isso é revelado pelo desenvolvimento dos embriões. Quando são embriões, compartilham características com os nossos embriões. Por isso, estudar equinodermos nos ajuda a entender como os animais com coluna vertebral evoluíram.",
      icon: Dna
    }
  ];

  const anatomicalSystems = [
    {
      system: "Sistema Digestório",
      description: "A maioria tem boca e ânus. A boca fica na parte de baixo e o ânus em cima. Não têm fígado. Estrelas-do-mar têm um poder incrível: podem botar o estômago para fora pela boca para digerir a comida! Ouriços-do-mar têm um aparelho mastigador com 5 dentes chamado 'lanterna de Aristóteles'. Pepinos-do-mar têm um intestino bem longo.",
      details: [
        "Boca circundada por peristômio (membrana oral)",
        "Esôfago curto conecta a cavidade estomacal",
        "Cecos pilóricos em asteroides aumentam superfície digestiva",
        "Intestino curto ou ausente em espécies carnívoras",
        "Sistema digestório adaptado ao tipo de alimentação de cada classe"
      ]
    },
    {
      system: "Sistema Circulatório",
      description: "Eles não têm coração nem veias como nós! O corpo é cheio de um líquido especial que circula batendo cílios (pelinhos microscópicos) e contraindo a parede do corpo. Este líquido carrega nutrientes e oxigênio. É bem diferente do nosso sangue, mas faz o mesmo trabalho.",
      details: [
        "Fluido celômico transporta nutrientes, gases e excretas",
        "Celomócitos realizam fagocitose e coagulação",
        "Sistema hemal rudimentar (não é verdadeiro sistema circulatório)",
        "Troca gasosa ocorre por difusão através de papulas e pés ambulacrários",
        "Ausência de hemoglobina ou pigmentos respiratórios"
      ]
    },
    {
      system: "Sistema Nervoso",
      description: "Não têm cérebro! Em vez disso, têm um anel de nervos ao redor da boca e 5 nervos que vão pelos braços ou corpo. Têm células sensoriais espalhadas pela pele para sentir toque, luz e químicos. Algumas estrelas-do-mar têm 'olhinhos' simples na ponta dos braços para detectar luz.",
      details: [
        "Anel nervoso circunda a boca",
        "Cinco nervos radiais percorrem cada raio",
        "Células sensoriais espalhadas pela epiderme",
        "Fotorreceptores simples nas extremidades dos braços (asteroides)",
        "Estatocistos para equilíbrio em holotúrias",
        "Quimiorreceptores e mecanorreceptores nos pés ambulacrários"
      ]
    },
    {
      system: "Respiração e Excreção",
      description: "Não têm pulmões! Respiram através da pele fina. Estrelas-do-mar têm pequenas bolsinhas na pele chamadas papulas. Pepinos-do-mar têm 'árvores respiratórias' dentro do corpo. Ouriços têm brânquias ao redor da boca. Para eliminar resíduos, usam o mesmo sistema - tudo passa através da pele ou é eliminado por células especiais.",
      details: [
        "Papulas: pequenas evaginações da parede corporal",
        "Árvores respiratórias em holotúrias conectam-se à cloaca",
        "Brânquias peristomiais em ouriços circundam a boca",
        "Amônia é o principal produto de excreção nitrogenada",
        "Celomócitos acumulam material de excreção e são eliminados"
      ]
    }
  ];

  const specialFeatures = [
    {
      title: "Superpoder de Regeneração",
      content: "Eles têm um poder incrível de regeneração! Estrelas-do-mar podem regenerar braços inteiros - algumas até conseguem virar um animal completo a partir de só um braço (se tiver um pedacinho do centro). Pepinos-do-mar podem regenerar órgãos internos completos em poucas semanas. É como um superpoder real!"
    },
    {
      title: "Estruturas Especiais na Pele",
      content: "A pele tem várias estruturas especiais: espinhos móveis (principalmente em ouriços), pedicelários (pincinhas minúsculas para limpar e se defender - algumas são venenosas!), papulas (bolsinhas para respirar), e órgãos sensoriais esféricos. É como ter várias ferramentas diferentes na superfície do corpo!"
    },
    {
      title: "Madreporito: A Entrada de Água",
      content: "O madreporito é como uma 'porta de entrada' de água. É uma placa com buraquinhos que geralmente fica em cima do animal e parece uma manchinha clara. Por ali entra água do mar que vai para o sistema hidráulico. É como uma peneira que filtra a água antes dela entrar no sistema de tubos."
    },
    {
      title: "Defesa: Soltar Partes do Corpo",
      content: "Quando atacados, podem soltar partes do corpo! Estrelas-serpentes soltam os braços rapidinho quando são pegas. Pepinos-do-mar fazem algo ainda mais incrível: expelem os órgãos internos para confundir o predador! Não se preocupe - depois eles regeneram tudo de novo. É como lagartos que soltam o rabo!"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          Características Gerais dos <span className="text-gradient">Equinodermos</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Echinodermata significa "pele espinhosa". Existem cerca de 7.000 espécies vivas hoje! 
          Todos vivem apenas no mar, desde praias rasas até profundidades de mais de 10 km. 
          São animais que vivem no fundo do oceano, grudados em rochas ou se movendo pela areia.
        </p>
      </div>

      {/* Main Characteristics with Icons */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Características Diagnósticas Principais</h2>
        
        {/* Images Grid for Main Characteristics */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div className="relative overflow-hidden rounded-lg ocean-shadow">
            <img src={radialSymmetry} alt="Simetria radial pentarradial" className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold">Simetria Radial Pentarradial</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg ocean-shadow">
            <img src={endoskeleton} alt="Endoesqueleto calcário" className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold">Endoesqueleto de Carbonato de Cálcio</p>
            </div>
          </div>
        </div>
      
        <div className="space-y-6">
          {mainCharacteristics.map((char, index) => (
            <Card key={index} className="ocean-shadow smooth-transition hover:scale-[1.01]">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg ocean-gradient flex-shrink-0">
                    <char.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{char.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{char.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Water Vascular System - Detailed */}
      <Card className="mb-16 ocean-shadow">
        <CardContent className="p-8">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Sistema Vascular Aquífero em Detalhe</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                O sistema hidráulico (também chamado sistema ambulacral) é o que torna os equinodermos únicos! 
                É um conjunto de tubos cheios de líquido que funciona como um sistema hidráulico de uma máquina. 
                Este líquido é parecido com a água do mar, mas um pouco diferente.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Partes do Sistema:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Madreporito:</strong> Placa com buraquinhos que conecta com a água do mar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Canal de pedra:</strong> Tubo que leva água para dentro do sistema</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Canal circular:</strong> Anel que distribui água ao redor da boca</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Canais radiais:</strong> 5 tubos que vão pelos braços ou corpo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Ampolas:</strong> Bolsinhas musculares que empurram água para os pés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Pezinhos (pés ambulacrários):</strong> Centenas de tubinhos com ventosas</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Como Funciona:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    É como um sistema de mangueiras! Quando a ampola (bolsinha) aperta, empurra água para o pezinho, 
                    fazendo ele esticar. A ventosa na ponta gruda no chão. Aí os músculos do pezinho contraem, 
                    puxam a água de volta e o pé encolhe. Isso acontece em milhares de pezinhos ao mesmo tempo, 
                    em ondas coordenadas. É assim que eles caminham!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <img
                src={waterVascularImage}
                alt="Diagrama detalhado do sistema vascular aquífero"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Veja como o sistema hidráulico funciona: da entrada de água até os pezinhos com ventosas
              </p>

              <div className="rounded-lg bg-muted/50 p-4">
                <h4 className="font-semibold mb-2">Para que Serve:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Andar:</strong> Grudar e se mover pelo fundo do mar</li>
                  <li>• <strong>Comer:</strong> Pegar e segurar comida</li>
                  <li>• <strong>Respirar:</strong> Trocar oxigênio através dos pezinhos</li>
                  <li>• <strong>Sentir:</strong> Detectar cheiros e toques</li>
                  <li>• <strong>Se fixar:</strong> Grudar forte em rochas quando tem correnteza</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Anatomical Systems */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Sistemas Anatômicos Detalhados</h2>
        
        {/* Images Grid for Anatomical Systems */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="relative overflow-hidden rounded-lg ocean-shadow">
            <img src={digestiveSystem} alt="Sistema digestório" className="w-full h-56 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white font-semibold text-sm">Sistema Digestório</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg ocean-shadow">
            <img src={nervousSystem} alt="Sistema nervoso" className="w-full h-56 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white font-semibold text-sm">Sistema Nervoso</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg ocean-shadow">
            <img src={madreporite} alt="Madreporito" className="w-full h-56 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white font-semibold text-sm">Madreporito Detalhado</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {anatomicalSystems.map((system, index) => (
            <Card key={index} className="ocean-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{system.system}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{system.description}</p>
                <div className="rounded-lg bg-muted/30 p-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {system.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Features */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Características Especiais e Adaptações</h2>
        
        {/* Images for Special Features */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div className="relative overflow-hidden rounded-lg ocean-shadow">
            <img src={regeneration} alt="Processo de regeneração" className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold">Regeneração em Equinodermos</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg ocean-shadow">
            <img src={pedicellariae} alt="Pedicelários" className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold">Estruturas Dérmicas (Pedicelários)</p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {specialFeatures.map((feature, index) => (
            <Card key={index} className="ocean-shadow smooth-transition hover:ocean-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Evolutionary and Ecological Significance */}
      <Card className="ocean-gradient text-primary-foreground mb-16">
        <CardContent className="p-8">
          <h3 className="mb-6 text-3xl font-bold">Importância Evolutiva e Ecológica</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">Posição Filogenética</h4>
              <p className="leading-relaxed mb-3">
                Os equinodermos pertencem ao clado <strong>Deuterostomia</strong>, juntamente com Hemichordata e Chordata. 
                Esta relação é sustentada por características embrionárias compartilhadas: clivagem radial, 
                blastóporo originando ânus, e celoma enterocélico. O clado Ambulacraria une Echinodermata + Hemichordata, 
                baseado em similaridades larvais e moleculares.
              </p>
              <p className="leading-relaxed">
                Estudos moleculares confirmam que equinodermos e hemicordados são grupos-irmãos, e que Ambulacraria 
                é grupo-irmão de Chordata. Portanto, estudar equinodermos fornece insights sobre a evolução dos 
                cordados e a transição para a vida bentônica versus nectônica.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Papéis Ecológicos</h4>
              <p className="leading-relaxed mb-3">
                <strong>Predadores-chave:</strong> Asteroides como <em>Pisaster ochraceus</em> controlam populações 
                de mexilhões, mantendo biodiversidade de comunidades intermareais. Sua remoção causa mudanças dramáticas 
                no ecossistema (espécie-chave de Paine).
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Herbívoros importantes:</strong> Echinoides regulares pastam algas, controlando crescimento 
                algal em recifes de coral. <em>Diadema</em> spp. são críticos para saúde dos recifes caribenhos.
              </p>
              <p className="leading-relaxed">
                <strong>Bioturbadores e recicladores:</strong> Holotúrias processam enormes quantidades de sedimento, 
                bioturbando o fundo oceânico e reciclando nutrientes. Podem processar todo o sedimento superficial 
                de uma área em poucos anos, sendo "engenheiros de ecossistema" cruciais.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Registro Fóssil</h4>
              <p className="leading-relaxed">
                Os equinodermos possuem excelente registro fóssil devido ao endoesqueleto calcário. Aparecem no 
                Cambriano Inferior (~540 Ma) e foram extremamente diversos no Paleozoico. Crinoides eram dominantes, 
                formando "jardins de crinoides" que filtravam vastas quantidades de plâncton. Muitas classes extintas 
                (Blastoidea, Cystoidea, etc.) demonstram a grande radiação evolutiva do filo. O registro fóssil revela 
                transições de formas pedunculadas sésseis para formas móveis, refletindo mudanças nos ecossistemas marinhos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Morphological Details */}
      <Card className="ocean-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">Detalhes Morfológicos Adicionais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Superfície Corporal e Tegumento</h4>
            <p className="text-muted-foreground leading-relaxed mb-3">
              A superfície é coberta por epiderme ciliada fina sobre a derme espessa contendo ossículos calcários. 
              Entre os ossículos há tecido conjuntivo mutável (mutable collagenous tissue - MCT), que pode alternar 
              rapidamente entre estados rígido e flexível sob controle nervoso. Esta propriedade permite mudanças 
              posturais e autotomia facilitada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Celomócitos</h4>
            <p className="text-muted-foreground leading-relaxed">
              O fluido celômico contém diversos tipos de celomócitos: amebócitos fagocíticos (defesa imune), 
              vibratile cells (transporte), células pigmentares, e células de coagulação. Celomócitos reconhecem 
              patógenos e iniciam respostas imunes inatas. Acumulam e encapsulam material estranho.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Bioluminescência</h4>
            <p className="text-muted-foreground leading-relaxed">
              Algumas espécies de ofiuroides de águas profundas são bioluminescentes, produzindo luz verde-azulada 
              através de fotóforos na superfície dos braços e disco. Utilizada para defesa (startle response), 
              comunicação intraespecífica e possivelmente atração de presas.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
