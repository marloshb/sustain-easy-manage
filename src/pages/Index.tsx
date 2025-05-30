import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import EnvironmentalManagement from '@/components/modules/EnvironmentalManagement';
import EHSManagement from '@/components/modules/EHSManagement';
import ESGManagement from '@/components/modules/ESGManagement';
import ComplianceModule from '@/components/modules/ComplianceModule';
import DataCollectionModule from '@/components/modules/DataCollectionModule';
import GISIntegration from '@/components/modules/GISIntegration';
import RiskManagement from '@/components/modules/RiskManagement';
import AIInsights from '@/components/modules/AIInsights';
import AuditInspectionModule from '@/components/modules/AuditInspectionModule';
import ResourceUsageModule from '@/components/modules/ResourceUsageModule';
import Navigation from '@/components/layout/Navigation';
import { Leaf, Shield, TrendingUp, AlertTriangle, CheckCircle, Clock, Activity, Brain } from 'lucide-react';
import AIAlerts from '@/components/features/AIAlerts';
import GISMonitoring from '@/components/features/GISMonitoring';
import GlobalCompliance from '@/components/features/GlobalCompliance';
import IntegratedManagement from '@/components/features/IntegratedManagement';

const Index = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const stats = [
    {
      title: "Conformidade Global",
      value: "96%",
      change: "+3.2%",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Riscos Críticos",
      value: "4",
      change: "-35%",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      title: "Emissões CO2 (t)",
      value: "2,654",
      change: "-12.8%",
      icon: Leaf,
      color: "text-green-600"
    },
    {
      title: "Score ESG",
      value: "87",
      change: "+4.5%",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "Dias sem Acidentes",
      value: "127",
      change: "+127",
      icon: Shield,
      color: "text-green-600"
    },
    {
      title: "Alertas IA",
      value: "8",
      change: "+3",
      icon: Brain,
      color: "text-purple-600"
    }
  ];

  const renderContent = () => {
    switch (activeModule) {
      case 'environmental':
        return <EnvironmentalManagement />;
      case 'ehs':
        return <EHSManagement />;
      case 'esg':
        return <ESGManagement />;
      case 'compliance':
        return <ComplianceModule />;
      case 'data-collection':
        return <DataCollectionModule />;
      case 'gis':
        return <GISIntegration />;
      case 'risk':
        return <RiskManagement />;
      case 'ai-insights':
        return <AIInsights />;
      case 'audit-inspection':
        return <AuditInspectionModule />;
      case 'resource-usage':
        return <ResourceUsageModule />;
      case 'ai-alerts':
        return <AIAlerts />;
      case 'gis-monitoring':
        return <GISMonitoring />;
      case 'global-compliance':
        return <GlobalCompliance />;
      case 'integrated-management':
        return <IntegratedManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <Navigation activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Plataforma ESG/EHS/Gestão Ambiental Integrada
          </h1>
          <p className="text-lg text-gray-600">
            Sistema integrado com GIS e IA para gestão completa de sustentabilidade
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-gray-600 mb-1 truncate">
                      {stat.title}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {stat.change}
                    </p>
                  </div>
                  <stat.icon className={`h-6 w-6 ${stat.color} flex-shrink-0`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Card className="shadow-xl mb-8">
          <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardTitle className="text-xl font-bold">
              {activeModule === 'dashboard' && 'Dashboard Executivo Integrado'}
              {activeModule === 'environmental' && 'Gestão Ambiental'}
              {activeModule === 'ehs' && 'Sistema EHS'}
              {activeModule === 'esg' && 'Gestão ESG'}
              {activeModule === 'compliance' && 'Gestão de Conformidade'}
              {activeModule === 'data-collection' && 'Coleta de Dados e Relatórios'}
              {activeModule === 'gis' && 'Sistema GIS Integrado'}
              {activeModule === 'risk' && 'Gestão de Riscos'}
              {activeModule === 'ai-insights' && 'Insights de IA'}
              {activeModule === 'audit-inspection' && 'Auditorias e Inspeções'}
              {activeModule === 'resource-usage' && 'Monitoramento do Uso de Recursos'}
              {activeModule === 'ai-alerts' && 'IA - Alertas Inteligentes'}
              {activeModule === 'gis-monitoring' && 'GIS - Monitoramento Espacial'}
              {activeModule === 'global-compliance' && 'Conformidade Global'}
              {activeModule === 'integrated-management' && 'Gestão Integrada'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {renderContent()}
          </CardContent>
        </Card>

        {/* Enhanced Quick Actions - Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card 
            className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500 cursor-pointer"
            onClick={() => setActiveModule('ai-alerts')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <Brain className="h-5 w-5" />
                IA - Alertas Inteligentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                IA detectou 3 anomalias em emissões e 2 riscos potenciais
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline" size="sm">
                  Ver Alertas IA
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  Análise Preditiva
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500 cursor-pointer"
            onClick={() => setActiveModule('gis-monitoring')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Activity className="h-5 w-5" />
                GIS - Monitoramento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Visualizar dados ambientais em mapa interativo
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline" size="sm">
                  Abrir Mapa GIS
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  Análise Espacial
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500 cursor-pointer"
            onClick={() => setActiveModule('global-compliance')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <CheckCircle className="h-5 w-5" />
                Conformidade Global
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Status de conformidade com ISO 14001, CSRD e ESRS
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline" size="sm">
                  Dashboard Compliance
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  Relatórios ESRS
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500 cursor-pointer"
            onClick={() => setActiveModule('integrated-management')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <AlertTriangle className="h-5 w-5" />
                Gestão Integrada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Visão unificada de riscos, incidentes e recursos
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline" size="sm">
                  Centro de Controle
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  Relatório Executivo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
