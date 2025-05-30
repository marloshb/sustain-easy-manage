
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Play,
  BarChart3,
  Settings,
  Download,
  RefreshCw
} from 'lucide-react';

const PredictiveSimulations = () => {
  const [activeSimulation, setActiveSimulation] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const simulationTemplates = [
    {
      id: 'chemical-spill',
      name: 'Vazamento Químico',
      type: 'Incidente Ambiental',
      description: 'Simula dispersão de produtos químicos e impacto em área',
      parameters: ['Tipo de químico', 'Volume', 'Condições climáticas', 'Área afetada'],
      estimatedTime: '5-10 minutos',
      complexity: 'Média'
    },
    {
      id: 'workplace-accident',
      name: 'Acidente de Trabalho',
      type: 'Segurança Ocupacional',
      description: 'Modela cenários de acidentes e tempo de resposta',
      parameters: ['Tipo de acidente', 'Local', 'Horário', 'Recursos disponíveis'],
      estimatedTime: '3-5 minutos',
      complexity: 'Baixa'
    },
    {
      id: 'emergency-evacuation',
      name: 'Evacuação de Emergência',
      type: 'Resposta a Emergências',
      description: 'Simula rotas de evacuação e tempo de resposta',
      parameters: ['Tipo de emergência', 'Número de pessoas', 'Rotas disponíveis'],
      estimatedTime: '8-12 minutos',
      complexity: 'Alta'
    },
    {
      id: 'air-quality',
      name: 'Qualidade do Ar',
      type: 'Monitoramento Ambiental',
      description: 'Preve impactos na qualidade do ar por emissões',
      parameters: ['Fonte de emissão', 'Meteorologia', 'Densidade populacional'],
      estimatedTime: '6-8 minutos',
      complexity: 'Média'
    }
  ];

  const recentSimulations = [
    {
      id: 'SIM-001',
      name: 'Vazamento Químico - Produção',
      type: 'Incidente Ambiental',
      date: '2024-01-18',
      status: 'Concluída',
      results: {
        areaAffected: '2.3 km²',
        timeToContain: '45 min',
        peopleEvacuated: 127,
        riskLevel: 'Médio'
      }
    },
    {
      id: 'SIM-002',
      name: 'Evacuação - Incêndio',
      type: 'Resposta a Emergências',
      date: '2024-01-17',
      status: 'Concluída',
      results: {
        areaAffected: '1 edifício',
        timeToContain: '12 min',
        peopleEvacuated: 89,
        riskLevel: 'Alto'
      }
    },
    {
      id: 'SIM-003',
      name: 'Qualidade do Ar - Manutenção',
      type: 'Monitoramento Ambiental',
      date: '2024-01-16',
      status: 'Concluída',
      results: {
        areaAffected: '0.8 km²',
        timeToContain: 'N/A',
        peopleEvacuated: 0,
        riskLevel: 'Baixo'
      }
    }
  ];

  const predictiveInsights = [
    {
      title: 'Risco de Acidente - Próximos 30 dias',
      probability: 23,
      trend: '+5%',
      factors: ['Manutenção pendente', 'Clima adverso', 'Alta demanda'],
      recommendation: 'Agendar manutenção preventiva'
    },
    {
      title: 'Incidente Ambiental - Próximos 60 dias',
      probability: 15,
      trend: '-8%',
      factors: ['Melhorias nos processos', 'Treinamento recente'],
      recommendation: 'Manter controles atuais'
    },
    {
      title: 'Não Conformidade Regulatória',
      probability: 31,
      trend: '+12%',
      factors: ['Mudanças regulatórias', 'Auditoria pendente'],
      recommendation: 'Revisar procedimentos de conformidade'
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluída': return 'bg-green-100 text-green-800';
      case 'Em Execução': return 'bg-blue-100 text-blue-800';
      case 'Falhada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Alto': return 'text-red-600';
      case 'Médio': return 'text-yellow-600';
      case 'Baixo': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const runSimulation = (simulation: any) => {
    setActiveSimulation(simulation);
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 5000);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="templates">Templates de Simulação</TabsTrigger>
          <TabsTrigger value="results">Resultados Recentes</TabsTrigger>
          <TabsTrigger value="insights">Insights Preditivos</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          {/* Simulation Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Templates de Simulação Disponíveis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {simulationTemplates.map((template) => (
                  <Card key={template.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold">{template.name}</h3>
                        <Badge className={getComplexityColor(template.complexity)}>
                          {template.complexity}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                      <div className="space-y-2 mb-4">
                        <p className="text-xs font-medium text-gray-700">Parâmetros:</p>
                        <div className="flex flex-wrap gap-1">
                          {template.parameters.map((param, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {param}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                        <span>Tempo estimado: {template.estimatedTime}</span>
                        <span>Tipo: {template.type}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => runSimulation(template)}
                        disabled={isRunning}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Executar Simulação
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Simulation */}
          {activeSimulation && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className={`h-5 w-5 text-blue-600 ${isRunning ? 'animate-spin' : ''}`} />
                  Simulação em Execução: {activeSimulation.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isRunning ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Progresso da simulação:</span>
                      <div className="flex-1">
                        <Progress value={60} className="h-2" />
                      </div>
                      <span className="text-sm">60%</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">2.3 km²</div>
                        <p className="text-xs text-gray-600">Área Simulada</p>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-orange-600">45 min</div>
                        <p className="text-xs text-gray-600">Tempo de Contenção</p>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">127</div>
                        <p className="text-xs text-gray-600">Pessoas Afetadas</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-lg font-semibold text-green-600 mb-2">
                      Simulação Concluída!
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Resultados disponíveis para análise
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Ver Relatório
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {/* Recent Simulations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                Simulações Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">ID</th>
                      <th className="text-left py-2">Nome</th>
                      <th className="text-left py-2">Tipo</th>
                      <th className="text-left py-2">Data</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Resultados</th>
                      <th className="text-left py-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSimulations.map((sim) => (
                      <tr key={sim.id} className="border-b">
                        <td className="py-2 font-medium">{sim.id}</td>
                        <td className="py-2">{sim.name}</td>
                        <td className="py-2">{sim.type}</td>
                        <td className="py-2">{sim.date}</td>
                        <td className="py-2">
                          <Badge className={getStatusColor(sim.status)}>
                            {sim.status}
                          </Badge>
                        </td>
                        <td className="py-2">
                          <div className="space-y-1 text-xs">
                            <div>Área: {sim.results.areaAffected}</div>
                            <div>Tempo: {sim.results.timeToContain}</div>
                            <div className={getRiskColor(sim.results.riskLevel)}>
                              Risco: {sim.results.riskLevel}
                            </div>
                          </div>
                        </td>
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
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          {/* Predictive Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                Insights Preditivos de IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {predictiveInsights.map((insight, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">
                          {insight.probability}%
                        </div>
                        <div className={`text-xs ${insight.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                          {insight.trend}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <Progress value={insight.probability} className="h-2" />
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Fatores de Risco:</p>
                        <div className="flex flex-wrap gap-1">
                          {insight.factors.map((factor, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {factor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium">Recomendação:</span>
                        <span className="text-sm">{insight.recommendation}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        Simular Cenário
                      </Button>
                      <Button size="sm" variant="outline">
                        Criar Plano de Ação
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PredictiveSimulations;
