const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 md:px-6">
      <div className="container-page">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-display font-bold text-xl mb-3 block">Com Carinho 🧸</span>
            <p className="text-background/70 text-sm leading-relaxed">
              Cartões físicos com alma digital. Feitos com carinho, enviados com amor.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-3">Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#como-funciona" className="hover:text-background transition-colors">Como funciona</a></li>
              <li><a href="#modelos" className="hover:text-background transition-colors">Modelos</a></li>
              <li><a href="#depoimentos" className="hover:text-background transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>contato@comcarinho.com.br</li>
              <li>Instagram: @comcarinho</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/50">
          © 2026 Com Carinho. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
