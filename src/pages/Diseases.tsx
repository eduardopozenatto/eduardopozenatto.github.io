import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Thermometer, Droplets, TrendingDown } from "lucide-react";

export const Diseases = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">Desafios</span> dos Equinodermos
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Os equinodermos enfrentam diversas ameaças, desde doenças específicas até impactos ambientais causados 
          pelas mudanças climáticas. Compreender esses desafios é crucial para a conservação dos ecossistemas marinhos.
        </p>
      </div>

      {/* Sea Star Wasting Syndrome */}
      <Card className="mb-8 ocean-shadow">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <CardTitle className="text-2xl">Síndrome de Desgaste da Estrela-do-Mar</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            (Sea Star Wasting Syndrome - SSWS)
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            A Síndrome de Desgaste da Estrela-do-Mar é uma doença devastadora que afeta múltiplas espécies de 
            asteroides ao longo da costa do Pacífico Norte e outras regiões. Esta síndrome tem causado mortalidades 
            em massa com impactos ecológicos significativos.
          </p>

          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
            <h4 className="font-semibold mb-3 text-destructive">Sintomas Característicos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Aparecimento de lesões brancas na superfície corporal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Perda de turgidez dos tecidos (corpo flácido e mole)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Torção e desintegração dos braços</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Perda de pés ambulacrários</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Desintegração completa do corpo em poucos dias</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border p-4 bg-muted/30">
              <h4 className="font-semibold mb-2">Causas</h4>
              <p className="text-sm text-muted-foreground mb-2">
                A pesquisa identificou múltiplos fatores associados:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Vírus densovírus (SSaDV)</li>
                <li>• Estresse térmico devido ao aquecimento oceânico</li>
                <li>• Mudanças na química da água</li>
                <li>• Possível interação de múltiplos patógenos</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-4 bg-muted/30">
              <h4 className="font-semibold mb-2">Impactos Ecológicos</h4>
              <p className="text-sm text-muted-foreground mb-2">
                A perda de estrelas-do-mar afeta todo o ecossistema:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Explosão populacional de mexilhões e outros bivalves</li>
                <li>• Alteração na estrutura das comunidades bentônicas</li>
                <li>• Perda de predadores-chave</li>
                <li>• Desequilíbrio em cadeias alimentares marinhas</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Environmental Threats */}
      <div className="mb-8">
        <h2 className="mb-6 text-3xl font-bold">Ameaças Ambientais</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="smooth-transition hover:ocean-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Thermometer className="h-5 w-5" />
                </div>
                <CardTitle>Aquecimento Global</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                O aumento da temperatura oceânica afeta diretamente os equinodermos:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Estresse térmico reduz capacidade reprodutiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Aumenta suscetibilidade a doenças</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Altera distribuição geográfica das espécies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Branqueamento e morte de corais afeta habitat</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="smooth-transition hover:ocean-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Droplets className="h-5 w-5" />
                </div>
                <CardTitle>Acidificação Oceânica</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                A absorção de CO₂ pelos oceanos causa acidificação, impactando:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Dificulta formação do endoesqueleto calcário</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Afeta desenvolvimento larval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Enfraquece estruturas de carbonato de cálcio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Reduz taxa de crescimento e sobrevivência</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="smooth-transition hover:ocean-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <TrendingDown className="h-5 w-5" />
                </div>
                <CardTitle>Poluição Marinha</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Diversos poluentes ameaçam populações de equinodermos:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Microplásticos acumulam em tecidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Poluentes químicos afetam reprodução</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Eutrofização causa zonas mortas hipóxicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Derramamentos de óleo causam mortalidade</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Population Decline */}
      <Card className="mb-8 ocean-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">Declínio Populacional e Impactos em Cascata</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            O declínio das populações de equinodermos tem consequências em cascata para os ecossistemas marinhos. 
            Como muitas espécies desempenham papéis ecológicos cruciais (predadores-chave, herbívoros, detritívoros), 
            sua redução desestabiliza comunidades inteiras.
          </p>

          <div className="rounded-lg border border-border p-4 bg-muted/30">
            <h4 className="font-semibold mb-3">Exemplos de Impactos Ecológicos</h4>
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              <div>
                <p className="font-semibold text-primary mb-2">Perda de Estrelas-do-Mar Predadoras:</p>
                <p className="text-muted-foreground">
                  Explosão de populações de mexilhões e outros bivalves, que podem dominar rochas e excluir outras 
                  espécies, reduzindo a biodiversidade local.
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Declínio de Ouriços-do-Mar Herbívoros:</p>
                <p className="text-muted-foreground">
                  Crescimento excessivo de algas pode sufocar recifes de coral e outros organismos sésseis, 
                  alterando drasticamente a estrutura do habitat.
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Redução de Pepinos-do-Mar:</p>
                <p className="text-muted-foreground">
                  Diminuição da reciclagem de nutrientes no sedimento, afetando a produtividade do ecossistema 
                  bentônico e a qualidade da água.
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Impacto na Pesca Comercial:</p>
                <p className="text-muted-foreground">
                  Mudanças nas populações de equinodermos podem afetar espécies comercialmente importantes 
                  que dependem deles como alimento ou habitat.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conservation Message */}
      <Card className="ocean-gradient text-primary-foreground">
        <CardContent className="p-8">
          <h3 className="mb-4 text-2xl font-bold">Conservação e Futuro</h3>
          <p className="mb-4 leading-relaxed">
            A conservação dos equinodermos requer ações coordenadas para mitigar mudanças climáticas, reduzir poluição 
            e proteger habitats marinhos. Áreas marinhas protegidas, regulação da pesca de pepinos-do-mar, e 
            monitoramento contínuo de populações são estratégias essenciais.
          </p>
          <p className="leading-relaxed">
            A pesquisa científica continua sendo fundamental para compreender melhor as doenças emergentes, 
            desenvolver estratégias de conservação eficazes e prever como as populações responderão às mudanças 
            ambientais futuras. O destino dos equinodermos está intimamente ligado à saúde geral dos oceanos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
