
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  MapPin, 
  Layers, 
  Satellite,
  Activity,
  AlertTriangle,
  TrendingUp,
  Filter,
  Download,
  Search
} from 'lucide-react';

const GISIntegration = () => {
  const [selectedLayer, setSelectedLayer] = useState('audits');
  const [mapView, setMapView] = useState('satellite');

  const auditLocations = [
    {
      id: "LOC-001",
      name: "Planta Industrial São Paulo",
      type: "Fábrica",
      coordinates: "-23.5613, -46.6563",
      address: "Av. Paulista, 1000 - São Paulo/SP",
      lastAudit: "2024-02-15",
      status: "Conforme",
      nonConformities: 3,
      auditType: "ISO 14001",
      riskLevel: "Baixo",
      nextAudit: "2024-08-15"
    },
    {
      id: "LOC-002",
      name: "Fábrica Campinas",
      type: "Industrial",
      coordinates: "-22.9056, -47.0608",
      address: "Rod. Dom Pedro I, Km 143 - Campinas/SP",
      lastAudit: "2024-02-18",
      status: "Não Conforme",
      nonConformities: 5,
      auditType: "OSHA",
      riskLevel: "Alto",
      nextAudit: "2024-05-18"
    },
    {
      id: "LOC-003",
      name: "Escritório Central",
      type: "Administrativo",
      coordinates: "-23.5775, -46.6872",
      address: "Av. Faria Lima, 3000 - São Paulo/SP",
      lastAudit: "2024-02-22",
      status: "Conforme",
      nonConformities: 1,
      auditType: "CSRD",
      riskLevel: "Baixo",
      nextAudit: "2024-11-22"
    },
    {
      id: "LOC-004",
      name: "Centro de Distribuição",
      type: "Logística",
      coordinates: "-23.4274, -46.4817",
      address: "Av. Jacu-Pêssego, 5000 - Guarulhos/SP",
      lastAudit: "2024-01-10",
      status: "Em Revisão",
      nonConformities: 2,
      auditType: "HSE",
      riskLevel: "Médio",
      nextAudit: "2024-07-10"
    }
  ];

  const spatialAnalysis = [
    {
      id: "ANAL-001",
      name: "Hotspots de Não Conformidades",
      description: "Análise espacial de concentração de não conformidades",
      type: "Densidade",
      coverage: "Região Metropolitana SP",
      findings: "Concentração na região industrial do ABC",
      recommendation: "Intensificar auditorias na região Sul",
      severity: "Média"
    },
    {
      id: "ANAL-002",
      name: "Análise de Buffer - Áreas Protegidas",
      description: "Proximidade de instalações a áreas ambientalmente sensíveis",
      type: "Buffer Analysis",
      coverage: "Estado de São Paulo",
      findings: "3 instalações dentro de 5km de APA",
      recommendation: "Auditorias ambientais mais rigorosas",
      severity: "Alta"
    },
    {
      id: "ANAL-003",
      name: "Correlação Risco vs Localização",
      description: "Análise de padrões de risco por região geográfica",
      type: "Correlação Espacial",
      coverage: "Nacional",
      findings: "Regiões industriais com maior índice de risco",
      recommendation: "Programa específico para áreas de risco",
      severity: "Alta"
    }
  ];

  const mapLayers = [
    {
      name: "Locais de Auditoria",
      type: "Pontos",
      status: "Ativo",
      opacity: 100,
      color: "blue",
      count: auditLocations.length
    },
    {
      name: "Não Conformidades",
      type: "Heatmap",
      status: "Ativo",
      opacity: 70,
      color: "red",
      count: 11
    },
    {
      name: "Áreas de Risco",
      type: "Polígonos",
      status: "Ativo",
      opacity: 50,
      color: "orange",
      count: 8
    },
    {
      name: "Áreas Protegidas",
      type: "Overlay",
      status: "Inativo",
      opacity: 60,
      color: "green",
      count: 15
    },
    {
      name: "Qualidade do Ar",
      type: "Contorno",
      status: "Inativo",
      opacity: 80,
      color: "purple",
      count: 25
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Conforme': return 'bg-green-100 text-green-800';
      case 'Não Conforme': return 'bg-red-100 text-red-800';
      case 'Em Revisão': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Baixo': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Alto': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Baixa': return 'bg-green-100 text-green-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Alta': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5" />
              Integração GIS - Análise Espacial de Auditorias
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={mapView === 'satellite' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setMapView('satellite')}
              >
                <Satellite className="h-4 w-4 mr-2" />
                Satélite
              </Button>
              <Button 
                variant={mapView === 'street' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setMapView('street')}
              >
                Ruas
              </Button>
              <Button size="sm">
                <Layers className="h-4 w-4 mr-2" />
                Camadas
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Mapa Interativo */}
          <div className="relative h-96 bg-gradient-to-br from-green-100 via-blue-100 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-6">
            <div className="text-center">
              <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">Mapa GIS Interativo</h3>
              <p className="text-sm text-gray-500 mb-4">
                Visualização espacial de auditorias, não conformidades e análises de risco
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {auditLocations.map((location, index) => (
                  <Badge key={index} className={getStatusColor(location.status)}>
                    <MapPin className="w-3 h-3 mr-1" />
                    {location.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Controles do Mapa */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold">{auditLocations.length}</div>
                <p className="text-xs text-gray-600">Locais Mapeados</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <div className="text-lg font-bold">11</div>
                <p className="text-xs text-gray-600">Não Conformidades</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Activity className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold">3</div>
                <p className="text-xs text-gray-600">Análises Ativas</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Layers className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold">{mapLayers.length}</div>
                <p className="text-xs text-gray-600">Camadas GIS</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Locais de Auditoria */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Locais de Auditoria Mapeados
            </CardTitle>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button size="sm" variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {auditLocations.map((location) => (
              <Card key={location.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{location.name}</h3>
                        <p className="text-sm text-gray-600">{location.address}</p>
                        <p className="text-xs text-gray-500">Coordenadas: {location.coordinates}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getRiskColor(location.riskLevel)}>
                          {location.riskLevel}
                        </Badge>
                        <Badge className={getStatusColor(location.status)}>
                          {location.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-sm font-bold text-blue-600">{location.auditType}</div>
                        <p className="text-xs text-gray-600">Tipo Auditoria</p>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-red-600">{location.nonConformities}</div>
                        <p className="text-xs text-gray-600">Não Conformidades</p>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-green-600">{location.lastAudit}</div>
                        <p className="text-xs text-gray-600">Última Auditoria</p>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-purple-600">{location.nextAudit}</div>
                        <p className="text-xs text-gray-600">Próxima Auditoria</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Tipo:</span>
                        <Badge variant="outline">{location.type}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Ver no Mapa
                        </Button>
                        <Button size="sm" variant="outline">
                          Histórico
                        </Button>
                        <Button size="sm">
                          Agendar Auditoria
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Análises Espaciais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Análises Espaciais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {spatialAnalysis.map((analysis) => (
              <Card key={analysis.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{analysis.name}</h3>
                        <p className="text-sm text-gray-600">{analysis.description}</p>
                        <p className="text-xs text-gray-500">Cobertura: {analysis.coverage}</p>
                      </div>
                      <Badge className={getSeverityColor(analysis.severity)}>
                        {analysis.severity}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Principais Achados</p>
                        <p className="text-sm text-gray-600">{analysis.findings}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Recomendações</p>
                        <p className="text-sm text-gray-600">{analysis.recommendation}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Tipo:</span>
                        <Badge variant="outline">{analysis.type}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Ver Resultados
                        </Button>
                        <Button size="sm" variant="outline">
                          Exportar Dados
                        </Button>
                        <Button size="sm">
                          Executar Novamente
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Camadas do Mapa */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Gerenciamento de Camadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mapLayers.map((layer, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-4 h-4 rounded" 
                    style={{backgroundColor: layer.color, opacity: layer.opacity / 100}}
                  />
                  <div>
                    <h3 className="font-medium">{layer.name}</h3>
                    <p className="text-sm text-gray-600">{layer.type} • {layer.count} elementos</p>
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
                  <Badge className={layer.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                    {layer.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    {layer.status === 'Ativo' ? 'Ocultar' : 'Mostrar'}
                  </Button>
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
