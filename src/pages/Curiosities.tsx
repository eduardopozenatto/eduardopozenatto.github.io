import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Brain, Shield, Clock } from "lucide-react";

export const Curiosities = () => {
  const facts = [
    {
      icon: Sparkles,
      title: "Estômago Eversível",
      description: "As estrelas-do-mar possuem uma capacidade extraordinária: podem expelir seu estômago pela boca, colocá-lo sobre a presa (geralmente um molusco), e realizar a digestão externamente. Após digerir o conteúdo da presa, retraem o estômago de volta para dentro do corpo. Esta adaptação permite que comam presas maiores que sua boca.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Evisceração Defensiva",
      description: "Pepinos-do-mar têm um mecanismo de defesa único: quando ameaçados, podem expelir parte ou todos os seus órgãos internos (intestinos, sistema respiratório) através do ânus para confundir ou prender predadores em uma massa pegajosa. Surpreendentemente, conseguem regenerar completamente esses órgãos em poucas semanas!",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Parentes dos Humanos",
      description: "Embora pareça improvável, os equinodermos são parentes evolutivos mais próximos dos vertebrados (incluindo humanos) do que de outros invertebrados como insetos ou moluscos. Compartilhamos um ancestral deuterostômio comum, evidenciado por características embrionárias similares. Esta relação nos ajuda a entender a evolução dos cordados.",
      color: "text-primary-light"
    },
    {
      icon: Clock,
      title: "Longevidade Surpreendente",
      description: "Alguns ouriços-do-mar vivem mais de 100 anos! O ouriço-do-mar-vermelho (Strongylocentrotus franciscanus) pode viver até 200 anos, mostrando poucos sinais de envelhecimento. Estudos revelam que mantêm capacidade reprodutiva mesmo em idades avançadas, desafiando conceitos tradicionais sobre senescência.",
      color: "text-accent"
    }
  ];

  const additionalFacts = [
    {
      title: "Sangue sem Hemoglobina",
      fact: "Os equinodermos não possuem hemoglobina no sangue. Ao invés disso, o líquido celômico (fluido corporal) transporta oxigênio e nutrientes, conferindo-lhes uma coloração que varia conforme a espécie."
    },
    {
      title: "Olhos nos Braços",
      fact: "Algumas estrelas-do-mar possuem células fotossensíveis nas pontas dos braços que funcionam como 'olhos' primitivos, permitindo detecção de luz e sombras para navegação."
    },
    {
      title: "Dentes que Crescem Continuamente",
      fact: "A 'lanterna de Aristóteles' dos ouriços-do-mar contém cinco dentes que crescem continuamente ao longo da vida para compensar o desgaste causado por raspar rochas."
    },
    {
      title: "Comunicação Química",
      fact: "Equinodermos usam feromônios para sincronizar a liberação de gametas durante a reprodução, garantindo que milhares de indivíduos desovem simultaneamente."
    },
    {
      title: "Regeneração Completa",
      fact: "Algumas espécies de estrelas-do-mar podem regenerar um indivíduo completo a partir de apenas um braço (desde que contenha parte do disco central), um processo que pode levar meses."
    },
    {
      title: "Fossas Marianas",
      fact: "Pepinos-do-mar habitam desde águas rasas até as partes mais profundas dos oceanos, incluindo a Fossa das Marianas (mais de 10.000 metros), onde constituem a maior parte da biomassa animal."
    },
    {
      title: "Filtros Naturais",
      fact: "Um único pepino-do-mar pode processar dezenas de quilogramas de sedimento por ano, filtrando detritos e reciclando nutrientes, sendo verdadeiras 'minhocas do mar'."
    },
    {
      title: "Coroas Espinhosas",
      fact: "A estrela-do-mar coroa-de-espinhos (Acanthaster planci) pode ter até 21 braços e é uma das poucas espécies venenosas de equinodermos, causando dor intensa em humanos."
    },
    {
      title: "Espécies Luminescentes",
      fact: "Alguns ofiuroides de águas profundas são bioluminescentes, produzindo luz verde-azulada para confundir predadores ou atrair presas."
    },
    {
      title: "Iguaria Asiática",
      fact: "Pepinos-do-mar são considerados iguaria na culinária asiática, especialmente na China, onde são conhecidos como 'trepang' ou 'bêche-de-mer' e valorizados por propriedades medicinais."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">Curiosidades</span> Fascinantes
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Os equinodermos são repletos de características surpreendentes que desafiam nossa compreensão da vida marinha. 
          Descubra fatos extraordinários sobre estes animais únicos!
        </p>
      </div>

      {/* Main Facts */}
      <div className="grid gap-8 md:grid-cols-2 mb-12">
        {facts.map((fact, index) => (
          <Card key={index} className="ocean-shadow smooth-transition hover:scale-105">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ocean-gradient`}>
                  <fact.icon className={`h-6 w-6 text-primary-foreground`} />
                </div>
                <CardTitle className="text-2xl">{fact.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{fact.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Facts Grid */}
      <div className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Mais Fatos Incríveis</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {additionalFacts.map((item, index) => (
            <Card key={index} className="smooth-transition hover:ocean-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.fact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Fun Comparison */}
      <Card className="mb-8 ocean-gradient text-primary-foreground">
        <CardContent className="p-8">
          <h3 className="mb-6 text-2xl font-bold">Você Sabia?</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-primary-foreground/10 p-4 backdrop-blur">
              <h4 className="font-semibold mb-2 text-lg">🌟 Superação de Obstáculos</h4>
              <p className="text-sm leading-relaxed">
                Uma estrela-do-mar pode abrir um mexilhão aplicando força constante por horas até que o molusco se 
                canse e abra ligeiramente. Apenas uma abertura de 0,1mm é suficiente para a estrela inserir seu estômago!
              </p>
            </div>
            <div className="rounded-lg bg-primary-foreground/10 p-4 backdrop-blur">
              <h4 className="font-semibold mb-2 text-lg">🔬 Medicina do Futuro</h4>
              <p className="text-sm leading-relaxed">
                Cientistas estudam a incrível capacidade regenerativa dos equinodermos para desenvolver terapias de 
                regeneração de tecidos humanos. Compostos extraídos de pepinos-do-mar estão sendo testados contra câncer.
              </p>
            </div>
            <div className="rounded-lg bg-primary-foreground/10 p-4 backdrop-blur">
              <h4 className="font-semibold mb-2 text-lg">🏊 Atletas Marinhos</h4>
              <p className="text-sm leading-relaxed">
                Embora pareçam lentos, alguns ofiuroides podem se mover surpreendentemente rápido, alcançando 
                velocidades de até 1 metro por minuto usando movimentos coordenados dos braços flexíveis.
              </p>
            </div>
            <div className="rounded-lg bg-primary-foreground/10 p-4 backdrop-blur">
              <h4 className="font-semibold mb-2 text-lg">💎 Joias Vivas</h4>
              <p className="text-sm leading-relaxed">
                Algumas espécies de estrelas-do-mar e ofiuroides exibem cores vibrantes - azul elétrico, laranja 
                brilhante, púrpura intenso - devido a pigmentos que também funcionam como proteção contra radiação UV.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Record Breakers */}
      <Card className="ocean-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">Recordistas do Filo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-4xl mb-2">🏆</div>
              <h4 className="font-semibold mb-2">Maior</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Midgardia xandaros</strong> (estrela-cesta): diâmetro de até 1,4 metros
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-4xl mb-2">🏆</div>
              <h4 className="font-semibold mb-2">Mais Profundo</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Elpidia glacialis</strong> (pepino-do-mar): encontrado a mais de 10.000m de profundidade
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-4xl mb-2">🏆</div>
              <h4 className="font-semibold mb-2">Mais Venenoso</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Acanthaster planci</strong> (coroa-de-espinhos): espinhos venenosos causam dor intensa
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
