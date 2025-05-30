
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Target,
  Clock,
  DollarSign,
  Users,
  Calendar,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  FileText,
  Plus,
  Edit,
  Trash,
  Eye
} from 'lucide-react';

interface MitigationPlan {
  id: string;
  riskId: string;
  action: string;
  responsible: string;
  deadline: string;
  progress: number;
  budget: string;
  status: string;
  aiRecommended: boolean;
  gisIntegrated: boolean;
  kpis: string[];
  lastUpdate: string;
}

interface MitigationPlanningProps {
  mitigationPlans: MitigationPlan[];
}

const MitigationPlanning: React.FC<MitigationPlanningProps> = ({ mitigationPlans }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState('Todos');

  const statusOptions = ['Todos', 'Em Progresso', 'Iniciado', 'Quase Concluído', 'Concluído', 'Atrasado'];

  const mitigationStats = [
    {
      title: "Planos Ativos",
      value: mitigationPlans.filter(p => p.status !== 'Concluído').length,
      icon: Shield,
      color: "text-blue-600"
    },
    {
      title: "Taxa de Conclusão",
      value: `${Math.round(mitigationPlans.reduce((acc, p) => acc + p.progress, 0) / mitigationPlans.length)}%`,
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Orçamento Total",
      value: "R$ 430k",
      icon: DollarSign,
      color: "text-orange-600"
    },
    {
      title: "Recomendações IA",
      value: mitigationPlans.filter(p => p.aiRecommended).length,
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const kpiTemplates = [
    'Tempo de resposta',
    'Redução de risco (%)',
    'Custo por unidade',
    'Eficiência operacional',
    'Conformidade regulatória',
    'Satisfação stakeholders',
    'Impacto ambiental',
    'ROI da mitigação'
  ];

  const actionTemplates = [
    {
      category: 'Tecnológico',
      actions: [
        'Instalação de sensores IoT',
        'Sistema de monitoramento automatizado',
        'Upgrade de equipamentos',
        'Software de gestão de riscos'
      ]
    },
    {
      category: 'Operacional',
      actions: [
        'Revisão de procedimentos',
        'Treinamento de equipe',
        'Auditoria interna',
        'Protocolo de emergência'
      ]
    },
    {
      category: 'Estrutural',
      actions: [
        'Contenção de vazamentos',
        'Barreiras de proteção',
        'Sistema de drenagem',
        'Infraestrutura resiliente'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': case 'Quase Concluído': return 'bg-green-100 text-green-800';
      case 'Em Progresso': return 'bg-blue-100 text-blue-800';
      case 'Iniciado': return 'bg-yellow-100 text-yellow-800';
      case 'Atrasado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-600';
    if (progress >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredPlans = filterStatus === 'Todos' 
    ? mitigationPlans 
    : mitigationPlans.filter(plan => plan.status === filterStatus);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {mitigationStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Ações Rápidas</span>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Novo Plano
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-xs">Plano Emergência</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Target className="h-6 w-6" />
              <span className="text-xs">Meta KPI</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span className="text-xs">Relatório</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-xs">Análise IA</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Mitigation Plans */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Planos de Mitigação Ativos</span>
            <div className="flex gap-2">
              <select 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
                className="p-2 text-sm border rounded-md"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              <Button size="sm" variant="outline">
                <FileText className="h-4 w-4 mr-1" />
                Exportar
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`p-4 border rounded-lg transition-colors ${
                  selectedPlan === plan.id ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-medium flex items-center gap-2">
                        {plan.action}
                        {plan.aiRecommended && (
                          <Badge variant="outline" className="bg-purple-50 text-purple-600 text-xs">
                            IA
                          </Badge>
                        )}
                        {plan.gisIntegrated && (
                          <Badge variant="outline" className="bg-green-50 text-green-600 text-xs">
                            GIS
                          </Badge>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Risco: {plan.riskId} • {plan.responsible}
                      </p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(plan.status)}>
                    {plan.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-sm text-gray-600">Progresso</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={plan.progress} className="flex-1 h-2" />
                      <span className={`text-sm font-medium ${getProgressColor(plan.progress)}`}>
                        {plan.progress}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Prazo</p>
                    <p className="font-medium text-sm">{plan.deadline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Orçamento</p>
                    <p className="font-medium text-sm">{plan.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Última Atualização</p>
                    <p className="font-medium text-sm">{plan.lastUpdate}</p>
                  </div>
                </div>

                {/* KPIs */}
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-2">KPIs de Acompanhamento</p>
                  <div className="flex flex-wrap gap-1">
                    {plan.kpis.map((kpi, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {kpi}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-1" />
                    Ver Detalhes
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-3 w-3 mr-1" />
                    Editar
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="h-3 w-3 mr-1" />
                    Cronograma
                  </Button>
                  <Button size="sm">
                    Atualizar Progresso
                  </Button>
                </div>

                {/* Expanded Details */}
                {selectedPlan === plan.id && (
                  <div className="mt-4 pt-4 border-t space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Marcos do Projeto</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Aprovação do projeto</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Aquisição de equipamentos</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-yellow-600" />
                            <span className="text-sm">Instalação em andamento</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Testes finais</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Métricas de Performance</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Redução de risco esperada:</span>
                            <span className="font-medium text-green-600">65%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>ROI projetado:</span>
                            <span className="font-medium text-blue-600">230%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Tempo de implementação:</span>
                            <span className="font-medium">8 semanas</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Recursos alocados:</span>
                            <span className="font-medium">3 pessoas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Templates de Ações de Mitigação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionTemplates.map((template, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-medium text-sm text-gray-700">{template.category}</h3>
                <div className="space-y-2">
                  {template.actions.map((action, actionIndex) => (
                    <div 
                      key={actionIndex} 
                      className="p-2 border rounded text-sm hover:bg-gray-50 cursor-pointer"
                    >
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* KPI Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Dashboard de KPIs de Mitigação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Taxa de Sucesso</span>
              </div>
              <div className="text-2xl font-bold text-green-600">87%</div>
              <p className="text-xs text-gray-600">+5% vs. trimestre anterior</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Tempo Médio</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">6.2 sem</div>
              <p className="text-xs text-gray-600">-1.8 sem vs. média histórica</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium">Custo Médio</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">R$ 24k</div>
              <p className="text-xs text-gray-600">Dentro do orçamento</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Eficácia</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">92%</div>
              <p className="text-xs text-gray-600">Redução de risco atingida</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MitigationPlanning;
