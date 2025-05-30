
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckSquare, 
  FileText, 
  Globe, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download
} from 'lucide-react';

const GlobalCompliance = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const complianceMetrics = [
    {
      framework: 'ISO 14001',
      progress: 96,
      status: 'Conforme',
      nextAudit: '2024-06-15',
      requirements: 45,
      completed: 43
    },
    {
      framework: 'CSRD/ESRS',
      progress: 78,
      status: 'Em Progresso',
      nextAudit: '2024-07-30',
      requirements: 52,
      completed: 41
    },
    {
      framework: 'GRI Standards',
      progress: 92,
      status: 'Conforme',
      nextAudit: '2024-08-15',
      requirements: 35,
      completed: 32
    },
    {
      framework: 'OSHA',
      progress: 98,
      status: 'Conforme',
      nextAudit: '2024-09-01',
      requirements: 42,
      completed: 41
    }
  ];

  const esrsReports = [
    {
      standard: 'ESRS E1',
      title: 'Mudanças Climáticas',
      status: 'Completo',
      progress: 100,
      lastUpdate: '2024-01-15',
      dataPoints: 28
    },
    {
      standard: 'ESRS E2',
      title: 'Poluição',
      status: 'Em Revisão',
      progress: 85,
      lastUpdate: '2024-01-12',
      dataPoints: 22
    },
    {
      standard: 'ESRS E3',
      title: 'Água e Recursos Marinhos',
      status: 'Rascunho',
      progress: 65,
      lastUpdate: '2024-01-10',
      dataPoints: 18
    },
    {
      standard: 'ESRS S1',
      title: 'Força de Trabalho Própria',
      status: 'Em Progresso',
      progress: 70,
      lastUpdate: '2024-01-08',
      dataPoints: 25
    },
    {
      standard: 'ESRS G1',
      title: 'Conduta Empresarial',
      status: 'Completo',
      progress: 100,
      lastUpdate: '2024-01-05',
      dataPoints: 15
    }
  ];

  const complianceAlerts = [
    {
      type: 'Prazo',
      title: 'CSRD Report Due',
      description: 'Relatório CSRD deve ser submetido em 45 dias',
      priority: 'Alta',
      daysLeft: 45
    },
    {
      type: 'Gap',
      title: 'ESRS E4 Incompleto',
      description: 'Dados de biodiversidade ainda não coletados',
      priority: 'Média',
      daysLeft: 90
    },
    {
      type: 'Auditoria',
      title: 'ISO 14001 Audit',
      description: 'Auditoria externa agendada para junho',
      priority: 'Alta',
      daysLeft: 120
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Conforme': case 'Completo': return 'bg-green-100 text-green-800';
      case 'Em Progresso': case 'Em Revisão': return 'bg-yellow-100 text-yellow-800';
      case 'Rascunho': return 'bg-blue-100 text-blue-800';
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Globe className="h-8 w-8 text-blue-600" />
            Conformidade Global
          </h1>
          <p className="text-gray-600">
            Dashboard central de conformidade com padrões internacionais
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={activeView === 'dashboard' ? 'default' : 'outline'}
            onClick={() => setActiveView('dashboard')}
          >
            <CheckSquare className="h-4 w-4 mr-2" />
            Dashboard Compliance
          </Button>
          <Button 
            variant={activeView === 'esrs' ? 'default' : 'outline'}
            onClick={() => setActiveView('esrs')}
          >
            <FileText className="h-4 w-4 mr-2" />
            Relatórios ESRS
          </Button>
        </div>
      </div>

      {activeView === 'dashboard' && (
        <div className="space-y-6">
          {/* Compliance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">89%</div>
                <p className="text-sm text-gray-600">Conformidade Global</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">5</div>
                <p className="text-sm text-gray-600">Itens Pendentes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">12</div>
                <p className="text-sm text-gray-600">Prazos Próximos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">+7%</div>
                <p className="text-sm text-gray-600">Melhoria Trimestral</p>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Frameworks */}
          <Card>
            <CardHeader>
              <CardTitle>Status de Conformidade por Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="font-medium">{metric.framework}</h3>
                        <p className="text-sm text-gray-600">
                          {metric.completed}/{metric.requirements} requisitos atendidos
                        </p>
                        <p className="text-xs text-gray-500">
                          Próxima auditoria: {metric.nextAudit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-bold">{metric.progress}%</div>
                        <Progress value={metric.progress} className="w-20 h-2" />
                      </div>
                      <Badge className={getStatusColor(metric.status)}>
                        {metric.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Alertas de Conformidade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {complianceAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{alert.title}</h3>
                        <Badge variant="outline">{alert.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{alert.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-sm font-medium">{alert.daysLeft} dias</div>
                        <Badge className={getPriorityColor(alert.priority)}>
                          {alert.priority}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        Ação
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeView === 'esrs' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Relatórios ESRS (European Sustainability Reporting Standards)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {esrsReports.map((report, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{report.standard}</Badge>
                          <Badge className={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold">{report.title}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progresso:</span>
                            <span className="font-medium">{report.progress}%</span>
                          </div>
                          <Progress value={report.progress} className="h-2" />
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>Última atualização: {report.lastUpdate}</p>
                          <p>Pontos de dados: {report.dataPoints}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            Editar
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default GlobalCompliance;
