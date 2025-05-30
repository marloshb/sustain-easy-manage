
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  Layers, 
  Satellite,
  MapPin,
  TrendingUp,
  Activity,
  Zap,
  Droplets,
  Package,
  Filter,
  Maximize
} from 'lucide-react';

interface ResourceData {
  energy: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
  water: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
  materials: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
}

interface GISVisualizationProps {
  resourceData: ResourceData;
}

const GISVisualization: React.FC<GISVisualizationProps> = ({ resourceData }) => {
  const [activeLayer, setActiveLayer] = useState('energy');
  const [analysisMode, setAnalysisMode] = useState('consumption');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const mapLayers = [
    { id: 'energy', name: 'Energia', icon: Zap, color: 'text-yellow-600' },
    { id: 'water', name: 'Água', icon: Droplets, color: 'text-blue-600' },
    { id: 'materials', name: 'Materiais', icon: Package, color: 'text-green-600' },
    { id: 'satellite', name: 'Satélite', icon: Satellite, color: 'text-purple-600' }
  ];

  const analysisTypes = [
    { id: 'consumption', name: 'Consumo Total' },
    { id: 'efficiency', name: 'Eficiência' },
    { id: 'hotspots', name: 'Hotspots' },
    { id: 'trends', name: 'Tendências' }
  ];

  const spatialAnalyses = [
    {
      name: 'Hotspots de Consumo',
      description: 'Áreas com consumo elevado de recursos',
      locations: ['Fábrica A', 'Zona Industrial Sul'],
      type: 'high-consumption'
    },
    {
      name: 'Clusters de Eficiência',
      description: 'Regiões com alta eficiência energética',
      locations: ['Fábrica B', 'Escritório Central'],
      type: 'high-efficiency'
    },
    {
      name: 'Correlação Populacional',
      description: 'Sobreposição com densidade populacional',
      locations: ['Centro da cidade', 'Região metropolitana'],
      type: 'population'
    }
  ];

  const satelliteIntegration = [
    {
      source: 'Copernicus Sentinel-2',
      type: 'Imagens Ópticas',
      resolution: '10m',
      lastUpdate: '2024-01-20',
      coverage: 'América do Sul'
    },
    {
      source: 'Copernicus Sentinel-1',
      type: 'Radar SAR',
      resolution: '20m',
      lastUpdate: '2024-01-19',
      coverage: 'Global'
    },
    {
      source: 'Copernicus ECMWF',
      type: 'Dados Climáticos',
      resolution: '1km',
      lastUpdate: '2024-01-22',
      coverage: 'Global'
    }
  ];

  const getConsumptionLevel = (consumption: number, type: string) => {
    const thresholds = {
      energy: { low: 500, medium: 1000, high: 1500 },
      water: { low: 200, medium: 500, high: 800 },
      materials: { low: 100, medium: 300, high: 500 }
    };
    
    const threshold = thresholds[type as keyof typeof thresholds];
    if (consumption <= threshold.low) return 'low';
    if (consumption <= threshold.medium) return 'medium';
    if (consumption <= threshold.high) return 'high';
    return 'critical';
  };

  const getConsumptionColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* GIS Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Map className="h-5 w-5 text-green-600" />
              Visualização GIS - Recursos
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Filter className="h-4 w-4 mr-1" />
                Filtros
              </Button>
              <Button size="sm" variant="outline">
                <Maximize className="h-4 w-4 mr-1" />
                Tela Cheia
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Layer Controls */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium text-gray-600 mr-2">Camadas:</span>
            {mapLayers.map(layer => (
              <Button
                key={layer.id}
                size="sm"
                variant={activeLayer === layer.id ? "default" : "outline"}
                onClick={() => setActiveLayer(layer.id)}
                className="flex items-center gap-1"
              >
                <layer.icon className={`h-3 w-3 ${activeLayer === layer.id ? 'text-white' : layer.color}`} />
                {layer.name}
              </Button>
            ))}
          </div>

          {/* Analysis Mode */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium text-gray-600 mr-2">Análise:</span>
            {analysisTypes.map(analysis => (
              <Button
                key={analysis.id}
                size="sm"
                variant={analysisMode === analysis.id ? "default" : "outline"}
                onClick={() => setAnalysisMode(analysis.id)}
              >
                {analysis.name}
              </Button>
            ))}
          </div>

          {/* Interactive Map */}
          <div className="h-96 bg-gradient-to-br from-green-100 via-blue-100 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 relative overflow-hidden">
            {/* Map Legend */}
            <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg max-w-48">
              <h4 className="font-medium text-sm mb-2">Legenda - {mapLayers.find(l => l.id === activeLayer)?.name}</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Baixo Consumo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Médio Consumo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Alto Consumo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Consumo Crítico</span>
                </div>
              </div>
            </div>

            {/* Map Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Map className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  Mapa Interativo GIS - {mapLayers.find(l => l.id === activeLayer)?.name}
                </h3>
                <p className="text-sm text-gray-500 max-w-md">
                  Visualização espacial de recursos com análise {analysisTypes.find(a => a.id === analysisMode)?.name.toLowerCase()}
                </p>
                
                {/* Simulated Resource Points */}
                {activeLayer !== 'satellite' && (
                  <div className="mt-4 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                    {resourceData[activeLayer as keyof ResourceData]?.map((location, index) => {
                      const level = getConsumptionLevel(location.consumption, activeLayer);
                      return (
                        <div 
                          key={index}
                          className="cursor-pointer transform hover:scale-105 transition-transform"
                          onClick={() => setSelectedLocation(location.location)}
                        >
                          <div className={`w-4 h-4 ${getConsumptionColor(level)} rounded-full mx-auto mb-1 pulse`}></div>
                          <div className="text-xs font-medium">{location.location}</div>
                          <div className="text-xs text-gray-500">
                            {location.consumption} {activeLayer === 'energy' ? 'kWh' : activeLayer === 'water' ? 'L' : 'kg'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Scale Bar */}
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
              <div className="text-xs text-gray-600">Escala: 1:50,000</div>
              <div className="w-16 h-1 bg-black mt-1"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spatial Analysis Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Análises Espaciais Identificadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {spatialAnalyses.map((analysis, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                  <h3 className="font-medium mb-2">{analysis.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{analysis.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {analysis.locations.map((location, locIndex) => (
                      <Badge key={locIndex} variant="outline">
                        <MapPin className="h-3 w-3 mr-1" />
                        {location}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <Activity className="h-3 w-3 mr-1" />
                    Executar Análise Detalhada
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Satellite className="h-5 w-5 text-purple-600" />
              Integração de Dados Satelitais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {satelliteIntegration.map((satellite, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-sm">{satellite.source}</h3>
                    <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-600">Tipo:</span>
                      <span className="font-medium ml-1">{satellite.type}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Resolução:</span>
                      <span className="font-medium ml-1">{satellite.resolution}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Atualização:</span>
                      <span className="font-medium ml-1">{satellite.lastUpdate}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Cobertura:</span>
                      <span className="font-medium ml-1">{satellite.coverage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm font-medium text-purple-800 mb-1">
                Contexto Ambiental
              </p>
              <p className="text-xs text-purple-600">
                Dados satelitais fornecem contexto sobre:
                <br />• Mudanças na cobertura vegetal
                <br />• Condições climáticas regionais
                <br />• Impactos ambientais das operações
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Detalhes da Localização: {selectedLocation}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Consumo de Recursos</h4>
                {Object.entries(resourceData).map(([type, data]) => {
                  const location = data.find(d => d.location === selectedLocation);
                  if (!location) return null;
                  
                  return (
                    <div key={type} className="text-xs">
                      <span className="text-gray-600 capitalize">{type}:</span>
                      <span className="font-medium ml-1">
                        {location.consumption} {type === 'energy' ? 'kWh' : type === 'water' ? 'L' : 'kg'}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Análise Espacial</h4>
                <p className="text-xs text-gray-600">
                  Localização identificada como área de interesse para otimização de recursos
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Ações Recomendadas</h4>
                <div className="space-y-1">
                  <Button size="sm" className="w-full">
                    Plano de Otimização
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    Análise Detalhada
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GISVisualization;
