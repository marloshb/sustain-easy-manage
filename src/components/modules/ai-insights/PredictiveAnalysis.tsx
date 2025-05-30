
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  AlertTriangle, 
  Target,
  Activity,
  BarChart3,
  Play,
  Pause,
  RefreshCw,
  Download,
  Eye
} from 'lucide-react';

const PredictiveAnalysis = () => {
  const [isRunning, setIsRunning] = useState(false);

  const predictiveModels = [
    {
      id: 'emissions_forecast',
      name: 'Previsão de Emissões',
      description: 'Modelo LSTM para prever emissões de CO2',
      type: 'Séries Temporais',
      accuracy: 94.2,
      status: 'Ativo',
      lastUpdate: '2024-01-20 14:30',
      predictions: {
        current: 2654,
        forecast: 2890,
        trend: 'Aumentando',
        risk: 'Médio'
      }
    },
    {
      id: 'compliance_risk',
      name: 'Risco de Conformidade',
      description: 'Classificação de riscos regulatórios',
      type: 'Classificação',
      accuracy: 89.7,
      status: 'Ativo',
      lastUpdate: '2024-01-20 13:45',
      predictions: {
        current: 'Baixo',
        forecast: 'Médio',
        trend: 'Deteriorando',
        risk: 'Alto'
      }
    },
    {
      id: 'incident_probability',
      name: 'Probabilidade de Incidentes',
      description: 'Previsão de acidentes de trabalho',
      type: 'Regressão',
      accuracy: 91.5,
      status: 'Ativo',
      lastUpdate: '2024-01-20 12:15',
      predictions: {
        current: '0.12%',
        forecast: '0.18%',
        trend: 'Aumentando',
        risk: 'Médio'
      }
    },
    {
      id: 'resource_demand',
      name: 'Demanda de Recursos',
      description: 'Previsão de consumo de água e energia',
      type: 'Regressão Múltipla',
      accuracy: 96.1,
      status: 'Ativo',
      lastUpdate: '2024-01-20 11:00',
      predictions: {
        current: '85%',
        forecast: '92%',
        trend: 'Aumentando',
        risk: 'Alto'
      }
    }
  ];

  const riskAlerts = [
    {
      model: 'Risco de Conformidade',
      alert: 'Probabilidade de 73% de não atingir meta CSRD Q3',
      severity: 'Alto',
      confidence: 89,
      timeframe: '30-60 dias',
      action: 'Implementar plano de contingência'
    },
    {
      model: 'Previsão de Emissões',
      alert: 'Aumento previsto de 12% nas emissões Escopo 1',
      severity: 'Médio',
      confidence: 94,
      timeframe: '15-30 dias',
      action: 'Revisar processo de produção'
    },
    {
      model: 'Demanda de Recursos',
      alert: 'Pico de consumo de água esperado em fevereiro',
      severity: 'Baixo',
      confidence: 96,
      timeframe: '45-60 dias',
      action: 'Otimizar uso de recursos'
    }
  ];

  const modelPerformance = [
    {
      metric: 'Precisão Média',
      value: '92.9%',
      trend: '+2.1%',
      description: 'Acurácia geral dos modelos'
    },
    {
      metric: 'Tempo de Processamento',
      value: '1.2s',
      trend: '-0.3s',
      description: 'Latência média de predição'
    },
    {
      metric: 'Modelos Ativos',
      value: '12',
      trend: '+3',
      description: 'Modelos em produção'
    },
    {
      metric: 'Predições/Dia',
      value: '2,847',
      trend: '+15%',
      description: 'Volume de predições'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Pausado': return 'bg-yellow-100 text-yellow-800';
      case 'Erro': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'Aumentando': return '↗️';
      case 'Diminuindo': return '↘️';
      case 'Estável': return '➡️';
      case 'Deteriorando': return '📉';
      default: return '➡️';
    }
  };

  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {modelPerformance.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">{metric.metric}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">{metric.description}</p>
                  <span className={`text-xs font-medium ${
                    metric.trend.startsWith('+') ? 'text-green-600' : 
                    metric.trend.startsWith('-') && metric.metric.includes('Tempo') ? 'text-green-600' : 
                    'text-red-600'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Predictive Models */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Modelos Preditivos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {predictiveModels.map((model) => (
                <div key={model.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{model.name}</h3>
                    <Badge className={getStatusColor(model.status)}>
                      {model.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{model.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-gray-500">Tipo</p>
                      <p className="text-sm font-medium">{model.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Precisão</p>
                      <p className="text-sm font-medium text-green-600">{model.accuracy}%</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded mb-3">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Atual: </span>
                        <span className="font-medium">{model.predictions.current}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Previsão: </span>
                        <span className="font-medium">{model.predictions.forecast}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Tendência: </span>
                        <span className="font-medium">
                          {getTrendIcon(model.predictions.trend)} {model.predictions.trend}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Risco: </span>
                        <Badge className={getRiskColor(model.predictions.risk)} variant="outline">
                          {model.predictions.risk}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      Detalhes
                    </Button>
                    <Button size="sm" variant="outline">
                      <RefreshCw className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">
                    Última atualização: {model.lastUpdate}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Alertas de Risco
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskAlerts.map((alert, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{alert.model}</h3>
                    <Badge className={getRiskColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3">{alert.alert}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Confiança:</span>
                      <span className="font-medium">{alert.confidence}%</span>
                    </div>
                    <Progress value={alert.confidence} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Prazo:</span>
                      <span className="font-medium">{alert.timeframe}</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded mb-3">
                    <p className="text-sm font-medium text-blue-800">Ação Recomendada:</p>
                    <p className="text-sm text-blue-700">{alert.action}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Criar Plano de Ação
                    </Button>
                    <Button size="sm" variant="outline">
                      Marcar como Lido
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Gerenciamento de Modelos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Button 
              onClick={() => setIsRunning(!isRunning)}
              className={isRunning ? 'bg-orange-600' : 'bg-green-600'}
            >
              {isRunning ? (
                <>
                  <Pause className="h-4 w-4 mr-2" />
                  Pausar Todos
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Executar Todos
                </>
              )}
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Retreinar Modelos
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar Resultados
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Configurar Novos Modelos</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Adicionar novos modelos preditivos
                </p>
                <Button size="sm" className="w-full">
                  Novo Modelo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Activity className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Monitoramento</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Acompanhar performance em tempo real
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Ver Métricas
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <RefreshCw className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Retreinamento</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Atualizar modelos com novos dados
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Agendar Treino
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveAnalysis;
