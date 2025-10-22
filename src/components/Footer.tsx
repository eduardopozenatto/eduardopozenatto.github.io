export const Footer = () => {
  const references = [
    {
      text: "Brusca, R. C., & Brusca, G. J. (2003). Invertebrates. Sinauer Associates.",
      url: "#",
    },
    {
      text: "Ruppert, E. E., Fox, R. S., & Barnes, R. D. (2004). Invertebrate Zoology. Brooks/Cole.",
      url: "#",
    },
    {
      text: "Pechenik, J. A. (2015). Biology of the Invertebrates. McGraw-Hill.",
      url: "#",
    },
    {
      text: "Smithsonian National Museum of Natural History",
      url: "https://naturalhistory.si.edu/",
    },
    {
      text: "Marine Biological Laboratory",
      url: "https://www.mbl.edu/",
    },
    {
      text: "WoRMS - World Register of Marine Species",
      url: "https://www.marinespecies.org/",
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
