export const Footer = () => {
  const references = [
    {
      text: "Echinodermos: Características, classes e exemplos",
      url: "https://www.todamateria.com.br/equinodermos/",
    },
    {
      text: "Echinodermos: Características e classificação",
      url: "https://mundoeducacao.uol.com.br/biologia/equinodermos.htm",
    },
    {
      text: "Brasil Escola: Echinodermos",
      url: "https://www.google.com/amp/s/brasilescola.uol.com.br/amp/biologia/equinodermos.htm",
    },
  ];

  return (
    <footer className="mt-20 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold">Referências Bibliográficas</h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Todo o conteúdo deste site foi baseado nas seguintes fontes confiáveis:
          </p>
          <ul className="space-y-3">
            {references.map((ref, index) => (
              <li key={index} className="text-sm">
                {ref.url === "#" ? (
                  <span className="text-foreground/80">{ref.text}</span>
                ) : (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline smooth-transition"
                  >
                    {ref.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Echinodermata Wiki | Site educativo desenvolvido por: Carlos Eduardo Martins Pozenatto, Rafael Baccin.
          </p>
        </div>
      </div>
    </footer>
  );
};
