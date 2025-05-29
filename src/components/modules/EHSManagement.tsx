
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  FileText, 
  Calendar,
  TrendingDown,
  CheckCircle,
  Clock,
  Target,
  BookOpen
} from 'lucide-react';

const EHSManagement = () => {
  const [activeTab, setActiveTab] = useState('incidents');

  const safetyMetrics = [
    {
      metric: "Taxa de Frequência",
      value: 1.2,
      target: 1.0,
      unit: "por milhão de horas",
      trend: "-15.3%",
      status: "attention"
    },
    {
      metric: "Taxa de Gravidade",
      value: 18.5,
      target: 20.0,
      unit: "dias perdidos",
      trend: "-8.1%",
      status: "good"
    },
    {
      metric: "Dias sem Acidentes",
      value: 127,
      target: 365,
      unit: "dias",
      trend: "+127",
      status: "good"
    }
  ];

  const incidents = [
    {
      id: "INC-2024-001",
      type: "Acidente com Ferimento",
      description: "Corte na mão durante manutenção",
      severity: "Leve",
      area: "Manutenção",
      date: "2024-01-15",
      status: "Investigado",
      responsible: "João Silva"
    },
    {
      id: "INC-2024-002",
      type: "Quase Acidente",
      description: "Queda de material próximo a funcionário",
      severity: "Média",
      area: "Produção",
      date: "2024-01-14",
      status: "Em Análise",
      responsible: "Maria Santos"
    },
    {
      id: "INC-2024-003",
      type: "Condição Insegura",
      description: "Vazamento de óleo no piso",
      severity: "Baixa",
      area: "Almoxarifado",
      date: "2024-01-12",
      status: "Corrigido",
      responsible: "Carlos Oliveira"
    }
  ];

  const trainings = [
    {
      course: "NR-12 - Segurança em Máquinas",
      participants: 45,
      completed: 42,
      deadline: "2024-01-25",
      status: "Em Andamento"
    },
    {
      course: "NR-06 - EPI",
      participants: 78,
      completed: 78,
      deadline: "2024-01-20",
      status: "Concluído"
    },
    {
      course: "NR-33 - Espaços Confinados",
      participants: 12,
      completed: 8,
      deadline: "2024-01-30",
      status: "Em Andamento"
    },
    {
      course: "Primeiros Socorros",
      participants: 25,
      completed: 22,
      deadline: "2024-02-05",
      status: "Em Andamento"
    }
  ];

  const audits = [
    {
      type: "Auditoria Interna",
      area: "Produção - Linha 1",
      date: "2024-01-20",
      auditor: "Ana Costa",
      status: "Agendada",
      findings: 0
    },
    {
      type: "Inspeção de Segurança",
      area: "Almoxarifado",
      date: "2024-01-18",
      auditor: "Pedro Lima",
      status: "Concluída",
      findings: 3
    },
    {
      type: "Auditoria Externa",
      area: "Geral - ISO 45001",
      date: "2024-01-15",
      auditor: "Consultoria ABC",
      status: "Concluída",
      findings: 2
    }
  ];

  const observations = [
    {
      id: "OBS-001",
      type: "Ato Inseguro",
      description: "Funcionário sem capacete em área obrigatória",
      area: "Produção",
      reporter: "Supervisor A",
      date: "2024-01-16",
      priority: "Alta"
    },
    {
      id: "OBS-002",
      type: "Condição Insegura",
      description: "Iluminação deficiente em corredor",
      area: "Administrativa",
      reporter: "Técnico Segurança",
      date: "2024-01-15",
      priority: "Média"
    },
    {
      id: "OBS-003",
      type: "Melhoria",
      description: "Sugestão de nova sinalização",
      area: "Entrada Principal",
      reporter: "Funcionário",
      date: "2024-01-14",
      priority: "Baixa"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': case 'Leve': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': case 'Corrigido': case 'Concluída': return 'bg-green-100 text-green-800';
      case 'Em Andamento': case 'Em Análise': return 'bg-yellow-100 text-yellow-800';
      case 'Agendada': case 'Investigado': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="incidents" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Incidentes
          </TabsTrigger>
          <TabsTrigger value="observations" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Observações
          </TabsTrigger>
          <TabsTrigger value="training" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Treinamentos
          </TabsTrigger>
          <TabsTrigger value="audits" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Auditorias
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Indicadores
          </TabsTrigger>
        </TabsList>

        <TabsContent value="incidents" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{metric.metric}</span>
                    <Shield className={`h-5 w-5 ${metric.status === 'good' ? 'text-green-600' : 'text-orange-600'}`} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">{metric.value}</span>
                      <span className="text-sm text-gray-500">{metric.unit}</span>
                    </div>
                    <Progress 
                      value={(metric.value / metric.target) * 100} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Meta: {metric.target}</span>
                      <span className={`font-medium ${metric.trend.startsWith('+') && metric.metric !== 'Dias sem Acidentes' ? 'text-red-600' : 'text-green-600'}`}>
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Registro de Incidentes</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">
                  Novo Incidente
                </Button>
                <Button size="sm" variant="outline">
                  Exportar Relatório
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">ID</th>
                      <th className="text-left py-2">Tipo</th>
                      <th className="text-left py-2">Descrição</th>
                      <th className="text-left py-2">Severidade</th>
                      <th className="text-left py-2">Área</th>
                      <th className="text-left py-2">Data</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidents.map((incident, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{incident.id}</td>
                        <td className="py-2">{incident.type}</td>
                        <td className="py-2">{incident.description}</td>
                        <td className="py-2">
                          <Badge className={getSeverityColor(incident.severity)}>
                            {incident.severity}
                          </Badge>
                        </td>
                        <td className="py-2">{incident.area}</td>
                        <td className="py-2">{incident.date}</td>
                        <td className="py-2">
                          <Badge className={getStatusColor(incident.status)}>
                            {incident.status}
                          </Badge>
                        </td>
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
        </TabsContent>

        <TabsContent value="observations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Observações de Segurança</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">
                  Nova Observação
                </Button>
                <Button size="sm" variant="outline">
                  Relatório Mensal
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {observations.map((obs, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">{obs.id}</CardTitle>
                        <Badge className={getSeverityColor(obs.priority)}>
                          {obs.priority}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">{obs.type}</p>
                        <p className="text-xs text-gray-600">{obs.description}</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{obs.area}</span>
                          <span>{obs.date}</span>
                        </div>
                        <p className="text-xs">Reportado por: {obs.reporter}</p>
                        <Button size="sm" className="w-full mt-2">
                          Gerenciar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Programa de Treinamentos</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">
                  Novo Treinamento
                </Button>
                <Button size="sm" variant="outline">
                  Calendário Anual
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainings.map((training, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{training.course}</h3>
                        <Badge className={getStatusColor(training.status)}>
                          {training.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Participantes</p>
                          <p className="text-xl font-bold">{training.completed}/{training.participants}</p>
                          <Progress 
                            value={(training.completed / training.participants) * 100} 
                            className="h-2 mt-1"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Prazo</p>
                          <p className="font-medium">{training.deadline}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            Ver Detalhes
                          </Button>
                          <Button size="sm">
                            Gerenciar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
                    <Clock className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm font-medium">NR-12 - João Silva</p>
                      <p className="text-xs text-gray-600">Vence em 5 dias</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium">NR-33 - Maria Santos</p>
                      <p className="text-xs text-gray-600">Vence em 15 dias</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estatísticas de Treinamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <p className="text-sm text-gray-600">Taxa de Conclusão</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">47h</div>
                      <p className="text-xs text-gray-600">Média por Funcionário</p>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">160</div>
                      <p className="text-xs text-gray-600">Total de Participantes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audits" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Programa de Auditorias</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">
                  Nova Auditoria
                </Button>
                <Button size="sm" variant="outline">
                  Plano Anual
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Tipo</th>
                      <th className="text-left py-2">Área</th>
                      <th className="text-left py-2">Data</th>
                      <th className="text-left py-2">Auditor</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Achados</th>
                      <th className="text-left py-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {audits.map((audit, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{audit.type}</td>
                        <td className="py-2">{audit.area}</td>
                        <td className="py-2">{audit.date}</td>
                        <td className="py-2">{audit.auditor}</td>
                        <td className="py-2">
                          <Badge className={getStatusColor(audit.status)}>
                            {audit.status}
                          </Badge>
                        </td>
                        <td className="py-2">
                          <span className={`font-medium ${audit.findings > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                            {audit.findings}
                          </span>
                        </td>
                        <td className="py-2">
                          <Button size="sm" variant="outline">
                            Ver Relatório
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">127</div>
                <p className="text-sm text-gray-600">Dias sem Acidentes</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingDown className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">-23%</div>
                <p className="text-sm text-gray-600">Redução de Incidentes</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <p className="text-sm text-gray-600">Funcionários Treinados</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">96%</div>
                <p className="text-sm text-gray-600">Conformidade NRs</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Metas de Segurança 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Zero Acidentes com Afastamento</span>
                    <span className="text-sm text-green-600">127 dias</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">100% Funcionários Treinados</span>
                    <span className="text-sm text-blue-600">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Reduzir Taxa de Frequência para &lt; 1.0</span>
                    <span className="text-sm text-orange-600">1.2</span>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">500 Observações de Segurança</span>
                    <span className="text-sm text-green-600">347</span>
                  </div>
                  <Progress value={69} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EHSManagement;
