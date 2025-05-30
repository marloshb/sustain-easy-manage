
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RealTimeTracking from './resource-usage/RealTimeTracking';
import GISVisualization from './resource-usage/GISVisualization';
import OpenDataIntegration from './resource-usage/OpenDataIntegration';
import PredictiveSimulations from './resource-usage/PredictiveSimulations';
import GoalMonitoring from './resource-usage/GoalMonitoring';
import AISuggestions from './resource-usage/AISuggestions';
import ReportingDashboard from './resource-usage/ReportingDashboard';
import AIAnalytics from './resource-usage/AIAnalytics';
import { 
  Activity, 
  Zap, 
  Droplets, 
  Package, 
  TrendingUp, 
  Target,
  Brain,
  BarChart3,
  Map,
  Database
} from 'lucide-react';

const ResourceUsageModule = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for resource usage overview
  const resourceStats = [
    {
      type: 'Energia',
      current: '2,456 kWh',
      target: '2,200 kWh',
      efficiency: '92%',
      trend: '+5%',
      icon: Zap,
      color: 'text-yellow-600',
      status: 'above'
    },
    {
      type: 'Água',
      current: '1,234 L',
      target: '1,100 L',
      efficiency: '89%',
      trend: '-8%',
      icon: Droplets,
      color: 'text-blue-600',
      status: 'above'
    },
    {
      type: 'Materiais',
      current: '856 kg',
      target: '900 kg',
      efficiency: '95%',
      trend: '-12%',
      icon: Package,
      color: 'text-green-600',
      status: 'on-track'
    }
  ];

  const mockResourceData = {
    energy: [
      { location: 'Fábrica A', consumption: 1200, efficiency: 85, coordinates: [-23.5505, -46.6333] },
      { location: 'Fábrica B', consumption: 980, efficiency: 92, coordinates: [-22.9068, -43.1729] },
      { location: 'Escritório Central', consumption: 276, efficiency: 88, coordinates: [-23.5489, -46.6388] }
    ],
    water: [
      { location: 'Fábrica A', consumption: 800, efficiency: 78, coordinates: [-23.5505, -46.6333] },
      { location: 'Fábrica B', consumption: 344, efficiency: 95, coordinates: [-22.9068, -43.1729] },
      { location: 'Tratamento', consumption: 90, efficiency: 99, coordinates: [-23.5489, -46.6388] }
    ],
    materials: [
      { location: 'Fábrica A', consumption: 450, efficiency: 94, coordinates: [-23.5505, -46.6333] },
      { location: 'Fábrica B', consumption: 356, efficiency: 97, coordinates: [-22.9068, -43.1729] },
      { location: 'Depósito', consumption: 50, efficiency: 93, coordinates: [-23.5489, -46.6388] }
    ]
  };

  const sustainabilityGoals = [
    {
      title: 'Redução de Energia',
      target: '15% até 2026',
      progress: 68,
      status: 'on-track',
      deadline: '2026-12-31'
    },
    {
      title: 'Eficiência Hídrica',
      target: '20% até 2025',
      progress: 45,
      status: 'behind',
      deadline: '2025-12-31'
    },
    {
      title: 'Reciclagem de Materiais',
      target: '80% reciclado',
      progress: 85,
      status: 'ahead',
      deadline: '2024-12-31'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'bg-green-100 text-green-800';
      case 'on-track': return 'bg-blue-100 text-blue-800';
      case 'behind': return 'bg-orange-100 text-orange-800';
      case 'above': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Resource Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resourceStats.map((resource, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <resource.icon className={`h-8 w-8 ${resource.color}`} />
                  <div>
                    <h3 className="font-semibold text-lg">{resource.type}</h3>
                    <p className="text-sm text-gray-600">Consumo Atual</p>
                  </div>
                </div>
                <Badge className={getStatusColor(resource.status)}>
                  {resource.status === 'above' ? 'Acima da Meta' : 
                   resource.status === 'on-track' ? 'No Alvo' : 'Adiante'}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Atual:</span>
                  <span className="font-medium">{resource.current}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Meta:</span>
                  <span className="font-medium">{resource.target}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Eficiência:</span>
                  <span className="font-medium">{resource.efficiency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tendência:</span>
                  <span className={`font-medium ${resource.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                    {resource.trend}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sustainability Goals Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Progresso das Metas de Sustentabilidade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sustainabilityGoals.map((goal, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{goal.title}</h4>
                  <Badge className={getStatusColor(goal.status)}>
                    {goal.status === 'ahead' ? 'Adiante' : 
                     goal.status === 'on-track' ? 'No Prazo' : 'Atrasado'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{goal.target}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      goal.status === 'ahead' ? 'bg-green-500' :
                      goal.status === 'on-track' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{goal.progress}% completo</span>
                  <span>Prazo: {new Date(goal.deadline).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Module Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-green-600" />
              Monitoramento do Uso de Recursos
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <BarChart3 className="h-4 w-4 mr-1" />
                Relatório Executivo
              </Button>
              <Button size="sm">
                <Brain className="h-4 w-4 mr-1" />
                Análise IA
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="tracking">Rastreamento</TabsTrigger>
              <TabsTrigger value="gis">GIS</TabsTrigger>
              <TabsTrigger value="data">Dados Abertos</TabsTrigger>
              <TabsTrigger value="simulations">Simulações</TabsTrigger>
              <TabsTrigger value="goals">Metas</TabsTrigger>
              <TabsTrigger value="ai-suggestions">IA Sugestões</TabsTrigger>
              <TabsTrigger value="reports">Relatórios</TabsTrigger>
              <TabsTrigger value="analytics">Análises IA</TabsTrigger>
            </TabsList>

            <TabsContent value="tracking" className="mt-6">
              <RealTimeTracking resourceData={mockResourceData} />
            </TabsContent>

            <TabsContent value="gis" className="mt-6">
              <GISVisualization resourceData={mockResourceData} />
            </TabsContent>

            <TabsContent value="data" className="mt-6">
              <OpenDataIntegration />
            </TabsContent>

            <TabsContent value="simulations" className="mt-6">
              <PredictiveSimulations />
            </TabsContent>

            <TabsContent value="goals" className="mt-6">
              <GoalMonitoring goals={sustainabilityGoals} />
            </TabsContent>

            <TabsContent value="ai-suggestions" className="mt-6">
              <AISuggestions resourceData={mockResourceData} />
            </TabsContent>

            <TabsContent value="reports" className="mt-6">
              <ReportingDashboard resourceStats={resourceStats} />
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <AIAnalytics />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceUsageModule;
