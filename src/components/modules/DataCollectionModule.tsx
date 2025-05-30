
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { 
  Database, 
  Activity, 
  TrendingUp, 
  Wifi,
  BarChart3,
  Download,
  Upload,
  Zap,
  Droplets,
  Trash2,
  Leaf,
  MapPin,
  Brain,
  Satellite,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Settings
} from 'lucide-react';

const DataCollectionModule = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dataStreams = [
    {
      name: "Emissões CO2",
      type: "Escopo 1",
      source: "IoT Sensores",
      status: "Ativo",
      lastUpdate: "2 min atrás",
      value: "2.4 t/h",
      trend: "-5.2%",
      location: "-23.5505, -46.6333",
      geotag: true
    },
    {
      name: "Consumo Energia",
      type: "Utilities",
      source: "Smart Meters",
      status: "Ativo",
      lastUpdate: "1 min atrás",
      value: "847 kWh",
      trend: "+2.1%",
      location: "-23.5489, -46.6388",
      geotag: true
    },
    {
      name: "Consumo Água",
      type: "Recursos",
      source: "Medidores",
      status: "Ativo",
      lastUpdate: "5 min atrás",
      value: "1.2 m³/h",
      trend: "-8.3%",
      location: "-23.5501, -46.6349",
      geotag: true
    },
    {
      name: "Geração Resíduos",
      type: "Waste",
      source: "Manual Input",
      status: "Pendente",
      lastUpdate: "2h atrás",
      value: "0.8 t/dia",
      trend: "-12.1%",
      location: "-23.5492, -46.6341",
      geotag: false
    }
  ];

  const iotDevices = [
    {
      id: "IOT-001",
      name: "Sensor CO2 - Linha 1",
      type: "Emissor",
      location: "Produção A",
      coordinates: "-23.5505, -46.6333",
      status: "Online",
      battery: 87,
      lastData: "30 seg atrás",
      validationStatus: "Validado"
    },
    {
      id: "IOT-002",
      name: "Medidor Energia - Geral",
      type: "Energy",
      location: "Subestação",
      coordinates: "-23.5489, -46.6388",
      status: "Online",
      battery: 95,
      lastData: "1 min atrás",
      validationStatus: "Validado"
    },
    {
      id: "IOT-003",
      name: "Sensor Água - Entrada",
      type: "Water",
      location: "ETA",
      coordinates: "-23.5501, -46.6349",
      status: "Warning",
      battery: 23,
      lastData: "15 min atrás",
      validationStatus: "Anomalia Detectada"
    },
    {
      id: "IOT-004",
      name: "Monitor Resíduos",
      type: "Waste",
      location: "Central Resíduos",
      coordinates: "-23.5492, -46.6341",
      status: "Offline",
      battery: 0,
      lastData: "3h atrás",
      validationStatus: "Falha Comunicação"
    }
  ];

  const openDataSources = [
    {
      name: "EPA Air Quality",
      type: "Qualidade do Ar",
      status: "Conectado",
      lastSync: "1 hora atrás",
      coverage: "Regional",
      api: "EPA AQS API"
    },
    {
      name: "NASA Climate Data",
      type: "Dados Climáticos",
      status: "Conectado",
      lastSync: "2 horas atrás",
      coverage: "Global",
      api: "NASA GISS API"
    },
    {
      name: "NOAA Weather",
      type: "Meteorologia",
      status: "Conectado",
      lastSync: "30 min atrás",
      coverage: "Nacional",
      api: "NOAA API"
    },
    {
      name: "IUCN Red List",
      type: "Biodiversidade",
      status: "Desconectado",
      lastSync: "1 dia atrás",
      coverage: "Global",
      api: "IUCN API"
    }
  ];

  const reports = [
    {
      name: "Relatório CSRD Q1 2024",
      type: "ESG Comprehensive",
      format: "CSRD",
      status: "Em Progresso",
      progress: 78,
      dueDate: "2024-02-28",
      validationAI: "Aprovado",
      gisIntegration: true
    },
    {
      name: "Emissões GEE - Janeiro",
      type: "Environmental",
      format: "GRI",
      status: "Concluído",
      progress: 100,
      dueDate: "2024-02-15",
      validationAI: "Aprovado",
      gisIntegration: true
    },
    {
      name: "ESRS E1 - Mudanças Climáticas",
      type: "Climate",
      format: "ESRS",
      status: "Revisão",
      progress: 92,
      dueDate: "2024-03-01",
      validationAI: "Pendente",
      gisIntegration: false
    }
  ];

  const simulations = [
    {
      name: "Redução de Emissões 20%",
      type: "Carbon Footprint",
      status: "Executando",
      progress: 65,
      scenario: "Adoção Energia Solar",
      impact: "- 340 tCO2/ano",
      gisVisualization: true
    },
    {
      name: "Eficiência Hídrica",
      type: "Water Management",
      status: "Concluído",
      progress: 100,
      scenario: "Reciclagem de Água",
      impact: "- 2.3 milhões L/ano",
      gisVisualization: true
    },
    {
      name: "Análise de Risco Ambiental",
      type: "Risk Assessment",
      status: "Agendado",
      progress: 0,
      scenario: "Vazamento Industrial",
      impact: "Área de risco: 5km raio",
      gisVisualization: true
    }
  ];

  const kpis = [
    {
      name: "Intensidade Carbono",
      value: "0.34",
      unit: "tCO2e/MWh",
      target: "0.30",
      progress: 88,
      trend: "-6.2%",
      benchmark: "Média Setor: 0.42",
      geotagged: true
    },
    {
      name: "Eficiência Energética",
      value: "87%",
      unit: "",
      target: "90%",
      progress: 97,
      trend: "+3.1%",
      benchmark: "Média Regional: 82%",
      geotagged: true
    },
    {
      name: "Taxa Reciclagem",
      value: "84%",
      unit: "",
      target: "85%",
      progress: 99,
      trend: "+2.8%",
      benchmark: "Média Nacional: 78%",
      geotagged: false
    },
    {
      name: "Uso Água",
      value: "2.1",
      unit: "m³/t prod",
      target: "2.0",
      progress: 95,
      trend: "-4.5%",
      benchmark: "Média Indústria: 2.8",
      geotagged: true
    }
  ];

  const aiInsights = [
    {
      type: "Anomalia Detectada",
      description: "Pico de consumo energético 35% acima da média na Unidade B",
      severity: "Média",
      recommendation: "Verificar equipamentos e otimizar processo",
      confidence: "94%",
      timestamp: "2 horas atrás"
    },
    {
      type: "Tendência Preditiva",
      description: "Projeção de aumento de 12% nas emissões se mantido padrão atual",
      severity: "Alta",
      recommendation: "Implementar medidas de redução até Q2",
      confidence: "87%",
      timestamp: "1 dia atrás"
    },
    {
      type: "Otimização",
      description: "Potencial economia de 15% no consumo de água com reciclagem",
      severity: "Baixa",
      recommendation: "Avaliar investimento em sistema de reciclagem",
      confidence: "91%",
      timestamp: "3 dias atrás"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': case 'Ativo': case 'Concluído': case 'Conectado': return 'bg-green-100 text-green-800';
      case 'Warning': case 'Pendente': case 'Em Progresso': case 'Executando': return 'bg-yellow-100 text-yellow-800';
      case 'Offline': case 'Erro': case 'Desconectado': return 'bg-red-100 text-red-800';
      case 'Revisão': case 'Agendado': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="collection" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Coleta Dados
          </TabsTrigger>
          <TabsTrigger value="iot" className="flex items-center gap-2">
            <Wifi className="h-4 w-4" />
            IoT & Sensores
          </TabsTrigger>
          <TabsTrigger value="gis" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            GIS Análise
          </TabsTrigger>
          <TabsTrigger value="opendata" className="flex items-center gap-2">
            <Satellite className="h-4 w-4" />
            Dados Abertos
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Relatórios
          </TabsTrigger>
          <TabsTrigger value="ai" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            IA & Simulações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">1.2M</div>
                <p className="text-sm text-gray-600">Pontos de Dados/Mês</p>
                <p className="text-xs text-gray-500">95% Geotagueados</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Wifi className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">18</div>
                <p className="text-sm text-gray-600">Dispositivos IoT</p>
                <p className="text-xs text-gray-500">94% Uptime</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">8</div>
                <p className="text-sm text-gray-600">Insights IA</p>
                <p className="text-xs text-gray-500">91% Confiança Média</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Satellite className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">4</div>
                <p className="text-sm text-gray-600">Fontes Abertas</p>
                <p className="text-xs text-gray-500">75% Conectadas</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>KPIs de Sustentabilidade com Benchmarking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {kpis.map((kpi, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{kpi.name}</h3>
                          {kpi.geotagged && <MapPin className="h-4 w-4 text-blue-500" />}
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {kpi.value} {kpi.unit}
                          </div>
                          <p className="text-sm text-gray-600">Meta: {kpi.target} {kpi.unit}</p>
                        </div>
                        <Progress value={kpi.progress} className="h-2" />
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Progresso: {kpi.progress}%</span>
                            <span className={`font-medium ${
                              kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {kpi.trend}
                            </span>
                          </div>
                          <p className="text-gray-500">{kpi.benchmark}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collection" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload de Dados em Massa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Arraste arquivos ou clique para fazer upload
                    </p>
                    <p className="text-xs text-gray-500">
                      Suporte: CSV, JSON, XML (máx. 50MB)
                    </p>
                    <Button className="mt-2" size="sm">
                      Selecionar Arquivos
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <Button variant="outline" size="sm">
                      Template CSV
                    </Button>
                    <Button variant="outline" size="sm">
                      Validar Dados
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bibliotecas de Fatores de Emissão</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded border">
                    <h4 className="font-medium text-sm">GHG Protocol - Escopo 1</h4>
                    <p className="text-xs text-gray-600">1.247 fatores carregados</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border">
                    <h4 className="font-medium text-sm">GHG Protocol - Escopo 2</h4>
                    <p className="text-xs text-gray-600">892 fatores carregados</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded border">
                    <h4 className="font-medium text-sm">GHG Protocol - Escopo 3</h4>
                    <p className="text-xs text-gray-600">2.156 fatores carregados</p>
                  </div>
                  <Button size="sm" className="w-full">
                    Gerenciar Fatores
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Streams de Dados em Tempo Real</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataStreams.map((stream, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        stream.status === 'Ativo' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'
                      }`} />
                      <div>
                        <h3 className="font-medium">{stream.name}</h3>
                        <p className="text-sm text-gray-600">{stream.type} • {stream.source}</p>
                        {stream.geotag && (
                          <p className="text-xs text-blue-600 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {stream.location}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-bold">{stream.value}</div>
                        <p className="text-sm text-gray-600">{stream.lastUpdate}</p>
                      </div>
                      <div className={`text-sm font-medium ${
                        stream.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {stream.trend}
                      </div>
                      <Badge className={getStatusColor(stream.status)}>
                        {stream.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="iot" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dispositivos IoT e Validação IA</h2>
            <div className="flex gap-2">
              <Button size="sm">Adicionar Dispositivo</Button>
              <Button size="sm" variant="outline">Configurar Validação</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iotDevices.map((device, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">{device.name}</CardTitle>
                    <Badge className={getStatusColor(device.status)}>
                      {device.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-600">ID</p>
                        <p className="font-medium">{device.id}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Tipo</p>
                        <p className="font-medium">{device.type}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Localização</p>
                      <p className="font-medium">{device.location}</p>
                      <p className="text-xs text-blue-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {device.coordinates}
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Bateria</span>
                        <span>{device.battery}%</span>
                      </div>
                      <Progress value={device.battery} className="h-2" />
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-xs font-medium">Validação IA:</p>
                      <p className={`text-xs ${
                        device.validationStatus === 'Validado' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {device.validationStatus}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">
                      Últimos dados: {device.lastData}
                    </p>
                    <div className="flex gap-1">
                      <Button className="flex-1" variant="outline" size="sm">
                        Ver no GIS
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sistema GIS - Análise Espacial de Dados</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Buffer Analysis</Button>
                <Button size="sm" variant="outline">Overlay Analysis</Button>
                <Button size="sm" variant="outline">Hotspot Detection</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Mapa GIS Interativo</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Visualização espacial de dados ESG com análises avançadas
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-white rounded border">
                      <p className="font-medium">Análise de Buffer</p>
                      <p className="text-gray-600">Impacto em raio de 5km</p>
                    </div>
                    <div className="p-2 bg-white rounded border">
                      <p className="font-medium">Sobreposição</p>
                      <p className="text-gray-600">Emissões vs População</p>
                    </div>
                    <div className="p-2 bg-white rounded border">
                      <p className="font-medium">Hotspots</p>
                      <p className="text-gray-600">Áreas de alto impacto</p>
                    </div>
                    <div className="p-2 bg-white rounded border">
                      <p className="font-medium">Satélite</p>
                      <p className="text-gray-600">NASA/Copernicus</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="opendata" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Integrações com Dados Abertos</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Nova Integração</Button>
                <Button size="sm" variant="outline">Sincronizar Tudo</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {openDataSources.map((source, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{source.name}</h3>
                          <Badge className={getStatusColor(source.status)}>
                            {source.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-gray-600">Tipo</p>
                            <p className="font-medium">{source.type}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Cobertura</p>
                            <p className="font-medium">{source.coverage}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">API</p>
                          <p className="font-medium text-sm">{source.api}</p>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Última sincronização: {source.lastSync}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1" variant="outline">
                            Configurar
                          </Button>
                          <Button size="sm" className="flex-1">
                            Sincronizar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Benchmarking com Dados Externos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border">
                  <h4 className="font-medium">Qualidade do Ar Regional vs Nossa Performance</h4>
                  <p className="text-sm text-gray-600">Dados EPA: Nossas emissões 23% abaixo da média regional</p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">Ver Detalhes</Button>
                    <Button size="sm" variant="outline">Exportar</Button>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded border">
                  <h4 className="font-medium">Eficiência Energética vs Setor</h4>
                  <p className="text-sm text-gray-600">Nossa eficiência: 87% vs Média do setor: 74%</p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">Ver Tendências</Button>
                    <Button size="sm" variant="outline">Relatório</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Automatizados com Validação IA</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Novo Relatório</Button>
                <Button size="sm" variant="outline">Agendar</Button>
                <Button size="sm" variant="outline">Templates</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{report.name}</h3>
                        {report.gisIntegration && <MapPin className="h-4 w-4 text-blue-500" />}
                      </div>
                      <p className="text-sm text-gray-600">{report.type} • Formato: {report.format}</p>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progresso</span>
                          <span>{report.progress}%</span>
                        </div>
                        <Progress value={report.progress} className="h-2" />
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs text-gray-600">Validação IA:</span>
                        <Badge className={getStatusColor(report.validationAI)}>
                          {report.validationAI}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 ml-4">
                      <div className="text-right">
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">Prazo: {report.dueDate}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          Ver GIS
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Insights de IA</CardTitle>
                <Button size="sm" variant="outline">Configurar Alertas</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getSeverityColor(insight.severity)}>
                          {insight.severity}
                        </Badge>
                        <span className="text-xs text-gray-500">{insight.timestamp}</span>
                      </div>
                      <h4 className="font-medium text-sm mb-1">{insight.type}</h4>
                      <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                      <p className="text-sm font-medium text-blue-600 mb-2">{insight.recommendation}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Confiança: {insight.confidence}</span>
                        <Button size="sm" variant="outline">Implementar</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Simulações e Cenários</CardTitle>
                <Button size="sm">Nova Simulação</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {simulations.map((sim, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{sim.name}</h4>
                        <Badge className={getStatusColor(sim.status)}>
                          {sim.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Cenário: {sim.scenario}</p>
                      <p className="text-sm font-medium text-green-600 mb-2">Impacto: {sim.impact}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso</span>
                          <span>{sim.progress}%</span>
                        </div>
                        <Progress value={sim.progress} className="h-2" />
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        {sim.gisVisualization && (
                          <span className="text-xs text-blue-600 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Visualização GIS
                          </span>
                        )}
                        <Button size="sm" variant="outline">
                          Ver Resultados
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Consulta IA em Linguagem Natural</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Ex: Quais instalações excederam as metas de emissões em 2024?"
                    className="flex-1"
                  />
                  <Button>
                    <Brain className="h-4 w-4 mr-1" />
                    Consultar
                  </Button>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium text-sm mb-2">Exemplos de Consultas:</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• "Mostre o consumo de água por região no último trimestre"</p>
                    <p>• "Identifique anomalias nas emissões da Unidade B"</p>
                    <p>• "Compare nossa eficiência energética com o benchmarking do setor"</p>
                    <p>• "Simule o impacto da instalação de painéis solares"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataCollectionModule;
