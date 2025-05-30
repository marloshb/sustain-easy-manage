
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  Layers, 
  MapPin,
  Activity,
  Target,
  TrendingUp,
  AlertTriangle,
  Eye,
  Download,
  Filter
} from 'lucide-react';

const GISIntegration = () => {
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);
  const [activeLayer, setActiveLayer] = useState('predictions');

  const spatialAnalyses = [
    {
      id: 'emissions_hotspots',
      name: 'Hotspots de Emissões',
      description: 'Análise de cluster para identificar áreas críticas',
      type: 'Cluster Analysis',
      status: 'Concluído',
      findings: 'Identificados 3 hotspots principais',
      confidence: 94,
      mapData: {
        hotspots: 3,
        area: '2.5 km²',
        risk: 'Alto'
      }
    },
    {
      id: 'risk_buffer',
      name: 'Buffer de Riscos',
      description: 'Análise de proximidade a áreas sensíveis',
      type: 'Buffer Analysis',
      status: 'Em Execução',
      findings: '2 instalações em zona de risco',
      confidence: 87,
      mapData: {
        affected: 2,
        buffer: '5 km',
        communities: 8
      }
    },
    {
      id: 'resource_optimization',
      name: 'Otimização Espacial',
      description: 'Distribuição otimizada de recursos',
      type: 'Spatial Optimization',
      status: 'Agendado',
      findings: 'Análise pendente',
      confidence: null,
      mapData: {
        efficiency: 'TBD',
        coverage: 'TBD',
        cost: 'TBD'
      }
    }
  ];

  const mapLayers = [
    {
      id: 'predictions',
      name: 'Previsões de IA',
      description: 'Mapeamento de previsões e tendências',
      visible: true,
      dataPoints: 45,
      lastUpdate: '2024-01-20 14:30'
    },
    {
      id: 'anomalies',
      name: 'Anomalias Detectadas',
      description: 'Localização de anomalias identificadas',
      visible: true,
      dataPoints: 12,
      lastUpdate: '2024-01-20 13:45'
    },
    {
      id: 'optimization',
      name: 'Oportunidades de Otimização',
      description: 'Áreas com potencial de melhoria',
      visible: false,
      dataPoints: 23,
      lastUpdate: '2024-01-20 12:15'
    },
    {
      id: 'compliance',
      name: 'Riscos de Conformidade',
      description: 'Zonas com riscos regulatórios',
      visible: true,
      dataPoints: 8,
      lastUpdate: '2024-01-20 11:30'
    }
  ];

  const spatialInsights = [
    {
      title: 'Correlação Espacial Detectada',
      description: 'Emissões altas correlacionadas com densidade industrial',
      location: 'Zona Industrial Norte',
      confidence: 92,
      action: 'Revisar políticas de zoneamento'
    },
    {
      title: 'Cluster de Incidentes',
      description: 'Agrupamento anômalo de acidentes de trabalho',
      location: 'Unidade de Produção A',
      confidence: 87,
      action: 'Inspeção de segurança detalhada'
    },
    {
      title: 'Oportunidade de Eficiência',
      description: 'Potencial para redução de 25% no consumo de água',
      location: 'Setor de Processamento',
      confidence: 89,
      action: 'Implementar sistema de reuso'
    }
  ];

  const gisMetrics = [
    {
      title: 'Análises Espaciais',
      value: '24',
      change: '+6',
      description: 'Executadas este mês'
    },
    {
      title: 'Pontos Mapeados',
      value: '1,247',
      change: '+89',
      description: 'Total de dados geográficos'
    },
    {
      title: 'Precisão de Localização',
      value: '98.7%',
      change: '+1.2%',
      description: 'Acurácia do GPS/IoT'
    },
    {
      title: 'Insights Gerados',
      value: '187',
      change: '+23',
      description: 'Descobertas espaciais'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'bg-green-100 text-green-800';
      case 'Em Execução': return 'bg-blue-100 text-blue-800';
      case 'Agendado': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* GIS Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gisMetrics.map((metric, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Map */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5 text-blue-600" />
                Mapa Integrado de IA
              </CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
                {/* Map Legend */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-sm mb-2">Camadas Ativas</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Previsões de Alto Risco</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>Anomalias Detectadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Oportunidades</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Map */}
                <div className="text-center">
                  <Map className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    Mapa GIS com Inteligência Artificial
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Visualização integrada de previsões, anomalias e otimizações
                  </p>
                  
                  {/* Simulated data points */}
                  <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div 
                        key={index}
                        className="cursor-pointer transform hover:scale-110 transition-transform"
                      >
                        <div className={`p-2 rounded-full ${
                          index % 3 === 0 ? 'bg-red-500' :
                          index % 3 === 1 ? 'bg-orange-500' : 'bg-blue-500'
                        } text-white shadow-lg`}>
                          <MapPin className="h-4 w-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coordinates Display */}
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow text-xs">
                  Coordenadas: -23.5505, -46.6333
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Layer Controls */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-green-600" />
                Camadas de IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mapLayers.map((layer) => (
                  <div 
                    key={layer.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      activeLayer === layer.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveLayer(layer.id)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <input 
                        type="checkbox" 
                        checked={layer.visible}
                        className="rounded"
                        readOnly
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{layer.name}</p>
                        <p className="text-xs text-gray-500">{layer.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">{layer.dataPoints} pontos</span>
                      <span className="text-gray-500">{layer.lastUpdate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Spatial Analysis Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-purple-600" />
            Análises Espaciais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spatialAnalyses.map((analysis) => (
              <Card key={analysis.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{analysis.name}</h3>
                    <Badge className={getStatusColor(analysis.status)}>
                      {analysis.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{analysis.description}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Tipo:</span>
                      <span className="font-medium">{analysis.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Descobertas:</span>
                      <span className="font-medium">{analysis.findings}</span>
                    </div>
                    {analysis.confidence && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Confiança:</span>
                        <span className="font-medium text-green-600">{analysis.confidence}%</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 p-3 rounded mb-3">
                    <p className="text-xs font-medium text-gray-700 mb-2">Dados do Mapa:</p>
                    <div className="space-y-1 text-xs">
                      {Object.entries(analysis.mapData).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-500 capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      Ver no Mapa
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Spatial Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            Insights Espaciais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {spatialInsights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{insight.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-gray-500">Local: </span>
                        <span className="font-medium">{insight.location}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Confiança: </span>
                        <span className="font-medium text-green-600">{insight.confidence}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Ação: </span>
                        <span className="font-medium text-blue-600">{insight.action}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Implementar Ação
                      </Button>
                      <Button size="sm" variant="outline">
                        Ver Detalhes
                      </Button>
                    </div>
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

export default GISIntegration;
