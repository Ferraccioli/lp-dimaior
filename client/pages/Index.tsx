import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  ClipboardList, 
  Heart, 
  PiggyBank, 
  GraduationCap,
  Download,
  CheckCircle,
  Users,
  Target,
  Zap,
  Search
} from 'lucide-react';

export default function Index() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tools = [
    {
      icon: FileText,
      name: 'Di Maior Currículo',
      description: 'Construtor de currículos com IA que te ajuda a criar um CV profissional e impactante.',
      color: 'bg-dimaior-primary',
      href: '#curriculo'
    },
    {
      icon: ClipboardList,
      name: 'Di Maior DocFácil',
      description: 'Checklist completo para organizar seus documentos antes de processos burocráticos.',
      color: 'bg-dimaior-green',
      href: '#docfacil'
    },
    {
      icon: Heart,
      name: 'Di Maior PausaLeve',
      description: 'Momentos de relaxamento e wellness para cuidar da sua saúde mental.',
      color: 'bg-dimaior-purple',
      href: '#pausaleve'
    },
    {
      icon: PiggyBank,
      name: 'Di Maior Poupa',
      description: 'Planejamento financeiro inteligente com IA para alcançar seus objetivos.',
      color: 'bg-dimaior-orange',
      href: '#poupa'
    },
    {
      icon: GraduationCap,
      name: 'Di Maior Teste Vocacional',
      description: 'Descubra sua vocação e encontre o caminho profissional ideal para você.',
      color: 'bg-dimaior-yellow',
      href: '#vocacional'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fea7510da81df4c69b7dbcaf6c23d7375%2F846a19b53c5a4f2f9d81776ff2b9ea4c?format=webp&width=800" 
                alt="Di Maior" 
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-dimaior-primary transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-dimaior-primary transition-colors">Sobre</a>
              <a href="#" className="text-gray-600 hover:text-dimaior-primary transition-colors">Artigos</a>
              <a href="#" className="text-gray-600 hover:text-dimaior-primary transition-colors">Ajude o dimaior</a>
              <a href="#" className="text-gray-600 hover:text-dimaior-primary transition-colors">Solicitação de conteúdo</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Qual é a sua dúvida?" 
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-dimaior-primary w-64"
                />
              </div>
              <Button 
                onClick={scrollToForm}
                className="bg-dimaior-primary hover:bg-dimaior-primary/90 text-white rounded-full px-6"
              >
                Cadastre-se
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-dimaior-primary/10 text-dimaior-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              + 5.000 dúvidas descomplicadas
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              d:maior te ajuda a se virar com a{' '}
              <span className="relative">
                vida adulta
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-dimaior-primary/30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet 
              odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Qual é sua dúvida? Precisa de ajuda help?"
                  className="w-full pl-12 pr-32 py-4 border border-gray-200 rounded-full text-lg focus:outline-none focus:border-dimaior-primary shadow-sm"
                />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dimaior-primary hover:bg-dimaior-primary/90 text-white rounded-full px-8"
                >
                  Pesquisar
                </Button>
              </div>
            </div>

            {/* Category Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🏠</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Habitação</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">💰</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Imposto de Renda</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🪖</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Alistamento Militar</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔧</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Manutenção</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🆘</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Primeiros Socorros</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✈️</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Viagens</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="max-w-md mx-auto">
            <Card className="shadow-lg border-0 bg-white" id="contact-form">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Fique por dentro do Di Maior
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Cadastre-se e receba atualizações sobre nossas ferramentas e novidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-gray-700">Nome completo</Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-dimaior-primary focus:ring-dimaior-primary rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-dimaior-primary focus:ring-dimaior-primary rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-gray-700">Telefone</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-dimaior-primary focus:ring-dimaior-primary rounded-lg"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-dimaior-primary hover:bg-dimaior-primary/90 text-white py-3 rounded-lg text-lg font-medium"
                    >
                      Quero fazer parte!
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle className="w-16 h-16 text-dimaior-primary mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900">Cadastro realizado!</h3>
                    <p className="text-gray-600">
                      Obrigado pelo seu interesse. Em breve você receberá novidades do Di Maior!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principais Tópicos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-8 h-8 bg-dimaior-primary rounded-full flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Principais tópicos</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-80 bg-gradient-to-r from-amber-100 to-orange-200">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face" 
                    alt="Profissional" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-dimaior-primary text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                      #Profissional
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2">
                      O que fazer na sua primeira entrevista de emprego?
                    </h3>
                    <p className="text-white/90 text-sm">
                      Confira essas dicas para causar uma boa primeira impressão.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar Articles */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mais Acessados</h3>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=80&h=80&fit=crop" 
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">Sou madrinha de casamento, e agora?</h4>
                      <p className="text-gray-600 text-xs mt-1">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum...</p>
                      <a href="#" className="text-dimaior-primary text-xs hover:underline">Ler sobre</a>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=80&h=80&fit=crop" 
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">Quanto devo gastar por mês em mercado?</h4>
                      <p className="text-gray-600 text-xs mt-1">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum...</p>
                      <a href="#" className="text-dimaior-primary text-xs hover:underline">Ler sobre</a>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=80&h=80&fit=crop" 
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">O que fazer se o carro engulhar no meio da estrada?</h4>
                      <p className="text-gray-600 text-xs mt-1">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum...</p>
                      <a href="#" className="text-dimaior-primary text-xs hover:underline">Ler sobre</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ferramentas que transformam sua vida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse nosso conjunto de ferramentas inteligentes, desenvolvidas especialmente 
              para jovens que querem conquistar seus objetivos pessoais e profissionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`${tool.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform`}>
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg"
                  >
                    Acessar ferramenta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Conheça a história do dimaior e sua missão.
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                "O guia para a vida adulta."
              </p>
              <p className="text-gray-600 leading-relaxed">
                Somos o dimaior, um portal dedicado a ajudar jovens a navegarem pelos 
                desafios da vida adulta, pois sabemos que não é nada fácil. Aqui, você 
                encontra informações essenciais sobre como estar pronto para a vida 
                adulta, como habitação, finanças, leis e muito mais.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tudo na linguagem que você entende!
              </p>
              <Button 
                className="bg-dimaior-primary hover:bg-dimaior-primary/90 text-white rounded-full px-8 py-3"
              >
                SAIBA MAIS
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-dimaior-primary/20 to-transparent rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop" 
                alt="Jovens celebrando" 
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* E-book Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-dimaior-primary/20 rounded-xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-dimaior-primary rounded-lg flex items-center justify-center">
                <Download className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Em breve: O Guia Completo para a Vida Adulta
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Cadastre-se para receber entre os primeiros a saber assim que o nosso e-book estiver 
                disponível e receba o conteúdo exclusivo!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Digite seu e-mail"
                className="flex-1 px-4 py-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-dimaior-primary"
              />
              <Button 
                onClick={scrollToForm}
                className="bg-dimaior-primary hover:bg-dimaior-primary/90 text-white rounded-full px-8 py-3"
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fea7510da81df4c69b7dbcaf6c23d7375%2F846a19b53c5a4f2f9d81776ff2b9ea4c?format=webp&width=800" 
                alt="Di Maior" 
                className="h-8 w-auto mb-4"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-dimaior-primary">Início</a></li>
                <li><a href="#" className="hover:text-dimaior-primary">Sobre o dimaior</a></li>
                <li><a href="#" className="hover:text-dimaior-primary">Serviços</a></li>
                <li><a href="#" className="hover:text-dimaior-primary">Blog</a></li>
                <li><a href="#" className="hover:text-dimaior-primary">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Assuntos</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-dimaior-primary">Geral</a></li>
                <li><a href="#" className="hover:text-dimaior-primary">Habitação</a></li>
                <li><a href="#" className="hover:text-dimaior-primary">Imposto de Renda</a></li>
                <li><a href="#" className="hover:text-dimaior-primary">Legislação</a></li>
                <li><a href="#" className="hover:text-dimaior-primary">Primeiros Socorros</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Siga nossas redes</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs">ig</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs">tt</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs">yt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Copyright © 2024 | Di Maior | Política de Privacidade | Política de Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
