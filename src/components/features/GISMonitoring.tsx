
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  MapPin, 
  Layers, 
  Satellite, 
  BarChart3,
  Zap,
  Activity
} from 'lucide-react';

const GISMonitoring = () => {
  const [activeView, setActiveView] = useState('map');

  const mapLayers = [
    {
      name: 'Emissões CO2',
      type: 'Heatmap',
      status: 'Ativo',
      points: 156,
      lastUpdate: '5 min atrás'
    },
    {
      name: 'Consumo Energético',
      type: 'Cluster',
      status: 'Ativo',
      points: 89,
      lastUpdate: '2 min atrás'
    },
    {
      name: 'Incidentes EHS',
      type: 'Pontos',
      status: 'Ativo',
      points: 23,
      lastUpdate: '1 hora atrás'
    },
    {
      name: 'Áreas Protegidas',
      type: 'Polígonos',
      status: 'Referência',
      points: 12,
      lastUpdate: 'Estático'
    }
  ];

  const spatialAnalysis = [
    {
      title: 'Análise de Buffer',
      description: 'Impacto ambiental em raio de 5km das instalações',
      type: 'Buffer Analysis',
      status: 'Completa',
      result: '8 áreas sensíveis identificadas'
    },
    {
      title: 'Análise de Cluster',
      description: 'Agrupamento de incidentes por região',
      type: 'Cluster Analysis',
      status: 'Em Progresso',
      result: '3 hotspots detectados'
    },
    {
      title: 'Sobreposição Espacial',
      description: 'Emissões vs. densidade populacional',
      type: 'Overlay Analysis',
      status: 'Completa',
      result: '15% sobreposição crítica'
    }
  ];

  const monitoringPoints = [
    {
      id: 'MP001',
      name: 'Planta Industrial São Paulo',
      type: 'Emissões',
      coordinates: '-23.550520, -46.633308',
      status: 'Normal',
      lastReading: '245.6 tCO2e',
      alert: false
    },
    {
      id: 'MP002', 
      name: 'Estação de Tratamento Campinas',
      type: 'Qualidade da Água',
      coordinates: '-22.907104, -47.063240',
      status: 'Atenção',
      lastReading: 'pH 8.2',
      alert: true
    },
    {
      id: 'MP003',
      name: 'Centro de Distribuição Santos',
      type: 'Energia',
      coordinates: '-23.960833, -46.333056',
      status: 'Normal',
      lastReading: '1,234 kWh',
      alert: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Atenção': return 'bg-yellow-100 text-yellow-800';
      case 'Crítico': return 'bg-red-100 text-red-800';
      case 'Ativo': return 'bg-blue-100 text-blue-800';
      case 'Completa': return 'bg-green-100 text-green-800';
      case 'Em Progresso': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Map className="h-8 w-8 text-green-600" />
            GIS - Monitoramento Espacial
          </h1>
          <p className="text-gray-600">
            Visualização geográfica e análise espacial de dados ambientais
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={activeView === 'map' ? 'default' : 'outline'}
            onClick={() => setActiveView('map')}
          >
            <Map className="h-4 w-4 mr-2" />
            Abrir Mapa GIS
          </Button>
          <Button 
            variant={activeView === 'analysis' ? 'default' : 'outline'}
            onClick={() => setActiveView('analysis')}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Análise Espacial
          </Button>
        </div>
      </div>

      {activeView === 'map' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Viewer */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-5 w-5 text-blue-600" />
                  Mapa Interativo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Visualizador GIS Interativo</p>
                    <p className="text-sm text-gray-500">
                      Camadas: Emissões, Energia, Incidentes, Áreas Protegidas
                    </p>
                    <Button className="mt-4">
                      <Satellite className="h-4 w-4 mr-2" />
                      Carregar Mapa
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Layers Control */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-purple-600" />
                  Camadas Ativas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mapLayers.map((layer, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h3 className="font-medium text-sm">{layer.name}</h3>
                        <p className="text-xs text-gray-600">{layer.type} • {layer.points} pontos</p>
                        <p className="text-xs text-gray-500">{layer.lastUpdate}</p>
                      </div>
                      <Badge className={getStatusColor(layer.status)}>
                        {layer.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-600" />
                  Pontos de Monitoramento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {monitoringPoints.map((point) => (
                    <div key={point.id} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-sm">{point.name}</h3>
                        {point.alert && <Zap className="h-4 w-4 text-orange-500" />}
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{point.type}</p>
                      <p className="text-xs text-gray-500 mb-2">{point.coordinates}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">{point.lastReading}</span>
                        <Badge className={getStatusColor(point.status)}>
                          {point.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeView === 'analysis' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Análises Espaciais Disponíveis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spatialAnalysis.map((analysis, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{analysis.type}</Badge>
                          <Badge className={getStatusColor(analysis.status)}>
                            {analysis.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold">{analysis.title}</h3>
                        <p className="text-sm text-gray-600">{analysis.description}</p>
                        <div className="border-t pt-3">
                          <p className="text-xs font-medium text-blue-600">
                            Resultado: {analysis.result}
                          </p>
                        </div>
                        <Button size="sm" className="w-full">
                          <MapPin className="h-3 w-3 mr-1" />
                          Ver no Mapa
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default GISMonitoring;
