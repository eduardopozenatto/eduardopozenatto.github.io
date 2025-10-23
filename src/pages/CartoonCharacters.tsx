import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import patrickStar from "@/assets/patrick-star.jpg";
import cartoonStarfish from "@/assets/cartoon-starfish.jpg";

const characters = [
  {
    name: "Patrick Estrela (Patrick Star)",
    series: "Bob Esponja (SpongeBob SquarePants)",
    description: "Patrick Estrela é uma estrela-do-mar rosa e o melhor amigo de Bob Esponja. Ele representa a classe Asteroidea dos equinodermos e vive embaixo de uma pedra. Apesar de ser retratado de forma cômica e ingênua, Patrick compartilha características reais das estrelas-do-mar, como a forma pentarradial (cinco braços) e a capacidade de regeneração.",
    scientificInfo: "As estrelas-do-mar reais, assim como Patrick, possuem simetria radial pentarradial, sistema vascular aquífero para locomoção através de pés ambulacrários, e uma incrível capacidade de regeneração que permite que regenerem braços perdidos ou até mesmo um corpo inteiro a partir de um braço.",
    image: patrickStar,
    class: "Asteroidea"
  },
  {
    name: "Peach (Estrela-do-mar de Procurando Nemo)",
    series: "Procurando Nemo (Finding Nemo)",
    description: "Peach é uma estrela-do-mar rosa que vive no aquário do dentista P. Sherman. Ela é conhecida por sua personalidade animada e por ser a 'limpadora' do aquário, sempre alertando sobre a sujeira. Na natureza, algumas estrelas-do-mar ajudam na limpeza de ecossistemas marinhos ao se alimentar de detritos e organismos mortos.",
    scientificInfo: "Peach representa bem as estrelas-do-mar que habitam águas rasas. Na natureza, muitas espécies de Asteroidea são predadoras ou detritívoras, desempenhando papel fundamental na manutenção do equilíbrio dos ecossistemas marinhos ao controlar populações de moluscos e limpar o fundo oceânico.",
    image: cartoonStarfish,
    class: "Asteroidea"
  }
];

export const CartoonCharacters = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="text-gradient">Equinodermos</span> nos Desenhos Animados
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
          Os equinodermos aparecem frequentemente em desenhos animados e filmes de animação, 
          trazendo consciência sobre esses fascinantes animais marinhos para o público geral. 
          Veja alguns dos personagens mais famosos que representam o filo Echinodermata!
        </p>
      </div>

      {/* Introduction Card */}
      <Card className="mb-12 ocean-shadow">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">Por que Equinodermos na Cultura Pop?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-relaxed text-muted-foreground">
            Equinodermos, especialmente estrelas-do-mar, são frequentemente escolhidos para personagens 
            de desenhos animados devido à sua aparência única e reconhecível. Sua simetria radial distinta 
            e forma em estrela tornam-nos visualmente interessantes e facilmente identificáveis pelo público.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Além disso, a associação com ambientes marinhos e a natureza geralmente pacífica desses 
            animais os tornam personagens ideais para histórias infantis. Muitos desses personagens 
            ajudam a introduzir conceitos de biologia marinha de forma divertida e acessível para crianças.
          </p>
        </CardContent>
      </Card>

      {/* Characters Grid */}
      <div className="space-y-8">
        {characters.map((character, index) => (
          <Card 
            key={index} 
            className="overflow-hidden ocean-shadow smooth-transition hover-scale"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={character.image}
                  alt={character.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ocean-shadow">
                  Classe: {character.class}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl sm:text-3xl mb-2">
                    {character.name}
                  </CardTitle>
                  <p className="text-lg font-semibold text-primary">
                    {character.series}
                  </p>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">No Desenho:</h4>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {character.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-primary">
                      Informação Científica:
                    </h4>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {character.scientificInfo}
                    </p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Educational Note */}
      <Card className="mt-12 border-primary/30 bg-primary/5 ocean-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">Educação através do Entretenimento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-relaxed">
            Personagens de desenhos animados baseados em equinodermos desempenham um papel importante 
            na educação ambiental e na conscientização sobre a vida marinha. Eles ajudam a:
          </p>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
              <span className="text-base leading-relaxed">
                Introduzir conceitos de biologia marinha para crianças de forma acessível e divertida
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
              <span className="text-base leading-relaxed">
                Despertar interesse em ciências naturais e conservação marinha desde cedo
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
              <span className="text-base leading-relaxed">
                Criar conexão emocional com animais marinhos, promovendo consciência ambiental
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
              <span className="text-base leading-relaxed">
                Demonstrar características reais dos equinodermos de maneira visual e memorável
              </span>
            </li>
          </ul>
          <p className="text-base leading-relaxed pt-4">
            Embora esses personagens sejam antropomorfizados (com características humanas) para fins 
            de entretenimento, muitos mantêm características biológicas autênticas que podem servir 
            como ponto de partida para discussões educacionais sobre o filo Echinodermata.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
