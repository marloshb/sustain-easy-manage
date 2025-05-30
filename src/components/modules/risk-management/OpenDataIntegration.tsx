
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Globe,
  Cloud,
  Activity,
  TrendingUp,
  Satellite,
  RefreshCw,
  Download,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const OpenDataIntegration = () => {
  const [activeDataSource, setActiveDataSource] = useState('all');
  const [refreshing, setRefreshing] = useState<string | null>(null);

  const dataSources = [
    {
      id: 'epa',
      name: 'EPA',
      fullName: 'Environmental Protection Agency',
      country: 'EUA',
      type: 'Qualidade Ambiental',
      status: 'Ativo',
      lastSync: '2024-01-22 14:30',
      dataPoints: 15420,
      icon: Activity,
      color: 'text-green-600',
      description: 'Dados de qualidade do ar, água e regulamentações ambientais',
      endpoints: ['Air Quality', 'Water Quality', 'Emissions', 'Regulatory Data']
    },
    {
      id: 'noaa',
      name: 'NOAA',
      fullName: 'National Oceanic and Atmospheric Administration',
      country: 'EUA',
      type: 'Dados Climáticos',
      status: 'Ativo',
      lastSync: '2024-01-22 12:15',
      dataPoints: 28750,
      icon: Cloud,
      color: 'text-blue-600',
      description: 'Informações meteorológicas, climáticas e oceânicas',
      endpoints: ['Weather Data', 'Climate Forecasts', 'Ocean Data', 'Severe Weather']
    },
    {
      id: 'copernicus',
      name: 'Copernicus',
      fullName: 'Copernicus Earth Observation Programme',
      country: 'EU',
      type: 'Imagens de Satélite',
      status: 'Ativo',
      lastSync: '2024-01-22 09:45',
      dataPoints: 8920,
      icon: Satellite,
      color: 'text-purple-600',
      description: 'Imagens de satélite para monitoramento ambiental',
      endpoints: ['Land Monitoring', 'Marine Monitoring', 'Atmosphere', 'Climate Change']
    },
    {
      id: 'iucn',
      name: 'IUCN',
      fullName: 'International Union for Conservation of Nature',
      country: 'Global',
      type: 'Biodiversidade',
      status: 'Ativo',
      lastSync: '2024-01-21 16:20',
      dataPoints: 5680,
      icon: Globe,
      color: 'text-green-700',
      description: 'Dados sobre espécies ameaçadas e áreas protegidas',
      endpoints: ['Red List', 'Protected Areas', 'Species Data', 'Conservation Status']
    },
    {
      id: 'worldbank',
      name: 'World Bank',
      fullName: 'World Bank Open Data',
      country: 'Global',
      type: 'Indicadores Socioeconômicos',
      status: 'Ativo',
      lastSync: '2024-01-22 11:00',
      dataPoints: 12340,
      icon: TrendingUp,
      color: 'text-orange-600',
      description: 'Indicadores de desenvolvimento e dados socioeconômicos',
      endpoints: ['Development Indicators', 'Climate Data', 'Social Data', 'Economic Data']
    }
  ];

  const benchmarkingData = [
    {
      metric: 'Emissões de CO2 per capita',
      ourValue: '8.2 t/ano',
      regionAverage: '9.5 t/ano',
      globalAverage: '12.3 t/ano',
      status: 'Melhor que média',
      trend: 'down'
    },
    {
      metric: 'Consumo de Água Industrial',
      ourValue: '2.1 m³/ton produto',
      regionAverage: '2.8 m³/ton produto',
      globalAverage: '3.2 m³/ton produto',
      status: 'Melhor que média',
      trend: 'down'
    },
    {
      metric: 'Qualidade do Ar (PM2.5)',
      ourValue: '18 μg/m³',
      regionAverage: '22 μg/m³',
      globalAverage: '28 μg/m³',
      status: 'Melhor que média',
      trend: 'stable'
    },
    {
      metric: 'Índice de Biodiversidade Local',
      ourValue: '0.72',
      regionAverage: '0.68',
      globalAverage: '0.65',
      status: 'Acima da média',
      trend: 'up'
    }
  ];

  const integratedAlerts = [
    {
      source: 'NOAA',
      type: 'Climático',
      severity: 'Alto',
      message: 'Previsão de chuvas intensas pode afetar operações na Região Sul',
      timestamp: '2024-01-22 13:45',
      action: 'Ativar plano de contingência'
    },
    {
      source: 'EPA',
      type: 'Qualidade do Ar',
      severity: 'Médio',
      message: 'Níveis de ozônio acima do normal na região metropolitana',
      timestamp: '2024-01-22 10:30',
      action: 'Monitorar emissões locais'
    },
    {
      source: 'Copernicus',
      type: 'Monitoramento',
      severity: 'Baixo',
      message: 'Detecção de mudanças na cobertura vegetal próximo à instalação',
      timestamp: '2024-01-22 08:15',
      action: 'Análise de impacto'
    }
  ];

  const handleRefresh = async (sourceId: string) => {
    setRefreshing(sourceId);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Erro': return 'bg-red-100 text-red-800';
      case 'Limitado': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Integration Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center border-green-200">
          <CardContent className="p-4">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{dataSources.length}</div>
            <p className="text-sm text-gray-600">Fontes Ativas</p>
          </CardContent>
        </Card>
        <Card className="text-center border-blue-200">
          <CardContent className="p-4">
            <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">
              {dataSources.reduce((total, source) => total + source.dataPoints, 0).toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Pontos de Dados</p>
          </CardContent>
        </Card>
        <Card className="text-center border-orange-200">
          <CardContent className="p-4">
            <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">24h</div>
            <p className="text-sm text-gray-600">Última Sincronização</p>
          </CardContent>
        </Card>
        <Card className="text-center border-red-200">
          <CardContent className="p-4">
            <AlertCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-600">{integratedAlerts.length}</div>
            <p className="text-sm text-gray-600">Alertas Ativos</p>
          </CardContent>
        </Card>
      </div>

      {/* Data Sources Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-600" />
              Fontes de Dados Abertos Integradas
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-1" />
                Exportar Config
              </Button>
              <Button size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                Sincronizar Todas
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dataSources.map((source) => (
              <div key={source.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <source.icon className={`h-6 w-6 ${source.color}`} />
                    <div>
                      <h3 className="font-medium">{source.name}</h3>
                      <p className="text-sm text-gray-600">{source.fullName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(source.status)}>
                      {source.status}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleRefresh(source.id)}
                      disabled={refreshing === source.id}
                    >
                      {refreshing === source.id ? (
                        <RefreshCw className="h-3 w-3 animate-spin" />
                      ) : (
                        <RefreshCw className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-600">Tipo</p>
                    <p className="font-medium text-sm">{source.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">País/Região</p>
                    <p className="font-medium text-sm">{source.country}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Última Sincronização</p>
                    <p className="font-medium text-sm">{source.lastSync}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Pontos de Dados</p>
                    <p className="font-medium text-sm">{source.dataPoints.toLocaleString()}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3">{source.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {source.endpoints.map((endpoint, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {endpoint}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Configurar
                  </Button>
                  <Button size="sm" variant="outline">
                    Ver Dados
                  </Button>
                  <Button size="sm" variant="outline">
                    Histórico
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benchmarking Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Benchmarking com Dados Externos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Métrica</th>
                  <th className="text-left py-3">Nosso Valor</th>
                  <th className="text-left py-3">Média Regional</th>
                  <th className="text-left py-3">Média Global</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Tendência</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkingData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium">{item.metric}</td>
                    <td className="py-3 font-bold text-blue-600">{item.ourValue}</td>
                    <td className="py-3">{item.regionAverage}</td>
                    <td className="py-3">{item.globalAverage}</td>
                    <td className="py-3">
                      <Badge className="bg-green-100 text-green-800">
                        {item.status}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-1">
                        {item.trend === 'down' && <span className="text-green-600">↓</span>}
                        {item.trend === 'up' && <span className="text-blue-600">↑</span>}
                        {item.trend === 'stable' && <span className="text-gray-600">→</span>}
                        <span className="text-xs">{item.trend}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Integrated Alerts */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            Alertas Integrados de Dados Externos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {integratedAlerts.map((alert, index) => (
              <div key={index} className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{alert.source}</Badge>
                    <Badge variant="outline">{alert.type}</Badge>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <span className="text-xs text-gray-500">{alert.timestamp}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{alert.message}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600">{alert.action}</p>
                  <div className="flex gap-2">
                    <Button size="sm">
                      Tomar Ação
                    </Button>
                    <Button size="sm" variant="outline">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-purple-600" />
            Configuração de APIs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Configurações de Sincronização</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Frequência de Atualização</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>A cada hora</option>
                    <option>A cada 6 horas</option>
                    <option>Diariamente</option>
                    <option>Semanalmente</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Timeout de Requisição</label>
                  <input 
                    type="number" 
                    className="w-full mt-1 p-2 border rounded-md"
                    defaultValue="30"
                    placeholder="segundos"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Retry em Caso de Erro</label>
                  <input 
                    type="number" 
                    className="w-full mt-1 p-2 border rounded-md"
                    defaultValue="3"
                    placeholder="tentativas"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Filtros de Dados</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Região Geográfica</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Brasil</option>
                    <option>América do Sul</option>
                    <option>Global</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Período de Dados</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Último ano</option>
                    <option>Últimos 5 anos</option>
                    <option>Histórico completo</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Qualidade Mínima</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Alta qualidade</option>
                    <option>Qualidade média</option>
                    <option>Todos os dados</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button>Salvar Configuração</Button>
            <Button variant="outline">Testar Conexões</Button>
            <Button variant="outline">Restaurar Padrões</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenDataIntegration;
