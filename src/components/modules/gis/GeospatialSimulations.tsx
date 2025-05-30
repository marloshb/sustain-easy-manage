
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Zap, 
  Wind,
  Droplets,
  Mountain,
  Users,
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  Download,
  Settings,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const GeospatialSimulations = () => {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [selectedScenario, setSelectedScenario] = useState('pollution');

  const simulationTypes = [
    {
      id: 'pollution',
      name: 'Dispersão de Poluentes',
      description: 'Simula dispersão de emissões atmosféricas',
      icon: Wind,
      color: 'text-red-600',
      complexity: 'Alta',
      duration: '10-15 min',
      variables: ['Velocidade do Vento', 'Direção', 'Temperatura', 'Umidade', 'Topografia']
    },
    {
      id: 'flooding',
      name: 'Risco de Inundação',
      description: 'Modela cenários de inundação por precipitação',
      icon: Droplets,
      color: 'text-blue-600',
      complexity: 'Alta',
      duration: '12-20 min',
      variables: ['Precipitação', 'Topografia', 'Drenagem', 'Solo', 'Uso do Solo']
    },
    {
      id: 'erosion',
      name: 'Erosão do Solo',
      description: 'Avalia potencial de erosão em diferentes cenários',
      icon: Mountain,
      color: 'text-orange-600',
      complexity: 'Média',
      duration: '8-12 min',
      variables: ['Declividade', 'Cobertura Vegetal', 'Tipo de Solo', 'Precipitação']
    },
    {
      id: 'social_impact',
      name: 'Impacto Social',
      description: 'Simula impactos em comunidades locais',
      icon: Users,
      color: 'text-purple-600',
      complexity: 'Média',
      duration: '6-10 min',
      variables: ['Demografia', 'Infraestrutura', 'Proximidade', 'Vulnerabilidade']
    },
    {
      id: 'climate_risk',
      name: 'Riscos Climáticos',
      description: 'Modela cenários de mudanças climáticas',
      icon: TrendingUp,
      color: 'text-green-600',
      complexity: 'Alta',
      duration: '15-25 min',
      variables: ['Temperatura', 'Precipitação', 'Eventos Extremos', 'Sazonalidade']
    }
  ];

  const runningSimulations = [
    {
      id: 'sim_001',
      name: 'Dispersão SO2 - Fábrica A',
      type: 'pollution',
      scenario: 'Emissão máxima com vento nordeste',
      progress: 67,
      status: 'running',
      eta: '8 min',
      startTime: '14:45',
      parameters: {
        windSpeed: '15 km/h',
        windDirection: 'NE',
        temperature: '24°C',
        humidity: '65%'
      }
    },
    {
      id: 'sim_002',
      name: 'Inundação - Chuva 100mm/h',
      type: 'flooding',
      scenario: 'Precipitação extrema',
      progress: 100,
      status: 'completed',
      eta: 'Concluído',
      startTime: '14:20',
      results: {
        affectedArea: '3.2 km²',
        maxDepth: '1.8 m',
        communities: 2,
        evacuationTime: '45 min'
      }
    },
    {
      id: 'sim_003',
      name: 'Impacto Social - Expansão Norte',
      type: 'social_impact',
      scenario: 'Expansão da instalação',
      progress: 25,
      status: 'running',
      eta: '12 min',
      startTime: '14:52',
      parameters: {
        expansionArea: '5 hectares',
        population: '8.500 pessoas',
        radius: '2 km'
      }
    }
  ];

  const scenarios = [
    {
      id: 'current',
      name: 'Condições Atuais',
      description: 'Baseado em dados meteorológicos atuais'
    },
    {
      id: 'worst_case',
      name: 'Pior Cenário',
      description: 'Condições extremas desfavoráveis'
    },
    {
      id: 'best_case',
      name: 'Melhor Cenário',
      description: 'Condições ideais de dispersão'
    },
    {
      id: 'seasonal',
      name: 'Variação Sazonal',
      description: 'Cenários para diferentes épocas do ano'
    }
  ];

  const simulationResults = [
    {
      id: 'result_001',
      simulation: 'Dispersão de Poluentes',
      scenario: 'Emissão normal - vento sul',
      date: '2024-01-20',
      risk: 'Baixo',
      findings: [
        'Pluma de dispersão direcionada para área rural',
        'Concentrações permanecem abaixo dos limites',
        'Sem impacto em comunidades urbanas'
      ],
      recommendations: [
        'Manter monitoramento contínuo',
        'Considerar instalação de sensor adicional'
      ],
      affectedArea: '2.8 km²',
      maxConcentration: '45 μg/m³'
    },
    {
      id: 'result_002',
      simulation: 'Risco de Inundação',
      scenario: 'Chuva intensa - 80mm/h',
      date: '2024-01-19',
      risk: 'Alto',
      findings: [
        'Alagamento previsto na área de armazenamento',
        'Risco de contaminação do solo',
        'Acesso principal pode ser bloqueado'
      ],
      recommendations: [
        'Implementar sistema de drenagem adicional',
        'Relocar materiais sensíveis',
        'Preparar rota de evacuação alternativa'
      ],
      affectedArea: '4.1 km²',
      maxDepth: '2.2 m'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'queued': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Alta': return 'text-red-600';
      case 'Média': return 'text-yellow-600';
      case 'Baixa': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const startSimulation = (typeId: string) => {
    setActiveSimulation(typeId);
    console.log(`Iniciando simulação: ${typeId}`);
  };

  return (
    <div className="space-y-6">
      {/* Simulation Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-600" />
            Simulações Geoespaciais Disponíveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {simulationTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <type.icon className={`h-6 w-6 ${type.color}`} />
                    <Badge variant="outline" className={getComplexityColor(type.complexity)}>
                      {type.complexity}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{type.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Duração:</span>
                      <span>{type.duration}</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Variáveis:</p>
                      <div className="flex flex-wrap gap-1">
                        {type.variables.slice(0, 3).map((variable, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {variable}
                          </Badge>
                        ))}
                        {type.variables.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{type.variables.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => startSimulation(type.id)}
                      disabled={activeSimulation === type.id}
                    >
                      {activeSimulation === type.id ? (
                        <>
                          <Pause className="h-3 w-3 mr-1" />
                          Executando...
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 mr-1" />
                          Executar
                        </>
                      )}
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
        {/* Running Simulations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-blue-600" />
              Simulações em Execução
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {runningSimulations.map((simulation) => (
                <div key={simulation.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{simulation.name}</h3>
                    <Badge className={getStatusColor(simulation.status)}>
                      {simulation.status === 'running' ? 'Executando' : 
                       simulation.status === 'completed' ? 'Concluído' : simulation.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{simulation.scenario}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{simulation.progress}%</span>
                    </div>
                    <Progress value={simulation.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Iniciado: {simulation.startTime}</span>
                      <span>ETA: {simulation.eta}</span>
                    </div>
                  </div>

                  {simulation.parameters && (
                    <div className="mt-3 p-2 bg-blue-50 rounded">
                      <p className="text-sm font-medium mb-1">Parâmetros:</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(simulation.parameters).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span>{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {simulation.results && (
                    <div className="mt-3 p-2 bg-green-50 rounded">
                      <p className="text-sm font-medium mb-1">Resultados:</p>
                      <div className="space-y-1 text-xs">
                        {Object.entries(simulation.results).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span>{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 mt-3">
                    {simulation.status === 'running' && (
                      <>
                        <Button size="sm" variant="outline">
                          <Pause className="h-3 w-3 mr-1" />
                          Pausar
                        </Button>
                        <Button size="sm" variant="outline">
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Reiniciar
                        </Button>
                      </>
                    )}
                    {simulation.status === 'completed' && (
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Baixar Resultados
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Simulation Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Resultados de Simulações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {simulationResults.map((result) => (
                <div key={result.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{result.simulation}</h3>
                    <Badge className={getRiskColor(result.risk)}>
                      Risco {result.risk}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{result.scenario}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Descobertas:</p>
                      <ul className="text-sm space-y-1">
                        {result.findings.map((finding, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">Recomendações:</p>
                      <ul className="text-sm space-y-1">
                        {result.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertTriangle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                      <div>
                        <p className="text-xs text-gray-500">Área Afetada</p>
                        <p className="font-medium">{result.affectedArea}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          {result.maxConcentration ? 'Concentração Máx.' : 'Profundidade Máx.'}
                        </p>
                        <p className="font-medium">
                          {result.maxConcentration || result.maxDepth}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-gray-500">Data: {result.date}</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scenario Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Cenários de Simulação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {scenarios.map((scenario) => (
              <Card 
                key={scenario.id} 
                className={`cursor-pointer transition-colors ${
                  selectedScenario === scenario.id ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedScenario(scenario.id)}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium mb-2">{scenario.name}</h3>
                  <p className="text-sm text-gray-600">{scenario.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">24</div>
            <p className="text-sm text-gray-600">Simulações Concluídas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">3</div>
            <p className="text-sm text-gray-600">Em Execução</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">156</div>
            <p className="text-sm text-gray-600">Cenários Testados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">92%</div>
            <p className="text-sm text-gray-600">Precisão Média</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeospatialSimulations;
