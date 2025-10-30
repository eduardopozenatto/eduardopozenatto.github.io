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
      diversity: "~1.900 espécies",
      example: "Asterias rubens (estrela-do-mar-comum), Pisaster ochraceus (estrela-do-mar-ocre)",
      description: "Asteroides são caracterizados por corpo achatado em forma de estrela com cinco braços (ou múltiplos de cinco em algumas espécies como a estrela-do-mar-girassol, com 15-25 braços). Os braços não são claramente delimitados do disco central, gradando suavemente do centro para a periferia. A boca está localizada no centro da superfície oral (inferior) e o ânus e madreporito na superfície aboral (superior).",
      morphology: [
        "Endoesqueleto flexível de ossículos calcários fracamente articulados",
        "Braços contêm extensões do celoma, sistema digestório e gônadas",
        "Sulco ambulacral oral em cada braço abriga pés ambulacrários em 2-4 fileiras",
        "Papulas (brânquias dérmicas) distribuídas pela superfície aboral para respiração",
        "Pedicelários pedunculados ou sésseis para limpeza e defesa",
        "Espinhos dérmicos curtos articulados sobre ossículos"
      ],
      feeding: "Predadores carnívoros oportunistas. Alimentam-se principalmente de moluscos bivalves (mexilhões, ostras, amêijoas), gastrópodes, poliquetas, crustáceos e outros invertebrados. Estratégia de predação única: aplicam força constante com pés ambulacrários para abrir conchas de bivalves (podendo exercer força por horas). Uma abertura de apenas 0,1mm é suficiente. Evaginam o estômago cardíaco através da boca, inserindo-o na concha da presa. Enzimas digestivas secretadas iniciam digestão extracelular. Nutrientes parcialmente digeridos são absorvidos e digestão completada no estômago pilórico. Algumas espécies engolem presas inteiras.",
      locomotion: "Locomoção lenta mas eficiente via sistema vascular aquífero. Pés ambulacrários estendem-se, aderem ao substrato com ventosas, e contraem em coordenação. Podem se mover em qualquer direção sem virar o corpo devido à simetria radial. Velocidade típica: 5-10 cm/min. Braços também auxiliam empurrando contra substrato.",
      reproduction: "Maioria dioica com fertilização externa. Gônadas localizadas nos braços. Sincronização reprodutiva por feromônios. Desenvolvimento através de larva bipinária (bilateral, planctotrófica) → larva braquiolária (com braços aderentes) → metamorfose para juvenil bentônico. Algumas espécies apresentam cuidado parental, incubando ovos sob o corpo.",
      specialFeatures: [
        "Capacidade extraordinária de regeneração: podem regenerar braços perdidos; algumas espécies regeneram indivíduo completo a partir de um braço + porção do disco",
        "Reprodução assexuada por fissão em algumas espécies (ex: Linckia spp.)",
        "Algumas espécies são predadoras-chave ecológicas (ex: Pisaster ochraceus)",
        "Eversão estomacal permite alimentação de presas maiores que a boca",
        "Autotomia de braços como mecanismo de defesa"
      ],
      image: starfishImage,
      imageAlt: "Estrela-do-mar laranja (Asteroidea) no fundo do oceano"
    },
    {
      name: "Ophiuroidea",
      commonName: "Ofiuroides / Serpentes-do-mar / Estrelas-serpentes",
      diversity: "~2.100 espécies (classe mais diversa)",
      example: "Ophiura ophiura, Amphiura filiformis, Ophiothrix fragilis",
      description: "Ofiuroides são facilmente distinguidos de asteroides por seus braços longos, delgados e altamente flexíveis que são claramente demarcados do disco central pequeno e circular. Os braços não contêm extensões de órgãos internos (sem cecos digestórios ou gônadas nos braços). São os equinodermos mais ágeis e de movimento mais rápido, usando movimentos serpentiformes laterais dos braços para locomoção.",
      morphology: [
        "Disco central compacto (1-3 cm diâmetro típico) claramente separado dos braços",
        "Braços longos e flexíveis (5-10x diâmetro do disco), não ramificados",
        "Esqueleto do braço formado por vértebras ambulacrais articuladas (ossículos em série)",
        "Músculos intervertebrais permitem flexão lateral rápida",
        "Sem ânus funcional; resíduos eliminados pela boca",
        "Madreporito localizado no lado oral (não aboral como em asteroides)",
        "Bursas (invaginações do disco) servem para respiração e liberação de gametas"
      ],
      feeding: "Alimentação variada: detritívoros, carnívoros, filtradores suspensívoros. Detritívoros varrem sedimento e detritos com braços, passando partículas à boca via pés ambulacrários modificados (sem ventosas). Carnívoros capturam poliquetas, pequenos crustáceos e moluscos. Espécies de cesto (basket stars - Gorgonocephalidae) são suspensívoras, estendendo braços ramificados na coluna d'água para capturar plâncton e partículas orgânicas em redes mucosas.",
      locomotion: "Locomoção mais rápida entre equinodermos. Dois ou três braços empurram contra substrato enquanto outros dois puxam. Movimentos serpentiformes laterais dos braços propelem o animal. Podem alcançar 1 metro/minuto - extremamente rápido para equinodermos. Braços altamente flexíveis permitem escalar estruturas complexas e se enterrar em sedimento.",
      reproduction: "Dioicos. Gônadas localizadas em bursas no disco. Gametas liberados por poros bursais (goneóporos) no lado oral. Desenvolvimento via larva ofioplúteo (planctotrófica, com braços sustentados por bastões calcários). Algumas espécies vivíparas ou ovovivíparas, com desenvolvimento direto nas bursas. Reprodução assexuada por fissão do disco documentada em algumas espécies.",
      specialFeatures: [
        "Autotomia de braços extremamente comum - facilmente soltam braços quando capturados",
        "Regeneração rápida de braços perdidos",
        "Algumas espécies bioluminescentes (produzem luz verde-azulada)",
        "Estrelas-cesto (Gorgonocephalidae) com braços ramificados repetidamente",
        "Movimento mais rápido e ágil entre todos equinodermos",
        "Alguns vivem em associação simbiótica com esponjas, corais e outros invertebrados"
      ],
      image: brittleStarImage,
      imageAlt: "Ofiuroide com braços longos e flexíveis"
    },
    {
      name: "Echinoidea",
      commonName: "Ouriços-do-mar e bolachas-da-praia",
      diversity: "~1.000 espécies",
      example: "Strongylocentrotus purpuratus (ouriço-roxo), Echinus esculentus, Clypeaster subdepressus (bolacha)",
      description: "Echinoides têm corpo globular (ouriços regulares) ou achatado discóide (ouriços irregulares e bolachas-da-praia) sem braços. O endoesqueleto forma uma carapaça rígida (testa ou corona) de placas calcárias fusionadas com padrão de simetria pentarradial. Superfície coberta por espinhos móveis articulados. Divididos em Regularia (regulares, simetria radial, boca e ânus em polos opostos) e Irregularia (irregulares, simetria bilateral secundária, ânus deslocado).",
      morphology: [
        "Carapaça (testa) globular ou achatada com placas fusionadas em 10 fileiras (5 ambulacrais, 5 interambulacrais)",
        "Espinhos de comprimento variável articulados sobre tubérculos",
        "Lanterna de Aristóteles: aparato mastigatório complexo com 5 dentes calcários em regulares",
        "Pedicelários complexos com 3-4 valvas (alguns venenosos)",
        "5 pares de brânquias peristomiais ao redor da boca para respiração",
        "Esferídeos: órgãos sensoriais esféricos para equilíbrio e detecção de luz",
        "Placas ambulacrais perfuradas para passagem de pés ambulacrários"
      ],
      feeding: "Ouriços regulares são principalmente herbívoros, raspando algas epilíticas de rochas e corais usando lanterna de Aristóteles. Cinco dentes crescem continuamente para compensar desgaste. Podem consumir algas incrustantes, microalgas, organismos sésseis. Ouriços irregulares e bolachas são detritívoros/suspensívoros, processando sedimento ou partículas orgânicas. Bolachas usam espinhos modificados e muco para capturar partículas.",
      locomotion: "Locomoção por combinação de pés ambulacrários (especialmente em regulares) e movimento de espinhos (especialmente em irregulares). Espinhos articulados podem girar e caminhar. Ouriços regulares se movem lentamente sobre rochas. Bolachas-da-praia semi-enterradas se movem através de sedimento usando espinhos modificados. Podem se ancorar firmemente em fendas usando pés e espinhos.",
      reproduction: "Dioicos com 5 gônadas localizadas interambulacr&almente na carapaça. Gametas liberados por goneóporos aborais. Desenvolvimento via larva equinoplúteo (planctotrófica, piramidal com braços longos suportados por bastões calcários). Metamorfose complexa para juvenil com miniaturização do corpo larval. Algumas espécies árticas com desenvolvimento direto e cuidado parental.",
      specialFeatures: [
        "Ouriços regulares são herbívoros importantes em ecossistemas de recife, controlando crescimento algal",
        "Podem bioerosionar substrato calcário durante alimentação, contribuindo para formação de sedimento",
        "Algumas espécies vivem 100+ anos (Strongylocentrotus franciscanus até 200 anos)",
        "Pedicelários globíferos venenosos em algumas espécies (causam dor intensa em humanos)",
        "Lanterna de Aristóteles é estrutura mastigatória mais complexa entre invertebrados",
        "Espinhos longos em Diadema spp. para defesa efetiva"
      ],
      image: seaUrchinImage,
      imageAlt: "Ouriço-do-mar (Echinoidea) com espinhos roxos longos"
    },
    {
      name: "Holothuroidea",
      commonName: "Pepinos-do-mar / Holotúrias",
      diversity: "~1.700 espécies",
      example: "Holothuria forskali, Cucumaria frondosa, Stichopus japonicus",
      description: "Holotúrias têm corpo alongado e cilíndrico com parede muscular espessa e consistência macia semelhante a couro. Endoesqueleto reduzido a pequenos ossículos microscópicos esparsos no tegumento. Orientação horizontal resulta em simetria bilateral secundária sobreposta à simetria radial pentarradial. Extremidade anterior tem boca circundada por tentáculos orais; extremidade posterior tem ânus/cloaca.",
      morphology: [
        "Corpo alongado cilíndrico ou vermiforme (5cm a 2m comprimento)",
        "Parede corporal espessa com camadas musculares longitudinais e circulares",
        "Endoesqueleto reduzido a ossículos microscópicos dispersos",
        "Tentáculos orais modificados (10-30) ao redor da boca - derivados de pés ambulacrários",
        "Pés ambulacrários em fileiras ao longo dos raios (trivium ventral, bivium dorsal)",
        "Árvores respiratórias ramificadas conectadas à cloaca para respiração",
        "Orientação horizontal cria lados ventral (trivium com pés) e dorsal (bivium)"
      ],
      feeding: "Estratégias variadas. Suspensívoros estendem tentáculos ramificados na água para capturar plâncton e partículas, passando alimento à boca. Detritívoros depositívoros varrem sedimento com tentáculos ou engolem sedimento grosseiramente, processando-o através de intestino longo (até 3x comprimento corporal). Digerem matéria orgânica, bactérias, diatomáceas; eliminam sedimento inorgânico. Podem processar quilogramas de sedimento/ano.",
      locomotion: "Locomoção por ondulações musculares da parede corporal + pés ambulacrários ventrais. Contrações musculares peristálticas propagam-se pelo corpo. Espécies com pés bem desenvolvidos usam-nos para aderência. Espécies de águas profundas nadam ondulando corpo. Velocidade muito lenta (metros por dia típico).",
      reproduction: "Maioria dioica com única gônada anterior ramificada. Goneóporo dorsal libera gametas. Desenvolvimento via larva auriculária (com bandas ciliadas) → larva doliolária (barril com bandas ciliares) → metamorfose para juvenil. Algumas espécies com fissão transversal seguida de regeneração.",
      specialFeatures: [
        "Evisceração defensiva: expelem órgãos internos (intestinos, árvores respiratórias, gônadas) quando ameaçados; regeneram em semanas",
        "Túbulos de Cuvier: filamentos adesivos venenosos expelidos por ruptura da cloaca para enredar predadores",
        "Papel ecológico crucial: bioturbação de sedimento e reciclagem de nutrientes",
        "Importância comercial: iguaria em culinária asiática (trepang/bêche-de-mer)",
        "Dominam biomassa bentônica em águas profundas (>5.000m)",
        "Simbiose com peixes-pérola (Carapidae) que vivem na cloaca"
      ],
      image: seaCucumberImage,
      imageAlt: "Pepino-do-mar (Holothuroidea) marrom no fundo arenoso"
    },
    {
      name: "Crinoidea",
      commonName: "Crinoides / Lírios-do-mar / Estrelas-pena",
      diversity: "~600 espécies viventes (>5.000 espécies fósseis)",
      example: "Antedon bifida (estrela-pena mediterrânea), Florometra serratissima",
      description: "Crinoides são equinodermos mais primitivos e conservados, com registro fóssil extenso desde Ordoviciano (~480 Ma). Caracterizados por corpo em forma de cálice com braços ramificados plumosos. Únicos equinodermos com boca e ânus no lado oral (voltados para cima). Dois grupos: pedunculados (sésseis, fixos por haste - raros hoje) e sem pedúnculo (móveis, com cirros - dominantes).",
      morphology: [
        "Cálice central (teca) contém vísceras",
        "5 braços primários ramificando-se dicotomicamente (até 200 braços em algumas espécies)",
        "Pínnulas ao longo dos braços (extensões laterais ramificadas)",
        "Superfície oral superior com boca central e ânus em cone elevado",
        "Formas pedunculadas: haste (pedúnculo) fixa o cálice ao substrato",
        "Formas sem pedúnculo: cirros (apêndices articulados) permitem fixação temporária",
        "Braços com ossículos articulados e bandas ciliadas ambulacrais"
      ],
      feeding: "Filtradores suspensívoros obrigatórios. Estendem braços perpendiculares à corrente. Pínnulas capturam plâncton, partículas orgânicas e detritos com muco secretado por células especializadas. Cílios ambulacrais nos braços transportam partículas aprisionadas para sulcos ambulacrais → braços → boca. Completamente dependentes de correntes para trazer alimento.",
      locomotion: "Formas pedunculadas sésseis (fixas permanentemente). Formas sem pedúnculo móveis mas geralmente sessile: usam cirros para fixação temporária. Podem 'caminhar' lentamente sobre cirros ou nadar batendo braços sincronizadamente (natação raramente observada, reservada para fuga).",
      reproduction: "Maioria dioica. Gônadas localizadas nas pínnulas. Gametas liberados na água. Desenvolvimento através de larva vitellária (não alimentadora) livre-natante → estágio pós-larval séssil pedunculado → metamorfose. Juvenis inicialmente fixos; formas sem pedúnculo perdem pedúnculo ao amadurecer.",
      specialFeatures: [
        "Grupo mais antigo de equinodermos com registro fóssil mais completo",
        "Dominaram mares Paleozoicos formando 'jardins de crinoides'",
        "Únicos com boca e ânus na superfície oral superior",
        "Extremamente importantes no registro fóssil: formaram extensos calcários crinoideanos",
        "Algumas espécies de águas profundas podem viver décadas a séculos",
        "Braços podem regenerar se danificados ou perdidos por predação",
        "Comensalismo comum: poliquetas, camarões, gastrópodes vivem em crinoides"
      ],
      image: featherStarImage,
      imageAlt: "Crinoide (estrela-pena) com braços plumosos vermelhos e brancos"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          As Cinco <span className="text-gradient">Classes</span> dos Equinodermos
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">
          Os equinodermos são divididos em 5 grupos principais (classes), cada um com corpo, 
          comportamento e forma de vida diferentes. Eles evoluíram há muito tempo e cada grupo 
          desenvolveu características especiais.
        </p>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Também existem cerca de 20 grupos extintos conhecidos apenas por fósseis, 
          mostrando como esse grupo de animais se diversificou ao longo de mais de 500 milhões de anos!
        </p>
      </div>

      {/* Detailed Class Descriptions */}
      <div className="space-y-16">
        {classes.map((cls, index) => (
          <Card key={index} className="overflow-hidden ocean-shadow smooth-transition hover:scale-[1.01]">
            <div className="grid gap-0 md:grid-cols-5">
              {/* Image Column */}
              <div className={`md:col-span-2 ${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
                <div className="relative h-full min-h-[300px]">
                  <img
                    src={cls.image}
                    alt={cls.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content Column */}
              <div className="md:col-span-3 p-6 md:p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full ocean-gradient px-3 py-1 text-xs font-semibold text-primary-foreground">
                      CLASSE
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">{cls.diversity}</span>
                  </div>
                  <CardTitle className="text-3xl mb-2">{cls.name}</CardTitle>
                  <p className="text-xl text-muted-foreground font-semibold mb-2">{cls.commonName}</p>
                  <p className="text-sm text-muted-foreground italic">
                    <strong>Exemplos:</strong> {cls.example}
                  </p>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Descrição Geral</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cls.description}</p>
                  </div>
                  
                  {/* Morphology */}
                  <div className="rounded-lg bg-muted/30 p-4">
                    <h4 className="font-semibold mb-3">Morfologia</h4>
                    <ul className="space-y-2 text-sm">
                      {cls.morphology.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feeding */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Alimentação</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cls.feeding}</p>
                  </div>

                  {/* Locomotion */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Locomoção</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cls.locomotion}</p>
                  </div>

                  {/* Reproduction */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Reprodução e Desenvolvimento</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cls.reproduction}</p>
                  </div>

                  {/* Special Features */}
                  <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                    <h4 className="font-semibold mb-3 text-primary">Características Especiais</h4>
                    <ul className="space-y-2 text-sm">
                      {cls.specialFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">✦</span>
                          <span>{feature}</span>
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

      {/* Comparative Table */}
      <Card className="mt-16 ocean-gradient text-primary-foreground">
        <CardContent className="p-8">
          <h2 className="mb-6 text-3xl font-bold">Tabela Comparativa das Classes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-primary-foreground/30">
                  <th className="pb-3 pr-4 font-semibold">Característica</th>
                  <th className="pb-3 pr-4 font-semibold">Asteroidea</th>
                  <th className="pb-3 pr-4 font-semibold">Ophiuroidea</th>
                  <th className="pb-3 pr-4 font-semibold">Echinoidea</th>
                  <th className="pb-3 pr-4 font-semibold">Holothuroidea</th>
                  <th className="pb-3 font-semibold">Crinoidea</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4 font-medium">Forma corporal</td>
                  <td className="py-3 pr-4">Estrela achatada</td>
                  <td className="py-3 pr-4">Disco + braços longos</td>
                  <td className="py-3 pr-4">Globular/discóide</td>
                  <td className="py-3 pr-4">Cilíndrica alongada</td>
                  <td className="py-3">Cálice + braços plumosos</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4 font-medium">Braços</td>
                  <td className="py-3 pr-4">5+ não delimitados</td>
                  <td className="py-3 pr-4">5 delimitados</td>
                  <td className="py-3 pr-4">Ausentes</td>
                  <td className="py-3 pr-4">Ausentes</td>
                  <td className="py-3">5+ ramificados</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4 font-medium">Endoesqueleto</td>
                  <td className="py-3 pr-4">Ossículos móveis</td>
                  <td className="py-3 pr-4">Vértebras articuladas</td>
                  <td className="py-3 pr-4">Placas fusionadas</td>
                  <td className="py-3 pr-4">Ossículos dispersos</td>
                  <td className="py-3">Ossículos articulados</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4 font-medium">Locomoção</td>
                  <td className="py-3 pr-4">Pés ambulacrários</td>
                  <td className="py-3 pr-4">Movimentos dos braços</td>
                  <td className="py-3 pr-4">Pés + espinhos</td>
                  <td className="py-3 pr-4">Contração muscular</td>
                  <td className="py-3">Cirros/séssil</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4 font-medium">Alimentação</td>
                  <td className="py-3 pr-4">Carnívoro</td>
                  <td className="py-3 pr-4">Detritívoro/carnívoro</td>
                  <td className="py-3 pr-4">Herbívoro/detritívoro</td>
                  <td className="py-3 pr-4">Detritívoro/suspensívoro</td>
                  <td className="py-3">Suspensívoro</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4 font-medium">Orientação boca</td>
                  <td className="py-3 pr-4">Oral (inferior)</td>
                  <td className="py-3 pr-4">Oral (inferior)</td>
                  <td className="py-3 pr-4">Oral (inferior)</td>
                  <td className="py-3 pr-4">Anterior</td>
                  <td className="py-3">Oral (superior)</td>
                </tr>
                <tr className="border-b border-primary-foreground/20">
                  <td className="py-3 pr-4 font-medium">Madreporito</td>
                  <td className="py-3 pr-4">Aboral</td>
                  <td className="py-3 pr-4">Oral</td>
                  <td className="py-3 pr-4">Aboral</td>
                  <td className="py-3 pr-4">Interno</td>
                  <td className="py-3">Oral</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Habitat típico</td>
                  <td className="py-3 pr-4">Fundo rochoso/recifal</td>
                  <td className="py-3 pr-4">Substrato variado</td>
                  <td className="py-3 pr-4">Rochas/recifes/sedimento</td>
                  <td className="py-3 pr-4">Fundo sedimentar</td>
                  <td className="py-3">Correntes/recifes profundos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Evolutionary Context */}
      <Card className="mt-12 ocean-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">Contexto Evolutivo e Filogenético</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            As relações filogenéticas entre as classes de equinodermos têm sido debatidas, mas análises moleculares 
            modernas sugerem: <strong>Crinoidea</strong> como grupo mais basal (irmão das demais classes), e dois 
            clados principais: <strong>Eleutherozoa</strong> (formas móveis) divididos em <strong>Asterozoa</strong> 
            (Asteroidea + Ophiuroidea) e <strong>Echinozoa</strong> (Echinoidea + Holothuroidea).
          </p>
          <p>
            O registro fóssil revela que todos os grupos modernos já estavam estabelecidos no Ordoviciano 
            (~480-440 Ma). Muitas classes extintas (Blastoidea, Cystoidea, Edrioasteroidea, etc.) floresceram 
            no Paleozoico, demonstrando experimentação evolutiva extraordinária do plano corporal equinodermo.
          </p>
          <p>
            A transição de formas pedunculadas sésseis (como crinoides primitivos) para formas móveis 
            (asteroides, ofiuroides, echinoides) representa uma das maiores transições evolutivas do filo, 
            permitindo exploração de novos nichos ecológicos e estratégias alimentares.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
