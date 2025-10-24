import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import lifeCycle from "@/assets/life_cycle.jpg";
import { Heart, Users, RefreshCw, Sparkles } from "lucide-react";

export const Reproduction = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">Ciclo de Vida</span> e Reprodução
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Como os equinodermos se reproduzem e crescem? Eles usam tanto reprodução sexuada (com machos e fêmeas) 
          quanto assexuada (regeneração). Vamos descobrir!
        </p>
      </div>

      {/* Sexual Reproduction */}
      <Card className="mb-8 ocean-shadow">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg ocean-gradient">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Reprodução Sexuada</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-lg">Como Funciona</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A maioria tem machos e fêmeas separados. A reprodução acontece na água do mar: machos e fêmeas 
              liberam seus gametas (óvulos e espermatozoides) na água ao mesmo tempo, e a fertilização acontece lá.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border p-4 bg-muted/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Fertilização
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Óvulos e espermatozoides se encontram na água</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Usam sinais químicos para liberar gametas juntos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Produzem milhões de gametas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Alguns cuidam dos bebês protegendo-os sob o corpo</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-4 bg-muted/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Desenvolvimento Larval
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Bebês passam por estágio de larva nadadora</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Larvas têm formato bilateral (como nós)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Cada grupo tem um tipo diferente de larva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Depois sofrem metamorfose virando forma de estrela</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Life Cycle Stages */}
      <Card className="mb-8 ocean-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">Estágios do Ciclo de Vida</CardTitle>
        </CardHeader>

        {/* Life Cycle Diagram */}
          <div className="mb-6">
            <img 
              src={lifeCycle} 
              alt="Ciclo de vida completo dos equinodermos" 
              className="w-full h-auto max-h-96 object-contain rounded-lg ocean-shadow mx-auto" 
            />
            <p className="text-sm text-muted-foreground text-center mt-3 leading-relaxed">
              Veja como eles crescem: do ovo até virar adulto com formato de estrela
            </p>
          </div>

        <CardContent className="space-y-6">
          
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-3 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                1
              </div>
              <h4 className="font-semibold mb-2">Gametas</h4>
              <p className="text-sm text-muted-foreground">
                Óvulos e espermatozoides são liberados na água do mar
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-3 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                2
              </div>
              <h4 className="font-semibold mb-2">Zigoto</h4>
              <p className="text-sm text-muted-foreground">
                Fertilização externa forma o zigoto unicelular
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-3 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                3
              </div>
              <h4 className="font-semibold mb-2">Larva</h4>
              <p className="text-sm text-muted-foreground">
                Desenvolvimento de larva bilateral planctônica
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-3 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                4
              </div>
              <h4 className="font-semibold mb-2">Adulto</h4>
              <p className="text-sm text-muted-foreground">
                Metamorfose para forma adulta com simetria radial
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg ocean-gradient p-6 text-primary-foreground">
            <h4 className="font-semibold mb-3 text-lg">Tipos Larvais por Classe</h4>
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              <div>
                <p className="font-semibold mb-1">Asteroidea:</p>
                <p>Larva bipinária → larva braquiolária</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Ophiuroidea:</p>
                <p>Larva ofioplúteo</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Echinoidea:</p>
                <p>Larva equinoplúteo</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Holothuroidea:</p>
                <p>Larva auriculária → doliolária</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Asexual Reproduction */}
      <Card className="mb-8 ocean-shadow">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg ocean-gradient">
              <RefreshCw className="h-5 w-5 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Reprodução Assexuada e Regeneração</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Além da reprodução sexuada, alguns equinodermos possuem capacidades extraordinárias de reprodução 
            assexuada e regeneração, permitindo a multiplicação de indivíduos e a recuperação de partes perdidas.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border p-4 bg-muted/30">
              <h4 className="font-semibold mb-2 text-lg">Regeneração: Reparando o Corpo</h4>
              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                Eles têm superpoderes de regeneração - podem recuperar partes perdidas do corpo:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Estrelas-do-mar:</strong> Podem regenerar braços inteiros a partir de pequenas porções do disco central</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Ofíuros:</strong> Regeneram braços perdidos, processo comum após autotomia (auto-amputação defensiva)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Pepinos-do-mar:</strong> Regeneram órgãos internos após evisceração defensiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Ouriços:</strong> Capacidade limitada de regeneração de espinhos e pedicelários</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-4 bg-muted/30">
              <h4 className="font-semibold mb-2 text-lg">Fissão: Dividir para Multiplicar</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Algumas espécies se dividem ao meio, e cada metade cresce as partes que faltam, 
                virando dois animais completos! É uma forma de reprodução assexuada - não precisa 
                de macho e fêmea. Isso acontece em algumas estrelas-do-mar e pepinos-do-mar.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Evolutionary Significance */}
      <Card className="ocean-gradient text-primary-foreground">
        <CardContent className="p-8">
          <h3 className="mb-4 text-2xl font-bold">Por que Isso Importa?</h3>
          <p className="mb-4 leading-relaxed">
            As larvas dos equinodermos nos dão pistas sobre evolução! Quando são bebês, têm formato bilateral 
            (como nós). Isso mostra que são nossos parentes distantes, compartilhando um ancestral comum.
          </p>
          <p className="leading-relaxed">
            A mudança de bilateral (larva) para radial (adulto) é uma adaptação incrível para viver no fundo 
            do mar, onde é útil poder interagir com o ambiente em todas as direções!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
