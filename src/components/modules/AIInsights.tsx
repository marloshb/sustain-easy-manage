
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  FileText, 
  Zap, 
  Map,
  Database,
  Activity,
  Target,
  BarChart3,
  MessageSquare,
  Settings
} from 'lucide-react';
import PredictiveAnalysis from './ai-insights/PredictiveAnalysis';
import AnomalyDetection from './ai-insights/AnomalyDetection';
import NLPDocumentAnalysis from './ai-insights/NLPDocumentAnalysis';
import ResourceOptimization from './ai-insights/ResourceOptimization';
import GISIntegration from './ai-insights/GISIntegration';
import OpenDataIntegration from './ai-insights/OpenDataIntegration';
import PredictiveModeling from './ai-insights/PredictiveModeling';
import AIAgent from './ai-insights/AIAgent';

const AIInsights = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const modules = [
    {
      id: 'predictive',
      name: 'Análise Preditiva',
      description: 'Previsões de riscos e tendências',
      icon: TrendingUp,
      color: 'text-blue-600',
      status: 'Ativo',
      insights: 15,
      accuracy: '94.2%'
    },
    {
      id: 'anomaly',
      name: 'Detecção de Anomalias',
      description: 'Identificação de inconsistências',
      icon: AlertTriangle,
      color: 'text-orange-600',
      status: 'Ativo',
      insights: 8,
      accuracy: '97.1%'
    },
    {
      id: 'nlp',
      name: 'Análise NLP',
      description: 'Processamento de documentos',
      icon: FileText,
      color: 'text-green-600',
      status: 'Ativo',
      insights: 23,
      accuracy: '91.8%'
    },
    {
      id: 'optimization',
      name: 'Otimização de Recursos',
      description: 'ML para eficiência operacional',
      icon: Zap,
      color: 'text-purple-600',
      status: 'Ativo',
      insights: 12,
      accuracy: '89.5%'
    },
    {
      id: 'gis',
      name: 'Integração GIS',
      description: 'Análises espaciais inteligentes',
      icon: Map,
      color: 'text-teal-600',
      status: 'Ativo',
      insights: 18,
      accuracy: '96.3%'
    },
    {
      id: 'opendata',
      name: 'Dados Abertos',
      description: 'Integração e benchmarking',
      icon: Database,
      color: 'text-indigo-600',
      status: 'Ativo',
      insights: 31,
      accuracy: '93.7%'
    }
  ];

  const performanceMetrics = [
    {
      title: 'Insights Gerados',
      value: '1,247',
      change: '+18%',
      icon: Brain,
      color: 'text-purple-600'
    },
    {
      title: 'Previsões Precisas',
      value: '94.2%',
      change: '+2.1%',
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: 'Anomalias Detectadas',
      value: '87',
      change: '+15',
      icon: AlertTriangle,
      color: 'text-orange-600'
    },
    {
      title: 'Recursos Otimizados',
      value: '23%',
      change: '+5.2%',
      icon: Zap,
      color: 'text-blue-600'
    }
  ];

  const recentInsights = [
    {
      type: 'Predição',
      title: 'Risco de Não Conformidade CSRD',
      description: 'Probabilidade de 73% de não atingir meta de emissões Q3',
      severity: 'Alto',
      module: 'Análise Preditiva',
      timestamp: '2 min atrás'
    },
    {
      type: 'Anomalia',
      title: 'Pico de Consumo de Água',
      description: 'Aumento de 45% no consumo na Unidade B',
      severity: 'Médio',
      module: 'Detecção de Anomalias',
      timestamp: '15 min atrás'
    },
    {
      type: 'Otimização',
      title: 'Oportunidade de Eficiência',
      description: 'Possível economia de 12% em energia na linha de produção',
      severity: 'Baixo',
      module: 'Otimização de Recursos',
      timestamp: '1 hora atrás'
    },
    {
      type: 'NLP',
      title: 'Gap de Conformidade',
      description: 'Relatório ESG com lacunas no padrão ESRS',
      severity: 'Médio',
      module: 'Análise NLP',
      timestamp: '2 horas atrás'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'predictive':
        return <PredictiveAnalysis />;
      case 'anomaly':
        return <AnomalyDetection />;
      case 'nlp':
        return <NLPDocumentAnalysis />;
      case 'optimization':
        return <ResourceOptimization />;
      case 'gis':
        return <GISIntegration />;
      case 'opendata':
        return <OpenDataIntegration />;
      case 'modeling':
        return <PredictiveModeling />;
      case 'agent':
        return <AIAgent />;
      default:
        return (
          <div className="space-y-6">
            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.change}
                        </p>
                      </div>
                      <metric.icon className={`h-8 w-8 ${metric.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Modules Grid */}
            <Card>
              <CardHeader>
                <CardTitle>Módulos de IA Ativados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modules.map((module) => (
                    <Card key={module.id} className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <module.icon className={`h-6 w-6 ${module.color}`} />
                          <Badge variant="outline" className="text-green-600">
                            {module.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold mb-2">{module.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Insights:</span>
                            <span className="font-medium">{module.insights}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Precisão:</span>
                            <span className="font-medium text-green-600">{module.accuracy}</span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full mt-3"
                          onClick={() => setActiveTab(module.id)}
                        >
                          Acessar Módulo
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-600" />
                  Insights Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInsights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        <Badge variant="outline">{insight.type}</Badge>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{insight.title}</h3>
                          <Badge className={getSeverityColor(insight.severity)}>
                            {insight.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{insight.module}</span>
                          <span>{insight.timestamp}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Ver Detalhes
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">IA para Suporte à Decisão</h1>
          <p className="text-gray-600">
            Análises avançadas e inteligência artificial para decisões estratégicas
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
          <Button>
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat com IA
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-9 w-full">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="predictive">Preditiva</TabsTrigger>
          <TabsTrigger value="anomaly">Anomalias</TabsTrigger>
          <TabsTrigger value="nlp">NLP</TabsTrigger>
          <TabsTrigger value="optimization">Otimização</TabsTrigger>
          <TabsTrigger value="gis">GIS</TabsTrigger>
          <TabsTrigger value="opendata">Dados Abertos</TabsTrigger>
          <TabsTrigger value="modeling">Modelagem</TabsTrigger>
          <TabsTrigger value="agent">Agente IA</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {renderTabContent()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIInsights;
