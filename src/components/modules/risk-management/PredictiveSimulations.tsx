
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp,
  Cloud,
  Droplets,
  Zap,
  Globe,
  Calculator,
  Play,
  Pause,
  RotateCcw,
  Download,
  Settings,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const PredictiveSimulations = () => {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [simulationProgress, setSimulationProgress] = useState(0);

  const simulationTypes = [
    {
      id: 'climate',
      name: 'Riscos Climáticos',
      description: 'Simula impactos de mudanças climáticas e eventos extremos',
      icon: Cloud,
      color: 'text-blue-600',
      scenarios: ['Aumento 1.5°C', 'Aumento 2°C', 'Eventos Extremos', 'Cenário Otimista'],
      timeframes: ['2030', '2040', '2050'],
      parameters: ['Temperatura', 'Precipitação', 'Eventos Extremos', 'Nível do Mar']
    },
    {
      id: 'emissions',
      name: 'Dispersão de Emissões',
      description: 'Modela dispersão de poluentes e impactos na qualidade do ar',
      icon: Globe,
      color: 'text-green-600',
      scenarios: ['Operação Normal', 'Redução 30%', 'Redução 50%', 'Emergência'],
      timeframes: ['1 hora', '24 horas', '1 semana', '1 mês'],
      parameters: ['Velocidade do Vento', 'Direção', 'Estabilidade Atmosférica', 'Chuva']
    },
    {
      id: 'water',
      name: 'Recursos Hídricos',
      description: 'Avalia disponibilidade e qualidade da água sob diferentes cenários',
      icon: Droplets,
      color: 'text-cyan-600',
      scenarios: ['Consumo Atual', 'Crescimento 20%', 'Escassez', 'Reciclagem 50%'],
      timeframes: ['1 ano', '5 anos', '10 anos', '20 anos'],
      parameters: ['Precipitação', 'Demanda', 'Eficiência', 'Reciclagem']
    },
    {
      id: 'montecarlo',
      name: 'Análise Monte Carlo',
      description: 'Análise probabilística de múltiplos cenários de risco',
      icon: Calculator,
      color: 'text-purple-600',
      scenarios: ['Conservador', 'Moderado', 'Agressivo', 'Personalizado'],
      timeframes: ['1000 iterações', '5000 iterações', '10000 iterações'],
      parameters: ['Probabilidade', 'Impacto', 'Correlações', 'Incertezas']
    }
  ];

  const runningSimulations = [
    {
      id: 'SIM-001',
      name: 'Impacto Climático 2030',
      type: 'Riscos Climáticos',
      progress: 75,
      status: 'Em Execução',
      startTime: '14:30',
      estimatedCompletion: '15:45',
      scenario: 'Aumento 1.5°C'
    },
    {
      id: 'SIM-002',
      name: 'Dispersão CO2 - Emergência',
      type: 'Dispersão de Emissões',
      progress: 100,
      status: 'Concluída',
      startTime: '13:15',
      estimatedCompletion: '13:45',
      scenario: 'Vazamento Crítico'
    },
    {
      id: 'SIM-003',
      name: 'Escassez Hídrica 2040',
      type: 'Recursos Hídricos',
      progress: 45,
      status: 'Em Execução',
      startTime: '14:00',
      estimatedCompletion: '16:30',
      scenario: 'Redução 40% chuvas'
    }
  ];

  const simulationResults = [
    {
      id: 'RES-001',
      name: 'Análise Climática Q4 2023',
      type: 'Riscos Climáticos',
      date: '2024-01-20',
      scenario: 'Aumento 2°C',
      confidence: 87,
      riskLevel: 'Alto',
      keyInsights: [
        'Aumento de 35% em eventos extremos',
        'Risco de inundação +60%',
        'Impacto operacional estimado: R$ 2.1M'
      ],
      actions: ['Revisar infraestrutura', 'Plano de contingência', 'Seguro adicional']
    },
    {
      id: 'RES-002',
      name: 'Dispersão Poluentes - Cenário Base',
      type: 'Dispersão de Emissões',
      date: '2024-01-18',
      scenario: 'Operação Normal',
      confidence: 92,
      riskLevel: 'Médio',
      keyInsights: [
        'Concentração PM2.5: 15-25 μg/m³',
        'Área de impacto: 5km raio',
        'População exposta: ~12,000 pessoas'
      ],
      actions: ['Monitoramento contínuo', 'Filtros adicionais', 'Comunicação comunidade']
    },
    {
      id: 'RES-003',
      name: 'Escassez Hídrica - Projeção 2030',
      type: 'Recursos Hídricos',
      date: '2024-01-15',
      scenario: 'Crescimento 20%',
      confidence: 78,
      riskLevel: 'Alto',
      keyInsights: [
        'Déficit hídrico: 40% da demanda',
        'Custo adicional: R$ 180k/ano',
        'Necessidade de fontes alternativas'
      ],
      actions: ['Sistema de reciclagem', 'Captação água da chuva', 'Parceria fornecedores']
    }
  ];

  const handleRunSimulation = (simulationType: string) => {
    setActiveSimulation(simulationType);
    setSimulationProgress(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setSimulationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setActiveSimulation(null);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluída': return 'bg-green-100 text-green-800';
      case 'Em Execução': return 'bg-blue-100 text-blue-800';
      case 'Pausada': return 'bg-yellow-100 text-yellow-800';
      case 'Erro': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Simulation Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {simulationTypes.map((simulation) => (
          <Card key={simulation.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <simulation.icon className={`h-6 w-6 ${simulation.color}`} />
                {simulation.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{simulation.description}</p>
              
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-600">Cenário</label>
                  <select className="w-full mt-1 p-2 text-sm border rounded">
                    {simulation.scenarios.map(scenario => (
                      <option key={scenario}>{scenario}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-xs font-medium text-gray-600">Horizonte Temporal</label>
                  <select className="w-full mt-1 p-2 text-sm border rounded">
                    {simulation.timeframes.map(timeframe => (
                      <option key={timeframe}>{timeframe}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button 
                className="w-full mt-4" 
                size="sm"
                onClick={() => handleRunSimulation(simulation.id)}
                disabled={activeSimulation === simulation.id}
              >
                {activeSimulation === simulation.id ? (
                  <>
                    <Pause className="h-4 w-4 mr-1" />
                    Executando...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-1" />
                    Executar Simulação
                  </>
                )}
              </Button>

              {activeSimulation === simulation.id && (
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progresso</span>
                    <span>{simulationProgress}%</span>
                  </div>
                  <Progress value={simulationProgress} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Running Simulations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Simulações em Execução
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {runningSimulations.map((sim) => (
              <div key={sim.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium">{sim.name}</h3>
                    <p className="text-sm text-gray-600">{sim.type} • {sim.scenario}</p>
                  </div>
                  <Badge className={getStatusColor(sim.status)}>
                    {sim.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-600">Início</p>
                    <p className="font-medium text-sm">{sim.startTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Previsão Conclusão</p>
                    <p className="font-medium text-sm">{sim.estimatedCompletion}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Progresso</p>
                    <div className="flex items-center gap-2">
                      <Progress value={sim.progress} className="flex-1 h-2" />
                      <span className="text-sm font-medium">{sim.progress}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {sim.status === 'Em Execução' && (
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
                  {sim.status === 'Concluída' && (
                    <Button size="sm">
                      Ver Resultados
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Settings className="h-3 w-3 mr-1" />
                    Configurar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Simulation Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Resultados de Simulações
            </span>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-1" />
              Exportar Todos
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {simulationResults.map((result) => (
              <div key={result.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium">{result.name}</h3>
                    <p className="text-sm text-gray-600">{result.type} • {result.scenario}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {result.confidence}% confiança
                    </Badge>
                    <Badge className={getRiskLevelColor(result.riskLevel)}>
                      {result.riskLevel}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      Principais Insights
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {result.keyInsights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Ações Recomendadas
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {result.actions.map((action, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t">
                  <span className="text-xs text-gray-500">
                    Executada em {result.date}
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Ver Detalhes
                    </Button>
                    <Button size="sm" variant="outline">
                      Exportar PDF
                    </Button>
                    <Button size="sm">
                      Criar Plano
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Simulation Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-gray-600" />
            Configuração de Simulações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Parâmetros Globais</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Resolução Temporal</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Horário</option>
                    <option>Diário</option>
                    <option>Semanal</option>
                    <option>Mensal</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Resolução Espacial</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>100m x 100m</option>
                    <option>500m x 500m</option>
                    <option>1km x 1km</option>
                    <option>5km x 5km</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Nível de Confiança</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>90%</option>
                    <option>95%</option>
                    <option>99%</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Configurações de Performance</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Número de Threads</label>
                  <input 
                    type="number" 
                    className="w-full mt-1 p-2 border rounded-md"
                    defaultValue="4"
                    min="1"
                    max="16"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Memória Máxima (GB)</label>
                  <input 
                    type="number" 
                    className="w-full mt-1 p-2 border rounded-md"
                    defaultValue="8"
                    min="1"
                    max="32"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Timeout (minutos)</label>
                  <input 
                    type="number" 
                    className="w-full mt-1 p-2 border rounded-md"
                    defaultValue="120"
                    min="5"
                    max="1440"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button>Salvar Configuração</Button>
            <Button variant="outline">Testar Performance</Button>
            <Button variant="outline">Restaurar Padrões</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveSimulations;
