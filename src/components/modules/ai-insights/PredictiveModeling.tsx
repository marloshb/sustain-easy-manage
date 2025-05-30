
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  Play, 
  BarChart3,
  Settings,
  Download,
  RefreshCw,
  Activity,
  TrendingUp,
  AlertTriangle,
  Zap
} from 'lucide-react';

const PredictiveModeling = () => {
  const [runningSimulation, setRunningSimulation] = useState<string | null>(null);

  const simulationModels = [
    {
      id: 'emissions_reduction',
      name: 'Cenário de Redução de Emissões',
      description: 'Simulação de estratégias para reduzir CO2 em 30%',
      type: 'Monte Carlo',
      status: 'Configurado',
      parameters: {
        target: '30% redução CO2',
        timeframe: '5 anos',
        confidence: '95%',
        iterations: '10,000'
      },
      results: {
        probability: 87,
        investment: '$ 2.4M',
        payback: '3.2 anos',
        risk: 'Médio'
      }
    },
    {
      id: 'water_scarcity',
      name: 'Simulação de Escassez Hídrica',
      description: 'Modelagem de impactos de seca prolongada',
      type: 'Dinâmica de Sistemas',
      status: 'Em execução',
      parameters: {
        scenario: 'Seca severa',
        duration: '18 meses',
        reduction: '40% chuva',
        impact: 'Operacional'
      },
      results: {
        probability: 73,
        impact: 'Alto',
        mitigation: '$ 850K',
        adaptation: 'Sistema reuso'
      }
    },
    {
      id: 'compliance_risk',
      name: 'Impacto de Nova Regulamentação',
      description: 'Simulação do impacto da CSRD na operação',
      type: 'Análise de Cenários',
      status: 'Concluído',
      parameters: {
        regulation: 'CSRD 2025',
        scope: 'Todas unidades',
        deadline: '12 meses',
        penalty: 'Multas + reputação'
      },
      results: {
        compliance: 92,
        cost: '$ 1.2M',
        timeline: '10 meses',
        risk: 'Baixo'
      }
    }
  ];

  const scenarioOutcomes = [
    {
      scenario: 'Transição Energética Acelerada',
      probability: 78,
      impact: 'Positivo',
      description: 'Adoção de 80% energia renovável até 2027',
      metrics: {
        'Redução CO2': '45%',
        'Economia anual': '$ 1.8M',
        'Payback': '4.5 anos',
        'Risco regulatório': 'Baixo'
      }
    },
    {
      scenario: 'Implementação Economia Circular',
      probability: 65,
      impact: 'Positivo',
      description: 'Zero waste to landfill e 90% circularidade',
      metrics: {
        'Redução resíduos': '85%',
        'Nova receita': '$ 2.3M',
        'Investimento': '$ 5.2M',
        'ROI': '24%'
      }
    },
    {
      scenario: 'Mudanças Climáticas Severas',
      probability: 45,
      impact: 'Negativo',
      description: 'Eventos extremos frequentes e adaptação necessária',
      metrics: {
        'Custo adaptação': '$ 3.7M',
        'Perda produtiva': '12%/ano',
        'Seguro adicional': '$ 450K',
        'Risco operacional': 'Alto'
      }
    }
  ];

  const modelingCapabilities = [
    {
      name: 'Monte Carlo',
      description: 'Análise probabilística com múltiplas variáveis',
      accuracy: 89,
      useCases: ['Análise de risco', 'ROI de projetos', 'Cenários financeiros']
    },
    {
      name: 'Dinâmica de Sistemas',
      description: 'Modelagem de sistemas complexos e feedback loops',
      accuracy: 92,
      useCases: ['Cadeia de suprimentos', 'Recursos naturais', 'Impactos sociais']
    },
    {
      name: 'Machine Learning',
      description: 'Predições baseadas em padrões históricos',
      accuracy: 94,
      useCases: ['Demanda energética', 'Anomalias operacionais', 'Otimização']
    },
    {
      name: 'Análise de Cenários',
      description: 'Comparação de múltiplos futuros possíveis',
      accuracy: 87,
      useCases: ['Estratégia ESG', 'Conformidade regulatória', 'Investimentos']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'bg-green-100 text-green-800';
      case 'Em execução': return 'bg-blue-100 text-blue-800';
      case 'Configurado': return 'bg-yellow-100 text-yellow-800';
      case 'Erro': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Positivo': return 'bg-green-100 text-green-800';
      case 'Negativo': return 'bg-red-100 text-red-800';
      case 'Neutro': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const runSimulation = (modelId: string) => {
    setRunningSimulation(modelId);
    setTimeout(() => setRunningSimulation(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Simulation Models */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Modelos de Simulação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {simulationModels.map((model) => (
              <Card key={model.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">{model.name}</h3>
                    <Badge className={getStatusColor(model.status)}>
                      {model.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{model.description}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Tipo:</span>
                      <span className="font-medium">{model.type}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded mb-3">
                    <p className="text-xs font-medium text-gray-700 mb-2">Parâmetros:</p>
                    <div className="space-y-1 text-xs">
                      {Object.entries(model.parameters).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-500 capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {model.results && (
                    <div className="bg-blue-50 p-3 rounded mb-3">
                      <p className="text-xs font-medium text-blue-800 mb-2">Resultados:</p>
                      <div className="space-y-1 text-xs">
                        {Object.entries(model.results).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-blue-600 capitalize">{key}:</span>
                            <span className="font-medium text-blue-800">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => runSimulation(model.id)}
                      disabled={runningSimulation === model.id}
                    >
                      {runningSimulation === model.id ? (
                        <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                      ) : (
                        <Play className="h-3 w-3 mr-1" />
                      )}
                      {runningSimulation === model.id ? 'Executando...' : 'Executar'}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scenario Outcomes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Resultados de Cenários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scenarioOutcomes.map((outcome, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-sm">{outcome.scenario}</h3>
                    <Badge className={getImpactColor(outcome.impact)}>
                      {outcome.impact}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{outcome.description}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Probabilidade:</span>
                      <span className="font-medium text-blue-600">{outcome.probability}%</span>
                    </div>
                    <Progress value={outcome.probability} className="h-2" />
                  </div>

                  <div className="bg-gray-50 p-3 rounded mb-3">
                    <p className="text-xs font-medium text-gray-700 mb-2">Métricas-chave:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(outcome.metrics).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-500">{key}:</span>
                          <span className="font-medium ml-1">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Ver Detalhes
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Modeling Capabilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-600" />
              Capacidades de Modelagem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modelingCapabilities.map((capability, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm">{capability.name}</h3>
                    <span className="text-sm font-medium text-green-600">
                      {capability.accuracy}%
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{capability.description}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precisão:</span>
                      <span className="font-medium">{capability.accuracy}%</span>
                    </div>
                    <Progress value={capability.accuracy} className="h-2" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-2">Casos de uso:</p>
                    <div className="flex flex-wrap gap-1">
                      {capability.useCases.map((useCase, ucIndex) => (
                        <Badge key={ucIndex} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simulation Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            Centro de Simulações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">15</div>
                <p className="text-sm text-gray-600">Simulações Ativas</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">89%</div>
                <p className="text-sm text-gray-600">Precisão Média</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">147</div>
                <p className="text-sm text-gray-600">Cenários Testados</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">$ 12.4M</div>
                <p className="text-sm text-gray-600">Valor Simulado</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Nova Simulação</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Criar modelo personalizado
                </p>
                <Button size="sm" className="w-full">
                  Criar Simulação
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Biblioteca de Modelos</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Templates pré-configurados
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Explorar Modelos
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Simulação Rápida</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Análise instantânea com IA
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Análise Rápida
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveModeling;
