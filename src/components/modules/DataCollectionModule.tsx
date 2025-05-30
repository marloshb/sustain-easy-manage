
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
  Leaf
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
      trend: "-5.2%"
    },
    {
      name: "Consumo Energia",
      type: "Utilities",
      source: "Smart Meters",
      status: "Ativo",
      lastUpdate: "1 min atrás",
      value: "847 kWh",
      trend: "+2.1%"
    },
    {
      name: "Consumo Água",
      type: "Recursos",
      source: "Medidores",
      status: "Ativo",
      lastUpdate: "5 min atrás",
      value: "1.2 m³/h",
      trend: "-8.3%"
    },
    {
      name: "Geração Resíduos",
      type: "Waste",
      source: "Manual Input",
      status: "Pendente",
      lastUpdate: "2h atrás",
      value: "0.8 t/dia",
      trend: "-12.1%"
    }
  ];

  const iotDevices = [
    {
      id: "IOT-001",
      name: "Sensor CO2 - Linha 1",
      type: "Emissor",
      location: "Produção A",
      status: "Online",
      battery: 87,
      lastData: "30 seg atrás"
    },
    {
      id: "IOT-002",
      name: "Medidor Energia - Geral",
      type: "Energy",
      location: "Subestação",
      status: "Online",
      battery: 95,
      lastData: "1 min atrás"
    },
    {
      id: "IOT-003",
      name: "Sensor Água - Entrada",
      type: "Water",
      location: "ETA",
      status: "Warning",
      battery: 23,
      lastData: "15 min atrás"
    },
    {
      id: "IOT-004",
      name: "Monitor Resíduos",
      type: "Waste",
      location: "Central Resíduos",
      status: "Offline",
      battery: 0,
      lastData: "3h atrás"
    }
  ];

  const reports = [
    {
      name: "Relatório ESG Q1 2024",
      type: "ESG Comprehensive",
      format: "ESRS",
      status: "Em Progresso",
      progress: 78,
      dueDate: "2024-02-28"
    },
    {
      name: "Emissões GEE - Janeiro",
      type: "Environmental",
      format: "GRI",
      status: "Concluído",
      progress: 100,
      dueDate: "2024-02-15"
    },
    {
      name: "CDP Climate Response",
      type: "Carbon Disclosure",
      format: "CDP",
      status: "Revisão",
      progress: 92,
      dueDate: "2024-03-01"
    }
  ];

  const kpis = [
    {
      name: "Intensidade Carbono",
      value: "0.34",
      unit: "tCO2e/MWh",
      target: "0.30",
      progress: 88,
      trend: "-6.2%"
    },
    {
      name: "Eficiência Energética",
      value: "87%",
      unit: "",
      target: "90%",
      progress: 97,
      trend: "+3.1%"
    },
    {
      name: "Reciclagem",
      value: "84%",
      unit: "",
      target: "85%",
      progress: 99,
      trend: "+2.8%"
    },
    {
      name: "Uso Água",
      value: "2.1",
      unit: "m³/t prod",
      target: "2.0",
      progress: 95,
      trend: "-4.5%"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': case 'Ativo': case 'Concluído': return 'bg-green-100 text-green-800';
      case 'Warning': case 'Pendente': case 'Em Progresso': return 'bg-yellow-100 text-yellow-800';
      case 'Offline': case 'Erro': return 'bg-red-100 text-red-800';
      case 'Revisão': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="streams" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Dados Tempo Real
          </TabsTrigger>
          <TabsTrigger value="iot" className="flex items-center gap-2">
            <Wifi className="h-4 w-4" />
            Dispositivos IoT
          </TabsTrigger>
          <TabsTrigger value="kpis" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            KPIs
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Relatórios
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">1.2M</div>
                <p className="text-sm text-gray-600">Pontos de Dados/Mês</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Wifi className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">18</div>
                <p className="text-sm text-gray-600">Dispositivos IoT</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Activity className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">94%</div>
                <p className="text-sm text-gray-600">Uptime dos Sensores</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">87%</div>
                <p className="text-sm text-gray-600">Qualidade dos Dados</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Streams de Dados Principais</CardTitle>
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

        <TabsContent value="streams" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataStreams.map((stream, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{stream.name}</CardTitle>
                    <Badge className={getStatusColor(stream.status)}>
                      {stream.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{stream.value}</div>
                      <p className="text-sm text-gray-600">{stream.lastUpdate}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Tipo</p>
                        <p className="font-medium">{stream.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Fonte</p>
                        <p className="font-medium">{stream.source}</p>
                      </div>
                    </div>
                    <div className={`text-center p-2 rounded ${
                      stream.trend.startsWith('+') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                    }`}>
                      {stream.trend} vs. período anterior
                    </div>
                    <Button className="w-full" variant="outline" size="sm">
                      Ver Histórico
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="iot" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dispositivos IoT Conectados</h2>
            <div className="flex gap-2">
              <Button size="sm">Adicionar Dispositivo</Button>
              <Button size="sm" variant="outline">Configurações</Button>
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
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Bateria</span>
                        <span>{device.battery}%</span>
                      </div>
                      <Progress value={device.battery} className="h-2" />
                    </div>
                    <p className="text-xs text-gray-500">
                      Últimos dados: {device.lastData}
                    </p>
                    <Button className="w-full" variant="outline" size="sm">
                      Configurar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="kpis" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kpis.map((kpi, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{kpi.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {kpi.value} {kpi.unit}
                      </div>
                      <p className="text-sm text-gray-600">Meta: {kpi.target} {kpi.unit}</p>
                    </div>
                    <Progress value={kpi.progress} className="h-3" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progresso: {kpi.progress}%</span>
                      <span className={`font-medium ${
                        kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {kpi.trend}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Automáticos</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Novo Relatório</Button>
                <Button size="sm" variant="outline">Agendar</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-gray-600">{report.type} • Formato: {report.format}</p>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progresso</span>
                          <span>{report.progress}%</span>
                        </div>
                        <Progress value={report.progress} className="h-2" />
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
                          Baixar
                        </Button>
                        <Button size="sm" variant="outline">
                          Ver
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataCollectionModule;
