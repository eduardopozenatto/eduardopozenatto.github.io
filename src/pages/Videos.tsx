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
    title: "EQUINODERMOS - Características e Classes | Biologia",
    channel: "Biologia com Samuel Cunha",
    description: "Aula completa sobre equinodermos abordando características gerais, sistema ambulacrário, classes (Asteroidea, Echinoidea, Holothuroidea, Ophiuroidea e Crinoidea) com exemplos.",
    url: "https://www.youtube.com/watch?v=p6h7FQ8p3qI",
    category: "Características Gerais"
  },
  {
    title: "Equinodermos - Zoologia | Biologia com Prof. Jubilut",
    channel: "Biologia Total com Prof. Jubilut",
    description: "Aula sobre o filo Echinodermata: características diagnósticas, morfologia, fisiologia, classes e importância ecológica.",
    url: "https://www.youtube.com/watch?v=fJ6qJdLWPqo",
    category: "Características Gerais"
  },
  {
    title: "Filo Echinodermata - Aula Completa",
    channel: "Kennedy Ramos",
    description: "Videoaula completa sobre equinodermos com detalhamento das características, sistema vascular aquífero e classificação das cinco classes.",
    url: "https://www.youtube.com/watch?v=vJjI7vQp5EI",
    category: "Classes"
  },
  {
    title: "ANIMAIS INVERTEBRADOS: Equinodermos",
    channel: "Smile and Learn - Português",
    description: "Vídeo educativo sobre equinodermos para estudantes, explicando de forma didática suas características, habitat e exemplos como estrelas-do-mar e ouriços.",
    url: "https://www.youtube.com/watch?v=yVX9zgNW7fk",
    category: "Características Gerais"
  },
  {
    title: "Estrela-do-Mar: Regeneração e Reprodução",
    channel: "Toda Matéria",
    description: "Explicação sobre o incrível poder de regeneração das estrelas-do-mar e os processos de reprodução sexuada e assexuada.",
    url: "https://www.youtube.com/watch?v=cXCMz_p_GJw",
    category: "Características Especiais"
  },
  {
    title: "Sistema Ambulacral dos Equinodermos",
    channel: "Biologia para ENEM",
    description: "Detalhamento do sistema vascular aquífero: madreporito, canal pétreo, canais radiais, ampolas e pés ambulacrários.",
    url: "https://www.youtube.com/watch?v=9XNfx6anPWI",
    category: "Anatomia e Fisiologia"
  },
  {
    title: "Ciclo de Vida dos Equinodermos",
    channel: "Professor Andrey",
    description: "Explicação sobre reprodução, desenvolvimento larval com simetria bilateral, metamorfose e fase adulta com simetria radial.",
    url: "https://www.youtube.com/watch?v=kH5nqwHCMp4",
    category: "Reprodução"
  },
  {
    title: "Classes dos Equinodermos - Asteroidea, Echinoidea e mais",
    channel: "Me Salva! ENEM 2024",
    description: "Vídeo sobre as cinco classes de equinodermos: estrelas-do-mar, ouriços, pepinos-do-mar, serpentes-do-mar e lírios-do-mar.",
    url: "https://www.youtube.com/watch?v=mS6vhT_qwHM",
    category: "Classes"
  },
  {
    title: "Equinodermos: Ecologia Marinha",
    channel: "Canal USP",
    description: "Importância dos equinodermos nos ecossistemas marinhos, papel como predadores, herbívoros e recicladores de nutrientes.",
    url: "https://www.youtube.com/watch?v=a4Jf8cVq0tE",
    category: "Ecologia"
  },
  {
    title: "Ouriço-do-Mar e a Lanterna de Aristóteles",
    channel: "Biologia Interativa",
    description: "Anatomia detalhada dos ouriços-do-mar, focando na estrutura alimentar complexa chamada Lanterna de Aristóteles.",
    url: "https://www.youtube.com/watch?v=p7tQvVK3f0o",
    category: "Anatomia e Fisiologia"
  },
  {
    title: "Curiosidades sobre Estrelas-do-Mar",
    channel: "Minuto da Terra",
    description: "Fatos surpreendentes sobre estrelas-do-mar: digestão externa, ausência de cérebro, regeneração e capacidade de trocar de sexo.",
    url: "https://www.youtube.com/watch?v=D_M9gIlpLNY",
    category: "Curiosidades"
  },
  {
    title: "Equinodermos - Evolução e Fósseis",
    channel: "Papo de Biólogo",
    description: "História evolutiva dos equinodermos através do registro fóssil, desde o Cambriano até os dias atuais.",
    url: "https://www.youtube.com/watch?v=TwQdHf5iXqU",
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
