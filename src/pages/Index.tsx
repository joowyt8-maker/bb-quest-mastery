import { CheckCircle, BookOpen, Target, Brain, ArrowRight, Shield, FileText, Award, ChevronDown, X, Zap, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import studyingImg from "@/assets/studying.jpg";
import { useState } from "react";

const CHECKOUT_ESSENTIAL = "https://pay.lowify.com.br/go.php?offer=132o9hm";
const CHECKOUT_COMPLETA = "https://pay.lowify.com.br/checkout.php?product_id=W2M0jk";

/* ───── Hero ───── */
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center gradient-navy overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 gradient-navy opacity-80" />
    <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 tracking-wide">
          CONCURSO BANCO DO BRASIL
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight mb-6" style={{ color: 'hsl(0 0% 98%)' }}>
          Pare de errar questões que você{" "}
          <span className="text-gradient-gold">já deveria acertar.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'hsl(220 15% 75%)' }}>
          200 questões no nível real da prova, com gabarito comentado e organizado por matéria. O material de treino que faltava na sua preparação.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href={CHECKOUT_COMPLETA}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gradient-gold font-bold text-lg text-accent-foreground shadow-gold hover:scale-105 transition-transform animate-pulse-gold"
          >
            Quero a Versão Completa — R$ 27,90
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={CHECKOUT_ESSENTIAL}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-secondary/30 font-semibold text-lg hover:bg-secondary/10 transition-colors"
            style={{ color: 'hsl(220 15% 75%)' }}
          >
            Ver Versão Essencial — R$ 9,90
          </a>
        </div>
      </div>
      <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 animate-fade-up">
        <img src={ebookMockup} alt="E-book 200 Questões Banco do Brasil" className="w-full drop-shadow-2xl" />
      </div>
    </div>
  </section>
);

/* ───── Dores ───── */
const painPoints = [
  "Estou estudando, mas continuo errando as mesmas questões.",
  "Não entendo por que errei — e continuo repetindo o erro.",
  "Estudo muito, mas rendo pouco na hora da prova.",
  "Tenho medo de reprovar por um detalhe bobo.",
  "Quero um material direto, sem enrolação.",
  "Preciso de comentários que realmente expliquem o raciocínio.",
];

const PainSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Se você se identifica com alguma dessas frases...
        </h2>
        <p className="text-muted-foreground text-lg">
          ...é porque está na hora de mudar a forma como treina para a prova.
        </p>
      </div>
      <div className="max-w-2xl mx-auto grid gap-4">
        {painPoints.map((pain, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card border border-border hover:shadow-card-hover transition-shadow"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <p className="text-foreground font-medium text-base">"{pain}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───── Quebra de objeção ───── */
const ObjectionBreak = () => (
  <section className="py-20 gradient-navy relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img src={studyingImg} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 gradient-navy opacity-90" />
    <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
      <Brain className="w-16 h-16 mx-auto mb-6 text-secondary" />
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: 'hsl(0 0% 98%)' }}>
        Você não erra porque é incapaz.
      </h2>
      <p className="text-xl md:text-2xl font-display italic mb-4 text-gradient-gold">
        Erra porque estuda sem estratégia.
      </p>
      <p className="text-lg leading-relaxed" style={{ color: 'hsl(220 15% 75%)' }}>
        A maioria dos candidatos resolve questões sem entender o raciocínio da banca. Repete os mesmos erros sem perceber. E quando chega na prova, trava. O problema não é falta de esforço — é falta de um treino inteligente e comentado.
      </p>
    </div>
  </section>
);

/* ───── Produto ───── */
const features = [
  { icon: FileText, title: "200 questões reais", desc: "No nível exato da prova do Banco do Brasil" },
  { icon: BookOpen, title: "Organizadas por matéria", desc: "Português, Matemática, Conhecimentos Bancários e mais" },
  { icon: Target, title: "Gabarito comentado", desc: "Entenda o raciocínio de cada resposta" },
  { icon: Brain, title: "Erros mais comuns", desc: "Saiba onde os candidatos mais caem" },
  { icon: Shield, title: "PDF para imprimir", desc: "Estude offline, no celular ou impresso" },
  { icon: TrendingUp, title: "Evolução real", desc: "Pare de repetir erros e suba de nível" },
];

const ProductSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-highlight text-gold-dark text-sm font-semibold mb-4">
          O MATERIAL
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          O que você vai encontrar no e-book
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Uma ferramenta de treino real — não é cursinho, não é videoaula. É prática pura no nível da prova.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2 font-sans">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───── Comparação ───── */
const comparisonItems = [
  { label: "200 questões organizadas por matéria", essential: true, completa: true },
  { label: "Gabarito ao final de cada bloco", essential: true, completa: true },
  { label: "Comentários objetivos e resumidos", essential: true, completa: true },
  { label: "Comentários detalhados e explicativos", essential: false, completa: true },
  { label: "Explicação do raciocínio da banca", essential: false, completa: true },
  { label: "Indicação dos erros mais comuns", essential: false, completa: true },
  { label: "Ideal para quem erra e não entende o motivo", essential: false, completa: true },
];

const ComparisonSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Compare as duas versões
        </h2>
        <p className="text-muted-foreground text-lg">
          Escolha o nível de profundidade ideal para o seu momento de estudo.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] gap-2 mb-3 px-4">
          <div />
          <div className="text-center text-sm font-semibold text-muted-foreground">Essencial</div>
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full gradient-gold text-accent-foreground text-xs font-bold">
              MAIS VENDIDA
            </span>
            <div className="text-sm font-semibold text-foreground mt-1">Completa</div>
          </div>
        </div>
        {/* Rows */}
        {comparisonItems.map(({ label, essential, completa }, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] gap-2 p-4 rounded-lg mb-2 ${
              i % 2 === 0 ? "bg-card" : "bg-background"
            }`}
          >
            <span className="text-sm text-foreground font-medium">{label}</span>
            <div className="flex justify-center">
              {essential ? (
                <CheckCircle className="w-5 h-5 text-success" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground/40" />
              )}
            </div>
            <div className="flex justify-center">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───── Para quem ───── */
const ForWhoSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-14">
        Para quem é cada versão?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Essencial */}
        <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
          <h3 className="font-sans text-xl font-bold text-foreground mb-2">Versão Essencial</h3>
          <p className="text-secondary font-bold text-2xl mb-6">R$ 9,90</p>
          <ul className="space-y-3 mb-8">
            {[
              "Está começando a estudar agora",
              "Quer treinar questões sem complicação",
              "Precisa de um material rápido para revisão",
              "Busca prática no nível real da prova",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href={CHECKOUT_ESSENTIAL}
            className="block w-full text-center py-3.5 rounded-lg border-2 border-primary font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Quero a Essencial — R$ 9,90
          </a>
        </div>
        {/* Completa */}
        <div className="relative p-8 rounded-2xl gradient-navy border-2 border-secondary shadow-gold">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-gold text-accent-foreground text-xs font-bold">
            MAIS VENDIDA
          </span>
          <h3 className="font-sans text-xl font-bold mb-2" style={{ color: 'hsl(0 0% 98%)' }}>Versão Completa</h3>
          <p className="text-secondary font-bold text-2xl mb-6">R$ 27,90</p>
          <ul className="space-y-3 mb-8">
            {[
              "Está errando muito e não entende o motivo",
              "Quer entender como a banca pensa",
              "Precisa de comentários detalhados",
              "Quer evoluir mais rápido e com segurança",
              "Quer saber os erros mais comuns dos candidatos",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'hsl(220 15% 80%)' }}>
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href={CHECKOUT_COMPLETA}
            className="block w-full text-center py-3.5 rounded-lg gradient-gold font-bold text-accent-foreground hover:scale-[1.02] transition-transform shadow-gold"
          >
            Quero a Completa — R$ 27,90
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ───── O que resolve ───── */
const ResolvesSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
        O que esse material resolve na prática
      </h2>
      <div className="grid gap-5">
        {[
          { icon: Target, text: "Você para de resolver questões aleatórias e começa a treinar no nível exato da prova." },
          { icon: Brain, text: "Você entende o raciocínio por trás de cada resposta — e para de cair nas pegadinhas." },
          { icon: Zap, text: "Você ganha velocidade e segurança, porque sabe exatamente onde está errando." },
          { icon: Award, text: "Você estuda de forma inteligente: menos tempo perdido, mais resultado real." },
        ].map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-start gap-5 p-5 rounded-xl bg-card shadow-card border border-border">
            <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <p className="text-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───── Investimento ───── */
const InvestmentSection = () => (
  <section className="py-20 gradient-navy">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" style={{ color: 'hsl(0 0% 98%)' }}>
          Escolha sua versão e comece agora
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(220 15% 70%)' }}>
          Enquanto você pensa, outros candidatos já estão treinando com questões comentadas. O custo de reprovar é muito maior que R$ 27,90.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Essencial */}
        <div className="p-8 rounded-2xl bg-card/10 backdrop-blur border border-secondary/20">
          <h3 className="font-sans text-lg font-bold mb-1" style={{ color: 'hsl(0 0% 95%)' }}>Essencial</h3>
          <p className="text-muted-foreground text-sm mb-4">Para quem quer treinar de forma objetiva</p>
          <p className="text-4xl font-bold text-secondary mb-6">
            R$ 9<span className="text-2xl">,90</span>
          </p>
          <ul className="space-y-2 mb-8">
            {["200 questões por matéria", "Gabarito por bloco", "Comentários resumidos"].map((t, i) => (
              <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'hsl(220 15% 75%)' }}>
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href={CHECKOUT_ESSENTIAL}
            className="block w-full text-center py-3.5 rounded-lg border-2 border-secondary/40 font-bold text-secondary hover:bg-secondary/10 transition-colors"
          >
            Escolher Essencial
          </a>
        </div>
        {/* Completa */}
        <div className="relative p-8 rounded-2xl bg-card shadow-gold border-2 border-secondary">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-gold text-accent-foreground text-xs font-bold">
            ★ MAIS VENDIDA
          </span>
          <h3 className="font-sans text-lg font-bold text-foreground mb-1">Completa</h3>
          <p className="text-muted-foreground text-sm mb-4">Para quem quer entender e evoluir de verdade</p>
          <p className="text-4xl font-bold text-secondary mb-6">
            R$ 27<span className="text-2xl">,90</span>
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Tudo da versão Essencial",
              "Comentários detalhados",
              "Raciocínio da banca explicado",
              "Erros mais comuns mapeados",
              "Ideal para iniciantes e intermediários",
            ].map((t, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href={CHECKOUT_COMPLETA}
            className="block w-full text-center py-4 rounded-lg gradient-gold font-bold text-accent-foreground hover:scale-[1.02] transition-transform shadow-gold text-lg"
          >
            Escolher Completa — R$ 27,90
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ───── FAQ ───── */
const faqItems = [
  { q: "O material é atualizado para o próximo concurso?", a: "As questões foram elaboradas no nível real da prova do Banco do Brasil, cobrindo os temas mais recorrentes. O material é focado em treino prático, independente do edital específico." },
  { q: "Qual a diferença entre as duas versões?", a: "A versão Essencial traz questões com gabarito e comentários resumidos. A versão Completa inclui comentários detalhados, explicação do raciocínio da banca e indicação dos erros mais comuns." },
  { q: "Recebo o material na hora?", a: "Sim. Após a confirmação do pagamento, você recebe o PDF imediatamente no seu e-mail." },
  { q: "Posso imprimir o material?", a: "Sim. O PDF é formatado para leitura em tela e também para impressão." },
  { q: "Serve para quem está começando agora?", a: "Sim. A versão Completa é especialmente indicada para iniciantes, pois explica o raciocínio de cada questão de forma detalhada." },
  { q: "Quais matérias estão incluídas?", a: "Português, Matemática/Raciocínio Lógico, Conhecimentos Bancários e outras disciplinas cobradas no concurso do Banco do Brasil." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
          Perguntas frequentes
        </h2>
        <div className="space-y-3">
          {faqItems.map(({ q, a }, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground hover:bg-muted/50 transition-colors"
              >
                <span className="pr-4">{q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── CTA Final ───── */
const FinalCTA = () => (
  <section className="py-20 gradient-navy">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: 'hsl(0 0% 98%)' }}>
        Sua preparação merece questões no nível da prova.
      </h2>
      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'hsl(220 15% 70%)' }}>
        Não existe atalho para a aprovação. Mas existe um caminho mais inteligente: treinar com questões comentadas, entender seus erros e evoluir de verdade. Comece agora.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={CHECKOUT_COMPLETA}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gradient-gold font-bold text-lg text-accent-foreground shadow-gold hover:scale-105 transition-transform"
        >
          Versão Completa — R$ 27,90
          <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href={CHECKOUT_ESSENTIAL}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-secondary/30 font-semibold text-lg hover:bg-secondary/10 transition-colors"
          style={{ color: 'hsl(220 15% 75%)' }}
        >
          Versão Essencial — R$ 9,90
        </a>
      </div>
    </div>
  </section>
);

/* ───── Footer ───── */
const Footer = () => (
  <footer className="py-8 bg-navy-dark text-center">
    <p className="text-sm" style={{ color: 'hsl(220 15% 50%)' }}>
      Este material é independente e não possui vínculo com nenhuma instituição bancária ou organizadora de concursos.
    </p>
  </footer>
);

/* ───── Page ───── */
const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <PainSection />
    <ObjectionBreak />
    <ProductSection />
    <ComparisonSection />
    <ForWhoSection />
    <ResolvesSection />
    <InvestmentSection />
    <FAQSection />
    <FinalCTA />
    <Footer />
  </main>
);

export default Index;
