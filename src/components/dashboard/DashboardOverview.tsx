
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Target,
  Award
} from 'lucide-react';

const DashboardOverview = () => {
  const kpis = [
    {
      category: "Ambiental",
      items: [
        { label: "Redução de Emissões CO2", value: 78, target: 80, unit: "%" },
        { label: "Consumo de Água", value: 2847, target: 3000, unit: "m³" },
        { label: "Gestão de Resíduos", value: 92, target: 95, unit: "%" },
        { label: "Energia Renovável", value: 65, target: 70, unit: "%" }
      ],
      color: "green"
    },
    {
      category: "Social",
      items: [
        { label: "Taxa de Frequência Acidentes", value: 1.2, target: 1.0, unit: "" },
        { label: "Horas de Treinamento", value: 24.5, target: 40, unit: "h" },
        { label: "Satisfação Funcionários", value: 87, target: 90, unit: "%" },
        { label: "Diversidade Liderança", value: 42, target: 50, unit: "%" }
      ],
      color: "blue"
    },
    {
      category: "Governança",
      items: [
        { label: "Conformidade Regulatória", value: 96, target: 100, unit: "%" },
        { label: "Auditorias Concluídas", value: 23, target: 30, unit: "" },
        { label: "Políticas Atualizadas", value: 18, target: 20, unit: "" },
        { label: "Transparência Relatórios", value: 94, target: 95, unit: "%" }
      ],
      color: "orange"
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      type: "Ambiental",
      description: "Vazamento menor de óleo hidráulico",
      severity: "Baixa",
      status: "Resolvido",
      date: "2024-01-15"
    },
    {
      id: 2,
      type: "Segurança",
      description: "Funcionário sem EPI em área restrita",
      severity: "Média",
      status: "Em análise",
      date: "2024-01-14"
    },
    {
      id: 3,
      type: "Conformidade",
      description: "Atraso na renovação de licença ambiental",
      severity: "Alta",
      status: "Pendente",
      date: "2024-01-12"
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      task: "Auditoria ISO 14001 - Planta SP",
      dueDate: "2024-01-20",
      priority: "Alta",
      responsible: "João Silva"
    },
    {
      id: 2,
      task: "Relatório de Emissões Mensais",
      dueDate: "2024-01-25",
      priority: "Média",
      responsible: "Maria Santos"
    },
    {
      id: 3,
      task: "Treinamento de Segurança - Turno Noite",
      dueDate: "2024-01-22",
      priority: "Média",
      responsible: "Carlos Oliveira"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
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
    <div className="space-y-8">
      {/* KPIs ESG */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {kpis.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className={`text-lg font-semibold text-${category.color}-600 flex items-center gap-2`}>
                {category.category === 'Ambiental' && <Leaf className="h-5 w-5" />}
                {category.category === 'Social' && <Shield className="h-5 w-5" />}
                {category.category === 'Governança' && <TrendingUp className="h-5 w-5" />}
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-600">
                        {item.value}{item.unit} / {item.target}{item.unit}
                      </span>
                    </div>
                    <Progress 
                      value={(item.value / item.target) * 100} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Incidents and Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Incidents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <AlertTriangle className="h-5 w-5" />
              Incidentes Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="border-l-4 border-orange-500 pl-4 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-900">
                      {incident.description}
                    </span>
                    <Badge className={getSeverityColor(incident.severity)}>
                      {incident.severity}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{incident.type}</span>
                    <span>{incident.date}</span>
                  </div>
                  <div className="mt-1">
                    <Badge 
                      variant={incident.status === 'Resolvido' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {incident.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <Clock className="h-5 w-5" />
              Tarefas Pendentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-900">
                      {task.task}
                    </span>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{task.responsible}</span>
                    <span>{task.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certifications and Compliance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Award className="h-5 w-5" />
            Certificações e Conformidade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">ISO 14001:2015</h3>
              <p className="text-sm text-gray-600">Válida até: 12/2025</p>
              <Badge className="mt-2 bg-green-100 text-green-800">Ativa</Badge>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">ISO 45001:2018</h3>
              <p className="text-sm text-gray-600">Válida até: 08/2025</p>
              <Badge className="mt-2 bg-green-100 text-green-800">Ativa</Badge>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">GRI Standards</h3>
              <p className="text-sm text-gray-600">Renovação: 03/2024</p>
              <Badge className="mt-2 bg-yellow-100 text-yellow-800">Pendente</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
