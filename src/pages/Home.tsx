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
              Bem-vindo ao Echinodermata Wiki
            </h1>
            <p className="mb-8 text-lg sm:text-xl leading-relaxed">
              Descubra o fascinante mundo das estrelas-do-mar, ouriços-do-mar e pepinos-do-mar! 
              São animais marinhos únicos com formato de estrela e um sistema hidráulico incrível 
              que os ajuda a se mover pelo fundo do mar.
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
              Aprenda sobre as características especiais, os diferentes tipos e a importância destes animais para o oceano
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="smooth-transition hover:ocean-shadow hover:scale-105">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg ocean-gradient">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">5 Grupos Diferentes</h3>
                <p className="text-muted-foreground">
                  Conheça os cinco grupos principais: estrelas-do-mar, estrelas-serpentes, ouriços, pepinos-do-mar e lírios-do-mar.
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
                <h3 className="mb-2 text-xl font-semibold">Sistema Hidráulico</h3>
                <p className="text-muted-foreground">
                  Descubra como eles usam água do mar para se mover - um sistema único no reino animal!
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
                <h3 className="mb-2 text-xl font-semibold">Fatos Surpreendentes</h3>
                <p className="text-muted-foreground">
                  Sabia que eles podem regenerar partes do corpo e têm superpoderes de defesa?
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
            Teste seus conhecimentos com perguntas divertidas e veja quanto você aprendeu!
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
