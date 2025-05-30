
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import StandardsRepository from './compliance/StandardsRepository';
import GapAnalysis from './compliance/GapAnalysis';
import ComplianceCalendar from './compliance/ComplianceCalendar';
import DocumentManagement from './compliance/DocumentManagement';
import TrainingLibrary from './compliance/TrainingLibrary';
import ReportingSupport from './compliance/ReportingSupport';
import AIAgent from './compliance/AIAgent';
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
  TrendingUp,
  Database,
  BookOpen,
  Brain,
  Search
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
      color: "green",
      priority: "Alta"
    },
    {
      name: "ISO 45001",
      status: "Conforme",
      progress: 94,
      nextAudit: "2024-05-20",
      requirements: 38,
      completed: 36,
      color: "green",
      priority: "Alta"
    },
    {
      name: "CSRD/ESRS",
      status: "Em Progresso",
      progress: 78,
      nextAudit: "2024-07-30",
      requirements: 52,
      completed: 41,
      color: "yellow",
      priority: "Crítica"
    },
    {
      name: "GRI Standards",
      status: "Conforme",
      progress: 92,
      nextAudit: "2024-08-15",
      requirements: 35,
      completed: 32,
      color: "green",
      priority: "Média"
    },
    {
      name: "CDP Climate",
      status: "Atenção",
      progress: 68,
      nextAudit: "2024-04-10",
      requirements: 28,
      completed: 19,
      color: "orange",
      priority: "Alta"
    },
    {
      name: "OSHA",
      status: "Conforme",
      progress: 98,
      nextAudit: "2024-09-01",
      requirements: 42,
      completed: 41,
      color: "green",
      priority: "Alta"
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
      case 'Crítica': return 'bg-red-100 text-red-800';
      case 'Alta': return 'bg-orange-100 text-orange-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview" className="flex items-center gap-1">
            <CheckSquare className="h-3 w-3" />
            <span className="hidden sm:inline">Visão Geral</span>
          </TabsTrigger>
          <TabsTrigger value="standards" className="flex items-center gap-1">
            <Database className="h-3 w-3" />
            <span className="hidden sm:inline">Padrões</span>
          </TabsTrigger>
          <TabsTrigger value="gap-analysis" className="flex items-center gap-1">
            <Search className="h-3 w-3" />
            <span className="hidden sm:inline">Análise</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span className="hidden sm:inline">Calendário</span>
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-1">
            <FileText className="h-3 w-3" />
            <span className="hidden sm:inline">Documentos</span>
          </TabsTrigger>
          <TabsTrigger value="training" className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span className="hidden sm:inline">Treinamento</span>
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            <span className="hidden sm:inline">Relatórios</span>
          </TabsTrigger>
          <TabsTrigger value="ai-agent" className="flex items-center gap-1">
            <Brain className="h-3 w-3" />
            <span className="hidden sm:inline">IA</span>
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
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
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
                      <Badge className={getPriorityColor(framework.priority)}>
                        {framework.priority}
                      </Badge>
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

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Search className="h-5 w-5" />
                  Análise de Lacunas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Identifique lacunas de conformidade e receba recomendações
                </p>
                <Button className="w-full" onClick={() => setActiveTab('gap-analysis')}>
                  Iniciar Análise
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <FileText className="h-5 w-5" />
                  Wizards Guiados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Implemente padrões com fluxos guiados passo a passo
                </p>
                <Button className="w-full" onClick={() => setActiveTab('standards')}>
                  Ver Wizards
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Brain className="h-5 w-5" />
                  Agente IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Obtenha análises inteligentes e suporte para conformidade
                </p>
                <Button className="w-full" onClick={() => setActiveTab('ai-agent')}>
                  Consultar IA
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="standards">
          <StandardsRepository />
        </TabsContent>

        <TabsContent value="gap-analysis">
          <GapAnalysis />
        </TabsContent>

        <TabsContent value="calendar">
          <ComplianceCalendar />
        </TabsContent>

        <TabsContent value="documents">
          <DocumentManagement />
        </TabsContent>

        <TabsContent value="training">
          <TrainingLibrary />
        </TabsContent>

        <TabsContent value="reports">
          <ReportingSupport />
        </TabsContent>

        <TabsContent value="ai-agent">
          <AIAgent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComplianceModule;
