
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  Layers, 
  Satellite,
  MapPin,
  Filter,
  Download,
  Maximize,
  TrendingUp,
  AlertTriangle,
  Activity
} from 'lucide-react';

interface RiskHotspot {
  location: string;
  riskCount: number;
  severity: string;
  primaryRisk: string;
  coordinates: number[];
}

interface RiskItem {
  id: string;
  name: string;
  category: string;
  location: string;
  geotagged: boolean;
  riskLevel: string;
}

interface GISMappingProps {
  riskHotspots: RiskHotspot[];
  riskMatrix: RiskItem[];
}

const GISMapping: React.FC<GISMappingProps> = ({ riskHotspots, riskMatrix }) => {
  const [activeLayer, setActiveLayer] = useState('risks');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const mapLayers = [
    { id: 'risks', name: 'Riscos', icon: AlertTriangle, color: 'text-red-600' },
    { id: 'environmental', name: 'Ambiental', icon: Activity, color: 'text-green-600' },
    { id: 'climate', name: 'Climático', icon: TrendingUp, color: 'text-blue-600' },
    { id: 'satellite', name: 'Satélite', icon: Satellite, color: 'text-purple-600' }
  ];

  const analysisTools = [
    { name: 'Buffer Analysis', description: 'Análise de impacto em raio específico' },
    { name: 'Overlay Analysis', description: 'Sobreposição de camadas de dados' },
    { name: 'Hotspot Detection', description: 'Detecção automática de áreas críticas' },
    { name: 'Proximity Analysis', description: 'Análise de proximidade com áreas sensíveis' }
  ];

  const spatialData = [
    {
      source: 'Copernicus',
      type: 'Imagens de Satélite',
      lastUpdate: '2024-01-20',
      coverage: 'Global',
      resolution: '10m'
    },
    {
      source: 'NOAA',
      type: 'Dados Climáticos',
      lastUpdate: '2024-01-22',
      coverage: 'América do Sul',
      resolution: '1km'
    },
    {
      source: 'EPA',
      type: 'Qualidade do Ar',
      lastUpdate: '2024-01-21',
      coverage: 'Regional',
      resolution: '500m'
    },
    {
      source: 'IUCN',
      type: 'Biodiversidade',
      lastUpdate: '2024-01-15',
      coverage: 'Global',
      resolution: 'Polígonos'
    }
  ];

  const getRiskSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Crítico': return 'bg-red-500';
      case 'Alto': return 'bg-orange-500';
      case 'Médio': return 'bg-yellow-500';
      case 'Baixo': return 'bg-green-500';
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
              Sistema GIS - Mapeamento de Riscos
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-1" />
                Exportar
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

          {/* Interactive Map Placeholder */}
          <div className="h-96 bg-gradient-to-br from-green-100 via-blue-100 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 relative overflow-hidden">
            {/* Map Legend */}
            <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg max-w-48">
              <h4 className="font-medium text-sm mb-2">Legenda</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Risco Crítico</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Risco Alto</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Risco Médio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Risco Baixo</span>
                </div>
              </div>
            </div>

            {/* Simulated Map Markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Map className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  Mapa Interativo GIS
                </h3>
                <p className="text-sm text-gray-500 max-w-md">
                  Visualização espacial de riscos com análise em tempo real
                  <br />
                  Camada ativa: <strong>{mapLayers.find(l => l.id === activeLayer)?.name}</strong>
                </p>
                
                {/* Simulated Hotspots */}
                <div className="mt-4 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                  {riskHotspots.map((hotspot, index) => (
                    <div 
                      key={index}
                      className="cursor-pointer transform hover:scale-105 transition-transform"
                      onClick={() => setSelectedRegion(hotspot.location)}
                    >
                      <div className={`w-4 h-4 ${getRiskSeverityColor(hotspot.severity)} rounded-full mx-auto mb-1 pulse`}></div>
                      <div className="text-xs font-medium">{hotspot.location}</div>
                      <div className="text-xs text-gray-500">{hotspot.riskCount} riscos</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scale Bar */}
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
              <div className="text-xs text-gray-600">Escala: 1:100,000</div>
              <div className="w-16 h-1 bg-black mt-1"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Hotspots Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Hotspots de Risco Identificados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskHotspots.map((hotspot, index) => (
                <div 
                  key={index} 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedRegion === hotspot.location ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedRegion(hotspot.location)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      {hotspot.location}
                    </h3>
                    <Badge className={`${getRiskSeverityColor(hotspot.severity)} text-white`}>
                      {hotspot.severity}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Riscos:</span>
                      <span className="font-medium ml-1">{hotspot.riskCount}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Principal:</span>
                      <span className="font-medium ml-1">{hotspot.primaryRisk}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Coords: {hotspot.coordinates[0]}, {hotspot.coordinates[1]}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-blue-600" />
              Ferramentas de Análise Espacial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysisTools.map((tool, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-gray-50">
                  <h3 className="font-medium text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{tool.description}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Executar Análise
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Spatial Data Sources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Satellite className="h-5 w-5 text-purple-600" />
            Fontes de Dados Espaciais Integradas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Fonte</th>
                  <th className="text-left py-2">Tipo de Dados</th>
                  <th className="text-left py-2">Última Atualização</th>
                  <th className="text-left py-2">Cobertura</th>
                  <th className="text-left py-2">Resolução</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {spatialData.map((data, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 font-medium">{data.source}</td>
                    <td className="py-2">{data.type}</td>
                    <td className="py-2">{data.lastUpdate}</td>
                    <td className="py-2">{data.coverage}</td>
                    <td className="py-2">{data.resolution}</td>
                    <td className="py-2">
                      <Badge className="bg-green-100 text-green-800">
                        Ativo
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Selected Region Details */}
      {selectedRegion && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Detalhes da Região: {selectedRegion}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Análise de Risco</h4>
                <p className="text-xs text-gray-600">
                  Área identificada com concentração elevada de riscos ambientais e climáticos
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Dados Integrados</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Imagens Copernicus (resolução 10m)</li>
                  <li>• Dados climáticos NOAA</li>
                  <li>• Índices de qualidade EPA</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Ações Recomendadas</h4>
                <div className="space-y-1">
                  <Button size="sm" className="w-full">
                    Plano de Mitigação
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

export default GISMapping;
