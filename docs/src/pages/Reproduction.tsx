import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import lifeCycle from "@/assets/life-cycle.jpg";
import { Heart, Users, RefreshCw, Sparkles } from "lucide-react";

export const Reproduction = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">Ciclo de Vida</span> e Reprodução
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Os equinodermos apresentam estratégias reprodutivas fascinantes, combinando reprodução sexuada com 
          desenvolvimento larval complexo e, em alguns casos, reprodução assexuada através de regeneração.
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
            <h3 className="font-semibold mb-2 text-lg">Características Gerais</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A maioria dos equinodermos são dioicos (sexos separados), embora existam algumas espécies hermafroditas. 
              A reprodução ocorre principalmente através de fertilização externa, onde os gametas são liberados 
              diretamente na água do mar.
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
                  <span>Fertilização externa em ambiente marinho</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sincronização reprodutiva através de feromônios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Produção de grande quantidade de gametas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Algumas espécies apresentam cuidado parental limitado</span>
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
                  <span>Desenvolvimento indireto com estágio larval planctônico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Larvas com simetria bilateral (diferente dos adultos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tipos larvais: bipinária, pluteus, auriculária</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Metamorfose complexa para forma adulta radial</span>
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
        <CardContent>
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
              <h4 className="font-semibold mb-2 text-lg">Regeneração</h4>
              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                A capacidade de regeneração é uma das características mais impressionantes dos equinodermos:
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
              <h4 className="font-semibold mb-2 text-lg">Fissão</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Algumas espécies podem se reproduzir por fissão, onde o corpo se divide em duas partes, 
                e cada parte regenera as porções faltantes para formar um indivíduo completo. 
                Este processo é observado em algumas estrelas-do-mar e pepinos-do-mar, sendo uma estratégia 
                eficaz de reprodução assexuada em ambientes favoráveis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Evolutionary Significance */}
      <Card className="ocean-gradient text-primary-foreground">
        <CardContent className="p-8">
          <h3 className="mb-4 text-2xl font-bold">Importância Evolutiva</h3>
          <p className="mb-4 leading-relaxed">
            O desenvolvimento larval dos equinodermos fornece evidências importantes sobre sua relação evolutiva 
            com os cordados. As larvas bilaterais de equinodermos compartilham características com larvas de 
            hemicordados e cordados, sugerindo um ancestral deuterostômio comum.
          </p>
          <p className="leading-relaxed">
            A transição da simetria bilateral das larvas para a simetria radial dos adultos representa uma 
            adaptação única que reflete o modo de vida bentônico desses animais, permitindo interação eficiente 
            com o ambiente em todas as direções.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
