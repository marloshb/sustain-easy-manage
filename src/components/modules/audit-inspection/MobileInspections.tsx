
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  MapPin, 
  Camera, 
  Wifi, 
  WifiOff, 
  Upload, 
  Download,
  CheckCircle,
  AlertTriangle,
  Clock,
  Route
} from 'lucide-react';

const MobileInspections = () => {
  const [activeView, setActiveView] = useState('app');

  const mobileInspections = [
    {
      id: "INS-001",
      title: "Inspeção de Segurança - Área Industrial",
      inspector: "Maria Santos",
      facility: "Planta São Paulo",
      location: "Setor A - Linha de Produção 1",
      coordinates: "-23.5613, -46.6563",
      startTime: "08:30",
      status: "Em Andamento",
      progress: 65,
      findings: 3,
      photos: 12,
      offline: false,
      syncStatus: "Sincronizado"
    },
    {
      id: "INS-002",
      title: "Inspeção Ambiental - Tratamento de Efluentes",
      inspector: "João Silva",
      facility: "Fábrica Campinas",
      location: "ETE - Estação de Tratamento",
      coordinates: "-22.9056, -47.0608",
      startTime: "09:00",
      status: "Pendente Sincronização",
      progress: 100,
      findings: 2,
      photos: 8,
      offline: true,
      syncStatus: "Pendente"
    },
    {
      id: "INS-003",
      title: "Auditoria HSE - Escritórios",
      inspector: "Carlos Lima",
      facility: "Sede Administrativa",
      location: "Andares 5-8",
      coordinates: "-23.5775, -46.6872",
      startTime: "14:00",
      status: "Concluída",
      progress: 100,
      findings: 1,
      photos: 6,
      offline: false,
      syncStatus: "Sincronizado"
    }
  ];

  const inspectionForms = [
    {
      id: "FORM-001",
      name: "Inspeção de Segurança Industrial",
      standard: "OSHA",
      fields: 45,
      sections: ["EPI", "Equipamentos", "Procedimentos", "Ambiente"],
      estimatedTime: "2-3 horas",
      customizable: true,
      offline: true
    },
    {
      id: "FORM-002", 
      name: "Auditoria Ambiental ISO 14001",
      standard: "ISO 14001",
      fields: 67,
      sections: ["Política", "Aspectos", "Objetivos", "Controle Operacional"],
      estimatedTime: "3-4 horas",
      customizable: true,
      offline: true
    },
    {
      id: "FORM-003",
      name: "Inspeção HSE Geral",
      standard: "HSE",
      fields: 32,
      sections: ["Saúde", "Segurança", "Meio Ambiente"],
      estimatedTime: "1-2 horas",
      customizable: false,
      offline: true
    }
  ];

  const inspectionRoute = [
    {
      id: "ROUTE-001",
      name: "Rota Planta Industrial",
      facilities: ["Setor A", "Setor B", "ETE", "Almoxarifado"],
      distance: "2.3 km",
      estimatedTime: "3 horas",
      optimized: true,
      inspector: "Maria Santos"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluída': return 'bg-green-100 text-green-800';
      case 'Em Andamento': return 'bg-yellow-100 text-yellow-800';
      case 'Pendente Sincronização': return 'bg-orange-100 text-orange-800';
      case 'Agendada': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSyncColor = (status: string) => {
    switch (status) {
      case 'Sincronizado': return 'bg-green-100 text-green-800';
      case 'Pendente': return 'bg-orange-100 text-orange-800';
      case 'Erro': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Aplicativo Móvel para Inspeções
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={activeView === 'app' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('app')}
              >
                App Mobile
              </Button>
              <Button 
                variant={activeView === 'forms' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('forms')}
              >
                Formulários
              </Button>
              <Button 
                variant={activeView === 'routes' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('routes')}
              >
                Rotas
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {activeView === 'app' && (
            <div className="space-y-6">
              {/* App Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4 text-center">
                    <WifiOff className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Modo Offline</h3>
                    <p className="text-xs text-gray-600">Funciona sem internet</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4 text-center">
                    <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Geotag GPS</h3>
                    <p className="text-xs text-gray-600">Localização automática</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4 text-center">
                    <Camera className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Fotos & Vídeos</h3>
                    <p className="text-xs text-gray-600">Evidências visuais</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4 text-center">
                    <Upload className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Sync Automática</h3>
                    <p className="text-xs text-gray-600">Sincronização em tempo real</p>
                  </CardContent>
                </Card>
              </div>

              {/* Active Inspections */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Inspeções Ativas</h3>
                {mobileInspections.map((inspection) => (
                  <Card key={inspection.id} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold">{inspection.title}</h3>
                            <p className="text-sm text-gray-600">{inspection.facility} • {inspection.location}</p>
                            <p className="text-xs text-gray-500">Iniciada às {inspection.startTime}</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className={getStatusColor(inspection.status)}>
                              {inspection.status}
                            </Badge>
                            <Badge className={getSyncColor(inspection.syncStatus)}>
                              {inspection.offline ? (
                                <WifiOff className="h-3 w-3 mr-1" />
                              ) : (
                                <Wifi className="h-3 w-3 mr-1" />
                              )}
                              {inspection.syncStatus}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{inspection.progress}%</div>
                            <p className="text-xs text-gray-600">Progresso</p>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-600">{inspection.findings}</div>
                            <p className="text-xs text-gray-600">Achados</p>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{inspection.photos}</div>
                            <p className="text-xs text-gray-600">Fotos</p>
                          </div>
                          <div className="text-center">
                            <MapPin className="h-4 w-4 text-gray-400 mx-auto" />
                            <p className="text-xs text-gray-600">GPS Ativo</p>
                          </div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{width: `${inspection.progress}%`}}
                          />
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Inspetor:</span>
                            <span className="text-sm font-medium">{inspection.inspector}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Ver Detalhes
                            </Button>
                            <Button size="sm" variant="outline">
                              Localizar
                            </Button>
                            {inspection.syncStatus === 'Pendente' && (
                              <Button size="sm">
                                <Upload className="h-3 w-3 mr-1" />
                                Sincronizar
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeView === 'forms' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Formulários de Inspeção</h3>
              {inspectionForms.map((form) => (
                <Card key={form.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{form.name}</h3>
                          <p className="text-sm text-gray-600">Padrão: {form.standard}</p>
                          <p className="text-xs text-gray-500">Tempo estimado: {form.estimatedTime}</p>
                        </div>
                        <div className="flex gap-2">
                          {form.customizable && (
                            <Badge variant="outline">Customizável</Badge>
                          )}
                          {form.offline && (
                            <Badge className="bg-blue-100 text-blue-800">
                              <WifiOff className="h-3 w-3 mr-1" />
                              Offline
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-600">{form.fields}</div>
                          <p className="text-xs text-gray-600">Campos</p>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{form.sections.length}</div>
                          <p className="text-xs text-gray-600">Seções</p>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-600">
                            {form.customizable ? 'Sim' : 'Não'}
                          </div>
                          <p className="text-xs text-gray-600">Customizável</p>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-orange-600">
                            {form.offline ? 'Sim' : 'Não'}
                          </div>
                          <p className="text-xs text-gray-600">Modo Offline</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Seções do Formulário</p>
                        <div className="flex flex-wrap gap-1">
                          {form.sections.map((section, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {section}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Visualizar
                        </Button>
                        <Button size="sm" variant="outline">
                          Editar
                        </Button>
                        <Button size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Baixar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'routes' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Otimização de Rotas</h3>
              {inspectionRoute.map((route) => (
                <Card key={route.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{route.name}</h3>
                          <p className="text-sm text-gray-600">Inspetor: {route.inspector}</p>
                        </div>
                        <div className="flex gap-2">
                          {route.optimized && (
                            <Badge className="bg-green-100 text-green-800">
                              <Route className="h-3 w-3 mr-1" />
                              Otimizada
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-600">{route.facilities.length}</div>
                          <p className="text-xs text-gray-600">Locais</p>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{route.distance}</div>
                          <p className="text-xs text-gray-600">Distância</p>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-600">{route.estimatedTime}</div>
                          <p className="text-xs text-gray-600">Tempo Estimado</p>
                        </div>
                        <div>
                          <Route className="h-6 w-6 text-orange-600 mx-auto" />
                          <p className="text-xs text-gray-600">Rota GPS</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Sequência de Locais</p>
                        <div className="flex flex-wrap gap-1">
                          {route.facilities.map((facility, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {index + 1}. {facility}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MapPin className="h-3 w-3 mr-1" />
                          Ver no Mapa
                        </Button>
                        <Button size="sm" variant="outline">
                          Otimizar Rota
                        </Button>
                        <Button size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Exportar GPS
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileInspections;
