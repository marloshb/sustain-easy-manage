
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  BarChart3, 
  TrendingUp, 
  AlertTriangle,
  Users,
  Target,
  Zap,
  FileText,
  Clock,
  CheckCircle
} from 'lucide-react';

const IntegratedManagement = () => {
  const [activeView, setActiveView] = useState('control');

  const controlCenterMetrics = [
    {
      category: 'ESG Performance',
      value: '87',
      unit: 'Score',
      trend: '+4.5%',
      status: 'Melhorando',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      category: 'EHS Compliance',
      value: '94',
      unit: '%',
      trend: '+2.1%',
      status: 'Conforme',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      category: 'Riscos Ativos',
      value: '12',
      unit: 'Itens',
      trend: '-35%',
      status: 'Reduzindo',
      icon: AlertTriangle,
      color: 'text-orange-600'
    },
    {
      category: 'Eficiência Operacional',
      value: '78',
      unit: '%',
      trend: '+8.2%',
      status: 'Otimizada',
      icon: Zap,
      color: 'text-purple-600'
    }
  ];

  const systemIntegrations = [
    {
      system: 'Gestão Ambiental',
      status: 'Conectado',
      lastSync: '2 min atrás',
      dataPoints: 1247,
      health: 98
    },
    {
      system: 'Sistema EHS',
      status: 'Conectado',
      lastSync: '1 min atrás',
      dataPoints: 892,
      health: 100
    },
    {
      system: 'Monitoramento ESG',
      status: 'Conectado',
      lastSync: '3 min atrás',
      dataPoints: 2156,
      health: 96
    },
    {
      system: 'Gestão de Riscos',
      status: 'Conectado',
      lastSync: '30 seg atrás',
      dataPoints: 567,
      health: 99
    },
    {
      system: 'IA & Analytics',
      status: 'Conectado',
      lastSync: '1 min atrás',
      dataPoints: 3421,
      health: 97
    },
    {
      system: 'Sistema GIS',
      status: 'Conectado',
      lastSync: '2 min atrás',
      dataPoints: 789,
      health: 95
    }
  ];

  const executiveReports = [
    {
      title: 'Relatório ESG Trimestral',
      type: 'ESG Performance',
      status: 'Disponível',
      period: 'Q1 2024',
      pages: 45,
      insights: 18,
      lastGenerated: '2024-01-31'
    },
    {
      title: 'Dashboard EHS Executivo',
      type: 'Safety & Health',
      status: 'Disponível',
      period: 'Janeiro 2024',
      pages: 28,
      insights: 12,
      lastGenerated: '2024-02-01'
    },
    {
      title: 'Análise de Riscos Corporativos',
      type: 'Risk Management',
      status: 'Em Preparação',
      period: 'Anual 2023',
      pages: 62,
      insights: 24,
      lastGenerated: '2024-01-28'
    },
    {
      title: 'Relatório de Sustentabilidade',
      type: 'Sustainability',
      status: 'Disponível',
      period: '2023',
      pages: 78,
      insights: 31,
      lastGenerated: '2024-01-15'
    }
  ];

  const operationalAlerts = [
    {
      level: 'Crítico',
      title: 'Não conformidade CSRD detectada',
      system: 'ESG Management',
      time: '5 min atrás',
      action: 'Revisão urgente necessária'
    },
    {
      level: 'Alto',
      title: 'Cluster de incidentes na Unidade A',
      system: 'EHS System',
      time: '15 min atrás',
      action: 'Inspeção programada'
    },
    {
      level: 'Médio',
      title: 'Pico de consumo energético',
      system: 'Environmental',
      time: '30 min atrás',
      action: 'Análise de eficiência'
    },
    {
      level: 'Baixo',
      title: 'Atualização de dados GIS',
      system: 'GIS Integration',
      time: '1 hora atrás',
      action: 'Verificação concluída'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Conectado': case 'Disponível': case 'Melhorando': case 'Conforme': case 'Otimizada': return 'bg-green-100 text-green-800';
      case 'Em Preparação': case 'Reduzindo': return 'bg-yellow-100 text-yellow-800';
      case 'Desconectado': case 'Indisponível': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertColor = (level: string) => {
    switch (level) {
      case 'Crítico': return 'bg-red-100 text-red-800 border-l-red-500';
      case 'Alto': return 'bg-orange-100 text-orange-800 border-l-orange-500';
      case 'Médio': return 'bg-yellow-100 text-yellow-800 border-l-yellow-500';
      case 'Baixo': return 'bg-blue-100 text-blue-800 border-l-blue-500';
      default: return 'bg-gray-100 text-gray-800 border-l-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Activity className="h-8 w-8 text-orange-600" />
            Gestão Integrada
          </h1>
          <p className="text-gray-600">
            Centro de controle unificado para gestão estratégica e operacional
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={activeView === 'control' ? 'default' : 'outline'}
            onClick={() => setActiveView('control')}
          >
            <Activity className="h-4 w-4 mr-2" />
            Centro de Controle
          </Button>
          <Button 
            variant={activeView === 'reports' ? 'default' : 'outline'}
            onClick={() => setActiveView('reports')}
          >
            <FileText className="h-4 w-4 mr-2" />
            Relatório Executivo
          </Button>
        </div>
      </div>

      {activeView === 'control' && (
        <div className="space-y-6">
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {controlCenterMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                    <Badge className={getStatusColor(metric.status)}>
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-600">{metric.category}</p>
                    <p className="text-2xl font-bold">
                      {metric.value}<span className="text-sm font-normal text-gray-500">{metric.unit}</span>
                    </p>
                    <p className={`text-sm ${metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.trend}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* System Integrations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Status de Integração dos Sistemas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {systemIntegrations.map((system, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-sm">{system.system}</h3>
                          <Badge className={getStatusColor(system.status)}>
                            {system.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Saúde do Sistema:</span>
                            <span className="font-medium">{system.health}%</span>
                          </div>
                          <Progress value={system.health} className="h-2" />
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>Última sincronização: {system.lastSync}</p>
                          <p>Pontos de dados: {system.dataPoints.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Operational Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Alertas Operacionais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {operationalAlerts.map((alert, index) => (
                  <div key={index} className={`p-4 border-l-4 rounded-lg ${getAlertColor(alert.level)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{alert.title}</h3>
                          <Badge variant="outline">{alert.level}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{alert.action}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Sistema: {alert.system}</span>
                          <span>{alert.time}</span>
                        </div>
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

      {activeView === 'reports' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                Relatórios Executivos Disponíveis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {executiveReports.map((report, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold">{report.title}</h3>
                            <p className="text-sm text-gray-600">{report.type}</p>
                          </div>
                          <Badge className={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Período:</span>
                            <p className="font-medium">{report.period}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Páginas:</span>
                            <p className="font-medium">{report.pages}</p>
                          </div>
                        </div>
                        
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>Insights gerados: {report.insights}</p>
                          <p>Última geração: {report.lastGenerated}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <FileText className="h-3 w-3 mr-1" />
                            Visualizar
                          </Button>
                          <Button size="sm" variant="outline">
                            Download
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

export default IntegratedManagement;
