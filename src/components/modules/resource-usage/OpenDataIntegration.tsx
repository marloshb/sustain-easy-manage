
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Wifi, 
  TrendingUp, 
  Globe,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Calendar
} from 'lucide-react';

const OpenDataIntegration = () => {
  const [refreshing, setRefreshing] = useState<string | null>(null);

  const dataConnections = [
    {
      id: 'epa',
      name: 'EPA (Environmental Protection Agency)',
      description: 'Dados de qualidade do ar, água e regulamentações ambientais',
      status: 'connected',
      lastSync: '2024-01-22 14:30',
      dataTypes: ['Qualidade do Ar', 'Qualidade da Água', 'Emissões', 'Regulamentações'],
      coverage: 'Estados Unidos',
      updateFrequency: 'Diário',
      recordsCount: '45,892'
    },
    {
      id: 'noaa',
      name: 'NOAA (National Oceanic and Atmospheric)',
      description: 'Dados climáticos, meteorológicos e oceanográficos',
      status: 'connected',
      lastSync: '2024-01-22 12:15',
      dataTypes: ['Temperatura', 'Precipitação', 'Ventos', 'Mudanças Climáticas'],
      coverage: 'Global',
      updateFrequency: 'Hora em hora',
      recordsCount: '128,456'
    },
    {
      id: 'worldbank',
      name: 'World Bank Open Data',
      description: 'Indicadores socioeconômicos e de desenvolvimento',
      status: 'connected',
      lastSync: '2024-01-22 08:00',
      dataTypes: ['Demografia', 'Economia', 'Energia', 'Sustentabilidade'],
      coverage: 'Global',
      updateFrequency: 'Semanal',
      recordsCount: '23,789'
    },
    {
      id: 'iucn',
      name: 'IUCN Red List',
      description: 'Dados de biodiversidade e conservação',
      status: 'warning',
      lastSync: '2024-01-20 16:45',
      dataTypes: ['Espécies', 'Habitats', 'Conservação', 'Biodiversidade'],
      coverage: 'Global',
      updateFrequency: 'Mensal',
      recordsCount: '8,934'
    },
    {
      id: 'copernicus',
      name: 'Copernicus Climate Data',
      description: 'Dados satelitais de monitoramento climático e ambiental',
      status: 'error',
      lastSync: '2024-01-19 10:20',
      dataTypes: ['Imagens Satélite', 'Clima', 'Vegetação', 'Oceanos'],
      coverage: 'Global',
      updateFrequency: 'Diário',
      recordsCount: '67,123'
    }
  ];

  const benchmarkData = [
    {
      metric: 'Consumo de Energia por m²',
      ourValue: '145 kWh/m²/ano',
      sectorAverage: '168 kWh/m²/ano',
      regionAverage: '152 kWh/m²/ano',
      performance: 'above',
      source: 'EPA + World Bank'
    },
    {
      metric: 'Consumo de Água per capita',
      ourValue: '3.2 m³/pessoa/mês',
      sectorAverage: '4.1 m³/pessoa/mês',
      regionAverage: '3.8 m³/pessoa/mês',
      performance: 'above',
      source: 'NOAA + World Bank'
    },
    {
      metric: 'Emissões CO2 por produto',
      ourValue: '2.8 kg CO2/unidade',
      sectorAverage: '3.5 kg CO2/unidade',
      regionAverage: '3.1 kg CO2/unidade',
      performance: 'above',
      source: 'EPA'
    },
    {
      metric: 'Eficiência de Materiais',
      ourValue: '87%',
      sectorAverage: '82%',
      regionAverage: '84%',
      performance: 'above',
      source: 'World Bank'
    }
  ];

  const contextualInsights = [
    {
      title: 'Impacto Climático Regional',
      description: 'Dados NOAA indicam aumento de 2.3°C na temperatura média regional nos últimos 5 anos',
      source: 'NOAA',
      impact: 'Aumento de 15% no consumo de energia para climatização',
      recommendation: 'Considerar sistemas de refrigeração mais eficientes'
    },
    {
      title: 'Qualidade do Ar Local',
      description: 'EPA reporta melhoria de 12% na qualidade do ar na região metropolitana',
      source: 'EPA',
      impact: 'Redução de filtros industriais necessários',
      recommendation: 'Oportunidade para otimizar sistemas de filtragem'
    },
    {
      title: 'Disponibilidade Hídrica',
      description: 'World Bank prevê redução de 8% na disponibilidade hídrica regional até 2030',
      source: 'World Bank + NOAA',
      impact: 'Necessidade de estratégias de conservação de água',
      recommendation: 'Implementar sistemas de reciclagem e captação de água da chuva'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'error': return <AlertCircle className="h-4 w-4 text-red-600" />;
      default: return <Wifi className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPerformanceColor = (performance: string) => {
    return performance === 'above' ? 'text-green-600' : 
           performance === 'below' ? 'text-red-600' : 'text-yellow-600';
  };

  const handleRefresh = async (connectionId: string) => {
    setRefreshing(connectionId);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(null);
  };

  return (
    <div className="space-y-6">
      {/* Data Source Connections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            Conexões com Fontes de Dados Abertos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dataConnections.map((connection) => (
              <div key={connection.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium">{connection.name}</h3>
                      <p className="text-sm text-gray-600">{connection.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(connection.status)}
                    <Badge className={getStatusColor(connection.status)}>
                      {connection.status === 'connected' ? 'Conectado' :
                       connection.status === 'warning' ? 'Atenção' : 'Erro'}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3 text-sm">
                  <div>
                    <span className="text-gray-600">Última Sincronização:</span>
                    <div className="font-medium">{connection.lastSync}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Cobertura:</span>
                    <div className="font-medium">{connection.coverage}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Frequência:</span>
                    <div className="font-medium">{connection.updateFrequency}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Registros:</span>
                    <div className="font-medium">{connection.recordsCount}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {connection.dataTypes.map((type, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRefresh(connection.id)}
                    disabled={refreshing === connection.id}
                  >
                    <RefreshCw className={`h-3 w-3 mr-1 ${refreshing === connection.id ? 'animate-spin' : ''}`} />
                    {refreshing === connection.id ? 'Sincronizando...' : 'Sincronizar'}
                  </Button>
                  <Button size="sm" variant="outline">
                    Configurar
                  </Button>
                  <Button size="sm" variant="outline">
                    Ver Dados
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benchmarking Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Benchmarking com Dados Externos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {benchmarkData.map((benchmark, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{benchmark.metric}</h3>
                  <Badge variant="outline">{benchmark.source}</Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Nosso Desempenho</p>
                    <p className="text-lg font-bold text-blue-600">{benchmark.ourValue}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Média do Setor</p>
                    <p className="text-lg font-bold text-gray-600">{benchmark.sectorAverage}</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Média Regional</p>
                    <p className="text-lg font-bold text-purple-600">{benchmark.regionAverage}</p>
                  </div>
                </div>
                
                <div className="mt-3 flex items-center justify-center">
                  <Badge className={`${getPerformanceColor(benchmark.performance)} bg-transparent`}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {benchmark.performance === 'above' ? 'Acima da Média' : 'Abaixo da Média'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contextual Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-orange-600" />
            Insights Contextuais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contextualInsights.map((insight, index) => (
              <div key={index} className="p-4 border-l-4 border-l-orange-500 bg-orange-50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-orange-800">{insight.title}</h3>
                  <Badge variant="outline">{insight.source}</Badge>
                </div>
                <p className="text-sm text-orange-700 mb-2">{insight.description}</p>
                <div className="text-sm space-y-1">
                  <div>
                    <span className="font-medium text-orange-800">Impacto:</span>
                    <span className="text-orange-700 ml-1">{insight.impact}</span>
                  </div>
                  <div>
                    <span className="font-medium text-orange-800">Recomendação:</span>
                    <span className="text-orange-700 ml-1">{insight.recommendation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Integration Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            Resumo da Integração de Dados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">5</p>
              <p className="text-sm text-gray-600">Fontes Conectadas</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">274k</p>
              <p className="text-sm text-gray-600">Registros Integrados</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-2xl font-bold text-orange-600">12</p>
              <p className="text-sm text-gray-600">Insights Gerados</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">98%</p>
              <p className="text-sm text-gray-600">Qualidade dos Dados</p>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-gray-800 mb-1">
              Benefícios da Integração
            </p>
            <div className="text-xs text-gray-600 space-y-1">
              <p>• Benchmarking automático com padrões setoriais e regionais</p>
              <p>• Contexto adicional para tomada de decisões estratégicas</p>
              <p>• Identificação proativa de riscos e oportunidades</p>
              <p>• Conformidade com padrões internacionais de relatórios</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenDataIntegration;
