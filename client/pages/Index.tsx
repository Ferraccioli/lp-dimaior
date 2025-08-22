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
  Zap
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
      color: 'bg-dimaior-blue',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-dimaior-blue to-dimaior-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DM</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-dimaior-blue to-dimaior-purple bg-clip-text text-transparent">
                Di Maior
              </h1>
            </div>
            <Button 
              onClick={scrollToForm}
              className="bg-dimaior-blue hover:bg-dimaior-blue/90 text-white"
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Sua jornada de{' '}
                  <span className="bg-gradient-to-r from-dimaior-blue to-dimaior-purple bg-clip-text text-transparent">
                    crescimento
                  </span>{' '}
                  começa aqui
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A plataforma completa para jovens brasileiros que querem conquistar seus objetivos. 
                  Ferramentas inteligentes para sua carreira, finanças e bem-estar.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-dimaior-green" />
                  <span className="text-gray-700">Ferramentas com IA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-dimaior-blue" />
                  <span className="text-gray-700">Para jovens 18-29 anos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-dimaior-yellow" />
                  <span className="text-gray-700">Gratuito</span>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={scrollToForm}
                  size="lg"
                  className="bg-gradient-to-r from-dimaior-blue to-dimaior-purple hover:from-dimaior-blue/90 hover:to-dimaior-purple/90 text-white px-8 py-6 text-lg"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Comece sua jornada
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:pl-8">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm" id="contact-form">
                <CardHeader className="text-center">
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
                        <Label htmlFor="nome">Nome completo</Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          placeholder="Seu nome completo"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="border-gray-200 focus:border-dimaior-blue focus:ring-dimaior-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-200 focus:border-dimaior-blue focus:ring-dimaior-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          required
                          className="border-gray-200 focus:border-dimaior-blue focus:ring-dimaior-blue"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-dimaior-blue hover:bg-dimaior-blue/90 text-white py-6 text-lg"
                      >
                        Quero fazer parte!
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8 space-y-4">
                      <CheckCircle className="w-16 h-16 text-dimaior-green mx-auto" />
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
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
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
                    className="w-full border-gray-200 hover:bg-gray-50"
                  >
                    Acessar ferramenta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* E-book Section */}
      <section className="py-20 bg-gradient-to-br from-dimaior-blue/5 to-dimaior-purple/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                E-book gratuito: Guia do Jovem Profissional
              </h2>
              <p className="text-xl text-gray-600">
                Baixe nosso guia completo com dicas essenciais para começar sua carreira, 
                organizar suas finanças e cuidar do seu bem-estar.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-dimaior-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-8 h-8 text-dimaior-blue" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Dicas de Carreira</h3>
                  <p className="text-sm text-gray-600">Como se destacar no mercado</p>
                </div>
                <div className="text-center">
                  <div className="bg-dimaior-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <PiggyBank className="w-8 h-8 text-dimaior-green" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Educação Financeira</h3>
                  <p className="text-sm text-gray-600">Gerencie seu dinheiro melhor</p>
                </div>
                <div className="text-center">
                  <div className="bg-dimaior-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-dimaior-purple" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Bem-estar</h3>
                  <p className="text-sm text-gray-600">Cuide da sua saúde mental</p>
                </div>
              </div>
              
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-gradient-to-r from-dimaior-green to-dimaior-blue hover:from-dimaior-green/90 hover:to-dimaior-blue/90 text-white px-8 py-6 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar e-book gratuito
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                * Cadastre-se acima para receber o link de download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-dimaior-blue to-dimaior-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DM</span>
                </div>
                <h3 className="text-xl font-bold">Di Maior</h3>
              </div>
              <p className="text-gray-400">
                A plataforma que transforma a vida de jovens brasileiros através de ferramentas inteligentes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ferramentas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Di Maior Currículo</li>
                <li>Di Maior DocFácil</li>
                <li>Di Maior PausaLeve</li>
                <li>Di Maior Poupa</li>
                <li>Di Maior Teste Vocacional</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-gray-400">
                Tem dúvidas? Entre em contato conosco e descubra como o Di Maior pode te ajudar.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Di Maior. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
