
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
  FileText,
  Map,
  Brain,
  Database,
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';
import RiskAssessment from './risk-management/RiskAssessment';
import GISMapping from './risk-management/GISMapping';
import OpenDataIntegration from './risk-management/OpenDataIntegration';
import PredictiveSimulations from './risk-management/PredictiveSimulations';
import MitigationPlanning from './risk-management/MitigationPlanning';
import AIAnalytics from './risk-management/AIAnalytics';

const RiskManagement = () => {
  const [activeTab, setActiveTab] = useState('assessment');

  // Enhanced risk statistics with comprehensive categories
  const riskStats = [
    {
      title: "Riscos Críticos",
      value: "12",
      change: "-3 esta semana",
      icon: AlertTriangle,
      color: "text-red-600",
      category: "high"
    },
    {
      title: "Riscos Ambientais",
      value: "24",
      change: "+2 identificados",
      icon: Globe,
      color: "text-green-600",
      category: "environmental"
    },
    {
      title: "Riscos de Segurança",
      value: "8",
      change: "2 em mitigação",
      icon: Shield,
      color: "text-orange-600",
      category: "safety"
    },
    {
      title: "Score de Risco Global",
      value: "7.2",
      change: "-0.8 este mês",
      icon: TrendingUp,
      color: "text-blue-600",
      category: "overall"
    },
    {
      title: "Planos de Mitigação",
      value: "18",
      change: "5 concluídos",
      icon: Target,
      color: "text-purple-600",
      category: "mitigation"
    },
    {
      title: "Alertas IA",
      value: "6",
      change: "2 novos hoje",
      icon: Brain,
      color: "text-indigo-600",
      category: "ai"
    }
  ];

  // Comprehensive risk matrix with enhanced data
  const riskMatrix = [
    {
      id: "R-001",
      name: "Vazamento de Produtos Químicos",
      category: "Ambiental",
      subcategory: "Contaminação",
      probability: "Média",
      impact: "Alto",
      riskLevel: "Alto",
      status: "Ativo",
      owner: "João Silva",
      lastReview: "2024-01-10",
      location: "Planta São Paulo",
      geotagged: true,
      aiScore: 8.5,
      regulatoryImpact: "CSRD, ISO 14001"
    },
    {
      id: "R-002",
      name: "Mudanças Climáticas - Inundações",
      category: "Climático",
      subcategory: "Eventos Extremos",
      probability: "Alta",
      impact: "Alto",
      riskLevel: "Crítico",
      status: "Em Análise",
      owner: "Maria Santos",
      lastReview: "2024-01-15",
      location: "Fábrica Campinas",
      geotagged: true,
      aiScore: 9.2,
      regulatoryImpact: "CSRD, ESRS"
    },
    {
      id: "R-003",
      name: "Não Conformidade CSRD",
      category: "Compliance",
      subcategory: "Regulatório",
      probability: "Baixa",
      impact: "Alto",
      riskLevel: "Médio",
      status: "Mitigado",
      owner: "Ana Costa",
      lastReview: "2024-01-08",
      location: "Escritório Central",
      geotagged: false,
      aiScore: 6.8,
      regulatoryImpact: "CSRD, GRI"
    },
    {
      id: "R-004",
      name: "Escassez de Água",
      category: "Recursos",
      subcategory: "Hídrico",
      probability: "Alta",
      impact: "Médio",
      riskLevel: "Alto",
      status: "Em Tratamento",
      owner: "Pedro Lima",
      lastReview: "2024-01-12",
      location: "Planta Nordeste",
      geotagged: true,
      aiScore: 7.9,
      regulatoryImpact: "ISO 14001, Local"
    }
  ];

  // Enhanced mitigation plans with comprehensive tracking
  const mitigationPlans = [
    {
      id: "MP-001",
      riskId: "R-001",
      action: "Sistema de Contenção Automatizado",
      responsible: "Equipe Manutenção",
      deadline: "2024-02-28",
      progress: 65,
      budget: "R$ 150.000",
      status: "Em Progresso",
      aiRecommended: true,
      gisIntegrated: true,
      kpis: ["Tempo de resposta", "Volume contido"],
      lastUpdate: "2024-01-20"
    },
    {
      id: "MP-002",
      riskId: "R-002",
      action: "Sistema de Alerta Climático",
      responsible: "Equipe ESG",
      deadline: "2024-03-15",
      progress: 30,
      budget: "R$ 80.000",
      status: "Iniciado",
      aiRecommended: true,
      gisIntegrated: true,
      kpis: ["Precisão do alerta", "Tempo de evacuação"],
      lastUpdate: "2024-01-18"
    },
    {
      id: "MP-003",
      riskId: "R-004",
      action: "Sistema de Reciclagem de Água",
      responsible: "Equipe Operações",
      deadline: "2024-04-10",
      progress: 85,
      budget: "R$ 200.000",
      status: "Quase Concluído",
      aiRecommended: false,
      gisIntegrated: true,
      kpis: ["% água reciclada", "Redução consumo"],
      lastUpdate: "2024-01-22"
    }
  ];

  // AI insights and predictions
  const aiInsights = [
    {
      type: "Predição",
      message: "Risco de inundação aumentará 15% nos próximos 6 meses",
      confidence: 87,
      action: "Revisar planos de contingência",
      priority: "Alta"
    },
    {
      type: "Anomalia",
      message: "Padrão atípico de emissões detectado na Planta Sul",
      confidence: 92,
      action: "Inspeção urgente recomendada",
      priority: "Crítica"
    },
    {
      type: "Oportunidade",
      message: "Tecnologia de captura de carbono pode reduzir 40% dos riscos climáticos",
      confidence: 78,
      action: "Avaliar viabilidade econômica",
      priority: "Média"
    }
  ];

  // GIS-based risk hotspots
  const riskHotspots = [
    {
      location: "Região Sudeste",
      riskCount: 8,
      severity: "Alto",
      primaryRisk: "Escassez hídrica",
      coordinates: [-23.5505, -46.6333]
    },
    {
      location: "Costa Nordeste",
      riskCount: 5,
      severity: "Médio",
      primaryRisk: "Elevação do mar",
      coordinates: [-8.0476, -34.8770]
    },
    {
      location: "Região Sul",
      riskCount: 12,
      severity: "Crítico",
      primaryRisk: "Eventos climáticos extremos",
      coordinates: [-30.0346, -51.2177]
    }
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Crítico': return 'bg-red-500 text-white';
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': case 'Crítico': return 'bg-red-100 text-red-800';
      case 'Mitigado': case 'Concluído': case 'Quase Concluído': return 'bg-green-100 text-green-800';
      case 'Em Tratamento': case 'Em Progresso': case 'Em Análise': return 'bg-yellow-100 text-yellow-800';
      case 'Iniciado': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {riskStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-gray-600 mb-1 truncate">
                    {stat.title}
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className={`text-xs ${stat.change.startsWith('+') && !stat.change.includes('concluídos') ? 'text-red-600' : 'text-green-600'}`}>
                    {stat.change}
                  </p>
                </div>
                <stat.icon className={`h-6 w-6 ${stat.color} flex-shrink-0`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Insights Panel */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Insights de IA - Análise Preditiva
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {aiInsights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  insight.priority === 'Crítica' ? 'bg-red-500' :
                  insight.priority === 'Alta' ? 'bg-orange-500' : 'bg-yellow-500'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{insight.type}</span>
                    <Badge variant="outline" className="text-xs">
                      {insight.confidence}% confiança
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{insight.message}</p>
                  <p className="text-xs text-blue-600 font-medium">{insight.action}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* GIS Risk Hotspots */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-green-600" />
            Hotspots de Risco - Análise Espacial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {riskHotspots.map((hotspot, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{hotspot.location}</h3>
                  <Badge className={getRiskLevelColor(hotspot.severity)}>
                    {hotspot.severity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {hotspot.riskCount} riscos identificados
                </p>
                <p className="text-xs text-gray-500">
                  Risco principal: {hotspot.primaryRisk}
                </p>
                <Button size="sm" variant="outline" className="mt-2 w-full">
                  Ver no Mapa GIS
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Tabs with comprehensive modules */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="assessment" className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            <span className="hidden sm:inline">Avaliação</span>
          </TabsTrigger>
          <TabsTrigger value="gis" className="flex items-center gap-1">
            <Map className="h-4 w-4" />
            <span className="hidden sm:inline">GIS</span>
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-1">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">Dados Abertos</span>
          </TabsTrigger>
          <TabsTrigger value="simulations" className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Simulações</span>
          </TabsTrigger>
          <TabsTrigger value="mitigation" className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Mitigação</span>
          </TabsTrigger>
          <TabsTrigger value="ai" className="flex items-center gap-1">
            <Brain className="h-4 w-4" />
            <span className="hidden sm:inline">IA</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="assessment" className="space-y-6">
          <RiskAssessment riskMatrix={riskMatrix} />
        </TabsContent>

        <TabsContent value="gis" className="space-y-6">
          <GISMapping riskHotspots={riskHotspots} riskMatrix={riskMatrix} />
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <OpenDataIntegration />
        </TabsContent>

        <TabsContent value="simulations" className="space-y-6">
          <PredictiveSimulations />
        </TabsContent>

        <TabsContent value="mitigation" className="space-y-6">
          <MitigationPlanning mitigationPlans={mitigationPlans} />
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <AIAnalytics aiInsights={aiInsights} />
        </TabsContent>
      </Tabs>

      {/* Quick Actions Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-16 flex-col gap-2">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-xs">Novo Risco</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Map className="h-6 w-6" />
              <span className="text-xs">Análise GIS</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-xs">Simulação</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span className="text-xs">Relatório</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskManagement;
