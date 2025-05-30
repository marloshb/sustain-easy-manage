
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Brain, 
  TrendingUp, 
  Zap,
  Droplets,
  Package,
  Globe,
  Users,
  Play,
  BarChart3,
  Target,
  Calendar
} from 'lucide-react';

const PredictiveSimulations = () => {
  const [selectedScenario, setSelectedScenario] = useState('energy-reduction');
  const [simulationParams, setSimulationParams] = useState({
    energyReduction: 20,
    waterReduction: 15,
    materialsEfficiency: 10,
    timeHorizon: 12
  });
  const [runningSimulation, setRunningSimulation] = useState(false);

  const scenarioTypes = [
    {
      id: 'energy-reduction',
      name: 'Redução de Energia',
      description: 'Simula impactos de redução no consumo energético',
      icon: Zap,
      color: 'text-yellow-600',
      category: 'Ambiental'
    },
    {
      id: 'water-efficiency',
      name: 'Eficiência Hídrica',
      description: 'Modela estratégias de conservação de água',
      icon: Droplets,
      color: 'text-blue-600',
      category: 'Ambiental'
    },
    {
      id: 'materials-optimization',
      name: 'Otimização de Materiais',
      description: 'Analisa redução de desperdício de materiais',
      icon: Package,
      color: 'text-green-600',
      category: 'Ambiental'
    },
    {
      id: 'climate-impact',
      name: 'Impactos Climáticos',
      description: 'Avalia efeitos de mudanças climáticas',
      icon: Globe,
      color: 'text-purple-600',
      category: 'Climático'
    },
    {
      id: 'social-impact',
      name: 'Impactos Sociais',
      description: 'Modela efeitos em comunidades locais',
      icon: Users,
      color: 'text-orange-600',
      category: 'Social'
    }
  ];

  const simulationResults = {
    'energy-reduction': {
      primaryMetric: 'Redução de 20% no consumo energético',
      secondaryMetrics: [
        { label: 'Economia anual', value: 'R$ 245.000', trend: 'positive' },
        { label: 'Redução CO2', value: '156 toneladas', trend: 'positive' },
        { label: 'ROI estimado', value: '18 meses', trend: 'neutral' }
      ],
      impacts: [
        'Redução de 15% na pegada de carbono regional',
        'Melhoria na classificação ESG',
        'Conformidade antecipada com metas 2030'
      ],
      technologies: [
        'Sistemas LED avançados',
        'Automação predial',
        'Energia solar complementar'
      ],
      risks: [
        'Investimento inicial elevado',
        'Período de adaptação operacional'
      ]
    },
    'water-efficiency': {
      primaryMetric: 'Redução de 15% no consumo de água',
      secondaryMetrics: [
        { label: 'Economia anual', value: 'R$ 89.000', trend: 'positive' },
        { label: 'Água conservada', value: '12.000 m³', trend: 'positive' },
        { label: 'ROI estimado', value: '14 meses', trend: 'neutral' }
      ],
      impacts: [
        'Redução da pressão sobre recursos hídricos locais',
        'Melhoria na gestão ambiental',
        'Preparação para escassez hídrica'
      ],
      technologies: [
        'Sistemas de reciclagem',
        'Captação de água da chuva',
        'Sensores de vazamento'
      ],
      risks: [
        'Qualidade da água reciclada',
        'Manutenção de sistemas complexos'
      ]
    }
  };

  const monteCarlodResults = [
    {
      scenario: 'Cenário Otimista',
      probability: '25%',
      energySavings: '28%',
      costSavings: 'R$ 340.000',
      implementation: '12 meses'
    },
    {
      scenario: 'Cenário Realista',
      probability: '50%',
      energySavings: '20%',
      costSavings: 'R$ 245.000',
      implementation: '15 meses'
    },
    {
      scenario: 'Cenário Conservador',
      probability: '25%',
      energySavings: '15%',
      costSavings: 'R$ 180.000',
      implementation: '18 meses'
    }
  ];

  const climateScenarios = [
    {
      name: 'RCP 2.6 (Paris Agreement)',
      description: 'Aquecimento limitado a 1.5°C',
      impact: 'Baixo impacto em recursos',
      adaptationNeeded: 'Mínima',
      timeline: '2030-2050'
    },
    {
      name: 'RCP 4.5 (Moderate)',
      description: 'Aquecimento de 2-3°C',
      impact: 'Impacto moderado',
      adaptationNeeded: 'Significativa',
      timeline: '2030-2050'
    },
    {
      name: 'RCP 8.5 (High Emissions)',
      description: 'Aquecimento >4°C',
      impact: 'Alto impacto em recursos',
      adaptationNeeded: 'Transformativa',
      timeline: '2030-2050'
    }
  ];

  const runSimulation = async () => {
    setRunningSimulation(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setRunningSimulation(false);
  };

  const currentResults = simulationResults[selectedScenario as keyof typeof simulationResults];

  return (
    <div className="space-y-6">
      {/* Simulation Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Configuração de Simulações Preditivas
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Scenario Selection */}
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-3 block">Selecione o Tipo de Simulação:</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {scenarioTypes.map(scenario => (
                  <div
                    key={scenario.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedScenario === scenario.id ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedScenario(scenario.id)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <scenario.icon className={`h-4 w-4 ${scenario.color}`} />
                      <span className="font-medium text-sm">{scenario.name}</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{scenario.description}</p>
                    <Badge variant="outline" className="text-xs">{scenario.category}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Parameters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="energy-reduction">Redução Energia (%)</Label>
                <Input
                  id="energy-reduction"
                  type="number"
                  value={simulationParams.energyReduction}
                  onChange={(e) => setSimulationParams(prev => ({
                    ...prev,
                    energyReduction: Number(e.target.value)
                  }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="water-reduction">Redução Água (%)</Label>
                <Input
                  id="water-reduction"
                  type="number"
                  value={simulationParams.waterReduction}
                  onChange={(e) => setSimulationParams(prev => ({
                    ...prev,
                    waterReduction: Number(e.target.value)
                  }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="materials-efficiency">Eficiência Materiais (%)</Label>
                <Input
                  id="materials-efficiency"
                  type="number"
                  value={simulationParams.materialsEfficiency}
                  onChange={(e) => setSimulationParams(prev => ({
                    ...prev,
                    materialsEfficiency: Number(e.target.value)
                  }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time-horizon">Horizonte (meses)</Label>
                <Input
                  id="time-horizon"
                  type="number"
                  value={simulationParams.timeHorizon}
                  onChange={(e) => setSimulationParams(prev => ({
                    ...prev,
                    timeHorizon: Number(e.target.value)
                  }))}
                />
              </div>
            </div>

            <Button 
              onClick={runSimulation} 
              disabled={runningSimulation}
              className="w-full"
            >
              <Play className={`h-4 w-4 mr-2 ${runningSimulation ? 'animate-spin' : ''}`} />
              {runningSimulation ? 'Executando Simulação...' : 'Executar Simulação'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Simulation Results */}
      {currentResults && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Resultados da Simulação - {scenarioTypes.find(s => s.id === selectedScenario)?.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Primary Metric */}
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-2xl font-bold text-green-700 mb-2">{currentResults.primaryMetric}</p>
                <p className="text-sm text-green-600">Resultado Principal da Simulação</p>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentResults.secondaryMetrics.map((metric, index) => (
                  <div key={index} className="p-4 border rounded-lg text-center">
                    <p className="text-lg font-bold text-gray-700">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <TrendingUp className={`h-4 w-4 mx-auto mt-2 ${
                      metric.trend === 'positive' ? 'text-green-600' : 
                      metric.trend === 'negative' ? 'text-red-600' : 'text-yellow-600'
                    }`} />
                  </div>
                ))}
              </div>

              {/* Detailed Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    Impactos Esperados
                  </h4>
                  <ul className="space-y-2">
                    {currentResults.impacts.map((impact, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-600" />
                    Tecnologias Sugeridas
                  </h4>
                  <ul className="space-y-2">
                    {currentResults.technologies.map((tech, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Risks */}
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 text-red-600" />
                  Riscos Identificados
                </h4>
                <div className="space-y-2">
                  {currentResults.risks.map((risk, index) => (
                    <div key={index} className="p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                      {risk}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Monte Carlo Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            Análise Probabilística (Monte Carlo)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monteCarlodResults.map((result, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{result.scenario}</h3>
                  <Badge variant="outline">Probabilidade: {result.probability}</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Economia de Energia:</span>
                    <span className="font-medium ml-1">{result.energySavings}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Economia de Custos:</span>
                    <span className="font-medium ml-1">{result.costSavings}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Tempo de Implementação:</span>
                    <span className="font-medium ml-1">{result.implementation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Climate Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            Cenários Climáticos (NOAA + IPCC)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {climateScenarios.map((scenario, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{scenario.name}</h3>
                  <Badge variant="outline">
                    <Calendar className="h-3 w-3 mr-1" />
                    {scenario.timeline}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Impacto em Recursos:</span>
                    <span className="font-medium ml-1">{scenario.impact}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Adaptação Necessária:</span>
                    <span className="font-medium ml-1">{scenario.adaptationNeeded}</span>
                  </div>
                  <div>
                    <Button size="sm" variant="outline" className="w-full">
                      Simular Cenário
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveSimulations;
