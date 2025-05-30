
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Wifi, 
  TrendingUp, 
  Satellite,
  Cloud,
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const OpenDataConnections = () => {
  const [activeView, setActiveView] = useState('sources');

  const dataSources = [
    {
      id: "EPA-001",
      name: "EPA Air Quality System",
      provider: "US Environmental Protection Agency",
      type: "Qualidade do Ar",
      status: "Conectado",
      lastSync: "2024-02-25 14:30",
      dataPoints: "2,450",
      region: "América do Norte",
      apiStatus: "Ativo",
      updateFrequency: "Horária",
      relevantMetrics: ["PM2.5", "PM10", "O3", "NO2", "SO2", "CO"]
    },
    {
      id: "NOAA-001",
      name: "NOAA Climate Data",
      provider: "National Oceanic and Atmospheric Administration",
      type: "Dados Climáticos",
      status: "Conectado",
      lastSync: "2024-02-25 12:00",
      dataPoints: "1,890",
      region: "Global",
      apiStatus: "Ativo",
      updateFrequency: "Diária",
      relevantMetrics: ["Temperatura", "Precipitação", "Umidade", "Vento", "Pressão"]
    },
    {
      id: "IUCN-001",
      name: "IUCN Red List API",
      provider: "International Union for Conservation of Nature",
      type: "Biodiversidade",
      status: "Conectado",
      lastSync: "2024-02-24 08:00",
      dataPoints: "856",
      region: "Global",
      apiStatus: "Ativo",
      updateFrequency: "Semanal",
      relevantMetrics: ["Espécies Ameaçadas", "Habitats", "Áreas Protegidas"]
    },
    {
      id: "COPERNICUS-001",
      name: "Copernicus Earth Observation",
      provider: "European Space Agency",
      type: "Satélite",
      status: "Parcialmente Conectado",
      lastSync: "2024-02-23 16:45",
      dataPoints: "3,200",
      region: "Global",
      apiStatus: "Limitado",
      updateFrequency: "Diária",
      relevantMetrics: ["Cobertura Terrestre", "Desflorestamento", "Emissões", "Qualidade Água"]
    },
    {
      id: "CETESB-001",
      name: "CETESB - Qualidade do Ar SP",
      provider: "Companhia Ambiental do Estado de São Paulo",
      type: "Qualidade do Ar",
      status: "Erro de Conexão",
      lastSync: "2024-02-22 09:15",
      dataPoints: "1,234",
      region: "São Paulo",
      apiStatus: "Erro",
      updateFrequency: "Horária",
      relevantMetrics: ["IQA", "MP10", "MP2.5", "O3", "NO2", "SO2"]
    }
  ];

  const benchmarkData = [
    {
      id: "BENCH-001",
      metric: "Emissões CO2",
      ourValue: "2,654 t/ano",
      industryAverage: "3,200 t/ano",
      regionalAverage: "2,980 t/ano",
      performance: "Melhor que Média",
      percentile: "25°",
      trend: "Decreasing",
      source: "EPA GHG Inventory"
    },
    {
      id: "BENCH-002",
      metric: "Consumo de Água",
      ourValue: "145,000 m³/ano",
      industryAverage: "180,000 m³/ano",
      regionalAverage: "165,000 m³/ano",
      performance: "Melhor que Média",
      percentile: "20°",
      trend: "Stable",
      source: "NOAA Water Data"
    },
    {
      id: "BENCH-003",
      metric: "Qualidade do Ar (PM2.5)",
      ourValue: "12 μg/m³",
      industryAverage: "15 μg/m³",
      regionalAverage: "18 μg/m³",
      performance: "Melhor que Média",
      percentile: "15°",
      trend: "Improving",
      source: "EPA Air Quality"
    },
    {
      id: "BENCH-004",
      metric: "Biodiversidade Local",
      ourValue: "85% nativa",
      industryAverage: "70% nativa",
      regionalAverage: "65% nativa",
      performance: "Acima da Média",
      percentile: "10°",
      trend: "Improving",
      source: "IUCN Red List"
    }
  ];

  const dataIntegrations = [
    {
      id: "INT-001",
      name: "Análise Correlativa - Emissões vs Qualidade do Ar",
      description: "Correlaciona dados internos de emissões com medições de qualidade do ar regionais",
      sources: ["EPA Air Quality", "Dados Internos de Emissões"],
      status: "Ativo",
      insights: "Correlação negativa de 0.72 entre emissões e qualidade do ar local",
      lastUpdate: "2024-02-25"
    },
    {
      id: "INT-002", 
      name: "Benchmarking Setorial - Consumo Energético",
      description: "Compara performance energética com médias do setor manufatureiro",
      sources: ["NOAA Climate Data", "EPA Energy Star"],
      status: "Ativo",
      insights: "15% abaixo da média setorial em consumo de energia",
      lastUpdate: "2024-02-24"
    },
    {
      id: "INT-003",
      name: "Impacto de Biodiversidade - Proximidade a Áreas Protegidas",
      description: "Avalia impacto das operações em áreas de conservação próximas",
      sources: ["IUCN Red List", "Copernicus Satellite"],
      status: "Em Desenvolvimento",
      insights: "2 instalações dentro de zona de amortecimento de APA",
      lastUpdate: "2024-02-23"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Conectado': case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Parcialmente Conectado': case 'Limitado': return 'bg-yellow-100 text-yellow-800';
      case 'Erro de Conexão': case 'Erro': return 'bg-red-100 text-red-800';
      case 'Em Desenvolvimento': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'Melhor que Média': case 'Acima da Média': return 'bg-green-100 text-green-800';
      case 'Na Média': return 'bg-yellow-100 text-yellow-800';
      case 'Abaixo da Média': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'Improving': case 'Decreasing': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'Stable': return <Activity className="h-4 w-4 text-blue-600" />;
      case 'Worsening': case 'Increasing': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Conexões com Dados Abertos
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={activeView === 'sources' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('sources')}
              >
                Fontes de Dados
              </Button>
              <Button 
                variant={activeView === 'benchmark' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('benchmark')}
              >
                Benchmarking
              </Button>
              <Button 
                variant={activeView === 'integrations' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('integrations')}
              >
                Integrações
              </Button>
              <Button size="sm">
                Nova Conexão
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {activeView === 'sources' && (
            <div className="space-y-4">
              {dataSources.map((source) => (
                <Card key={source.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{source.name}</h3>
                          <p className="text-sm text-gray-600">{source.provider}</p>
                          <p className="text-xs text-gray-500">Região: {source.region}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(source.apiStatus)}>
                            <Wifi className="h-3 w-3 mr-1" />
                            {source.apiStatus}
                          </Badge>
                          <Badge className={getStatusColor(source.status)}>
                            {source.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{source.dataPoints}</div>
                          <p className="text-xs text-gray-600">Pontos de Dados</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm font-bold text-green-600">{source.updateFrequency}</div>
                          <p className="text-xs text-gray-600">Atualização</p>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-sm font-bold text-purple-600">{source.type}</div>
                          <p className="text-xs text-gray-600">Tipo de Dados</p>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-sm font-bold text-orange-600">{source.relevantMetrics.length}</div>
                          <p className="text-xs text-gray-600">Métricas</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Métricas Disponíveis</p>
                        <div className="flex flex-wrap gap-1">
                          {source.relevantMetrics.map((metric, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">Última sincronização:</span>
                          <span className="text-sm font-medium">{source.lastSync}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Configurar
                          </Button>
                          <Button size="sm" variant="outline">
                            Histórico
                          </Button>
                          <Button size="sm">
                            Sincronizar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'benchmark' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Benchmarking com Dados Abertos</h3>
              {benchmarkData.map((benchmark) => (
                <Card key={benchmark.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{benchmark.metric}</h3>
                          <p className="text-sm text-gray-600">Fonte: {benchmark.source}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getPerformanceColor(benchmark.performance)}>
                            {benchmark.performance}
                          </Badge>
                          <div className="flex items-center">
                            {getTrendIcon(benchmark.trend)}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{benchmark.ourValue}</div>
                          <p className="text-xs text-gray-600">Nosso Valor</p>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-sm font-bold text-orange-600">{benchmark.industryAverage}</div>
                          <p className="text-xs text-gray-600">Média do Setor</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm font-bold text-green-600">{benchmark.regionalAverage}</div>
                          <p className="text-xs text-gray-600">Média Regional</p>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-sm font-bold text-purple-600">{benchmark.percentile}</div>
                          <p className="text-xs text-gray-600">Percentil</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">Tendência:</span>
                          <span className="text-sm font-medium">{benchmark.trend}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Ver Histórico
                          </Button>
                          <Button size="sm" variant="outline">
                            Análise Detalhada
                          </Button>
                          <Button size="sm">
                            Exportar Dados
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'integrations' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Integrações de Dados</h3>
              {dataIntegrations.map((integration) => (
                <Card key={integration.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{integration.name}</h3>
                          <p className="text-sm text-gray-600">{integration.description}</p>
                          <p className="text-xs text-gray-500">Última atualização: {integration.lastUpdate}</p>
                        </div>
                        <Badge className={getStatusColor(integration.status)}>
                          {integration.status}
                        </Badge>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Fontes de Dados</p>
                        <div className="flex flex-wrap gap-1">
                          {integration.sources.map((source, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              <Database className="h-3 w-3 mr-1" />
                              {source}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 mb-1">Principais Insights</p>
                        <p className="text-sm text-blue-700">{integration.insights}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">Integração ativa</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Configurar
                          </Button>
                          <Button size="sm" variant="outline">
                            Ver Relatório
                          </Button>
                          <Button size="sm">
                            Analisar Dados
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Status Geral das Conexões */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Wifi className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-bold">4/5</div>
            <p className="text-xs text-gray-600">Conexões Ativas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold">9,630</div>
            <p className="text-xs text-gray-600">Pontos de Dados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Satellite className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-lg font-bold">3</div>
            <p className="text-xs text-gray-600">Análises Integradas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-lg font-bold">12</div>
            <p className="text-xs text-gray-600">Benchmarks Ativos</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OpenDataConnections;
