
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  FileText,
  Send,
  Calendar,
  Target,
  Award,
  Building,
  Factory,
  Handshake
} from 'lucide-react';

const StakeholderEngagement = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stakeholderGroups = [
    {
      name: 'Acionistas',
      type: 'financial',
      count: 1247,
      engagement: 92,
      satisfaction: 88,
      lastContact: '2024-01-10',
      priority: 'Alta',
      nextMeeting: '2024-01-25',
      icon: Building,
      color: 'blue'
    },
    {
      name: 'Funcionários',
      type: 'internal',
      count: 5634,
      engagement: 85,
      satisfaction: 87,
      lastContact: '2024-01-15',
      priority: 'Alta',
      nextMeeting: '2024-01-20',
      icon: Users,
      color: 'green'
    },
    {
      name: 'Comunidade Local',
      type: 'community',
      count: 12450,
      engagement: 78,
      satisfaction: 82,
      lastContact: '2024-01-12',
      priority: 'Média',
      nextMeeting: '2024-02-05',
      icon: Users,
      color: 'purple'
    },
    {
      name: 'Fornecedores',
      type: 'supply_chain',
      count: 342,
      engagement: 73,
      satisfaction: 79,
      lastContact: '2024-01-08',
      priority: 'Média',
      nextMeeting: '2024-01-30',
      icon: Factory,
      color: 'orange'
    },
    {
      name: 'ONGs e Ativistas',
      type: 'advocacy',
      count: 23,
      engagement: 65,
      satisfaction: 75,
      lastContact: '2024-01-05',
      priority: 'Baixa',
      nextMeeting: '2024-02-15',
      icon: Handshake,
      color: 'teal'
    }
  ];

  const supplyChainMetrics = [
    {
      category: 'Emissões de Escopo 3',
      suppliers: 156,
      reported: 134,
      percentage: 85.9,
      totalEmissions: 8945,
      trend: '+2.3%'
    },
    {
      category: 'Práticas Trabalhistas',
      suppliers: 156,
      reported: 142,
      percentage: 91.0,
      compliant: 138,
      trend: '+1.8%'
    },
    {
      category: 'Gestão de Resíduos',
      suppliers: 156,
      reported: 128,
      percentage: 82.1,
      certified: 98,
      trend: '+4.2%'
    },
    {
      category: 'Diversidade e Inclusão',
      suppliers: 156,
      reported: 119,
      percentage: 76.3,
      programs: 87,
      trend: '+6.1%'
    }
  ];

  const communicationChannels = [
    {
      channel: 'Portal ESG',
      stakeholder: 'Todos',
      frequency: 'Tempo real',
      lastUpdate: '2024-01-15',
      engagement: 94,
      content: ['Relatórios', 'Métricas', 'Notícias']
    },
    {
      channel: 'Newsletter Mensal',
      stakeholder: 'Acionistas',
      frequency: 'Mensal',
      lastUpdate: '2024-01-01',
      engagement: 87,
      content: ['Performance financeira', 'ESG insights']
    },
    {
      channel: 'Reuniões Comunitárias',
      stakeholder: 'Comunidade',
      frequency: 'Trimestral',
      lastUpdate: '2024-01-12',
      engagement: 82,
      content: ['Impactos locais', 'Programas sociais']
    },
    {
      channel: 'Assessments Fornecedores',
      stakeholder: 'Fornecedores',
      frequency: 'Semestral',
      lastUpdate: '2024-01-08',
      engagement: 76,
      content: ['Questionários ESG', 'Auditorias']
    }
  ];

  const materialityMatrix = [
    { topic: 'Mudanças Climáticas', stakeholder_importance: 95, business_impact: 90, quadrant: 'high-high' },
    { topic: 'Gestão de Água', stakeholder_importance: 85, business_impact: 75, quadrant: 'high-medium' },
    { topic: 'Diversidade e Inclusão', stakeholder_importance: 80, business_impact: 70, quadrant: 'high-medium' },
    { topic: 'Transparência Fiscal', stakeholder_importance: 75, business_impact: 85, quadrant: 'medium-high' },
    { topic: 'Inovação Sustentável', stakeholder_importance: 70, business_impact: 80, quadrant: 'medium-high' },
    { topic: 'Saúde e Segurança', stakeholder_importance: 90, business_impact: 85, quadrant: 'high-high' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'border-blue-200 bg-blue-50';
      case 'green': return 'border-green-200 bg-green-50';
      case 'purple': return 'border-purple-200 bg-purple-50';
      case 'orange': return 'border-orange-200 bg-orange-50';
      case 'teal': return 'border-teal-200 bg-teal-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getQuadrantColor = (quadrant: string) => {
    switch (quadrant) {
      case 'high-high': return 'bg-red-100 text-red-800';
      case 'high-medium': return 'bg-orange-100 text-orange-800';
      case 'medium-high': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="supply_chain">Cadeia de Suprimentos</TabsTrigger>
          <TabsTrigger value="communication">Comunicação</TabsTrigger>
          <TabsTrigger value="materiality">Materialidade</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Grupos de Stakeholders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stakeholderGroups.map((group, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${getColorClasses(group.color)}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <group.icon className="h-5 w-5" />
                          <h3 className="font-semibold">{group.name}</h3>
                        </div>
                        <Badge className={getPriorityColor(group.priority)}>
                          {group.priority}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Stakeholders:</span>
                          <span className="font-medium">{group.count.toLocaleString()}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Engajamento:</span>
                            <span className="font-medium">{group.engagement}%</span>
                          </div>
                          <Progress value={group.engagement} className="h-2" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Satisfação:</span>
                            <span className="font-medium">{group.satisfaction}%</span>
                          </div>
                          <Progress value={group.satisfaction} className="h-2" />
                        </div>
                        
                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex justify-between">
                            <span>Último contato:</span>
                            <span>{group.lastContact}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Próxima reunião:</span>
                            <span>{group.nextMeeting}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Contato
                          </Button>
                          <Button size="sm" variant="outline">
                            <Calendar className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Engajamento Global</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">83%</div>
                  <p className="text-sm text-gray-600">Média de engajamento</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">+5.2% vs. 2023</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Satisfação Média</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">82%</div>
                  <p className="text-sm text-gray-600">Índice de satisfação</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">+3.1% vs. 2023</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Próximas Ações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
                  <p className="text-sm text-gray-600">Reuniões agendadas</p>
                  <Badge className="mt-2 bg-orange-100 text-orange-800">Próximos 30 dias</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="supply_chain" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-orange-600" />
                Gestão da Cadeia de Suprimentos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supplyChainMetrics.map((metric, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">{metric.category}</h3>
                        <Badge className={
                          metric.percentage >= 90 ? 'bg-green-100 text-green-800' :
                          metric.percentage >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }>
                          {metric.percentage.toFixed(1)}%
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Fornecedores relataram:</span>
                          <span className="font-medium">{metric.reported}/{metric.suppliers}</span>
                        </div>
                        
                        <Progress value={metric.percentage} className="h-2" />
                        
                        {metric.totalEmissions && (
                          <div className="flex justify-between text-sm">
                            <span>Total de emissões:</span>
                            <span className="font-medium">{metric.totalEmissions.toLocaleString()} t CO2e</span>
                          </div>
                        )}
                        
                        {metric.compliant && (
                          <div className="flex justify-between text-sm">
                            <span>Em conformidade:</span>
                            <span className="font-medium">{metric.compliant}</span>
                          </div>
                        )}
                        
                        {metric.certified && (
                          <div className="flex justify-between text-sm">
                            <span>Certificados:</span>
                            <span className="font-medium">{metric.certified}</span>
                          </div>
                        )}
                        
                        {metric.programs && (
                          <div className="flex justify-between text-sm">
                            <span>Com programas:</span>
                            <span className="font-medium">{metric.programs}</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between text-xs">
                          <span>Tendência:</span>
                          <span className="font-medium text-green-600">{metric.trend}</span>
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
              <CardTitle>Portal de Fornecedores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 text-center">
                    <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Questionários ESG</h3>
                    <p className="text-sm text-gray-600 mb-3">Coleta automática de dados ESG</p>
                    <Button size="sm" className="w-full">Enviar Questionário</Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Programa de Certificação</h3>
                    <p className="text-sm text-gray-600 mb-3">Certificação sustentável</p>
                    <Button size="sm" variant="outline" className="w-full">Ver Critérios</Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Relatórios</h3>
                    <p className="text-sm text-gray-600 mb-3">Dashboard de performance</p>
                    <Button size="sm" variant="outline" className="w-full">Ver Relatórios</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Canais de Comunicação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communicationChannels.map((channel, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">{channel.channel}</h3>
                        <Badge className="bg-blue-100 text-blue-800">{channel.engagement}% engajamento</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Stakeholder:</span>
                          <div className="font-medium">{channel.stakeholder}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Frequência:</span>
                          <div className="font-medium">{channel.frequency}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Última atualização:</span>
                          <div className="font-medium">{channel.lastUpdate}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Conteúdo:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {channel.content.map((item, itemIndex) => (
                              <Badge key={itemIndex} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <Progress value={channel.engagement} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materiality" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-600" />
                Matriz de Materialidade (Dupla Materialidade ESRS)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {materialityMatrix.map((topic, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">{topic.topic}</h3>
                        <Badge className={getQuadrantColor(topic.quadrant)}>
                          {topic.quadrant === 'high-high' ? 'Crítico' :
                           topic.quadrant === 'high-medium' ? 'Importante' :
                           topic.quadrant === 'medium-high' ? 'Relevante' : 'Monitorar'}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <span className="text-sm text-gray-600">Importância para Stakeholders</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress value={topic.stakeholder_importance} className="h-2 flex-1" />
                            <span className="text-sm font-medium">{topic.stakeholder_importance}%</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Impacto no Negócio</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress value={topic.business_impact} className="h-2 flex-1" />
                            <span className="text-sm font-medium">{topic.business_impact}%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StakeholderEngagement;
