
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Map, 
  MapPin, 
  AlertTriangle, 
  Eye, 
  Activity,
  Layers,
  Filter,
  Download
} from 'lucide-react';

interface GISMappingProps {
  incidents?: any[];
  observations?: any[];
}

const GISMapping: React.FC<GISMappingProps> = ({ 
  incidents = [], 
  observations = [] 
}) => {
  const [activeLayer, setActiveLayer] = useState('incidents');
  const [selectedIncident, setSelectedIncident] = useState<any>(null);

  // Mock data for GIS visualization
  const mockIncidents = [
    {
      id: 'INC-001',
      type: 'Acidente com Ferimento',
      severity: 'Alta',
      location: 'Produção - Linha 1',
      coordinates: [-23.5505, -46.6333],
      date: '2024-01-15',
      status: 'Investigado'
    },
    {
      id: 'INC-002',
      type: 'Quase Acidente',
      severity: 'Média',
      location: 'Almoxarifado',
      coordinates: [-23.5489, -46.6388],
      date: '2024-01-14',
      status: 'Em Análise'
    },
    {
      id: 'INC-003',
      type: 'Condição Insegura',
      severity: 'Baixa',
      location: 'Escritório',
      coordinates: [-23.5520, -46.6350],
      date: '2024-01-12',
      status: 'Corrigido'
    }
  ];

  const mockObservations = [
    {
      id: 'OBS-001',
      type: 'Ato Inseguro',
      priority: 'Alta',
      area: 'Produção',
      coordinates: [-23.5510, -46.6340],
      date: '2024-01-16',
      reporter: 'Supervisor A'
    },
    {
      id: 'OBS-002',
      type: 'Condição Insegura',
      priority: 'Média',
      area: 'Administrativa',
      coordinates: [-23.5495, -46.6370],
      date: '2024-01-15',
      reporter: 'Técnico Segurança'
    }
  ];

  const mockHotspots = [
    {
      area: 'Produção - Linha 1',
      riskLevel: 'Alto',
      incidentCount: 8,
      coordinates: [-23.5505, -46.6333],
      recommendation: 'Inspeção adicional necessária'
    },
    {
      area: 'Almoxarifado',
      riskLevel: 'Médio',
      incidentCount: 4,
      coordinates: [-23.5489, -46.6388],
      recommendation: 'Treinamento de segurança'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alta': return 'bg-red-500';
      case 'Média': return 'bg-yellow-500';
      case 'Baixa': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Alto': return 'bg-red-100 text-red-800 border-red-300';
      case 'Médio': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Baixo': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Map Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant={activeLayer === 'incidents' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveLayer('incidents')}
          >
            <AlertTriangle className="h-4 w-4 mr-1" />
            Incidentes
          </Button>
          <Button
            variant={activeLayer === 'observations' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveLayer('observations')}
          >
            <Eye className="h-4 w-4 mr-1" />
            Observações
          </Button>
          <Button
            variant={activeLayer === 'hotspots' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveLayer('hotspots')}
          >
            <Activity className="h-4 w-4 mr-1" />
            Hotspots
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Layers className="h-4 w-4 mr-1" />
            Camadas
          </Button>
          <Button size="sm" variant="outline">
            <Filter className="h-4 w-4 mr-1" />
            Filtros
          </Button>
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-1" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Map */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5 text-blue-600" />
                Mapa Interativo - {activeLayer === 'incidents' ? 'Incidentes' : 
                                  activeLayer === 'observations' ? 'Observações' : 'Hotspots'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Mapa GIS Interativo</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Visualização de {activeLayer === 'incidents' ? 'incidentes' : 
                                   activeLayer === 'observations' ? 'observações' : 'hotspots'} por localização
                  </p>
                </div>
                
                {/* Mock map markers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8">
                    {activeLayer === 'incidents' && mockIncidents.map((incident, index) => (
                      <div 
                        key={incident.id}
                        className="relative cursor-pointer"
                        onClick={() => setSelectedIncident(incident)}
                      >
                        <div className={`w-4 h-4 rounded-full ${getSeverityColor(incident.severity)} border-2 border-white shadow-lg`} />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-white px-2 py-1 rounded shadow">
                          {incident.id}
                        </div>
                      </div>
                    ))}
                    
                    {activeLayer === 'observations' && mockObservations.map((obs, index) => (
                      <div key={obs.id} className="relative">
                        <div className={`w-4 h-4 rounded-full ${getSeverityColor(obs.priority)} border-2 border-white shadow-lg`} />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-white px-2 py-1 rounded shadow">
                          {obs.id}
                        </div>
                      </div>
                    ))}
                    
                    {activeLayer === 'hotspots' && mockHotspots.map((hotspot, index) => (
                      <div key={index} className="relative">
                        <div className={`w-6 h-6 rounded-full ${getSeverityColor(hotspot.riskLevel)} border-2 border-white shadow-lg opacity-70`} />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-white px-2 py-1 rounded shadow">
                          {hotspot.area}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Panel */}
        <div className="space-y-4">
          {activeLayer === 'incidents' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detalhes dos Incidentes</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedIncident ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{selectedIncident.id}</span>
                      <Badge className={`${getSeverityColor(selectedIncident.severity)} text-white`}>
                        {selectedIncident.severity}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Tipo:</p>
                      <p className="font-medium">{selectedIncident.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Local:</p>
                      <p className="font-medium">{selectedIncident.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Data:</p>
                      <p className="font-medium">{selectedIncident.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status:</p>
                      <p className="font-medium">{selectedIncident.status}</p>
                    </div>
                    <Button size="sm" className="w-full mt-4">
                      Ver Detalhes Completos
                    </Button>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Clique em um marcador no mapa para ver detalhes
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          {activeLayer === 'hotspots' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Análise de Hotspots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockHotspots.map((hotspot, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${getRiskColor(hotspot.riskLevel)}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{hotspot.area}</span>
                        <Badge variant="outline">
                          {hotspot.incidentCount} incidentes
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">{hotspot.recommendation}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Ações Recomendadas
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Legend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Legenda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Alta severidade/prioridade</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Média severidade/prioridade</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Baixa severidade/prioridade</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Spatial Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-sm text-gray-600">Áreas de Alto Risco</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <p className="text-sm text-gray-600">Incidentes Mapeados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">85%</div>
            <p className="text-sm text-gray-600">Cobertura Espacial</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GISMapping;
