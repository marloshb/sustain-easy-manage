
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Brain, 
  Search, 
  TrendingUp, 
  BarChart3,
  Zap,
  Droplets,
  Package,
  MessageSquare,
  ArrowRight,
  AlertTriangle,
  Map,
  Calendar,
  Clock
} from 'lucide-react';

const AIAnalytics = () => {
  const [query, setQuery] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);

  const sampleQueries = [
    "Quais localizações têm maior consumo de energia?",
    "Compare o uso de água este mês com o mesmo período do ano passado",
    "Preveja o consumo de recursos para os próximos 3 meses",
    "Identifique oportunidades para reduzir desperdício de materiais",
    "Mostre a correlação entre consumo de energia e temperatura"
  ];

  const insightCategories = [
    {
      title: 'Análise Preditiva',
      icon: TrendingUp,
      color: 'text-blue-600',
      insights: [
        {
          title: 'Previsão de Consumo Energético',
          description: 'O modelo prevê aumento de 12% no consumo de energia nos próximos 90 dias devido a tendências sazonais.',
          confidence: 94,
          recommendation: 'Considerar implementação antecipada de medidas de eficiência energética antes do pico de verão.'
        },
        {
          title: 'Tendência de Uso de Água',
          description: 'Padrão cíclico identificado com picos mensais coincidindo com ciclos de produção.',
          confidence: 88,
          recommendation: 'Reorganizar cronogramas de produção para distribuir o consumo de água de forma mais uniforme.'
        }
      ]
    },
    {
      title: 'Detecção de Anomalias',
      icon: AlertTriangle,
      color: 'text-orange-600',
      insights: [
        {
          title: 'Consumo Anormal de Energia',
          description: 'Desvio de +35% no consumo energético detectado na Fábrica A durante fins de semana.',
          confidence: 96,
          recommendation: 'Investigar configurações de equipamentos em standby e sistemas de climatização.'
        },
        {
          title: 'Vazamento Potencial',
          description: 'Padrão constante de consumo de água durante períodos inativos sugere vazamentos.',
          confidence: 89,
          recommendation: 'Realizar verificação de integridade nas tubulações principais e válvulas.'
        }
      ]
    },
    {
      title: 'Análise Espacial',
      icon: Map,
      color: 'text-green-600',
      insights: [
        {
          title: 'Hotspots de Uso',
          description: 'Cluster de alto consumo energético identificado na zona nordeste da Fábrica B.',
          confidence: 92,
          recommendation: 'Audit energético focado em equipamentos específicos desta área.'
        },
        {
          title: 'Correlação Geográfica',
          description: 'Instalações em regiões mais quentes mostram 23% mais consumo de água por unidade produzida.',
          confidence: 87,
          recommendation: 'Implementar sistemas de refrigeração com reciclagem de água nestas localidades.'
        }
      ]
    }
  ];

  const temporalPatterns = [
    {
      pattern: 'Diário',
      description: 'Pico de consumo energético entre 14h-16h excede em 28% a média diária',
      recommendation: 'Reagendamento de operações de alta energia para horários de menor demanda',
      savings: '15-20% em custos energéticos'
    },
    {
      pattern: 'Semanal',
      description: 'Segundas-feiras consomem 35% mais água que outros dias úteis',
      recommendation: 'Investigar protocolos de inicialização após finais de semana',
      savings: 'Até 18% em consumo semanal de água'
    },
    {
      pattern: 'Sazonal',
      description: 'Verão aumenta consumo energético em 22% comparado à primavera',
      recommendation: 'Manutenção preventiva de sistemas de refrigeração antes do verão',
      savings: '10-15% em picos sazonais'
    }
  ];

  const correlationData = [
    {
      factors: 'Temperatura x Energia',
      correlation: '0.78 (forte)',
      insight: 'Cada 1°C acima de 28°C aumenta consumo energético em 3.2%',
      action: 'Melhorar isolamento térmico e eficiência de sistemas HVAC'
    },
    {
      factors: 'Produção x Água',
      correlation: '0.92 (muito forte)',
      insight: 'Relação não-linear após 80% da capacidade produtiva',
      action: 'Otimizar processos para eficiência hídrica em alta produção'
    },
    {
      factors: 'Precipitação x Energia',
      correlation: '-0.45 (moderada)',
      insight: 'Dias chuvosos reduzem consumo energético em iluminação e refrigeração',
      action: 'Ajustar setpoints de sistemas baseados em previsão meteorológica'
    }
  ];

  const handleSearch = () => {
    setProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setProcessing(false);
      setShowAnalysis(true);
    }, 2000);
  };

  const useExample = (example: string) => {
    setQuery(example);
  };

  return (
    <div className="space-y-6">
      {/* AI Query Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Análises de IA para Uso de Recursos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <Input
                placeholder="Faça uma pergunta sobre o uso de recursos..."
                className="pl-10 py-6 text-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && query.trim() !== '' && handleSearch()}
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <Button 
                className="absolute right-2 top-2" 
                size="sm"
                onClick={handleSearch}
                disabled={query.trim() === '' || processing}
              >
                {processing ? (
                  <>
                    <Brain className="h-4 w-4 mr-2 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Analisar
                  </>
                )}
              </Button>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Perguntas Exemplo:</p>
              <div className="flex flex-wrap gap-2">
                {sampleQueries.map((example, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => useExample(example)}
                  >
                    {example}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-800 mb-1">O que você pode perguntar</p>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Análise temporal de consumo (diário, semanal, mensal, sazonal)</li>
                    <li>• Comparações entre localizações, períodos ou recursos</li>
                    <li>• Correlações entre fatores (ex: temperatura x consumo)</li>
                    <li>• Previsões e tendências futuras de uso de recursos</li>
                    <li>• Identificação de anomalias e oportunidades de otimização</li>
                    <li>• Impactos de medidas implementadas ao longo do tempo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Insights */}
      <div className="grid grid-cols-1 gap-6">
        {insightCategories.map((category, index) => {
          const CategoryIcon = category.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon className={`h-5 w-5 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.insights.map((insight, idx) => (
                    <div key={idx} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{insight.title}</h3>
                        <div className="flex items-center gap-1">
                          <Brain className="h-4 w-4 text-purple-500" />
                          <span className="text-xs font-medium">{insight.confidence}% confiança</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{insight.description}</p>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-xs text-blue-800">
                          <span className="font-medium">Recomendação IA:</span>
                          <span className="ml-1">{insight.recommendation}</span>
                        </p>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline" className="flex-1">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          Detalhar
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Aplicar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Temporal Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            Análise Temporal de Padrões
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {temporalPatterns.map((pattern, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <h3 className="font-medium">Padrão {pattern.pattern}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">{pattern.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Recomendação:</span>
                    <span className="font-medium ml-1">{pattern.recommendation}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Economia Potencial:</span>
                    <span className="font-medium ml-1 text-green-600">{pattern.savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Correlations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Correlações e Dependências
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Fatores</th>
                  <th className="text-left py-3 px-4">Correlação</th>
                  <th className="text-left py-3 px-4">Insights</th>
                  <th className="text-left py-3 px-4">Ação Recomendada</th>
                </tr>
              </thead>
              <tbody>
                {correlationData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 font-medium">{item.factors}</td>
                    <td className="py-3 px-4">{item.correlation}</td>
                    <td className="py-3 px-4">{item.insight}</td>
                    <td className="py-3 px-4">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
            <p className="text-sm text-green-800">
              <span className="font-medium">Insight IA:</span> 
              <span className="ml-1">Ao otimizar os fatores com correlações fortes (acima de 0.7), você pode impactar até 65% do consumo total de recursos.</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Resource Utilization by Category */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-orange-600" />
            Utilização de Recursos por Categoria
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-medium">Energia</h3>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">2.456 kWh</Badge>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Produção</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-yellow-500 rounded" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Climatização</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-yellow-500 rounded" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Iluminação</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-yellow-500 rounded" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Outros</span>
                    <span className="font-medium">5%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-yellow-500 rounded" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-xs">
                <p className="text-gray-600">
                  <span className="font-medium">Insight IA:</span>
                  <span className="ml-1">Otimização na produção pode reduzir até 20% do consumo total</span>
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-600" />
                  <h3 className="font-medium">Água</h3>
                </div>
                <Badge className="bg-blue-100 text-blue-800">1.234 L</Badge>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Processo Industrial</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-500 rounded" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Limpeza</span>
                    <span className="font-medium">18%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-500 rounded" style={{ width: '18%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Sanitários</span>
                    <span className="font-medium">8%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-500 rounded" style={{ width: '8%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Outros</span>
                    <span className="font-medium">2%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-500 rounded" style={{ width: '2%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-xs">
                <p className="text-gray-600">
                  <span className="font-medium">Insight IA:</span>
                  <span className="ml-1">Sistema de reuso pode recuperar até 60% da água industrial</span>
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-green-600" />
                  <h3 className="font-medium">Materiais</h3>
                </div>
                <Badge className="bg-green-100 text-green-800">856 kg</Badge>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Matéria-prima</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-green-500 rounded" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Embalagem</span>
                    <span className="font-medium">12%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-green-500 rounded" style={{ width: '12%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Manutenção</span>
                    <span className="font-medium">4%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-green-500 rounded" style={{ width: '4%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Outros</span>
                    <span className="font-medium">2%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-green-500 rounded" style={{ width: '2%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-xs">
                <p className="text-gray-600">
                  <span className="font-medium">Insight IA:</span>
                  <span className="ml-1">Redução de 5% em desperdício equivale a economia anual de R$ 180.000</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAnalytics;
