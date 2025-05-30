
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp, 
  Activity,
  Target,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  FileText
} from 'lucide-react';

const RiskManagement = () => {
  const [activeTab, setActiveTab] = useState('matrix');

  const riskMatrix = [
    {
      id: "R-001",
      name: "Vazamento de Produtos Químicos",
      category: "Ambiental",
      probability: "Média",
      impact: "Alto",
      riskLevel: "Alto",
      status: "Ativo",
      owner: "João Silva",
      lastReview: "2024-01-10"
    },
    {
      id: "R-002",
      name: "Acidente com Equipamentos",
      category: "Segurança",
      probability: "Baixa",
      impact: "Alto",
      riskLevel: "Médio",
      status: "Mitigado",
      owner: "Maria Santos",
      lastReview: "2024-01-08"
    },
    {
      id: "R-003",
      name: "Não Conformidade CSRD",
      category: "Compliance",
      probability: "Alta",
      impact: "Médio",
      riskLevel: "Alto",
      status: "Em Tratamento",
      owner: "Ana Costa",
      lastReview: "2024-01-15"
    },
    {
      id: "R-004",
      name: "Falha no Sistema de Monitoramento",
      category: "Operacional",
      probability: "Média",
      impact: "Médio",
      riskLevel: "Médio",
      status: "Ativo",
      owner: "Pedro Lima",
      lastReview: "2024-01-12"
    }
  ];

  const mitigationPlans = [
    {
      id: "MP-001",
      riskId: "R-001",
      action: "Instalação de Sistema de Contenção",
      responsible: "Equipe Manutenção",
      deadline: "2024-02-28",
      progress: 65,
      budget: "R$ 150.000",
      status: "Em Progresso"
    },
    {
      id: "MP-002",
      riskId: "R-003",
      action: "Treinamento em CSRD/ESRS",
      responsible: "Equipe ESG",
      deadline: "2024-02-15",
      progress: 40,
      budget: "R$ 25.000",
      status: "Em Progresso"
    },
    {
      id: "MP-003",
      riskId: "R-004",
      action: "Redundância de Sensores IoT",
      responsible: "TI",
      deadline: "2024-03-10",
      progress: 20,
      budget: "R$ 80.000",
      status: "Iniciado"
    }
  ];

  const incidentLearning = [
    {
      id: "INC-001",
      date: "2023-12-15",
      type: "Vazamento Menor",
      rootCause: "Falha na vedação",
      lesson: "Inspeções preventivas quinzenais",
      implementedAction: "Protocolo de Inspeção Atualizado",
      relatedRisk: "R-001"
    },
    {
      id: "INC-002",
      date: "2023-11-28",
      type: "Queda de Sistema",
      rootCause: "Sobrecarga elétrica",
      lesson: "Backup de energia necessário",
      implementedAction: "Instalação de UPS",
      relatedRisk: "R-004"
    }
  ];

  const riskTrends = [
    {
      category: "Ambiental",
      currentMonth: 8,
      lastMonth: 12,
      trend: "-33%",
      color: "green"
    },
    {
      category: "Segurança",
      currentMonth: 5,
      lastMonth: 6,
      trend: "-17%",
      color: "green"
    },
    {
      category: "Compliance",
      currentMonth: 15,
      lastMonth: 10,
      trend: "+50%",
      color: "red"
    },
    {
      category: "Operacional",
      currentMonth: 7,
      lastMonth: 8,
      trend: "-13%",
      color: "green"
    }
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-red-100 text-red-800';
      case 'Mitigado': case 'Concluído': return 'bg-green-100 text-green-800';
      case 'Em Tratamento': case 'Em Progresso': return 'bg-yellow-100 text-yellow-800';
      case 'Iniciado': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="matrix" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Matriz de Riscos
          </TabsTrigger>
          <TabsTrigger value="mitigation" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Planos de Mitigação
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Tendências
          </TabsTrigger>
          <TabsTrigger value="learning" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Aprendizado
          </TabsTrigger>
          <TabsTrigger value="assessment" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Avaliação
          </TabsTrigger>
        </TabsList>

        <TabsContent value="matrix" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-red-200">
              <CardContent className="p-6">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-600">8</div>
                <p className="text-sm text-gray-600">Riscos Altos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-yellow-200">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-600">15</div>
                <p className="text-sm text-gray-600">Riscos Médios</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">23</div>
                <p className="text-sm text-gray-600">Riscos Baixos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">12</div>
                <p className="text-sm text-gray-600">Riscos Mitigados</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Matriz de Riscos Identificados</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Novo Risco</Button>
                <Button size="sm" variant="outline">Avaliação em Lote</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">ID</th>
                      <th className="text-left py-2">Risco</th>
                      <th className="text-left py-2">Categoria</th>
                      <th className="text-left py-2">Probabilidade</th>
                      <th className="text-left py-2">Impacto</th>
                      <th className="text-left py-2">Nível</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Responsável</th>
                      <th className="text-left py-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riskMatrix.map((risk, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{risk.id}</td>
                        <td className="py-2">{risk.name}</td>
                        <td className="py-2">{risk.category}</td>
                        <td className="py-2">{risk.probability}</td>
                        <td className="py-2">{risk.impact}</td>
                        <td className="py-2">
                          <Badge className={getRiskLevelColor(risk.riskLevel)}>
                            {risk.riskLevel}
                          </Badge>
                        </td>
                        <td className="py-2">
                          <Badge className={getStatusColor(risk.status)}>
                            {risk.status}
                          </Badge>
                        </td>
                        <td className="py-2">{risk.owner}</td>
                        <td className="py-2">
                          <div className="flex gap-1">
                            <Button size="sm" variant="outline">
                              Ver
                            </Button>
                            <Button size="sm" variant="outline">
                              Editar
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mitigation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Planos de Mitigação Ativos</CardTitle>
              <Button size="sm">Novo Plano</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mitigationPlans.map((plan, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{plan.action}</h3>
                        <p className="text-sm text-gray-600">Risco: {plan.riskId} • {plan.responsible}</p>
                      </div>
                      <Badge className={getStatusColor(plan.status)}>
                        {plan.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Progresso</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={plan.progress} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{plan.progress}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Prazo</p>
                        <p className="font-medium">{plan.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Orçamento</p>
                        <p className="font-medium">{plan.budget}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" variant="outline">
                        Atualizar Progresso
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskTrends.map((trend, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{trend.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{trend.currentMonth}</div>
                      <p className="text-sm text-gray-600">Riscos Ativos</p>
                    </div>
                    <div className={`text-center p-2 rounded ${
                      trend.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {trend.trend} vs. mês anterior
                    </div>
                    <div className="text-center text-sm text-gray-600">
                      Anterior: {trend.lastMonth}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Análise de Tendências</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Gráfico de Tendências</h3>
                  <p className="text-sm text-gray-500">
                    Evolução dos riscos por categoria nos últimos 12 meses
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Aprendizado com Incidentes</CardTitle>
              <Button size="sm">Adicionar Lição Aprendida</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {incidentLearning.map((incident, index) => (
                  <div key={index} className="p-4 border-l-4 border-l-blue-400 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{incident.type}</h3>
                      <span className="text-sm text-gray-600">{incident.date}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Causa Raiz</p>
                        <p className="font-medium">{incident.rootCause}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Lição Aprendida</p>
                        <p className="font-medium">{incident.lesson}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-600 text-sm">Ação Implementada</p>
                      <p className="font-medium">{incident.implementedAction}</p>
                      <Badge className="mt-2" variant="outline">
                        Risco Relacionado: {incident.relatedRisk}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Nova Avaliação de Risco</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome do Risco</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="Ex: Falha no sistema de backup"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Categoria</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>Selecione...</option>
                      <option>Ambiental</option>
                      <option>Segurança</option>
                      <option>Compliance</option>
                      <option>Operacional</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Probabilidade</label>
                      <select className="w-full mt-1 p-2 border rounded-md">
                        <option>Baixa</option>
                        <option>Média</option>
                        <option>Alta</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Impacto</label>
                      <select className="w-full mt-1 p-2 border rounded-md">
                        <option>Baixo</option>
                        <option>Médio</option>
                        <option>Alto</option>
                      </select>
                    </div>
                  </div>
                  <Button className="w-full">Avaliar Risco</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Matriz de Avaliação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div></div>
                  <div className="text-center font-medium">Baixo</div>
                  <div className="text-center font-medium">Médio</div>
                  <div className="text-center font-medium">Alto</div>
                  
                  <div className="font-medium">Alta</div>
                  <div className="bg-yellow-200 p-2 text-center rounded">Médio</div>
                  <div className="bg-red-200 p-2 text-center rounded">Alto</div>
                  <div className="bg-red-400 p-2 text-center rounded text-white">Crítico</div>
                  
                  <div className="font-medium">Média</div>
                  <div className="bg-green-200 p-2 text-center rounded">Baixo</div>
                  <div className="bg-yellow-200 p-2 text-center rounded">Médio</div>
                  <div className="bg-red-200 p-2 text-center rounded">Alto</div>
                  
                  <div className="font-medium">Baixa</div>
                  <div className="bg-green-200 p-2 text-center rounded">Baixo</div>
                  <div className="bg-green-200 p-2 text-center rounded">Baixo</div>
                  <div className="bg-yellow-200 p-2 text-center rounded">Médio</div>
                </div>
                <div className="mt-4 text-xs text-gray-600">
                  <p><strong>Impacto:</strong> Horizontal • <strong>Probabilidade:</strong> Vertical</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RiskManagement;
