
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import EnvironmentalManagement from '@/components/modules/EnvironmentalManagement';
import EHSManagement from '@/components/modules/EHSManagement';
import ESGManagement from '@/components/modules/ESGManagement';
import Navigation from '@/components/layout/Navigation';
import { Leaf, Shield, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const Index = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const stats = [
    {
      title: "Conformidade ESG",
      value: "94%",
      change: "+2.1%",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Incidentes EHS",
      value: "3",
      change: "-23%",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      title: "Emissões CO2 (t)",
      value: "2,847",
      change: "-8.4%",
      icon: Leaf,
      color: "text-green-600"
    },
    {
      title: "Auditorias Pendentes",
      value: "7",
      change: "+1",
      icon: Clock,
      color: "text-blue-600"
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
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <Navigation activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Plataforma ESG/EHS/Gestão Ambiental
          </h1>
          <p className="text-lg text-gray-600">
            Sistema integrado de gestão ambiental, saúde e segurança ocupacional
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {stat.change} vs. mês anterior
                    </p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardTitle className="text-xl font-bold">
              {activeModule === 'dashboard' && 'Dashboard Executivo'}
              {activeModule === 'environmental' && 'Gestão Ambiental'}
              {activeModule === 'ehs' && 'Sistema EHS'}
              {activeModule === 'esg' && 'Gestão ESG'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {renderContent()}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Leaf className="h-5 w-5" />
                Ação Rápida - Ambiental
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Registrar nova medição de emissões ou iniciar auditoria ambiental
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  Registrar Emissões
                </Button>
                <Button className="w-full" variant="outline">
                  Nova Auditoria
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <Shield className="h-5 w-5" />
                Ação Rápida - EHS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Reportar incidente ou registrar observação de segurança
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  Reportar Incidente
                </Button>
                <Button className="w-full" variant="outline">
                  Observação Segurança
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <TrendingUp className="h-5 w-5" />
                Ação Rápida - ESG
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Atualizar indicadores ESG ou gerar relatório de sustentabilidade
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  Atualizar KPIs
                </Button>
                <Button className="w-full" variant="outline">
                  Gerar Relatório
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
