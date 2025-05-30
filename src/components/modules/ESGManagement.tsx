import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import EmissionsCalculation from './esg/EmissionsCalculation';
import GISVisualization from './esg/GISVisualization';
import OpenDataIntegration from './esg/OpenDataIntegration';
import PredictiveModeling from './esg/PredictiveModeling';
import StakeholderEngagement from './esg/StakeholderEngagement';
import AIAgent from './esg/AIAgent';
import { 
  Leaf, 
  Users, 
  Building, 
  Target, 
  TrendingUp,
  FileText,
  CheckCircle,
  AlertCircle,
  Award,
  BarChart3,
  Calculator,
  Map,
  Database,
  Brain,
  MessageSquare
} from 'lucide-react';

const ESGManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const esgScores = [
    {
      category: "Environmental",
      score: 78,
      target: 80,
      trend: "+5.2%",
      icon: Leaf,
      color: "green",
      subcategories: [
        { name: "Emissões GEE", score: 82, weight: 30 },
        { name: "Gestão de Água", score: 75, weight: 25 },
        { name: "Gestão de Resíduos", score: 80, weight: 25 },
        { name: "Biodiversidade", score: 70, weight: 20 }
      ]
    },
    {
      category: "Social",
      score: 85,
      target: 85,
      trend: "+3.1%",
      icon: Users,
      color: "blue",
      subcategories: [
        { name: "Saúde e Segurança", score: 90, weight: 35 },
        { name: "Diversidade", score: 82, weight: 25 },
        { name: "Desenvolvimento", score: 88, weight: 25 },
        { name: "Comunidade", score: 80, weight: 15 }
      ]
    },
    {
      category: "Governance",
      score: 92,
      target: 90,
      trend: "+2.8%",
      icon: Building,
      color: "orange",
      subcategories: [
        { name: "Transparência", score: 95, weight: 30 },
        { name: "Ética", score: 92, weight: 30 },
        { name: "Compliance", score: 90, weight: 25 },
        { name: "Gestão de Riscos", score: 88, weight: 15 }
      ]
    }
  ];

  const sustainabilityGoals = [
    {
      sdg: "SDG 3",
      title: "Saúde e Bem-estar",
      progress: 87,
      actions: 12,
      color: "green"
    },
    {
      sdg: "SDG 6",
      title: "Água Potável e Saneamento",
      progress: 73,
      actions: 8,
      color: "blue"
    },
    {
      sdg: "SDG 7",
      title: "Energia Limpa e Acessível",
      progress: 65,
      actions: 15,
      color: "yellow"
    },
    {
      sdg: "SDG 8",
      title: "Trabalho Decente",
      progress: 91,
      actions: 7,
      color: "red"
    },
    {
      sdg: "SDG 12",
      title: "Consumo Responsável",
      progress: 78,
      actions: 10,
      color: "orange"
    },
    {
      sdg: "SDG 13",
      title: "Ação contra Mudança Global do Clima",
      progress: 82,
      actions: 18,
      color: "green"
    }
  ];

  const reports = [
    {
      type: "GRI Standards",
      year: "2023",
      status: "Publicado",
      date: "2024-01-15",
      pages: 87,
      scope: "Global"
    },
    {
      type: "CDP Climate",
      year: "2023",
      status: "Submetido",
      date: "2024-01-10",
      pages: 25,
      scope: "Emissões"
    },
    {
      type: "SASB Standards",
      year: "2023",
      status: "Em Preparação",
      date: "2024-02-01",
      pages: 0,
      scope: "Setor"
    },
    {
      type: "TCFD Report",
      year: "2023",
      status: "Rascunho",
      date: "2024-01-25",
      pages: 42,
      scope: "Riscos Climáticos"
    }
  ];

  const stakeholders = [
    {
      group: "Acionistas",
      engagement: 92,
      lastContact: "2024-01-10",
      priority: "Alta",
      satisfaction: 88
    },
    {
      group: "Funcionários",
      engagement: 85,
      lastContact: "2024-01-15",
      priority: "Alta",
      satisfaction: 87
    },
    {
      group: "Comunidade Local",
      engagement: 78,
      lastContact: "2024-01-12",
      priority: "Média",
      satisfaction: 82
    },
    {
      group: "Fornecedores",
      engagement: 73,
      lastContact: "2024-01-08",
      priority: "Média",
      satisfaction: 79
    },
    {
      group: "ONGs",
      engagement: 65,
      lastContact: "2024-01-05",
      priority: "Baixa",
      satisfaction: 75
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-600 bg-green-100';
      case 'blue': return 'text-blue-600 bg-blue-100';
      case 'orange': return 'text-orange-600 bg-orange-100';
      case 'red': return 'text-red-600 bg-red-100';
      case 'yellow': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Publicado': case 'Submetido': return 'bg-green-100 text-green-800';
      case 'Em Preparação': case 'Rascunho': return 'bg-yellow-100 text-yellow-800';
      case 'Pendente': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="emissions" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Emissões
          </TabsTrigger>
          <TabsTrigger value="gis" className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            GIS
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Dados
          </TabsTrigger>
          <TabsTrigger value="modeling" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Simulações
          </TabsTrigger>
          <TabsTrigger value="stakeholders" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Stakeholders
          </TabsTrigger>
          <TabsTrigger value="ai" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            IA
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* ESG Score Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {esgScores.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className={`text-lg flex items-center gap-2 text-${category.color}-600`}>
                    <category.icon className="h-5 w-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{category.score}</div>
                      <p className="text-sm text-gray-600">Score ESG</p>
                      <p className={`text-sm font-medium text-${category.color}-600`}>
                        {category.trend} vs. período anterior
                      </p>
                    </div>
                    <Progress value={category.score} className="h-2" />
                    <div className="text-sm text-gray-600 text-center">
                      Meta: {category.target}
                    </div>
                    <div className="space-y-2">
                      {category.subcategories.map((sub, subIndex) => (
                        <div key={subIndex} className="flex justify-between text-xs">
                          <span>{sub.name}</span>
                          <span className="font-medium">{sub.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Overall ESG Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Performance ESG Global</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">85</div>
                  <p className="text-sm text-gray-600">Score ESG Médio</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">+4.2% YoY</Badge>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">A-</div>
                  <p className="text-sm text-gray-600">Rating ESG</p>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Melhoria</Badge>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">72</div>
                  <p className="text-sm text-gray-600">Ranking Setor</p>
                  <Badge className="mt-2 bg-orange-100 text-orange-800">Top 25%</Badge>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
                  <p className="text-sm text-gray-600">ODS Alinhados</p>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">UN Goals</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sustainability Goals */}
          <Card>
            <CardHeader>
              <CardTitle>Objetivos de Desenvolvimento Sustentável (ODS)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sustainabilityGoals.map((goal, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getColorClasses(goal.color)}`}>
                          {goal.sdg}
                        </span>
                        <span className="text-lg font-bold">{goal.progress}%</span>
                      </div>
                      <h3 className="font-medium text-sm mb-2">{goal.title}</h3>
                      <Progress value={goal.progress} className="h-2 mb-2" />
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>{goal.actions} ações</span>
                        <span>Meta: 2030</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emissions">
          <EmissionsCalculation />
        </TabsContent>

        <TabsContent value="gis">
          <GISVisualization />
        </TabsContent>

        <TabsContent value="data">
          <OpenDataIntegration />
        </TabsContent>

        <TabsContent value="modeling">
          <PredictiveModeling />
        </TabsContent>

        <TabsContent value="stakeholders">
          <StakeholderEngagement />
        </TabsContent>

        <TabsContent value="ai">
          <AIAgent />
        </TabsContent>

        <TabsContent value="environmental" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">-15%</div>
                <p className="text-sm text-gray-600">Redução CO2</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">65%</div>
                <p className="text-sm text-gray-600">Energia Renovável</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">87%</div>
                <p className="text-sm text-gray-600">Reciclagem</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">12</div>
                <p className="text-sm text-gray-600">Certificações</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">42%</div>
                <p className="text-sm text-gray-600">Diversidade</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">87%</div>
                <p className="text-sm text-gray-600">Satisfação</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">47h</div>
                <p className="text-sm text-gray-600">Treinamento/Ano</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">127</div>
                <p className="text-sm text-gray-600">Dias sem Acidentes</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Engajamento de Stakeholders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Grupo</th>
                      <th className="text-left py-2">Engajamento</th>
                      <th className="text-left py-2">Último Contato</th>
                      <th className="text-left py-2">Prioridade</th>
                      <th className="text-left py-2">Satisfação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stakeholders.map((stakeholder, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{stakeholder.group}</td>
                        <td className="py-2">
                          <div className="flex items-center gap-2">
                            <Progress value={stakeholder.engagement} className="h-2 w-16" />
                            <span className="text-xs">{stakeholder.engagement}%</span>
                          </div>
                        </td>
                        <td className="py-2">{stakeholder.lastContact}</td>
                        <td className="py-2">
                          <Badge className={getPriorityColor(stakeholder.priority)}>
                            {stakeholder.priority}
                          </Badge>
                        </td>
                        <td className="py-2">{stakeholder.satisfaction}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">96%</div>
                <p className="text-sm text-gray-600">Compliance</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">100%</div>
                <p className="text-sm text-gray-600">Transparência</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">23</div>
                <p className="text-sm text-gray-600">Políticas Ativas</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <AlertCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-600">0</div>
                <p className="text-sm text-gray-600">Violações Ética</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios de Sustentabilidade</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">
                  Novo Relatório
                </Button>
                <Button size="sm" variant="outline">
                  Calendário de Publicações
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Framework</th>
                      <th className="text-left py-2">Ano</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Data</th>
                      <th className="text-left py-2">Páginas</th>
                      <th className="text-left py-2">Escopo</th>
                      <th className="text-left py-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{report.type}</td>
                        <td className="py-2">{report.year}</td>
                        <td className="py-2">
                          <Badge className={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                        </td>
                        <td className="py-2">{report.date}</td>
                        <td className="py-2">{report.pages}</td>
                        <td className="py-2">{report.scope}</td>
                        <td className="py-2">
                          <Button size="sm" variant="outline">
                            Ver Detalhes
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Próximas Entregas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm font-medium">SASB Standards 2023</p>
                      <p className="text-xs text-gray-600">Prazo: 01/02/2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium">TCFD Report</p>
                      <p className="text-xs text-gray-600">Prazo: 25/01/2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas de Relatórios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">4</div>
                    <p className="text-sm text-gray-600">Frameworks Utilizados</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">154</div>
                      <p className="text-xs text-gray-600">Total de Páginas</p>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">2</div>
                      <p className="text-xs text-gray-600">Relatórios Publicados</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ESGManagement;
