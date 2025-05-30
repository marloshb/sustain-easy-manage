
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Smartphone, 
  FileText, 
  Map, 
  Database, 
  Activity,
  Brain,
  Users,
  CheckCircle,
  AlertTriangle,
  Clock,
  MapPin
} from 'lucide-react';
import AuditScheduling from './audit-inspection/AuditScheduling';
import MobileInspections from './audit-inspection/MobileInspections';
import AutomatedReporting from './audit-inspection/AutomatedReporting';
import GISIntegration from './audit-inspection/GISIntegration';
import OpenDataConnections from './audit-inspection/OpenDataConnections';
import AuditSimulations from './audit-inspection/AuditSimulations';
import AIAnalytics from './audit-inspection/AIAnalytics';

const AuditInspectionModule = () => {
  const [activeTab, setActiveTab] = useState('scheduling');

  const auditStats = [
    {
      title: "Auditorias Ativas",
      value: "24",
      change: "+3 esta semana",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Não Conformidades",
      value: "12",
      change: "-5 desde último mês",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      title: "CAPA Abertas",
      value: "8",
      change: "2 críticas",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Conformidade Global",
      value: "94%",
      change: "+2% este trimestre",
      icon: Activity,
      color: "text-green-600"
    }
  ];

  const upcomingAudits = [
    {
      id: "AUD-001",
      title: "Auditoria ISO 14001",
      facility: "Planta São Paulo",
      date: "2024-02-15",
      auditor: "João Silva",
      status: "Agendada",
      priority: "Alta"
    },
    {
      id: "AUD-002", 
      title: "Inspeção OSHA",
      facility: "Fábrica Campinas",
      date: "2024-02-18",
      auditor: "Maria Santos",
      status: "Em Andamento",
      priority: "Crítica"
    },
    {
      id: "AUD-003",
      title: "Auditoria CSRD",
      facility: "Escritório Central",
      date: "2024-02-22",
      auditor: "Carlos Lima",
      status: "Planejada",
      priority: "Média"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluída': case 'Conformidade': return 'bg-green-100 text-green-800';
      case 'Em Andamento': case 'Revisão': return 'bg-yellow-100 text-yellow-800';
      case 'Agendada': case 'Planejada': return 'bg-blue-100 text-blue-800';
      case 'Atrasada': case 'Não Conformidade': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Crítica': return 'bg-red-100 text-red-800';
      case 'Alta': return 'bg-orange-100 text-orange-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {auditStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
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
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-xs">Nova Auditoria</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Smartphone className="h-6 w-6" />
              <span className="text-xs">Inspeção Móvel</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span className="text-xs">Relatório CAPA</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Map className="h-6 w-6" />
              <span className="text-xs">Análise GIS</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Audits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Próximas Auditorias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAudits.map((audit) => (
              <div key={audit.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{audit.title}</h3>
                    <p className="text-sm text-gray-600">{audit.facility} • {audit.auditor}</p>
                    <p className="text-xs text-gray-500">{audit.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getPriorityColor(audit.priority)}>
                    {audit.priority}
                  </Badge>
                  <Badge className={getStatusColor(audit.status)}>
                    {audit.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="scheduling" className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Agendamento</span>
          </TabsTrigger>
          <TabsTrigger value="mobile" className="flex items-center gap-1">
            <Smartphone className="h-4 w-4" />
            <span className="hidden sm:inline">Móvel</span>
          </TabsTrigger>
          <TabsTrigger value="reporting" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Relatórios</span>
          </TabsTrigger>
          <TabsTrigger value="gis" className="flex items-center gap-1">
            <Map className="h-4 w-4" />
            <span className="hidden sm:inline">GIS</span>
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-1">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">Dados</span>
          </TabsTrigger>
          <TabsTrigger value="simulations" className="flex items-center gap-1">
            <Activity className="h-4 w-4" />
            <span className="hidden sm:inline">Simulações</span>
          </TabsTrigger>
          <TabsTrigger value="ai" className="flex items-center gap-1">
            <Brain className="h-4 w-4" />
            <span className="hidden sm:inline">IA</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="scheduling" className="space-y-6">
          <AuditScheduling />
        </TabsContent>

        <TabsContent value="mobile" className="space-y-6">
          <MobileInspections />
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          <AutomatedReporting />
        </TabsContent>

        <TabsContent value="gis" className="space-y-6">
          <GISIntegration />
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <OpenDataConnections />
        </TabsContent>

        <TabsContent value="simulations" className="space-y-6">
          <AuditSimulations />
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <AIAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuditInspectionModule;
