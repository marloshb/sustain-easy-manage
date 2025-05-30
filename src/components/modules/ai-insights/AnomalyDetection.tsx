
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  AlertTriangle, 
  Activity, 
  Bell,
  Eye,
  Filter,
  Download,
  RefreshCw,
  Zap,
  Droplets,
  Factory,
  Thermometer
} from 'lucide-react';

const AnomalyDetection = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');

  const detectionModels = [
    {
      id: 'emissions_anomaly',
      name: 'Anomalias de Emissões',
      description: 'Isolation Forest para detecção de picos de CO2',
      dataSource: 'Sensores IoT',
      algorithm: 'Isolation Forest',
      sensitivity: 85,
      status: 'Ativo',
      anomaliesDetected: 12,
      lastAnomaly: '2024-01-20 14:45'
    },
    {
      id: 'water_consumption',
      name: 'Consumo de Água',
      description: 'Detecção de vazamentos e picos de consumo',
      dataSource: 'Medidores Inteligentes',
      algorithm: 'Autoencoder',
      sensitivity: 92,
      status: 'Ativo',
      anomaliesDetected: 8,
      lastAnomaly: '2024-01-20 13:22'
    },
    {
      id: 'energy_patterns',
      name: 'Padrões de Energia',
      description: 'Identificação de consumo anômalo de energia',
      dataSource: 'Sistema ERP',
      algorithm: 'One-Class SVM',
      sensitivity: 78,
      status: 'Ativo',
      anomaliesDetected: 15,
      lastAnomaly: '2024-01-20 12:10'
    },
    {
      id: 'safety_incidents',
      name: 'Incidentes de Segurança',
      description: 'Detecção de padrões anômalos em relatórios EHS',
      dataSource: 'Sistema EHS',
      algorithm: 'DBSCAN',
      sensitivity: 89,
      status: 'Ativo',
      anomaliesDetected: 5,
      lastAnomaly: '2024-01-20 10:35'
    }
  ];

  const recentAnomalies = [
    {
      id: 'ANO-001',
      type: 'Emissões CO2',
      description: 'Pico de 340% nas emissões da Unidade A',
      severity: 'Crítico',
      confidence: 97,
      detectedAt: '2024-01-20 14:45',
      location: 'Fábrica Principal - Linha 3',
      status: 'Investigando',
      impact: 'Alto',
      possibleCause: 'Falha no sistema de filtragem'
    },
    {
      id: 'ANO-002',
      type: 'Consumo Água',
      description: 'Aumento súbito de 180% no consumo',
      severity: 'Alto',
      confidence: 89,
      detectedAt: '2024-01-20 13:22',
      location: 'Unidade B - Setor Norte',
      status: 'Resolvido',
      impact: 'Médio',
      possibleCause: 'Vazamento na tubulação principal'
    },
    {
      id: 'ANO-003',
      type: 'Energia Elétrica',
      description: 'Consumo fora do padrão horário esperado',
      severity: 'Médio',
      confidence: 76,
      detectedAt: '2024-01-20 12:10',
      location: 'Armazém Central',
      status: 'Monitorando',
      impact: 'Baixo',
      possibleCause: 'Equipamento funcionando fora do horário'
    },
    {
      id: 'ANO-004',
      type: 'Temperatura',
      description: 'Variação térmica anômala detectada',
      severity: 'Baixo',
      confidence: 82,
      detectedAt: '2024-01-20 11:45',
      location: 'Sala de Equipamentos',
      status: 'Verificado',
      impact: 'Baixo',
      possibleCause: 'Ajuste sazonal no sistema HVAC'
    }
  ];

  const detectionStats = [
    {
      title: 'Anomalias Detectadas',
      value: '87',
      change: '+12',
      period: 'Últimas 24h',
      icon: AlertTriangle,
      color: 'text-orange-600'
    },
    {
      title: 'Taxa de Precisão',
      value: '94.7%',
      change: '+2.1%',
      period: 'Média mensal',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      title: 'Tempo de Detecção',
      value: '2.3 min',
      change: '-1.2 min',
      period: 'Tempo médio',
      icon: Zap,
      color: 'text-blue-600'
    },
    {
      title: 'Falsos Positivos',
      value: '5.3%',
      change: '-1.8%',
      period: 'Taxa mensal',
      icon: Eye,
      color: 'text-purple-600'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Crítico': return 'bg-red-100 text-red-800';
      case 'Alto': return 'bg-orange-100 text-orange-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Investigando': return 'bg-red-100 text-red-800';
      case 'Monitorando': return 'bg-yellow-100 text-yellow-800';
      case 'Resolvido': return 'bg-green-100 text-green-800';
      case 'Verificado': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Emissões CO2': return Factory;
      case 'Consumo Água': return Droplets;
      case 'Energia Elétrica': return Zap;
      case 'Temperatura': return Thermometer;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="space-y-6">
      {/* Detection Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {detectionStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.period}</p>
                </div>
                <div className="text-right">
                  <stat.icon className={`h-6 w-6 ${stat.color} mb-2`} />
                  <span className={`text-xs font-medium ${
                    stat.change.startsWith('+') && !stat.title.includes('Falsos') ? 'text-green-600' : 
                    stat.change.startsWith('-') ? 'text-green-600' : 
                    'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Detection Models */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Modelos de Detecção
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {detectionModels.map((model) => (
                <div key={model.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{model.name}</h3>
                    <Badge className="bg-green-100 text-green-800">
                      {model.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{model.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div>
                      <span className="text-gray-500">Algoritmo: </span>
                      <span className="font-medium">{model.algorithm}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Fonte: </span>
                      <span className="font-medium">{model.dataSource}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sensibilidade:</span>
                      <span className="font-medium">{model.sensitivity}%</span>
                    </div>
                    <Progress value={model.sensitivity} className="h-2" />
                  </div>

                  <div className="bg-orange-50 p-3 rounded mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-orange-800">
                        Anomalias Detectadas
                      </span>
                      <span className="text-lg font-bold text-orange-600">
                        {model.anomaliesDetected}
                      </span>
                    </div>
                    <p className="text-xs text-orange-600 mt-1">
                      Última: {model.lastAnomaly}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      Configurar
                    </Button>
                    <Button size="sm" variant="outline">
                      <RefreshCw className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Anomalies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-orange-600" />
              Anomalias Recentes
            </CardTitle>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnomalies.map((anomaly) => {
                const IconComponent = getTypeIcon(anomaly.type);
                return (
                  <div key={anomaly.id} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <IconComponent className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{anomaly.id}</h3>
                          <Badge className={getSeverityColor(anomaly.severity)}>
                            {anomaly.severity}
                          </Badge>
                          <Badge className={getStatusColor(anomaly.status)} variant="outline">
                            {anomaly.status}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-2">{anomaly.description}</p>
                        
                        <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-3">
                          <div>
                            <span className="font-medium">Local: </span>
                            <span>{anomaly.location}</span>
                          </div>
                          <div>
                            <span className="font-medium">Detectado: </span>
                            <span>{anomaly.detectedAt}</span>
                          </div>
                          <div>
                            <span className="font-medium">Confiança: </span>
                            <span className="font-medium text-blue-600">{anomaly.confidence}%</span>
                          </div>
                          <div>
                            <span className="font-medium">Impacto: </span>
                            <span>{anomaly.impact}</span>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-2 rounded mb-3">
                          <p className="text-xs font-medium text-blue-800">Possível Causa:</p>
                          <p className="text-xs text-blue-700">{anomaly.possibleCause}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            Investigar
                          </Button>
                          <Button size="sm" variant="outline">
                            Marcar Resolvido
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-600" />
            Monitoramento em Tempo Real
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Configurar Alertas</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Definir thresholds personalizados
                </p>
                <Button size="sm" className="w-full">
                  Configurar
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Activity className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Dashboard Live</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Monitoramento em tempo real
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Ver Dashboard
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <RefreshCw className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Calibrar Modelos</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Ajustar sensibilidade de detecção
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Calibrar
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnomalyDetection;
