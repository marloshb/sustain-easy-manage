
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Target, 
  TrendingUp, 
  Calendar,
  Bell,
  CheckCircle,
  AlertTriangle,
  Plus,
  Edit,
  BarChart3,
  Zap,
  Droplets,
  Package
} from 'lucide-react';

interface Goal {
  title: string;
  target: string;
  progress: number;
  status: string;
  deadline: string;
}

interface GoalMonitoringProps {
  goals: Goal[];
}

const GoalMonitoring: React.FC<GoalMonitoringProps> = ({ goals }) => {
  const [showNewGoalForm, setShowNewGoalForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    target: '',
    deadline: '',
    category: 'energy'
  });

  const detailedGoals = [
    {
      id: 'energy-2026',
      title: 'Redução de Energia',
      description: 'Reduzir consumo energético em 15% até 2026',
      category: 'Energia',
      target: '15%',
      current: '10.2%',
      progress: 68,
      status: 'on-track',
      deadline: '2026-12-31',
      icon: Zap,
      color: 'text-yellow-600',
      milestones: [
        { title: 'Auditoria energética', completed: true, date: '2024-01-15' },
        { title: 'Implementação LED', completed: true, date: '2024-03-20' },
        { title: 'Sistema automação', completed: false, date: '2024-06-30' },
        { title: 'Energia solar', completed: false, date: '2024-09-15' }
      ],
      kpis: [
        { name: 'kWh/m²/ano', current: '145', target: '123', unit: 'kWh/m²' },
        { name: 'Custo energia/mês', current: 'R$ 45.678', target: 'R$ 38.826', unit: 'R$' },
        { name: 'CO2 evitado', current: '89 t', target: '132 t', unit: 'toneladas' }
      ]
    },
    {
      id: 'water-2025',
      title: 'Eficiência Hídrica',
      description: 'Aumentar eficiência no uso da água em 20% até 2025',
      category: 'Água',
      target: '20%',
      current: '9.0%',
      progress: 45,
      status: 'behind',
      deadline: '2025-12-31',
      icon: Droplets,
      color: 'text-blue-600',
      milestones: [
        { title: 'Mapeamento consumo', completed: true, date: '2024-01-10' },
        { title: 'Sensores vazamento', completed: false, date: '2024-04-15' },
        { title: 'Sistema reciclagem', completed: false, date: '2024-07-30' },
        { title: 'Captação chuva', completed: false, date: '2024-10-15' }
      ],
      kpis: [
        { name: 'L/produto', current: '3.2', target: '2.56', unit: 'L' },
        { name: 'Custo água/mês', current: 'R$ 12.450', target: 'R$ 9.960', unit: 'R$' },
        { name: 'Água reciclada', current: '15%', target: '35%', unit: '%' }
      ]
    },
    {
      id: 'materials-2024',
      title: 'Reciclagem de Materiais',
      description: 'Alcançar 80% de materiais reciclados',
      category: 'Materiais',
      target: '80%',
      current: '68%',
      progress: 85,
      status: 'ahead',
      deadline: '2024-12-31',
      icon: Package,
      color: 'text-green-600',
      milestones: [
        { title: 'Programa separação', completed: true, date: '2024-01-05' },
        { title: 'Parceria recicladores', completed: true, date: '2024-02-20' },
        { title: 'Treinamento equipes', completed: true, date: '2024-03-15' },
        { title: 'Sistema rastreamento', completed: false, date: '2024-05-30' }
      ],
      kpis: [
        { name: 'Taxa reciclagem', current: '68%', target: '80%', unit: '%' },
        { name: 'Resíduo/produto', current: '0.8 kg', target: '0.5 kg', unit: 'kg' },
        { name: 'Economia anual', current: 'R$ 34.500', target: 'R$ 52.000', unit: 'R$' }
      ]
    }
  ];

  const alerts = [
    {
      type: 'warning',
      goal: 'Eficiência Hídrica',
      message: 'Meta está 15% atrás do cronograma planejado',
      action: 'Revisar estratégia de implementação',
      priority: 'high'
    },
    {
      type: 'success',
      goal: 'Reciclagem de Materiais',
      message: 'Meta superada em 5% - antecipação de 3 meses',
      action: 'Considerar elevar a meta para 85%',
      priority: 'medium'
    },
    {
      type: 'info',
      goal: 'Redução de Energia',
      message: 'Próximo marco: Sistema de automação (30 dias)',
      action: 'Acompanhar implementação',
      priority: 'low'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'bg-green-100 text-green-800';
      case 'on-track': return 'bg-blue-100 text-blue-800';
      case 'behind': return 'bg-orange-100 text-orange-800';
      case 'at-risk': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-l-green-500 bg-green-50';
      case 'warning': return 'border-l-orange-500 bg-orange-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateDaysToDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleCreateGoal = () => {
    console.log('Creating new goal:', newGoal);
    setShowNewGoalForm(false);
    setNewGoal({ title: '', target: '', deadline: '', category: 'energy' });
  };

  return (
    <div className="space-y-6">
      {/* Alerts */}
      {alerts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-orange-600" />
              Alertas e Notificações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-4 border-l-4 rounded-lg ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{alert.goal}</Badge>
                      <Badge className={getPriorityBadge(alert.priority)}>
                        {alert.priority === 'high' ? 'Alta' : 
                         alert.priority === 'medium' ? 'Média' : 'Baixa'}
                      </Badge>
                    </div>
                    {alert.type === 'warning' && <AlertTriangle className="h-4 w-4 text-orange-600" />}
                    {alert.type === 'success' && <CheckCircle className="h-4 w-4 text-green-600" />}
                  </div>
                  <p className="text-sm font-medium mb-1">{alert.message}</p>
                  <p className="text-xs text-gray-600 mb-2">{alert.action}</p>
                  <Button size="sm" variant="outline">
                    Revisar Meta
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Goals Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {detailedGoals.map((goal) => {
          const daysToDeadline = calculateDaysToDeadline(goal.deadline);
          const GoalIcon = goal.icon;
          
          return (
            <Card key={goal.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <GoalIcon className={`h-6 w-6 ${goal.color}`} />
                    <div>
                      <h3 className="font-semibold">{goal.title}</h3>
                      <p className="text-sm text-gray-600">{goal.category}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(goal.status)}>
                    {goal.status === 'ahead' ? 'Adiante' : 
                     goal.status === 'on-track' ? 'No Prazo' : 
                     goal.status === 'behind' ? 'Atrasado' : 'Em Risco'}
                  </Badge>
                </div>

                <p className="text-sm text-gray-600 mb-4">{goal.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progresso: {goal.progress}%</span>
                    <span>{goal.current} / {goal.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        goal.status === 'ahead' ? 'bg-green-500' :
                        goal.status === 'on-track' ? 'bg-blue-500' : 
                        goal.status === 'behind' ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-600">Prazo:</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    <span className={daysToDeadline < 90 ? 'text-orange-600 font-medium' : 'text-gray-600'}>
                      {daysToDeadline > 0 ? `${daysToDeadline} dias` : 'Vencido'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    Detalhes
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Detailed Goal Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Acompanhamento Detalhado de Metas
            </span>
            <Button size="sm" onClick={() => setShowNewGoalForm(true)}>
              <Plus className="h-4 w-4 mr-1" />
              Nova Meta
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {detailedGoals.map((goal) => (
            <div key={goal.id} className="mb-6 p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-lg">{goal.title}</h3>
                <Badge className={getStatusColor(goal.status)}>
                  {goal.status === 'ahead' ? 'Adiante' : 
                   goal.status === 'on-track' ? 'No Prazo' : 'Atrasado'}
                </Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* KPIs */}
                <div>
                  <h4 className="font-medium mb-3">Indicadores Chave</h4>
                  <div className="space-y-3">
                    {goal.kpis.map((kpi, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{kpi.name}</span>
                          <TrendingUp className="h-3 w-3 text-green-600" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Atual: <strong>{kpi.current}</strong></span>
                          <span>Meta: <strong>{kpi.target}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <h4 className="font-medium mb-3">Marcos do Projeto</h4>
                  <div className="space-y-3">
                    {goal.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center gap-3 p-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          {milestone.completed && <CheckCircle className="h-3 w-3 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${milestone.completed ? 'text-gray-600 line-through' : 'font-medium'}`}>
                            {milestone.title}
                          </p>
                          <p className="text-xs text-gray-500">{milestone.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* New Goal Form */}
      {showNewGoalForm && (
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-green-600" />
              Criar Nova Meta de Sustentabilidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="goal-title">Título da Meta</Label>
                <Input
                  id="goal-title"
                  placeholder="Ex: Redução de Energia"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-target">Meta Objetivo</Label>
                <Input
                  id="goal-target"
                  placeholder="Ex: 15% de redução"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal(prev => ({ ...prev, target: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-deadline">Prazo</Label>
                <Input
                  id="goal-deadline"
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal(prev => ({ ...prev, deadline: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-category">Categoria</Label>
                <select
                  id="goal-category"
                  className="w-full p-2 border rounded-md"
                  value={newGoal.category}
                  onChange={(e) => setNewGoal(prev => ({ ...prev, category: e.target.value }))}
                >
                  <option value="energy">Energia</option>
                  <option value="water">Água</option>
                  <option value="materials">Materiais</option>
                  <option value="emissions">Emissões</option>
                  <option value="waste">Resíduos</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <Button onClick={handleCreateGoal}>
                Criar Meta
              </Button>
              <Button variant="outline" onClick={() => setShowNewGoalForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GoalMonitoring;
