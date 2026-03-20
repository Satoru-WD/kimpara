import { motion } from "motion/react";
import { 
  Calculator, 
  FileText, 
  Users, 
  Building2, 
  ArrowRight, 
  Calendar, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  User
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Utilidades", href: "#utilidades" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Kimpara Logo" className="h-14 w-auto object-contain rounded drop-shadow-sm" />
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl leading-none text-primary`}>KIMPARA</span>
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-70 text-slate-600">Contabilidade</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-accent transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <User size={16} />
            Área do Cliente
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium border-b border-slate-100 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-3 rounded-xl text-center font-semibold">
            Área do Cliente
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000" 
          alt="Accounting background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Desde 1970 em Campinas
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-accent leading-[1.1] mb-6">
            Tradição que <br />
            <span className="text-primary italic">evolui</span> com você.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Soluções contábeis inteligentes para empresas que buscam crescimento sustentável, segurança fiscal e eficiência operacional.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-all shadow-xl shadow-primary/30 group cursor-pointer">
              Nossos Serviços
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-primary border border-primary/20 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all cursor-pointer">
              Fale Conosco
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
              alt="Dashboard" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                <CheckCircle2 size={20} />
              </div>
              <span className="font-bold text-sm">Conformidade</span>
            </div>
            <p className="text-xs text-slate-500">100% de segurança em seus processos fiscais.</p>
          </div>
          <div className="absolute -top-10 -right-10 bg-accent text-white p-6 rounded-2xl shadow-xl z-20">
            <div className="text-3xl font-bold mb-1">50+</div>
            <div className="text-xs opacity-70 uppercase tracking-wider">Anos de Experiência</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: "Anos no Mercado", value: "54" },
    { label: "Clientes Ativos", value: "300+" },
    { label: "Especialistas", value: "25" },
    { label: "Cidades Atendidas", value: "12" },
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Sobre Nós</h2>
            <h3 className="text-4xl font-serif font-bold text-accent mb-8 leading-tight">
              Uma história construída sobre <br />
              ética e resultados concretos.
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                O Escritório de Contabilidade Kimpara iniciou suas atividades em 01/08/1970, fundado pelo técnico em contabilidade Isaque Kimpara. Desde então, nossa trajetória é marcada pelo compromisso com a excelência e a atualização constante.
              </p>
              <p>
                Hoje, unimos a solidez de décadas de atuação com as ferramentas tecnológicas mais modernas do mercado, garantindo que nossos clientes em Campinas e região tenham suporte total para suas decisões estratégicas.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="Team" referrerPolicy="no-referrer" />
              <div className="bg-primary p-8 rounded-2xl text-white">
                <h4 className="font-bold mb-2">Nossa Filosofia</h4>
                <p className="text-sm opacity-80">Encontrar o melhor e mais curto caminho para a resolução dos desafios de cada cliente.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-slate-100 p-8 rounded-2xl">
                <h4 className="font-bold text-accent mb-2">Diferenciais</h4>
                <p className="text-sm text-slate-600">Estrutura operacional plenamente informatizada e foco total na produtividade.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="Office" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Contábil",
      desc: "Escrituração completa, elaboração de relatórios societários, contábeis e gerenciais seguindo as normas vigentes.",
      icon: <Calculator className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Fiscal",
      desc: "Apuração de tributos (IPI, PIS, COFINS, ICMS, ISS), entrega de obrigações acessórias e consultoria tributária.",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Pessoal",
      desc: "Gestão completa de folha de pagamento, encargos sociais, admissões, demissões e consultoria trabalhista.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Societário",
      desc: "Abertura, alteração e encerramento de empresas, além de estudos de viabilidade e regularização nos órgãos públicos.",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Nossos Serviços</h2>
          <h3 className="text-4xl font-serif font-bold text-accent mb-6">Soluções completas para sua jornada empresarial.</h3>
          <p className="text-slate-600">Oferecemos um modelo de relação sustentável, focando na agilidade e precisão técnica.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-6`}>
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-accent mb-4">{s.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <a href="#contato" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Saiba mais <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TaxSimulator = () => {
  const [revenue, setRevenue] = useState<number>(50000);
  const [sector, setSector] = useState<string>("servicos");

  const getTaxes = () => {
    let poorPlanning = 0;
    let goodPlanning = 0;
    
    if (sector === "servicos") {
      poorPlanning = revenue * 0.155; 
      goodPlanning = revenue * 0.06;  
    } else if (sector === "comercio") {
      poorPlanning = revenue * 0.12; 
      goodPlanning = revenue * 0.04; 
    } else {
      poorPlanning = revenue * 0.18;
      goodPlanning = revenue * 0.08;
    }
    return { poorPlanning, goodPlanning };
  };

  const { poorPlanning, goodPlanning } = getTaxes();
  const savings = poorPlanning - goodPlanning;

  return (
    <section id="simulador" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-full h-full bg-gradient-to-tl from-accent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Simulador de Impostos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Descubra o quanto você pode economizar em impostos.</h3>
          <p className="text-white/70">O planejamento tributário correto pode fazer sua empresa poupar milhares de reais por ano. Faça uma simulação rápida.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl">
          {/* Controls */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-wider text-white/50 block">Faturamento mensal aproximado</label>
              <div className="flex justify-between text-3xl font-bold text-primary mb-2">
                <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(revenue)}</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="500000" 
                step="5000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-white/40">
                <span>R$ 5.000</span>
                <span>R$ 500.000+</span>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-wider text-white/50 block">Setor de Atuação</label>
              <div className="grid grid-cols-3 gap-3">
                {['servicos', 'comercio', 'industria'].map((s) => (
                  <button 
                    key={s}
                    onClick={() => setSector(s)}
                    className={`py-3 px-2 rounded-xl text-sm font-bold transition-all capitalize shadow-md cursor-pointer ${sector === s ? 'bg-primary text-white shadow-primary/40 ring-2 ring-primary ring-offset-2 ring-offset-slate-900' : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'}`}
                  >
                    {s === 'servicos' ? 'Serviços' : s === 'comercio' ? 'Comércio' : 'Indústria'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl -z-10 translate-x-4 lg:block hidden"></div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="text-white/50 text-sm font-bold uppercase tracking-wider mb-2">Sem Planejamento</div>
                <div className="text-3xl font-serif text-white opacity-40 line-through decoration-red-500/50 decoration-2">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(poorPlanning)}
                </div>
                <div className="text-xs text-white/40 mt-1">Impostos estimados / mês</div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <X size={16} className="text-red-400" />
                  Sem análise de mercado
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent border border-primary/20 p-8 rounded-2xl shadow-xl shadow-primary/20 flex flex-col justify-between transform transition-all hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="text-white/80 text-sm font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
                  Com a Kimpara
                  <span className="bg-white text-primary text-[10px] px-2 py-1 rounded-full animate-pulse shadow-lg font-black uppercase">Ideal</span>
                </div>
                <div className="text-4xl font-serif font-bold text-white relative">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(goodPlanning)}
                </div>
                <div className="text-sm text-white/80 mt-1">Impostos otimizados / mês</div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-sm font-bold text-white mb-2 tracking-wide">Você economiza até:</div>
                <div className="text-2xl font-bold bg-white text-primary p-3 rounded-xl text-center shadow-inner">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(savings)} / mês
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center flex flex-col items-center">
          <button className="bg-white text-primary px-8 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-slate-50 transition-all shadow-xl shadow-white/10 group cursor-pointer text-lg hover:scale-105 active:scale-95 duration-200">
            <Calculator size={24} className="group-hover:rotate-12 transition-transform" />
            Falar com um Especialista Agora
          </button>
          <p className="text-xs text-white/40 mt-6 max-w-xl">
            * Esta é uma estimativa educacional simplificada com valores médios do Brasil. Cada CNPJ precisa de uma análise individual. Nossos contadores podem realizar um diagnóstico tributário com precisão para seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

const Utilities = () => {
  const links = [
    { name: "Receita Federal", url: "https://www.gov.br/receitafederal" },
    { name: "JUCESP", url: "https://www.jucesp.sp.gov.br" },
    { name: "Simples Nacional", url: "https://www8.receita.fazenda.gov.br/SimplesNacional/" },
    { name: "eSocial", url: "https://www.gov.br/esocial" },
    { name: "Prefeitura de Campinas", url: "https://www.campinas.sp.gov.br" },
    { name: "SEFAZ-SP", url: "https://portal.fazenda.sp.gov.br" },
  ];

  return (
    <section id="utilidades" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Utilidades</h2>
            <h3 className="text-3xl font-serif font-bold text-accent mb-8">Links e Ferramentas Úteis</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-primary hover:text-white transition-all group"
                >
                  <span className="font-semibold">{link.name}</span>
                  <ExternalLink size={18} className="opacity-50 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            <div className="mt-12 p-8 bg-accent rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-serif font-bold mb-4">Agenda Tributária</h4>
                <p className="opacity-70 mb-6 max-w-md">Mantenha-se em dia com as obrigações fiscais. Confira os prazos deste mês.</p>
                <button className="bg-white text-accent px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 cursor-pointer">
                  <Calendar size={18} />
                  Ver Calendário Completo
                </button>
              </div>
              <Calendar className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12" />
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl">
            <h4 className="font-bold text-accent mb-6 flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              Últimas Notícias
            </h4>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">20 Março, 2026</span>
                  <h5 className="font-bold text-accent group-hover:text-primary transition-colors leading-tight mb-2">
                    Novas regras para o Imposto de Renda 2026: O que muda para sua empresa.
                  </h5>
                  <p className="text-xs text-slate-500 line-clamp-2">Confira as principais atualizações divulgadas pela Receita Federal nesta semana...</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-white transition-all cursor-pointer">
              Ver todas as notícias
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-accent text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-secondary tracking-[0.3em] uppercase mb-4">Contato</h2>
            <h3 className="text-4xl font-serif font-bold mb-8">Vamos conversar sobre o seu negócio?</h3>
            <p className="opacity-70 mb-12 text-lg">Estamos prontos para oferecer a consultoria que sua empresa precisa para prosperar.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-secondary" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">Endereço</h5>
                  <p className="opacity-70 text-sm">Rua Conselheiro José Clemente Pereira, 282<br />Jardim Campos Elíseos - Campinas/SP - CEP: 13023-032</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">Telefones</h5>
                  <p className="opacity-70 text-sm">(19) 3269-6008 / (19) 3227-7150</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">E-mail</h5>
                  <p className="opacity-70 text-sm">contato@kimpara.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl text-slate-900">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Nome</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">E-mail</label>
                  <input type="email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Assunto</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                  <option>Consultoria Contábil</option>
                  <option>Abertura de Empresa</option>
                  <option>Dúvidas Fiscais</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Mensagem</label>
                <textarea rows={4} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-accent transition-all shadow-lg shadow-primary/20 cursor-pointer">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-accent border-t border-white/10 text-white/50 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Kimpara Logo" className="h-10 w-auto object-contain rounded opacity-90" />
          <span className="font-serif font-bold text-white">KIMPARA</span>
        </div>
        <p>© 2026 Kimpara Contabilidade. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TaxSimulator />
        <Utilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
