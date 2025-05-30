
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckSquare, 
  FileText, 
  AlertTriangle, 
  Calendar,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp
} from 'lucide-react';

const ComplianceModule = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const complianceFrameworks = [
    {
      name: "ISO 14001",
      status: "Conforme",
      progress: 96,
      nextAudit: "2024-06-15",
      requirements: 45,
      completed: 43,
      color: "green"
    },
    {
      name: "ISO 45001",
      status: "Conforme",
      progress: 94,
      nextAudit: "2024-05-20",
      requirements: 38,
      completed: 36,
      color: "green"
    },
    {
      name: "CSRD/ESRS",
      status: "Em Progresso",
      progress: 78,
      nextAudit: "2024-07-30",
      requirements: 52,
      completed: 41,
      color: "yellow"
    },
    {
      name: "GRI Standards",
      status: "Conforme",
      progress: 92,
      nextAudit: "2024-08-15",
      requirements: 35,
      completed: 32,
      color: "green"
    },
    {
      name: "CDP Climate",
      status: "Atenção",
      progress: 68,
      nextAudit: "2024-04-10",
      requirements: 28,
      completed: 19,
      color: "orange"
    },
    {
      name: "OSHA",
      status: "Conforme",
      progress: 98,
      nextAudit: "2024-09-01",
      requirements: 42,
      completed: 41,
      color: "green"
    }
  ];

  const upcomingDeadlines = [
    {
      framework: "CDP Climate",
      task: "Relatório de Emissões Q1",
      deadline: "2024-02-15",
      priority: "Alta",
      responsible: "Maria Silva"
    },
    {
      framework: "CSRD/ESRS",
      task: "Validação de Dados ESG",
      deadline: "2024-02-20",
      priority: "Média",
      responsible: "João Santos"
    },
    {
      framework: "ISO 14001",
      task: "Revisão de Procedimentos",
      deadline: "2024-02-28",
      priority: "Baixa",
      responsible: "Ana Costa"
    },
    {
      framework: "OSHA",
      task: "Atualização de Treinamentos",
      deadline: "2024-03-05",
      priority: "Alta",
      responsible: "Pedro Lima"
    }
  ];

  const documents = [
    {
      name: "Política Ambiental 2024",
      framework: "ISO 14001",
      version: "v2.1",
      status: "Aprovado",
      lastUpdate: "2024-01-10",
      nextReview: "2024-07-10"
    },
    {
      name: "Manual de Segurança",
      framework: "ISO 45001",
      version: "v3.0",
      status: "Em Revisão",
      lastUpdate: "2024-01-08",
      nextReview: "2024-04-08"
    },
    {
      name: "Relatório ESRS E1",
      framework: "CSRD/ESRS",
      version: "v1.0",
      status: "Rascunho",
      lastUpdate: "2024-01-15",
      nextReview: "2024-02-15"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Conforme': case 'Aprovado': return 'bg-green-100 text-green-800';
      case 'Em Progresso': case 'Em Revisão': return 'bg-yellow-100 text-yellow-800';
      case 'Atenção': case 'Rascunho': return 'bg-orange-100 text-orange-800';
      case 'Não Conforme': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <CheckSquare className="h-4 w-4" />
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="frameworks" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Frameworks
          </TabsTrigger>
          <TabsTrigger value="deadlines" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Prazos
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Documentos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">89%</div>
                <p className="text-sm text-gray-600">Conformidade Global</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">5</div>
                <p className="text-sm text-gray-600">Itens Pendentes</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">12</div>
                <p className="text-sm text-gray-600">Prazos Próximos</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">+7%</div>
                <p className="text-sm text-gray-600">Melhoria no Trimestre</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Status de Conformidade por Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceFrameworks.map((framework, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        framework.color === 'green' ? 'bg-green-500' :
                        framework.color === 'yellow' ? 'bg-yellow-500' :
                        framework.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'
                      }`} />
                      <div>
                        <h3 className="font-medium">{framework.name}</h3>
                        <p className="text-sm text-gray-600">
                          {framework.completed}/{framework.requirements} requisitos atendidos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-bold">{framework.progress}%</div>
                        <Progress value={framework.progress} className="w-20 h-2" />
                      </div>
                      <Badge className={getStatusColor(framework.status)}>
                        {framework.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="frameworks" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{framework.name}</CardTitle>
                    <Badge className={getStatusColor(framework.status)}>
                      {framework.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Progresso</span>
                        <span className="text-sm font-medium">{framework.progress}%</span>
                      </div>
                      <Progress value={framework.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Requisitos</p>
                        <p className="font-medium">{framework.requirements}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Completados</p>
                        <p className="font-medium">{framework.completed}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Próxima Auditoria</p>
                      <p className="font-medium">{framework.nextAudit}</p>
                    </div>
                    <Button className="w-full" variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="deadlines" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Próximos Prazos e Entregas</CardTitle>
              <Button size="sm">Adicionar Prazo</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border-l-4 border-l-orange-400 bg-orange-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium">{item.task}</h3>
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{item.framework}</p>
                      <p className="text-sm text-gray-500">Responsável: {item.responsible}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-orange-600">{item.deadline}</div>
                      <Button size="sm" variant="outline" className="mt-2">
                        Gerenciar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Controle de Documentos</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Novo Documento</Button>
                <Button size="sm" variant="outline">Importar</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Documento</th>
                      <th className="text-left py-2">Framework</th>
                      <th className="text-left py-2">Versão</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Última Atualização</th>
                      <th className="text-left py-2">Próxima Revisão</th>
                      <th className="text-left py-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{doc.name}</td>
                        <td className="py-2">{doc.framework}</td>
                        <td className="py-2">{doc.version}</td>
                        <td className="py-2">
                          <Badge className={getStatusColor(doc.status)}>
                            {doc.status}
                          </Badge>
                        </td>
                        <td className="py-2">{doc.lastUpdate}</td>
                        <td className="py-2">{doc.nextReview}</td>
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
      </Tabs>
    </div>
  );
};

export default ComplianceModule;
