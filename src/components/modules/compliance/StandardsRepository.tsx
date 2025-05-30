
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  BookOpen, 
  ExternalLink, 
  CheckCircle,
  AlertTriangle,
  Globe,
  Shield,
  Leaf,
  Users
} from 'lucide-react';

const StandardsRepository = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const standards = [
    {
      id: 'iso14001',
      name: 'ISO 14001:2015',
      category: 'environmental',
      description: 'Sistema de Gestão Ambiental',
      requirements: 10,
      icon: Leaf,
      color: 'green',
      sections: [
        'Contexto da Organização',
        'Liderança',
        'Planejamento',
        'Suporte',
        'Operação',
        'Avaliação de Desempenho',
        'Melhoria'
      ],
      hasWizard: true,
      officialLink: 'https://www.iso.org/iso-14001-environmental-management.html'
    },
    {
      id: 'gri',
      name: 'GRI Standards',
      category: 'sustainability',
      description: 'Framework para Relatórios de Sustentabilidade',
      requirements: 33,
      icon: Globe,
      color: 'blue',
      sections: [
        'Universal Standards (GRI 1, 2, 3)',
        'Topic Standards (200-400)',
        'Sector Standards'
      ],
      hasWizard: true,
      officialLink: 'https://www.globalreporting.org/standards/'
    },
    {
      id: 'esrs',
      name: 'ESRS (CSRD)',
      category: 'esg',
      description: 'European Sustainability Reporting Standards',
      requirements: 12,
      icon: Users,
      color: 'purple',
      sections: [
        'ESRS 1: Requisitos Gerais',
        'ESRS 2: Divulgações Gerais',
        'ESRS E1-E5: Ambientais',
        'ESRS S1-S4: Sociais',
        'ESRS G1: Governança'
      ],
      hasWizard: true,
      officialLink: 'https://www.efrag.org/lab6'
    },
    {
      id: 'osha',
      name: 'OSHA Standards',
      category: 'safety',
      description: 'Normas de Segurança e Saúde Ocupacional',
      requirements: 25,
      icon: Shield,
      color: 'orange',
      sections: [
        'General Industry (29 CFR 1910)',
        'Construction (29 CFR 1926)',
        'Maritime (29 CFR 1915-1918)',
        'Agriculture (29 CFR 1928)'
      ],
      hasWizard: true,
      officialLink: 'https://www.osha.gov/laws-regs/regulations/standardnumber'
    }
  ];

  const wizards = [
    {
      standard: 'ISO 14001',
      title: 'Implementação de SGA',
      steps: 7,
      duration: '4-6 semanas',
      difficulty: 'Intermediário'
    },
    {
      standard: 'GRI',
      title: 'Relatório de Sustentabilidade',
      steps: 5,
      duration: '2-3 semanas',
      difficulty: 'Avançado'
    },
    {
      standard: 'ESRS',
      title: 'Conformidade CSRD',
      steps: 12,
      duration: '8-12 semanas',
      difficulty: 'Avançado'
    },
    {
      standard: 'OSHA',
      title: 'Programa de Segurança',
      steps: 6,
      duration: '3-4 semanas',
      difficulty: 'Intermediário'
    }
  ];

  const filteredStandards = standards.filter(standard => {
    const matchesSearch = standard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         standard.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || standard.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'environmental': return 'bg-green-100 text-green-800';
      case 'safety': return 'bg-orange-100 text-orange-800';
      case 'sustainability': return 'bg-blue-100 text-blue-800';
      case 'esg': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Repositório de Padrões e Requisitos
          </CardTitle>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pesquisar padrões, requisitos ou tópicos..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="all">Todas as Categorias</option>
                <option value="environmental">Ambiental</option>
                <option value="safety">Segurança</option>
                <option value="sustainability">Sustentabilidade</option>
                <option value="esg">ESG</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStandards.map((standard) => (
              <Card key={standard.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <standard.icon className={`h-6 w-6 text-${standard.color}-600`} />
                      <div>
                        <CardTitle className="text-lg">{standard.name}</CardTitle>
                        <p className="text-sm text-gray-600">{standard.description}</p>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(standard.category)}>
                      {standard.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Seções Principais:</p>
                      <div className="space-y-1">
                        {standard.sections.slice(0, 3).map((section, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {section}
                          </div>
                        ))}
                        {standard.sections.length > 3 && (
                          <p className="text-xs text-gray-500">
                            +{standard.sections.length - 3} seções adicionais
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span>{standard.requirements} requisitos</span>
                      {standard.hasWizard && (
                        <Badge className="bg-blue-100 text-blue-800">
                          Wizard Disponível
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Ver Requisitos
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Oficial
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Wizards de Implementação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wizards.map((wizard, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{wizard.title}</h3>
                    <Badge className={
                      wizard.difficulty === 'Avançado' ? 'bg-red-100 text-red-800' :
                      wizard.difficulty === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }>
                      {wizard.difficulty}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Padrão: {wizard.standard}</p>
                    <p>{wizard.steps} etapas • {wizard.duration}</p>
                  </div>
                  <Button size="sm" className="w-full mt-3">
                    Iniciar Wizard
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StandardsRepository;
