
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Brain, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  XCircle,
  Bell
} from 'lucide-react';

const AIAlerts = () => {
  const [activeTab, setActiveTab] = useState('alerts');

  const intelligentAlerts = [
    {
      id: 'AL001',
      type: 'Risco de Conformidade',
      title: 'Provável não conformidade CSRD Q3',
      description: 'IA detectou 73% de probabilidade de não atingir metas de emissões',
      severity: 'Crítico',
      confidence: 94,
      timestamp: '2 min atrás',
      module: 'Análise Preditiva',
      actionRequired: true
    },
    {
      id: 'AL002',
      type: 'Anomalia Operacional',
      title: 'Cluster de incidentes na Unidade A',
      description: 'Padrão anômalo detectado com 87% de confiança',
      severity: 'Alto',
      confidence: 87,
      timestamp: '15 min atrás',
      module: 'Detecção de Anomalias',
      actionRequired: true
    },
    {
      id: 'AL003',
      type: 'Otimização de Recursos',
      title: 'Oportunidade de economia energética',
      description: 'Potencial redução de 25% no consumo em horário de pico',
      severity: 'Médio',
      confidence: 91,
      timestamp: '1 hora atrás',
      module: 'Otimização IA',
      actionRequired: false
    },
    {
      id: 'AL004',
      type: 'Análise Preditiva',
      title: 'Previsão de demanda hídrica',
      description: 'Aumento previsto de 40% no consumo de água próxima semana',
      severity: 'Médio',
      confidence: 88,
      timestamp: '2 horas atrás',
      module: 'Modelagem Preditiva',
      actionRequired: false
    }
  ];

  const predictiveInsights = [
    {
      category: 'Emissões',
      prediction: 'Aumento de 12% nas emissões Escopo 1 nos próximos 30 dias',
      probability: 78,
      impact: 'Alto',
      recommendation: 'Implementar medidas de redução imediatas'
    },
    {
      category: 'Segurança',
      prediction: 'Risco elevado de acidentes na Unidade B (próximos 15 dias)',
      probability: 65,
      impact: 'Crítico',
      recommendation: 'Intensificar treinamentos e inspeções'
    },
    {
      category: 'Recursos',
      prediction: 'Escassez hídrica pode afetar operações em agosto',
      probability: 82,
      impact: 'Médio',
      recommendation: 'Implementar medidas de conservação'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Crítico': return 'bg-red-100 text-red-800 border-red-200';
      case 'Alto': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Médio': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Baixo': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Crítico': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Alto': return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case 'Médio': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Baixo': return <CheckCircle className="h-4 w-4 text-green-600" />;
      default: return <Bell className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Brain className="h-8 w-8 text-purple-600" />
            IA - Alertas Inteligentes
          </h1>
          <p className="text-gray-600">
            Monitoramento inteligente com análises preditivas e detecção de anomalias
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={activeTab === 'alerts' ? 'default' : 'outline'}
            onClick={() => setActiveTab('alerts')}
          >
            Ver Alertas IA
          </Button>
          <Button 
            variant={activeTab === 'predictive' ? 'default' : 'outline'}
            onClick={() => setActiveTab('predictive')}
          >
            Análise Preditiva
          </Button>
        </div>
      </div>

      {activeTab === 'alerts' && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Alertas Inteligentes Ativos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {intelligentAlerts.map((alert) => (
                  <Alert key={alert.id} className={getSeverityColor(alert.severity)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {getSeverityIcon(alert.severity)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{alert.title}</h3>
                            <Badge variant="outline">{alert.type}</Badge>
                          </div>
                          <AlertDescription className="mb-2">
                            {alert.description}
                          </AlertDescription>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>Confiança: {alert.confidence}%</span>
                            <span>Módulo: {alert.module}</span>
                            <span>{alert.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Detalhar
                        </Button>
                        {alert.actionRequired && (
                          <Button size="sm">
                            Ação Requerida
                          </Button>
                        )}
                      </div>
                    </div>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'predictive' && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Análises Preditivas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {predictiveInsights.map((insight, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{insight.category}</Badge>
                          <span className="text-sm font-medium text-blue-600">
                            {insight.probability}%
                          </span>
                        </div>
                        <p className="text-sm font-medium">{insight.prediction}</p>
                        <div className="flex items-center justify-between">
                          <Badge className={
                            insight.impact === 'Crítico' ? 'bg-red-100 text-red-800' :
                            insight.impact === 'Alto' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }>
                            {insight.impact}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 border-t pt-2">
                          <strong>Recomendação:</strong> {insight.recommendation}
                        </p>
                        <Button size="sm" className="w-full">
                          Ver Análise Completa
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AIAlerts;
