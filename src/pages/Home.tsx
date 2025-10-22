import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Shell, Waves } from "lucide-react";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-starfish.jpg";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Estrela-do-mar no fundo do oceano"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="container relative z-10 mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Bem-vindo ao Echinodermata Explorer
            </h1>
            <p className="mb-8 text-lg sm:text-xl leading-relaxed">
              Os equinodermos são animais marinhos fascinantes, como estrelas-do-mar e ouriços-do-mar, 
              conhecidos por sua simetria radial e sistema vascular aquífero único. Explore este mundo 
              incrível com conteúdo científico de qualidade.
            </p>
            <Link to="/caracteristicas">
              <Button size="lg" variant="secondary" className="group">
                Explore Agora
                <ArrowRight className="ml-2 h-5 w-5 smooth-transition group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Descubra os Equinodermos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aprenda sobre as características únicas, diversidade e importância ecológica destes fascinantes animais marinhos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="smooth-transition hover:ocean-shadow hover:scale-105">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg ocean-gradient">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">5 Classes Diversas</h3>
                <p className="text-muted-foreground">
                  Explore as cinco classes de equinodermos: asteroides, ofiuroides, equinoides, holotúrias e crinoides.
                </p>
                <Link to="/classes">
                  <Button variant="link" className="mt-4 px-0">
                    Saiba mais →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="smooth-transition hover:ocean-shadow hover:scale-105">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg ocean-gradient">
                  <Waves className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Sistema Único</h3>
                <p className="text-muted-foreground">
                  Conheça o sistema vascular aquífero, uma característica exclusiva dos equinodermos.
                </p>
                <Link to="/caracteristicas">
                  <Button variant="link" className="mt-4 px-0">
                    Saiba mais →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="smooth-transition hover:ocean-shadow hover:scale-105">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg ocean-gradient">
                  <Shell className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Curiosidades Incríveis</h3>
                <p className="text-muted-foreground">
                  Descubra fatos fascinantes sobre a regeneração, defesa e comportamento dos equinodermos.
                </p>
                <Link to="/curiosidades">
                  <Button variant="link" className="mt-4 px-0">
                    Saiba mais →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ocean-gradient">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Teste Seus Conhecimentos
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Complete nosso quiz interativo e descubra o quanto você aprendeu sobre os equinodermos!
          </p>
          <Link to="/quiz">
            <Button size="lg" variant="secondary">
              Começar Quiz
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
