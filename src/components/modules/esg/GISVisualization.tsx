
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Map, 
  Layers, 
  MapPin, 
  Satellite,
  Eye,
  Filter,
  Download,
  Share2
} from 'lucide-react';

const GISVisualization = () => {
  const [selectedLayer, setSelectedLayer] = useState('emissions');
  const [selectedView, setSelectedView] = useState('heatmap');

  const mapLayers = [
    {
      id: 'emissions',
      name: 'Emissões por Localização',
      description: 'Visualização de emissões de CO2 por instalação',
      type: 'emissions',
      dataPoints: 15,
      lastUpdate: '2024-01-15',
      status: 'active'
    },
    {
      id: 'social',
      name: 'Impactos Sociais',
      description: 'Comunidades afetadas e programas sociais',
      type: 'social',
      dataPoints: 23,
      lastUpdate: '2024-01-12',
      status: 'active'
    },
    {
      id: 'biodiversity',
      name: 'Áreas de Biodiversidade',
      description: 'Sobreposição com áreas protegidas',
      type: 'environmental',
      dataPoints: 8,
      lastUpdate: '2024-01-10',
      status: 'active'
    },
    {
      id: 'risks',
      name: 'Riscos Climáticos',
      description: 'Análise de riscos climáticos por região',
      type: 'risk',
      dataPoints: 12,
      lastUpdate: '2024-01-14',
      status: 'active'
    }
  ];

  const installations = [
    {
      name: 'Fábrica São Paulo',
      location: 'São Paulo, SP',
      emissions: 1245,
      risk: 'Médio',
      socialImpact: 'Alto',
      coordinates: { lat: -23.5505, lng: -46.6333 }
    },
    {
      name: 'Planta Rio de Janeiro',
      location: 'Rio de Janeiro, RJ',
      emissions: 987,
      risk: 'Baixo',
      socialImpact: 'Médio',
      coordinates: { lat: -22.9068, lng: -43.1729 }
    },
    {
      name: 'Unidade Belo Horizonte',
      location: 'Belo Horizonte, MG',
      emissions: 756,
      risk: 'Alto',
      socialImpact: 'Baixo',
      coordinates: { lat: -19.9167, lng: -43.9345 }
    }
  ];

  const spatialAnalysis = [
    {
      title: 'Hotspots de Emissões',
      description: 'Identificação de áreas com alta concentração de emissões',
      insights: [
        'Região Sudeste concentra 65% das emissões totais',
        '3 instalações respondem por 70% das emissões de Escopo 1',
        'Correlação identificada com densidade industrial'
      ]
    },
    {
      title: 'Proximidade a Áreas Protegidas',
      description: 'Análise de impacto em unidades de conservação',
      insights: [
        '2 instalações estão a menos de 5km de áreas protegidas',
        'Risco elevado para biodiversidade aquática',
        'Necessário plano de mitigação específico'
      ]
    },
    {
      title: 'Impacto em Comunidades',
      description: 'Sobreposição com dados demográficos',
      insights: [
        '45.000 pessoas em raio de 10km das operações',
        'Comunidades vulneráveis identificadas',
        'Oportunidades para programas sociais'
      ]
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLayerIcon = (type: string) => {
    switch (type) {
      case 'emissions': return <MapPin className="h-4 w-4 text-red-600" />;
      case 'social': return <MapPin className="h-4 w-4 text-blue-600" />;
      case 'environmental': return <MapPin className="h-4 w-4 text-green-600" />;
      case 'risk': return <MapPin className="h-4 w-4 text-orange-600" />;
      default: return <MapPin className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-blue-600" />
            Visualização GIS de Métricas ESG
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
            <Button size="sm" variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Map Visualization */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Mapa Interativo</h3>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant={selectedView === 'heatmap' ? 'default' : 'outline'}
                        onClick={() => setSelectedView('heatmap')}
                      >
                        Mapa de Calor
                      </Button>
                      <Button 
                        size="sm" 
                        variant={selectedView === 'points' ? 'default' : 'outline'}
                        onClick={() => setSelectedView('points')}
                      >
                        Pontos
                      </Button>
                      <Button 
                        size="sm" 
                        variant={selectedView === 'satellite' ? 'default' : 'outline'}
                        onClick={() => setSelectedView('satellite')}
                      >
                        <Satellite className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-green-200/30"></div>
                    <div className="relative z-10 text-center">
                      <Map className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700">Mapa GIS Interativo</h3>
                      <p className="text-gray-600">Visualização de {mapLayers.find(l => l.id === selectedLayer)?.name}</p>
                      <div className="mt-4 space-y-2">
                        <Badge className="bg-blue-100 text-blue-800">
                          {installations.length} Instalações Mapeadas
                        </Badge>
                        <br />
                        <Badge className="bg-green-100 text-green-800">
                          Dados Atualizados: {mapLayers.find(l => l.id === selectedLayer)?.lastUpdate}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Layer Controls */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Layers className="h-5 w-5" />
                    Camadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mapLayers.map((layer) => (
                      <div 
                        key={layer.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedLayer === layer.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedLayer(layer.id)}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {getLayerIcon(layer.type)}
                          <span className="font-medium text-sm">{layer.name}</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{layer.description}</p>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">{layer.dataPoints} pontos</span>
                          <Badge variant="outline" className="text-xs">
                            {layer.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installations Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Visão Geral das Instalações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Instalação</th>
                  <th className="text-left py-2">Localização</th>
                  <th className="text-left py-2">Emissões (t CO2e)</th>
                  <th className="text-left py-2">Risco Climático</th>
                  <th className="text-left py-2">Impacto Social</th>
                  <th className="text-left py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {installations.map((installation, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 font-medium">{installation.name}</td>
                    <td className="py-2">{installation.location}</td>
                    <td className="py-2">{installation.emissions.toLocaleString()}</td>
                    <td className="py-2">
                      <Badge className={getRiskColor(installation.risk)}>
                        {installation.risk}
                      </Badge>
                    </td>
                    <td className="py-2">
                      <Badge className={getRiskColor(installation.socialImpact)}>
                        {installation.socialImpact}
                      </Badge>
                    </td>
                    <td className="py-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        Ver Detalhes
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Spatial Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Análises Espaciais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spatialAnalysis.map((analysis, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{analysis.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{analysis.description}</p>
                  <div className="space-y-2">
                    {analysis.insights.map((insight, insightIndex) => (
                      <div key={insightIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-700">{insight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GISVisualization;
