
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  MapPin, 
  Layers, 
  Satellite,
  Activity,
  AlertTriangle,
  Thermometer,
  Droplets,
  Wind,
  Zap
} from 'lucide-react';

const GISIntegration = () => {
  const [activeTab, setActiveTab] = useState('map');

  const monitoringPoints = [
    {
      id: "MP-001",
      name: "Ponto Emissão A1",
      type: "Emissões",
      location: "Chaminé Principal",
      coordinates: "-23.5505, -46.6333",
      status: "Normal",
      lastReading: "2.4 ppm",
      timestamp: "2 min atrás"
    },
    {
      id: "MP-002",
      name: "Monitor Água P1",
      type: "Qualidade Água",
      location: "Rio Tietê - Montante",
      coordinates: "-23.5489, -46.6388",
      status: "Alerta",
      lastReading: "pH 6.8",
      timestamp: "5 min atrás"
    },
    {
      id: "MP-003",
      name: "Estação Meteorológica",
      type: "Clima",
      location: "Torre Central",
      coordinates: "-23.5501, -46.6349",
      status: "Normal",
      lastReading: "24°C, 65% UR",
      timestamp: "1 min atrás"
    },
    {
      id: "MP-004",
      name: "Sensor Ruído N1",
      type: "Ruído",
      location: "Perímetro Norte",
      coordinates: "-23.5492, -46.6341",
      status: "Crítico",
      lastReading: "78 dB",
      timestamp: "30 seg atrás"
    }
  ];

  const environmentalLayers = [
    {
      name: "Emissões Atmosféricas",
      type: "Heatmap",
      status: "Ativo",
      opacity: 80,
      color: "red",
      points: 12
    },
    {
      name: "Qualidade do Ar",
      type: "Contorno",
      status: "Ativo",
      opacity: 60,
      color: "blue",
      points: 8
    },
    {
      name: "Recursos Hídricos",
      type: "Linear",
      status: "Ativo",
      opacity: 90,
      color: "cyan",
      points: 15
    },
    {
      name: "Áreas de Risco",
      type: "Polígono",
      status: "Inativo",
      opacity: 70,
      color: "orange",
      points: 6
    }
  ];

  const spatialAnalysis = [
    {
      name: "Dispersão de Poluentes",
      type: "Modelagem Atmosférica",
      status: "Executando",
      progress: 67,
      eta: "8 min"
    },
    {
      name: "Impacto Hídrico",
      type: "Análise de Bacia",
      status: "Concluído",
      progress: 100,
      eta: "Finalizado"
    },
    {
      name: "Análise de Vulnerabilidade",
      type: "Risco Climático",
      status: "Pendente",
      progress: 0,
      eta: "Não iniciado"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': case 'Ativo': case 'Concluído': return 'bg-green-100 text-green-800';
      case 'Alerta': case 'Executando': return 'bg-yellow-100 text-yellow-800';
      case 'Crítico': return 'bg-red-100 text-red-800';
      case 'Inativo': case 'Pendente': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="map" className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            Mapa Interativo
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Pontos de Monitoramento
          </TabsTrigger>
          <TabsTrigger value="layers" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            Camadas Ambientais
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Análise Espacial
          </TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Sistema GIS - Monitoramento Ambiental</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Satellite className="h-4 w-4 mr-1" />
                    Satélite
                  </Button>
                  <Button size="sm" variant="outline">
                    <Layers className="h-4 w-4 mr-1" />
                    Camadas
                  </Button>
                  <Button size="sm">
                    Tela Cheia
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Placeholder para mapa interativo */}
              <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Mapa GIS Interativo</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Visualização em tempo real dos pontos de monitoramento ambiental
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge className="bg-red-100 text-red-800">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                      Emissões
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-1" />
                      Qualidade Água
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                      Meteorologia
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-1" />
                      Ruído
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Painel de controle do mapa */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-bold">24</div>
                    <p className="text-xs text-gray-600">Pontos Ativos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                    <div className="text-lg font-bold">3</div>
                    <p className="text-xs text-gray-600">Alertas</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Layers className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-lg font-bold">8</div>
                    <p className="text-xs text-gray-600">Camadas</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Activity className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg font-bold">94%</div>
                    <p className="text-xs text-gray-600">Uptime</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoringPoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">{point.name}</CardTitle>
                    <Badge className={getStatusColor(point.status)}>
                      {point.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      {point.type === 'Emissões' && <Wind className="h-4 w-4 text-red-500" />}
                      {point.type === 'Qualidade Água' && <Droplets className="h-4 w-4 text-blue-500" />}
                      {point.type === 'Clima' && <Thermometer className="h-4 w-4 text-green-500" />}
                      {point.type === 'Ruído' && <Zap className="h-4 w-4 text-orange-500" />}
                      <span className="text-sm font-medium">{point.type}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Localização</p>
                      <p className="font-medium text-sm">{point.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Coordenadas</p>
                      <p className="font-mono text-xs">{point.coordinates}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-sm font-medium">Última Leitura</p>
                      <p className="text-lg font-bold text-blue-600">{point.lastReading}</p>
                      <p className="text-xs text-gray-500">{point.timestamp}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="flex-1">
                        Ver no Mapa
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Histórico
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="layers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Camadas Ambientais</CardTitle>
              <Button size="sm">Adicionar Camada</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {environmentalLayers.map((layer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded`} style={{backgroundColor: layer.color, opacity: layer.opacity / 100}} />
                      <div>
                        <h3 className="font-medium">{layer.name}</h3>
                        <p className="text-sm text-gray-600">{layer.type} • {layer.points} pontos</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm">
                        <label className="text-gray-600">Opacidade: {layer.opacity}%</label>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={layer.opacity}
                          className="w-20 ml-2"
                        />
                      </div>
                      <Badge className={getStatusColor(layer.status)}>
                        {layer.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          Configurar
                        </Button>
                        <Button size="sm" variant="outline">
                          {layer.status === 'Ativo' ? 'Ocultar' : 'Mostrar'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análises Espaciais em Execução</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Nova Análise</Button>
                <Button size="sm" variant="outline">Agendar</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {spatialAnalysis.map((analysis, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{analysis.name}</h3>
                        <p className="text-sm text-gray-600">{analysis.type}</p>
                      </div>
                      <Badge className={getStatusColor(analysis.status)}>
                        {analysis.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progresso</span>
                        <span>{analysis.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${analysis.progress}%`}}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Tempo estimado: {analysis.eta}</span>
                        <Button size="sm" variant="outline">
                          Ver Resultados
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Análises Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Wind className="h-4 w-4 mr-2" />
                    Modelagem de Dispersão
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Droplets className="h-4 w-4 mr-2" />
                    Análise de Bacia Hidrográfica
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Mapeamento de Riscos
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Thermometer className="h-4 w-4 mr-2" />
                    Análise Climática
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Relatórios Espaciais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded border">
                    <h4 className="font-medium text-sm">Impacto Ambiental - Q1</h4>
                    <p className="text-xs text-gray-600">Análise espacial completa</p>
                    <Button size="sm" className="mt-2" variant="outline">
                      Download PDF
                    </Button>
                  </div>
                  <div className="p-3 bg-green-50 rounded border">
                    <h4 className="font-medium text-sm">Dispersão de Poluentes</h4>
                    <p className="text-xs text-gray-600">Modelagem atmosférica</p>
                    <Button size="sm" className="mt-2" variant="outline">
                      Download KML
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GISIntegration;
