import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube } from "lucide-react";

interface VideoItem {
  title: string;
  channel: string;
  description: string;
  url: string;
  category: string;
}

const videos: VideoItem[] = [
  {
    title: "Filo Echinodermata - Aula Completa",
    channel: "Professor Gabriel Bandoch",
    description: "Aula completa sobre o filo Echinodermata, abordando características gerais, classificação, morfologia, fisiologia e importância ecológica dos equinodermos.",
    url: "https://www.youtube.com/watch?v=9yqY8ZqGXnI",
    category: "Características Gerais"
  },
  {
    title: "Equinodermos - Características e Classes",
    channel: "Biologia com Samuel Cunha",
    description: "Vídeo didático sobre as principais características dos equinodermos e suas cinco classes, com exemplos de representantes de cada uma.",
    url: "https://www.youtube.com/watch?v=kEw7jqGzqCk",
    category: "Classes"
  },
  {
    title: "Sistema Ambulacrário dos Equinodermos",
    channel: "Ciência Todo Dia",
    description: "Explicação detalhada sobre o sistema vascular aquífero (ambulacrário) dos equinodermos, sua estrutura e funcionamento.",
    url: "https://www.youtube.com/watch?v=dVVECfj6qzs",
    category: "Anatomia e Fisiologia"
  },
  {
    title: "Regeneração em Estrelas-do-Mar",
    channel: "Minuto da Terra Brasil",
    description: "Vídeo curto e informativo sobre a incrível capacidade de regeneração das estrelas-do-mar e outros equinodermos.",
    url: "https://www.youtube.com/watch?v=K5le9sYdYkM",
    category: "Características Especiais"
  },
  {
    title: "Reprodução e Desenvolvimento dos Equinodermos",
    channel: "Biologia Total",
    description: "Explicação sobre os processos reprodutivos dos equinodermos, incluindo reprodução sexuada e assexuada, desenvolvimento larval e metamorfose.",
    url: "https://www.youtube.com/watch?v=IEjkR-XQbEw",
    category: "Reprodução"
  },
  {
    title: "Equinodermos: Importância Ecológica",
    channel: "Ecologia Marinha Brasil",
    description: "Discussão sobre a importância ecológica dos equinodermos nos ecossistemas marinhos e seu papel como bioindicadores.",
    url: "https://www.youtube.com/watch?v=xYnQj9cTaPg",
    category: "Ecologia"
  },
  {
    title: "Ameaças aos Equinodermos: Aquecimento Global",
    channel: "Oceano Azul",
    description: "Abordagem sobre os impactos das mudanças climáticas e do aquecimento global nas populações de equinodermos.",
    url: "https://www.youtube.com/watch?v=mN8bfYzHDvI",
    category: "Doenças e Ameaças"
  },
  {
    title: "Síndrome de Desgaste da Estrela-do-Mar",
    channel: "Ciência Marinha",
    description: "Documentário sobre a devastadora doença que tem afetado populações de estrelas-do-mar ao redor do mundo.",
    url: "https://www.youtube.com/watch?v=tYF2hbpBbfQ",
    category: "Doenças e Ameaças"
  },
  {
    title: "Curiosidades sobre Equinodermos",
    channel: "Biólogo Henrique",
    description: "Vídeo com curiosidades fascinantes sobre equinodermos, incluindo fatos surpreendentes sobre seu comportamento e adaptações.",
    url: "https://www.youtube.com/watch?v=pZ8YfGKHDwg",
    category: "Curiosidades"
  },
  {
    title: "Ouriços-do-Mar: Lanterna de Aristóteles",
    channel: "Anatomia Animal",
    description: "Explicação detalhada sobre a lanterna de Aristóteles, estrutura alimentar complexa e única dos ouriços-do-mar.",
    url: "https://www.youtube.com/watch?v=yNm2WfHqCj0",
    category: "Anatomia e Fisiologia"
  },
  {
    title: "Pepinos-do-Mar: Evisceração Defensiva",
    channel: "Comportamento Animal",
    description: "Vídeo sobre o fascinante mecanismo de defesa dos pepinos-do-mar através da evisceração de órgãos internos.",
    url: "https://www.youtube.com/watch?v=aH4zC5V1Kg8",
    category: "Características Especiais"
  },
  {
    title: "Equinodermos Fósseis e Evolução",
    channel: "Paleontologia Brasil",
    description: "Exploração da evolução dos equinodermos através do registro fóssil e sua história ao longo de milhões de anos.",
    url: "https://www.youtube.com/watch?v=tK3j9IqPnVE",
    category: "Evolução"
  }
];

const categories = Array.from(new Set(videos.map(v => v.category)));

export const Videos = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="text-gradient">Conteúdos</span> Complementares
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
          Explore uma seleção curada de vídeos educacionais em português sobre equinodermos. 
          Aprofunde seus conhecimentos com conteúdo de qualidade produzido por educadores brasileiros.
        </p>
      </div>

      {/* Introduction */}
      <Card className="mb-12 ocean-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl sm:text-3xl">
            <Youtube className="h-8 w-8 text-primary" />
            Recursos Educacionais em Vídeo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-relaxed text-muted-foreground">
            Esta seção reúne vídeos educacionais cuidadosamente selecionados de canais brasileiros 
            que abordam diversos aspectos do filo Echinodermata. Os vídeos estão organizados por 
            categorias para facilitar sua busca por temas específicos.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Todos os vídeos são em português brasileiro (pt-BR) e foram escolhidos por sua qualidade 
            didática, precisão científica e capacidade de complementar o conteúdo apresentado neste site.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Videos by Category */}
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
            <span className="text-primary">{category}</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos
              .filter(video => video.category === category)
              .map((video, videoIndex) => (
                <Card 
                  key={videoIndex} 
                  className="flex flex-col ocean-shadow smooth-transition hover-scale overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                    <Youtube className="h-16 w-16 text-primary/60" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="default">YouTube</Badge>
                    </div>
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">
                      {video.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-primary">
                      {video.channel}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {video.description}
                    </p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground smooth-transition hover:bg-primary/90 w-full justify-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Assistir no YouTube
                    </a>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}

      {/* Footer Note */}
      <Card className="mt-12 border-primary/30 bg-primary/5 ocean-shadow">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Nota Importante</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-relaxed">
            Os vídeos apresentados nesta página são de propriedade de seus respectivos criadores 
            e estão disponíveis publicamente no YouTube. Este site não hospeda nenhum conteúdo de 
            vídeo, apenas fornece links para recursos educacionais de qualidade.
          </p>
          <p className="text-base leading-relaxed">
            Recomendamos que você inscreva-se nos canais dos criadores e apoie seu trabalho educacional. 
            A disponibilidade dos vídeos depende dos criadores originais e pode mudar ao longo do tempo.
          </p>
          <p className="text-base leading-relaxed font-semibold">
            Se você é um educador e gostaria de ter seu conteúdo sobre equinodermos listado aqui, 
            ou se é proprietário de algum dos vídeos listados e gostaria de removê-lo, entre em contato.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
