
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Play, 
  BarChart3, 
  Target,
  Zap,
  Droplets,
  Leaf,
  Users,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const PredictiveModeling = () => {
  const [activeSimulation, setActiveSimulation] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState('emissions');

  const scenarios = [
    {
      id: 'emissions',
      name: 'Redução de Emissões',
      description: 'Simula impacto de reduções de CO2 em 20%, 30% e 50%',
      icon: Leaf,
      color: 'green',
      status: 'ready',
      estimatedTime: '3-5 min',
      parameters: ['Escopo 1', 'Escopo 2', 'Escopo 3', 'Cronograma']
    },
    {
      id: 'climate_risk',
      name: 'Riscos Climáticos',
      description: 'Avalia impactos de eventos climáticos extremos',
      icon: AlertTriangle,
      color: 'orange',
      status: 'ready',
      estimatedTime: '5-8 min',
      parameters: ['Temperatura', 'Precipitação', 'Eventos extremos', 'Localização']
    },
    {
      id: 'renewable_energy',
      name: 'Transição Energética',
      description: 'Modela transição para energias renováveis',
      icon: Zap,
      color: 'blue',
      status: 'ready',
      estimatedTime: '4-6 min',
      parameters: ['Solar', 'Eólica', 'Biomassa', 'Investimento']
    },
    {
      id: 'water_management',
      name: 'Gestão Hídrica',
      description: 'Simula estratégias de conservação de água',
      icon: Droplets,
      color: 'cyan',
      status: 'ready',
      estimatedTime: '2-4 min',
      parameters: ['Consumo', 'Reciclagem', 'Eficiência', 'Custo']
    },
    {
      id: 'social_impact',
      name: 'Impacto Social',
      description: 'Avalia efeitos de programas comunitários',
      icon: Users,
      color: 'purple',
      status: 'ready',
      estimatedTime: '6-10 min',
      parameters: ['Educação', 'Saúde', 'Emprego', 'Renda']
    }
  ];

  const simulationResults = {
    emissions: {
      baseline: { value: 13422, year: 2024 },
      scenarios: [
        { name: '20% Redução', value: 10738, year: 2030, savings: 2684, investment: 15.2 },
        { name: '30% Redução', value: 9395, year: 2030, savings: 4027, investment: 28.5 },
        { name: '50% Redução', value: 6711, year: 2030, savings: 6711, investment: 52.8 }
      ],
      impact: {
        financial: { cost: 'R$ 52.8M', savings: 'R$ 18.3M/ano' },
        environmental: { co2_avoided: '6.711t CO2e', forest_equivalent: '305 hectares' },
        social: { jobs_created: 127, communities_benefited: 8 }
      }
    },
    climate_risk: {
      current_risk: 'Médio',
      future_risk_2030: 'Alto',
      scenarios: [
        { event: 'Inundações', probability: 15, impact: 'Alto', cost: 'R$ 8.2M' },
        { event: 'Secas prolongadas', probability: 25, impact: 'Médio', cost: 'R$ 3.1M' },
        { event: 'Temperaturas extremas', probability: 40, impact: 'Baixo', cost: 'R$ 1.5M' }
      ]
    }
  };

  const monteCarloAnalysis = {
    confidence_intervals: [
      { parameter: 'Redução de Emissões', p10: 18, p50: 30, p90: 45, unit: '%' },
      { parameter: 'Custo de Implementação', p10: 42, p50: 53, p90: 67, unit: 'M USD' },
      { parameter: 'Retorno de Investimento', p10: 3.2, p50: 4.8, p90: 7.1, unit: 'anos' },
      { parameter: 'Impacto Social', p10: 67, p50: 85, p90: 94, unit: 'score' }
    ]
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green': return 'border-green-200 bg-green-50 text-green-700';
      case 'blue': return 'border-blue-200 bg-blue-50 text-blue-700';
      case 'orange': return 'border-orange-200 bg-orange-50 text-orange-700';
      case 'cyan': return 'border-cyan-200 bg-cyan-50 text-cyan-700';
      case 'purple': return 'border-purple-200 bg-purple-50 text-purple-700';
      default: return 'border-gray-200 bg-gray-50 text-gray-700';
    }
  };

  const runSimulation = (scenarioId: string) => {
    setActiveSimulation(scenarioId);
    // Simulate API call
    setTimeout(() => {
      setActiveSimulation(null);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Simulações e Modelagem Preditiva
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scenarios.map((scenario) => (
              <Card key={scenario.id} className={`hover:shadow-lg transition-all duration-300 ${getColorClasses(scenario.color)}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <scenario.icon className="h-5 w-5" />
                      <h3 className="font-semibold">{scenario.name}</h3>
                    </div>
                    <Badge variant="outline">{scenario.status}</Badge>
                  </div>
                  
                  <p className="text-sm mb-3 opacity-80">{scenario.description}</p>
                  
                  <div className="space-y-2 text-xs mb-4">
                    <div className="flex justify-between">
                      <span>Tempo estimado:</span>
                      <span className="font-medium">{scenario.estimatedTime}</span>
                    </div>
                    <div>
                      <span>Parâmetros:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {scenario.parameters.map((param, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full"
                    disabled={activeSimulation === scenario.id}
                    onClick={() => runSimulation(scenario.id)}
                  >
                    {activeSimulation === scenario.id ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-2"></div>
                        Executando...
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3 mr-2" />
                        Executar Simulação
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs value={selectedScenario} onValueChange={setSelectedScenario}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="emissions">Resultados - Emissões</TabsTrigger>
          <TabsTrigger value="climate_risk">Resultados - Riscos Climáticos</TabsTrigger>
        </TabsList>

        <TabsContent value="emissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cenários de Redução de Emissões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Linha de Base (2024)</h3>
                  <div className="text-3xl font-bold text-gray-700">
                    {simulationResults.emissions.baseline.value.toLocaleString()} t CO2e
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {simulationResults.emissions.scenarios.map((scenario, index) => (
                    <Card key={index} className="border-green-200 bg-green-50">
                      <CardContent className="p-4 text-center">
                        <h3 className="font-semibold text-green-800 mb-2">{scenario.name}</h3>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {scenario.value.toLocaleString()}
                        </div>
                        <p className="text-sm text-green-700">t CO2e em {scenario.year}</p>
                        <div className="mt-3 space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Redução:</span>
                            <span className="font-medium">{scenario.savings.toLocaleString()} t</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Investimento:</span>
                            <span className="font-medium">R$ {scenario.investment}M</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Impactos do Cenário 50% (Recomendado)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-600">Impacto Financeiro</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Investimento total:</span>
                            <span className="font-medium">{simulationResults.emissions.impact.financial.cost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Economia anual:</span>
                            <span className="font-medium">{simulationResults.emissions.impact.financial.savings}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Impacto Ambiental</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>CO2 evitado:</span>
                            <span className="font-medium">{simulationResults.emissions.impact.environmental.co2_avoided}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Equiv. florestal:</span>
                            <span className="font-medium">{simulationResults.emissions.impact.environmental.forest_equivalent}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-600">Impacto Social</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Empregos criados:</span>
                            <span className="font-medium">{simulationResults.emissions.impact.social.jobs_created}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Comunidades:</span>
                            <span className="font-medium">{simulationResults.emissions.impact.social.communities_benefited}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="climate_risk" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Riscos Climáticos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-yellow-800 mb-2">Risco Atual</h3>
                    <div className="text-2xl font-bold text-yellow-600">
                      {simulationResults.climate_risk.current_risk}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-red-800 mb-2">Risco Projetado 2030</h3>
                    <div className="text-2xl font-bold text-red-600">
                      {simulationResults.climate_risk.future_risk_2030}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                {simulationResults.climate_risk.scenarios.map((risk, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{risk.event}</h3>
                        <Badge className={
                          risk.impact === 'Alto' ? 'bg-red-100 text-red-800' :
                          risk.impact === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }>
                          {risk.impact}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Probabilidade:</span>
                          <div className="font-semibold">{risk.probability}%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Impacto:</span>
                          <div className="font-semibold">{risk.impact}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Custo estimado:</span>
                          <div className="font-semibold">{risk.cost}</div>
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            Análise de Incertezas (Monte Carlo)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monteCarloAnalysis.confidence_intervals.map((interval, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{interval.parameter}</span>
                  <span className="text-sm text-gray-600">Intervalos de Confiança</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-2 bg-red-50 rounded">
                    <div className="font-semibold text-red-600">P10: {interval.p10}</div>
                    <div className="text-red-500">Pessimista</div>
                  </div>
                  <div className="text-center p-2 bg-yellow-50 rounded">
                    <div className="font-semibold text-yellow-600">P50: {interval.p50}</div>
                    <div className="text-yellow-500">Mais Provável</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="font-semibold text-green-600">P90: {interval.p90}</div>
                    <div className="text-green-500">Otimista</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-center">
                  Unidade: {interval.unit}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveModeling;
