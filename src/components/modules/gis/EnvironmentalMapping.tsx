
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Map, 
  MapPin, 
  Layers,
  Thermometer,
  Droplets,
  Wind,
  Zap,
  Factory,
  AlertTriangle,
  Activity,
  Filter,
  Download
} from 'lucide-react';

const EnvironmentalMapping = () => {
  const [activeDataType, setActiveDataType] = useState('emissions');
  const [selectedPoint, setSelectedPoint] = useState<any>(null);

  const monitoringPoints = [
    {
      id: 'MP-001',
      name: 'Estação Emissões A1',
      type: 'emissions',
      location: 'Produção Principal',
      coordinates: [-23.5505, -46.6333],
      value: 245,
      unit: 'ppm CO2',
      status: 'Normal',
      lastUpdate: '2 min atrás',
      trend: 'stable'
    },
    {
      id: 'MP-002',
      name: 'Monitor Água P2',
      type: 'water',
      location: 'Rio Tietê - Jusante',
      coordinates: [-23.5489, -46.6388],
      value: 6.8,
      unit: 'pH',
      status: 'Alerta',
      lastUpdate: '5 min atrás',
      trend: 'decreasing'
    },
    {
      id: 'MP-003',
      name: 'Sensor Ar Q1',
      type: 'air',
      location: 'Perímetro Norte',
      coordinates: [-23.5520, -46.6350],
      value: 35,
      unit: 'μg/m³ PM2.5',
      status: 'Bom',
      lastUpdate: '1 min atrás',
      trend: 'improving'
    },
    {
      id: 'MP-004',
      name: 'Medidor Energia E1',
      type: 'energy',
      location: 'Subestação Central',
      coordinates: [-23.5495, -46.6370],
      value: 1250,
      unit: 'kWh',
      status: 'Normal',
      lastUpdate: '30 seg atrás',
      trend: 'increasing'
    }
  ];

  const dataTypes = [
    { id: 'emissions', name: 'Emissões', icon: Factory, color: 'text-red-600', count: 8 },
    { id: 'water', name: 'Qualidade Água', icon: Droplets, color: 'text-blue-600', count: 6 },
    { id: 'air', name: 'Qualidade Ar', icon: Wind, color: 'text-green-600', count: 12 },
    { id: 'energy', name: 'Energia', icon: Zap, color: 'text-yellow-600', count: 4 },
    { id: 'waste', name: 'Resíduos', icon: AlertTriangle, color: 'text-orange-600', count: 3 }
  ];

  const spatialLayers = [
    {
      name: 'Pontos de Monitoramento',
      type: 'points',
      visible: true,
      opacity: 100,
      dataCount: monitoringPoints.length
    },
    {
      name: 'Zonas de Impacto',
      type: 'polygons',
      visible: true,
      opacity: 70,
      dataCount: 5
    },
    {
      name: 'Corpos Hídricos',
      type: 'lines',
      visible: true,
      opacity: 80,
      dataCount: 3
    },
    {
      name: 'Áreas Protegidas',
      type: 'polygons',
      visible: false,
      opacity: 60,
      dataCount: 2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': case 'Bom': return 'bg-green-100 text-green-800';
      case 'Alerta': return 'bg-yellow-100 text-yellow-800';
      case 'Crítico': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return '↗️';
      case 'decreasing': return '↘️';
      case 'stable': return '➡️';
      case 'improving': return '⬆️';
      default: return '➡️';
    }
  };

  const getDataTypeIcon = (type: string) => {
    const dataType = dataTypes.find(dt => dt.id === type);
    if (!dataType) return Factory;
    return dataType.icon;
  };

  const filteredPoints = activeDataType === 'all' 
    ? monitoringPoints 
    : monitoringPoints.filter(point => point.type === activeDataType);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-green-600" />
            Mapeamento Ambiental Integrado
          </CardTitle>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros Avançados
            </Button>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar Dados
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Data Type Selector */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              size="sm"
              variant={activeDataType === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveDataType('all')}
            >
              Todos ({monitoringPoints.length})
            </Button>
            {dataTypes.map((type) => (
              <Button
                key={type.id}
                size="sm"
                variant={activeDataType === type.id ? 'default' : 'outline'}
                onClick={() => setActiveDataType(type.id)}
                className="flex items-center gap-1"
              >
                <type.icon className={`h-3 w-3 ${activeDataType === type.id ? 'text-white' : type.color}`} />
                {type.name} ({type.count})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Interactive Map */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Mapa Interativo - {dataTypes.find(dt => dt.id === activeDataType)?.name || 'Todos os Dados'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                {/* Map Legend */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-sm mb-2">Legenda</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Normal/Bom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Alerta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Crítico</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Map with Points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-600 mb-2">
                      Mapa GIS Interativo
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Visualização em tempo real de {filteredPoints.length} pontos de monitoramento
                    </p>
                    
                    {/* Simulated monitoring points */}
                    <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                      {filteredPoints.slice(0, 6).map((point, index) => {
                        const IconComponent = getDataTypeIcon(point.type);
                        return (
                          <div 
                            key={point.id}
                            className="cursor-pointer transform hover:scale-110 transition-transform"
                            onClick={() => setSelectedPoint(point)}
                          >
                            <div className={`relative p-2 rounded-full ${
                              point.status === 'Normal' || point.status === 'Bom' ? 'bg-green-500' :
                              point.status === 'Alerta' ? 'bg-yellow-500' : 'bg-red-500'
                            } text-white shadow-lg`}>
                              <IconComponent className="h-4 w-4" />
                              {point.trend !== 'stable' && (
                                <div className="absolute -top-1 -right-1 text-xs">
                                  {getTrendIcon(point.trend)}
                                </div>
                              )}
                            </div>
                            <div className="text-xs mt-1 font-medium">{point.id}</div>
                          </div>
                        );
                      })}
                    </div>
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

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Selected Point Details */}
          {selectedPoint ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detalhes do Ponto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{selectedPoint.id}</span>
                    <Badge className={getStatusColor(selectedPoint.status)}>
                      {selectedPoint.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Nome:</p>
                    <p className="font-medium">{selectedPoint.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Localização:</p>
                    <p className="font-medium">{selectedPoint.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Valor Atual:</p>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-bold text-blue-600">
                        {selectedPoint.value} {selectedPoint.unit}
                      </p>
                      <span className="text-sm">{getTrendIcon(selectedPoint.trend)}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Última Atualização:</p>
                    <p className="font-medium">{selectedPoint.lastUpdate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Coordenadas:</p>
                    <p className="font-mono text-xs">{selectedPoint.coordinates.join(', ')}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1">
                      Histórico
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Alertas
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Seleção de Ponto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">
                  Clique em um ponto no mapa para ver detalhes
                </p>
              </CardContent>
            </Card>
          )}

          {/* Spatial Layers Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Camadas Espaciais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {spatialLayers.map((layer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        checked={layer.visible}
                        className="rounded"
                      />
                      <div>
                        <p className="text-sm font-medium">{layer.name}</p>
                        <p className="text-xs text-gray-500">{layer.dataCount} elementos</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {layer.opacity}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Pontos Ativos:</span>
                  <span className="font-medium">{monitoringPoints.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Em Alerta:</span>
                  <span className="font-medium text-yellow-600">
                    {monitoringPoints.filter(p => p.status === 'Alerta').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Críticos:</span>
                  <span className="font-medium text-red-600">
                    {monitoringPoints.filter(p => p.status === 'Crítico').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Cobertura:</span>
                  <span className="font-medium text-green-600">95%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalMapping;
