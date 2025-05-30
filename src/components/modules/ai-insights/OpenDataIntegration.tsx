
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Globe, 
  TrendingUp,
  RefreshCw,
  Download,
  Eye,
  Activity,
  BarChart3,
  Zap
} from 'lucide-react';

const OpenDataIntegration = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dataSources = [
    {
      id: 'epa',
      name: 'EPA (Environmental Protection Agency)',
      description: 'Dados de qualidade do ar, água e emissões',
      status: 'Conectado',
      lastSync: '2024-01-20 14:30',
      dataPoints: 1247,
      quality: 98,
      endpoints: [
        'Air Quality Index',
        'Water Quality Data',
        'Emissions Inventory',
        'Facility Registry'
      ]
    },
    {
      id: 'noaa',
      name: 'NOAA (National Oceanic and Atmospheric)',
      description: 'Dados climáticos e meteorológicos',
      status: 'Conectado',
      lastSync: '2024-01-20 13:45',
      dataPoints: 892,
      quality: 96,
      endpoints: [
        'Climate Data',
        'Weather Observations',
        'Storm Events',
        'Ocean Data'
      ]
    },
    {
      id: 'copernicus',
      name: 'Copernicus (EU Earth Observation)',
      description: 'Imagens de satélite e dados ambientais',
      status: 'Conectado',
      lastSync: '2024-01-20 12:00',
      dataPoints: 456,
      quality: 94,
      endpoints: [
        'Satellite Imagery',
        'Land Cover',
        'Atmosphere Monitoring',
        'Climate Change Service'
      ]
    },
    {
      id: 'worldbank',
      name: 'World Bank Open Data',
      description: 'Indicadores socioeconômicos globais',
      status: 'Conectado',
      lastSync: '2024-01-20 11:15',
      dataPoints: 623,
      quality: 92,
      endpoints: [
        'Economic Indicators',
        'Social Development',
        'Environmental Data',
        'Governance Metrics'
      ]
    },
    {
      id: 'iucn',
      name: 'IUCN Red List',
      description: 'Dados de biodiversidade e conservação',
      status: 'Conectado',
      lastSync: '2024-01-20 10:30',
      dataPoints: 234,
      quality: 99,
      endpoints: [
        'Species Assessment',
        'Habitat Data',
        'Conservation Status',
        'Protected Areas'
      ]
    }
  ];

  const benchmarkData = [
    {
      metric: 'Emissões CO2 per capita',
      yourValue: '4.2 tCO2e',
      sectorAverage: '5.8 tCO2e',
      regionalAverage: '6.1 tCO2e',
      performance: 'Melhor que média',
      trend: 'Melhorando',
      source: 'EPA + World Bank'
    },
    {
      metric: 'Qualidade do Ar (PM2.5)',
      yourValue: '12 μg/m³',
      sectorAverage: '18 μg/m³',
      regionalAverage: '22 μg/m³',
      performance: 'Acima da média',
      trend: 'Estável',
      source: 'EPA + NOAA'
    },
    {
      metric: 'Consumo de Água',
      yourValue: '2.1 m³/t produto',
      sectorAverage: '3.4 m³/t produto',
      regionalAverage: '4.2 m³/t produto',
      performance: 'Excelente',
      trend: 'Melhorando',
      source: 'World Bank'
    },
    {
      metric: 'Biodiversidade (Impacto)',
      yourValue: 'Baixo',
      sectorAverage: 'Médio',
      regionalAverage: 'Médio-Alto',
      performance: 'Melhor prática',
      trend: 'Mantendo',
      source: 'IUCN + Copernicus'
    }
  ];

  const integrationMetrics = [
    {
      title: 'Fontes Conectadas',
      value: '12',
      change: '+3',
      description: 'APIs ativas'
    },
    {
      title: 'Dados Sincronizados',
      value: '3.4M',
      change: '+125K',
      description: 'Pontos de dados'
    },
    {
      title: 'Qualidade Média',
      value: '95.8%',
      change: '+1.2%',
      description: 'Precisão dos dados'
    },
    {
      title: 'Benchmarks Gerados',
      value: '187',
      change: '+24',
      description: 'Comparações ativas'
    }
  ];

  const recentInsights = [
    {
      title: 'Comparação Setorial Favorável',
      description: 'Suas emissões estão 27% abaixo da média do setor metalúrgico',
      source: 'EPA + World Bank',
      confidence: 94,
      impact: 'Positivo'
    },
    {
      title: 'Risco Climático Identificado',
      description: 'NOAA prevê aumento de 15% na precipitação na região',
      source: 'NOAA Climate Data',
      confidence: 89,
      impact: 'Neutro'
    },
    {
      title: 'Oportunidade de Melhoria',
      description: 'Consumo de água 40% acima da melhor prática regional',
      source: 'World Bank + Regional Data',
      confidence: 92,
      impact: 'Ação Necessária'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Conectado': return 'bg-green-100 text-green-800';
      case 'Sincronizando': return 'bg-blue-100 text-blue-800';
      case 'Erro': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'Excelente':
      case 'Melhor prática':
      case 'Melhor que média': return 'text-green-600';
      case 'Acima da média': return 'text-blue-600';
      case 'Na média': return 'text-yellow-600';
      case 'Abaixo da média': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Positivo': return 'bg-green-100 text-green-800';
      case 'Neutro': return 'bg-blue-100 text-blue-800';
      case 'Ação Necessária': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Integration Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {integrationMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500">{metric.description}</p>
                  <span className="text-xs font-medium text-green-600">
                    {metric.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-600" />
              Fontes de Dados Abertas
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={handleRefresh}
                disabled={refreshing}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                Sincronizar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dataSources.map((source) => (
                <div key={source.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">{source.name}</h3>
                    <Badge className={getStatusColor(source.status)}>
                      {source.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{source.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div>
                      <span className="text-gray-500">Pontos de dados: </span>
                      <span className="font-medium">{source.dataPoints.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Qualidade: </span>
                      <span className="font-medium text-green-600">{source.quality}%</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Qualidade dos dados:</span>
                      <span className="font-medium">{source.quality}%</span>
                    </div>
                    <Progress value={source.quality} className="h-2" />
                  </div>

                  <div className="mb-3">
                    <p className="text-xs font-medium text-gray-700 mb-1">Endpoints ativos:</p>
                    <div className="flex flex-wrap gap-1">
                      {source.endpoints.slice(0, 3).map((endpoint, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {endpoint}
                        </Badge>
                      ))}
                      {source.endpoints.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{source.endpoints.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Última sincronização: {source.lastSync}</span>
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      Configurar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benchmark Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Análise de Benchmarking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {benchmarkData.map((benchmark, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-sm mb-3">{benchmark.metric}</h3>
                  
                  <div className="grid grid-cols-3 gap-3 mb-3 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs">Seu valor</p>
                      <p className="font-bold text-blue-600">{benchmark.yourValue}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Média setor</p>
                      <p className="font-medium">{benchmark.sectorAverage}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Média regional</p>
                      <p className="font-medium">{benchmark.regionalAverage}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div>
                      <span className="text-gray-500">Performance: </span>
                      <span className={`font-medium ${getPerformanceColor(benchmark.performance)}`}>
                        {benchmark.performance}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Tendência: </span>
                      <span className="font-medium">{benchmark.trend}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Fonte: {benchmark.source}</span>
                    <Button size="sm" variant="outline">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            Insights de Dados Externos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInsights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <Badge className={getImpactColor(insight.impact)}>
                        {insight.impact}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-gray-500">Fonte: </span>
                        <span className="font-medium">{insight.source}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Confiança: </span>
                        <span className="font-medium text-green-600">{insight.confidence}%</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Investigar
                      </Button>
                      <Button size="sm" variant="outline">
                        Compartilhar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-teal-600" />
            Gerenciamento de Dados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Conectar Nova Fonte</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Adicionar novos provedores de dados
                </p>
                <Button size="sm" className="w-full">
                  Adicionar Fonte
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <RefreshCw className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Sincronização Automática</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Configurar atualizações programadas
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Configurar
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Exportar Benchmarks</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Gerar relatórios comparativos
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Exportar
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenDataIntegration;
