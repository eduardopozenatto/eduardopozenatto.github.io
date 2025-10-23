import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import waterVascularImage from "@/assets/water-vascular-system.jpg";
import radialSymmetry from "@/assets/radial-symmetry.jpg";
import endoskeleton from "@/assets/endoskeleton.jpg";
import digestiveSystem from "@/assets/digestive-system.jpg";
import nervousSystem from "@/assets/nervous-system.jpg";
import regeneration from "@/assets/regeneration.jpg";
import pedicellariae from "@/assets/pedicellariae.jpg";
import madreporite from "@/assets/madreporite.jpg";
import { CheckCircle2, Microscope, Network, Shield, Dna } from "lucide-react";

export const Characteristics = () => {
  const mainCharacteristics = [
    {
      title: "Simetria Radial Pentarradial",
      description: "Os equinodermos adultos apresentam simetria radial pentarradial, ou seja, o corpo está organizado em torno de um eixo central com cinco raios (ou múltiplos de cinco). Esta característica é única entre deuterostômios e representa uma adaptação ao modo de vida bentônico. Interessantemente, as larvas são bilateralmente simétricas, evidenciando a ancestralidade bilateral do filo. A simetria radial permite que o animal interaja com o ambiente de forma equitativa em todas as direções, sem uma extremidade anterior ou posterior definida.",
      icon: Network
    },
    {
      title: "Endoesqueleto de Carbonato de Cálcio",
      description: "O endoesqueleto dos equinodermos é formado por placas ou ossículos de carbonato de cálcio (calcita) na forma de cristais porosos chamados estereoma. Este esqueleto interno é derivado do mesoderma e pode ser rígido (como em ouriços-do-mar) ou flexível (como em estrelas-do-mar e pepinos-do-mar). Os ossículos podem apresentar espinhos, tubérculos e pedicelários. A estrutura porosa do estereoma permite a permeação de tecidos vivos e sistema vascular aquífero através do esqueleto.",
      icon: Shield
    },
    {
      title: "Sistema Vascular Aquífero (Ambulacral)",
      description: "É a característica diagnóstica mais distintiva do filo. Trata-se de um sistema hidráulico único composto por um sistema de canais preenchidos com fluido celômico filtrado. Inclui: madreporito (placa perfurada que conecta o sistema à água do mar), canal pétreo, canal circular, canais radiais e centenas de pés ambulacrários (podias). Cada pé possui uma ampola muscular interna e uma ventosa terminal. A contração da ampola força líquido para o pé, estendendo-o; músculos no pé retraem-no. Este sistema é multifuncional: locomoção, alimentação, respiração, excreção e percepção sensorial.",
      icon: Microscope
    },
    {
      title: "Deuterostomia",
      description: "Os equinodermos são deuterostômios, compartilhando este padrão de desenvolvimento embrionário com hemicordados e cordados. Características incluem: clivagem radial e indeterminada, blastóporo que origina o ânus (boca forma-se secundariamente), e celoma de origem enterocélica (formado por evaginação do arquêntero). Esta relação filogenética torna os equinodermos fundamentais para compreender a evolução dos vertebrados, apesar de sua aparência radicalmente diferente.",
      icon: Dna
    }
  ];

  const anatomicalSystems = [
    {
      system: "Sistema Digestório",
      description: "Completo na maioria, com boca (geralmente no lado oral) e ânus (no lado aboral). Ausência de fígado e estruturas homólogas. Asteroides podem everter o estômago para digestão externa. Echinoides possuem lanterna de Aristóteles (aparato mastigatório complexo com cinco dentes). Holotúrias têm intestino longo e convoluto. Alguns crinoides e ofiuroides carecem de ânus funcional.",
      details: [
        "Boca circundada por peristômio (membrana oral)",
        "Esôfago curto conecta a cavidade estomacal",
        "Cecos pilóricos em asteroides aumentam superfície digestiva",
        "Intestino curto ou ausente em espécies carnívoras",
        "Sistema digestório adaptado ao tipo de alimentação de cada classe"
      ]
    },
    {
      system: "Sistema Circulatório e Celoma",
      description: "Não possuem sistema circulatório verdadeiro com coração e vasos. O celoma (cavidade corporal) é extenso e preenchido com fluido celômico rico em celomócitos (amebócitos). O fluido circula por batimento de cílios e contração da parede corporal. Existem três sistemas celômicos principais: perihemático (ao redor do trato digestório), hiponeural e vascular aquífero.",
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
      description: "Descentralizado e relativamente simples. Consiste em três componentes: sistema ectoneural (sensorial, forma anel nervoso e nervos radiais), sistema hiponeural (motor, controla pés ambulacrários) e sistema aboral (presente em crinoides e ouriços). Ausência de cérebro ou gânglios centralizados. Coordenação através de redes neurais difusas e sinapses químicas.",
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
      system: "Sistema Respiratório e Excretor",
      description: "Não existem órgãos respiratórios especializados na maioria das espécies. Troca gasosa ocorre por difusão através de estruturas dérmicas finas: papulas ou brânquias dérmicas (asteroides), brânquias peristomiais (echinoides), árvores respiratórias (holotúrias), bursas (ofiuroides). Excreção também por difusão; celomócitos removem resíduos do fluido celômico. Alguns órgãos eliminam celomócitos carregados de excretas.",
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
      title: "Capacidade Regenerativa Extraordinária",
      content: "Os equinodermos possuem uma das mais notáveis capacidades regenerativas do reino animal. Asteroides podem regenerar braços inteiros a partir de uma porção do disco central contendo parte do anel nervoso e canal radial. Algumas espécies reproduzem-se assexuadamente por fissão seguida de regeneração. Holotúrias regeneram órgãos internos completos após evisceração. O processo envolve desdiferenciação celular, formação de blastema regenerativo e rediferenciação coordenada de tecidos."
    },
    {
      title: "Estruturas Dérmicas Especializadas",
      content: "A superfície corporal apresenta diversas estruturas: espinhos móveis articulados (principalmente em echinoides), pedicelários (pequenas pinças de três ou quatro valvas para limpeza e defesa), papulas (brânquias dérmicas para respiração), esferídeos (órgãos sensoriais esféricos em ouriços regulares). Os pedicelários podem ser venenosos em algumas espécies, secretando toxinas através de glândulas especializadas."
    },
    {
      title: "Madreporito e Sistema Hidropórico",
      content: "O madreporito é uma placa calcária perfurada localizada no lado aboral (geralmente visível como mancha clara na superfície). Conecta o sistema vascular aquífero ao ambiente externo através do canal pétreo (ou hidropórico). O fluido do sistema ambulacral é celômico mas filtrado, com composição ligeiramente diferente da água do mar. O madreporito permite equalização de pressão e troca limitada de fluidos com o ambiente."
    },
    {
      title: "Autotomia Defensiva",
      content: "Muitos equinodermos praticam autotomia - auto-amputação de partes corporais como mecanismo de defesa contra predadores. Ofiuroides rapidamente soltam braços quando capturados. Asteroides podem autotomizar braços para escapar. Holotúrias evisceram órgãos internos (evisceração). Estas estruturas são posteriormente regeneradas. Planos de fratura predefinidos facilitam a separação com mínimo dano."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          Características Gerais dos <span className="text-gradient">Equinodermos</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          O filo Echinodermata ("pele espinhosa") compreende aproximadamente 7.000 espécies viventes e mais de 13.000 
          espécies fósseis. São exclusivamente marinhos, eurihalinos (toleram variações de salinidade), bentônicos 
          (vivem associados ao substrato) e distribuídos desde a zona entremarés até profundidades abissais superiores 
          a 10.000 metros.
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
                O sistema vascular aquífero (SVA) ou sistema ambulacral é a sinapomorfia (característica derivada compartilhada) 
                que define o filo Echinodermata. É um sistema hidráulico de canais derivado do celoma (protocelo), 
                preenchido com fluido celômico modificado.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Componentes do Sistema:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Madreporito:</strong> Placa perfurada aboral, conexão com meio externo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Canal pétreo/hidropórico:</strong> Conecta madreporito ao canal anelar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Canal anelar (circular):</strong> Circunda o esôfago, distribui fluido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Canais radiais:</strong> 5 canais ao longo dos raios corporais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Canais laterais:</strong> Conectam canais radiais aos pés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Ampolas:</strong> Bulbos musculares que controlam extensão dos pés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Pés ambulacrários (podias):</strong> Estruturas tubulares com ventosa</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Mecanismo de Funcionamento:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    A locomoção ocorre por pressão hidráulica. Quando a ampola contrai, força fluido para o pé, 
                    que se estende. A ventosa adere ao substrato. Músculos longitudinais no pé contraem, 
                    bombeando fluido de volta à ampola e retraindo o pé. Válvulas impedem refluxo. 
                    Milhares de pés atuam em ondas coordenadas pelo sistema nervoso radial.
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
                Corte transversal mostrando madreporito, canal pétreo, canal anelar, canais radiais, 
                ampolas e pés ambulacrários com ventosas terminais
              </p>

              <div className="rounded-lg bg-muted/50 p-4">
                <h4 className="font-semibold mb-2">Funções Múltiplas do SVA:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Locomoção:</strong> Aderência e movimentação sobre substratos</li>
                  <li>• <strong>Alimentação:</strong> Captura e manipulação de alimento</li>
                  <li>• <strong>Respiração:</strong> Troca gasosa através das paredes dos pés</li>
                  <li>• <strong>Excreção:</strong> Eliminação de resíduos metabólicos</li>
                  <li>• <strong>Percepção sensorial:</strong> Quimiorreceptores e mecanorreceptores</li>
                  <li>• <strong>Fixação:</strong> Adesão a rochas em correntes fortes</li>
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
