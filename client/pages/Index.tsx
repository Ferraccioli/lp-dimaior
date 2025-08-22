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
  Target
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
      {/* Header - Simplificado */}
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
            
            <Button 
              onClick={scrollToForm}
              className="bg-dimaior-primary hover:bg-dimaior-primary/90 text-white rounded-full px-6"
            >
              Quero fazer parte
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Layout lado a lado */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo do Título e Descrição */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  A vida adulta não vem com manual.{' '}
                  <span className="relative">
                    O Di Maior é o seu guia.
                    <div className="absolute -bottom-2 left-0 w-full h-2 bg-dimaior-primary/30 rounded-full"></div>
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Mais de 85% dos jovens brasileiros sentem que a escola não os preparou para a vida adulta.
                  O Di Maior nasceu para mudar isso.
                </p>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={scrollToForm}
                  size="lg"
                  className="bg-gradient-to-r from-dimaior-primary to-dimaior-primary/80 hover:from-dimaior-primary/90 hover:to-dimaior-primary/70 text-white px-8 py-6 text-lg rounded-full"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Comece sua jornada agora
                </Button>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="lg:pl-8">
              <Card className="shadow-2xl border-0 bg-white" id="contact-form">
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
        </div>
      </section>

      {/* About Section - Movida para cima */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Um hub para jovens que querem crescer de verdade
              </h2>
              <p className="text-gray-600 leading-relaxed">
                O Di Maior é uma plataforma feita para jovens de 18 a 29 anos que buscam autonomia, clareza e preparo para a vida adulta.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Com uma linguagem simples, gamificação e conteúdos práticos, você aprende o que realmente importa: dinheiro, carreira, documentos, saúde mental e muito mais.
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
