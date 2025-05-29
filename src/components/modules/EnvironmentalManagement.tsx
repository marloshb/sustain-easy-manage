
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Leaf, 
  Droplets, 
  Trash2, 
  Wind, 
  FileText, 
  Calendar,
  TrendingDown,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const EnvironmentalManagement = () => {
  const [activeTab, setActiveTab] = useState('emissions');

  const emissionsData = [
    {
      scope: "Escopo 1",
      description: "Emissões diretas",
      value: 1247.5,
      target: 1200,
      unit: "tCO2e",
      trend: "+3.2%",
      status: "attention"
    },
    {
      scope: "Escopo 2",
      description: "Emissões indiretas - energia",
      value: 856.2,
      target: 900,
      unit: "tCO2e",
      trend: "-4.8%",
      status: "good"
    },
    {
      scope: "Escopo 3",
      description: "Outras emissões indiretas",
      value: 743.8,
      target: 800,
      unit: "tCO2e",
      trend: "-7.1%",
      status: "good"
    }
  ];

  const wasteData = [
    {
      type: "Resíduos Recicláveis",
      amount: 45.6,
      percentage: 68,
      unit: "toneladas",
      color: "green"
    },
    {
      type: "Resíduos Orgânicos",
      amount: 12.3,
      percentage: 18,
      unit: "toneladas",
      color: "blue"
    },
    {
      type: "Resíduos Perigosos",
      amount: 8.7,
      percentage: 13,
      unit: "toneladas",
      color: "orange"
    },
    {
      type: "Rejeitos",
      amount: 0.8,
      percentage: 1,
      unit: "toneladas",
      color: "red"
    }
  ];

  const waterData = [
    {
      source: "Captação Superficial",
      consumption: 125.4,
      limit: 150,
      unit: "mil m³"
    },
    {
      source: "Poço Artesiano",
      consumption: 78.9,
      limit: 100,
      unit: "mil m³"
    },
    {
      source: "Rede Pública",
      consumption: 23.7,
      limit: 30,
      unit: "mil m³"
    }
  ];

  const complianceItems = [
    {
      regulation: "CONAMA 001/86",
      description: "Licenciamento Ambiental",
      status: "Ativa",
      validity: "2025-12-15",
      responsible: "João Silva"
    },
    {
      regulation: "CONAMA 357/05",
      description: "Qualidade da Água",
      status: "Renovação",
      validity: "2024-03-20",
      responsible: "Maria Santos"
    },
    {
      regulation: "NBR 10004",
      description: "Classificação de Resíduos",
      status: "Ativa",
      validity: "2024-08-10",
      responsible: "Carlos Oliveira"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'attention': return 'text-orange-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Ativa': return 'bg-green-100 text-green-800';
      case 'Renovação': return 'bg-yellow-100 text-yellow-800';
      case 'Vencida': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="emissions" className="flex items-center gap-2">
            <Wind className="h-4 w-4" />
            Emissões GEE
          </TabsTrigger>
          <TabsTrigger value="waste" className="flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Gestão de Resíduos
          </TabsTrigger>
          <TabsTrigger value="water" className="flex items-center gap-2">
            <Droplets className="h-4 w-4" />
            Recursos Hídricos
          </TabsTrigger>
          <TabsTrigger value="compliance" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Conformidade
          </TabsTrigger>
        </TabsList>

        <TabsContent value="emissions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emissionsData.map((emission, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{emission.scope}</span>
                    <Wind className={`h-5 w-5 ${getStatusColor(emission.status)}`} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{emission.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">{emission.value}</span>
                      <span className="text-sm text-gray-500">{emission.unit}</span>
                    </div>
                    <Progress 
                      value={(emission.value / emission.target) * 100} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Meta: {emission.target} {emission.unit}</span>
                      <span className={`font-medium ${emission.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                        {emission.trend}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Plano de Redução de Emissões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Ações em Andamento</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Instalação de painéis solares - 45% concluído</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Modernização do sistema de ar condicionado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-sm">Substituição da frota por veículos elétricos</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Metas 2024</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Redução total CO2:</span>
                      <span className="text-sm font-medium">-15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Energia renovável:</span>
                      <span className="text-sm font-medium">70%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Eficiência energética:</span>
                      <span className="text-sm font-medium">+20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="waste" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Composição dos Resíduos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wasteData.map((waste, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{waste.type}</span>
                        <span className="text-sm text-gray-600">
                          {waste.amount} {waste.unit} ({waste.percentage}%)
                        </span>
                      </div>
                      <Progress value={waste.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Destinação de Resíduos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                    <p className="text-sm text-gray-600">Taxa de Reciclagem</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-semibold text-blue-600">67.2 t</div>
                      <p className="text-xs text-gray-600">Total Processado</p>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-red-600">0.8 t</div>
                      <p className="text-xs text-gray-600">Destinação Final</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Histórico de Coletas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Data</th>
                      <th className="text-left py-2">Tipo</th>
                      <th className="text-left py-2">Quantidade</th>
                      <th className="text-left py-2">Destinação</th>
                      <th className="text-left py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">15/01/2024</td>
                      <td className="py-2">Recicláveis</td>
                      <td className="py-2">12.5 t</td>
                      <td className="py-2">Reciclagem</td>
                      <td className="py-2">
                        <Badge className="bg-green-100 text-green-800">Concluído</Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">12/01/2024</td>
                      <td className="py-2">Perigosos</td>
                      <td className="py-2">2.8 t</td>
                      <td className="py-2">Incineração</td>
                      <td className="py-2">
                        <Badge className="bg-green-100 text-green-800">Concluído</Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">10/01/2024</td>
                      <td className="py-2">Orgânicos</td>
                      <td className="py-2">4.2 t</td>
                      <td className="py-2">Compostagem</td>
                      <td className="py-2">
                        <Badge className="bg-yellow-100 text-yellow-800">Em Processo</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="water" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {waterData.map((water, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-blue-600" />
                    {water.source}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">{water.consumption}</span>
                      <span className="text-sm text-gray-500">{water.unit}</span>
                    </div>
                    <Progress 
                      value={(water.consumption / water.limit) * 100} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Limite: {water.limit} {water.unit}</span>
                      <span className="text-green-600">
                        {((water.limit - water.consumption) / water.limit * 100).toFixed(1)}% disponível
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monitoramento da Qualidade da Água</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Parâmetros Físico-Químicos</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">pH:</span>
                      <span className="text-sm font-medium text-green-600">7.2 (Conforme)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Turbidez:</span>
                      <span className="text-sm font-medium text-green-600">1.8 NTU (Conforme)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">OD:</span>
                      <span className="text-sm font-medium text-green-600">6.5 mg/L (Conforme)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">DBO:</span>
                      <span className="text-sm font-medium text-orange-600">4.2 mg/L (Atenção)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Próximas Coletas</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Rio Principal:</span>
                      <span className="text-sm">20/01/2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Poço 01:</span>
                      <span className="text-sm">22/01/2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Efluente:</span>
                      <span className="text-sm">25/01/2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status da Conformidade Regulatória</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Regulamentação</th>
                      <th className="text-left py-2">Descrição</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Validade</th>
                      <th className="text-left py-2">Responsável</th>
                      <th className="text-left py-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complianceItems.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{item.regulation}</td>
                        <td className="py-2">{item.description}</td>
                        <td className="py-2">
                          <Badge className={getStatusBadge(item.status)}>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-2">{item.validity}</td>
                        <td className="py-2">{item.responsible}</td>
                        <td className="py-2">
                          <Button size="sm" variant="outline">
                            Ver Detalhes
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Próximos Vencimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm font-medium">Licença de Operação</p>
                      <p className="text-xs text-gray-600">Vence em 30 dias</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium">Relatório Anual RAPP</p>
                      <p className="text-xs text-gray-600">Vence em 45 dias</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Auditorias Programadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Auditoria ISO 14001</p>
                      <p className="text-xs text-gray-600">20/01/2024 - Externa</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Inspeção Interna</p>
                      <p className="text-xs text-gray-600">25/01/2024 - Resíduos</p>
                    </div>
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

export default EnvironmentalManagement;
