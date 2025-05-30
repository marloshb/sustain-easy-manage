
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Globe, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download,
  BarChart3
} from 'lucide-react';

const OpenDataIntegration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('2024-01-20 14:30');

  const dataSources = [
    {
      name: 'OSHA Database',
      type: 'Segurança Ocupacional',
      status: 'Conectado',
      lastSync: '2024-01-20 12:00',
      records: '2.4M',
      url: 'https://osha.gov/data',
      reliability: 98
    },
    {
      name: 'EPA Environmental Data',
      type: 'Dados Ambientais',
      status: 'Conectado',
      lastSync: '2024-01-20 10:30',
      records: '1.8M',
      url: 'https://epa.gov/data',
      reliability: 96
    },
    {
      name: 'NOAA Climate Data',
      type: 'Dados Climáticos',
      status: 'Conectado',
      lastSync: '2024-01-20 08:15',
      records: '890K',
      url: 'https://noaa.gov/data',
      reliability: 99
    },
    {
      name: 'Copernicus Satellite',
      type: 'Imagens de Satélite',
      status: 'Conectado',
      lastSync: '2024-01-20 06:00',
      records: '156K',
      url: 'https://copernicus.eu/data',
      reliability: 94
    },
    {
      name: 'IUCN Biodiversity',
      type: 'Biodiversidade',
      status: 'Conectado',
      lastSync: '2024-01-19 22:00',
      records: '45K',
      url: 'https://iucn.org/data',
      reliability: 97
    }
  ];

  const benchmarkData = [
    {
      metric: 'Taxa de Acidentes',
      company: '1.2 por milhão de horas',
      industry: '1.8 per milhão de horas',
      performance: 'Melhor que a média',
      trend: '+5%'
    },
    {
      metric: 'Dias sem Acidentes',
      company: '127 dias',
      industry: '89 dias',
      performance: 'Melhor que a média',
      trend: '+43%'
    },
    {
      metric: 'Conformidade OSHA',
      company: '96%',
      industry: '87%',
      performance: 'Melhor que a média',
      trend: '+10%'
    },
    {
      metric: 'Emissões por funcionário',
      company: '2.1 t CO2/ano',
      industry: '2.8 t CO2/ano',
      performance: 'Melhor que a média',
      trend: '-25%'
    }
  ];

  const contextualAlerts = [
    {
      type: 'Regulatório',
      title: 'Nova Regulamentação OSHA',
      description: 'Novas diretrizes para segurança em espaços confinados',
      source: 'OSHA',
      date: '2024-01-18',
      priority: 'Alta',
      action: 'Revisar procedimentos'
    },
    {
      type: 'Ambiental',
      title: 'Alerta de Qualidade do Ar',
      description: 'Índice de qualidade do ar acima do normal na região',
      source: 'EPA',
      date: '2024-01-19',
      priority: 'Média',
      action: 'Monitorar exposição'
    },
    {
      type: 'Climático',
      title: 'Previsão de Tempestade',
      description: 'Condições climáticas adversas previstas para próxima semana',
      source: 'NOAA',
      date: '2024-01-20',
      priority: 'Alta',
      action: 'Preparar protocolo de emergência'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Conectado': return 'bg-green-100 text-green-800';
      case 'Desconectado': return 'bg-red-100 text-red-800';
      case 'Sincronizando': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSyncAll = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLastUpdate(new Date().toLocaleString());
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Integração com Dados Abertos</h3>
          <p className="text-sm text-gray-600">
            Última atualização: {lastUpdate}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            onClick={handleSyncAll}
            disabled={isLoading}
            variant="outline"
          >
            <RefreshCw className={`h-4 w-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
            Sincronizar Tudo
          </Button>
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-1" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Data Sources Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            Status das Fontes de Dados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Fonte</th>
                  <th className="text-left py-2">Tipo</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Última Sincronização</th>
                  <th className="text-left py-2">Registros</th>
                  <th className="text-left py-2">Confiabilidade</th>
                  <th className="text-left py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {dataSources.map((source, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">
                      <div>
                        <p className="font-medium">{source.name}</p>
                        <p className="text-xs text-gray-500">{source.url}</p>
                      </div>
                    </td>
                    <td className="py-2">{source.type}</td>
                    <td className="py-2">
                      <Badge className={getStatusColor(source.status)}>
                        {source.status}
                      </Badge>
                    </td>
                    <td className="py-2">{source.lastSync}</td>
                    <td className="py-2">{source.records}</td>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <Progress value={source.reliability} className="h-2 w-16" />
                        <span className="text-xs">{source.reliability}%</span>
                      </div>
                    </td>
                    <td className="py-2">
                      <Button size="sm" variant="outline">
                        Configurar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Benchmark Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Análise de Benchmark
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benchmarkData.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-medium mb-3">{item.metric}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Nossa empresa:</span>
                    <span className="font-medium">{item.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Média do setor:</span>
                    <span className="font-medium">{item.industry}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-sm text-green-600">{item.performance}</span>
                    <span className={`text-sm font-medium ${item.trend.startsWith('+') && item.metric.includes('Dias') ? 'text-green-600' : 
                                    item.trend.startsWith('-') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.trend}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contextual Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-orange-600" />
            Alertas Contextuais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contextualAlerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  {alert.priority === 'Alta' ? (
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{alert.title}</h4>
                    <Badge className={getPriorityColor(alert.priority)}>
                      {alert.priority}
                    </Badge>
                    <Badge variant="outline">{alert.type}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Fonte: {alert.source}</span>
                    <span>{alert.date}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button size="sm" variant="outline">
                    {alert.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">98.2%</div>
            <p className="text-sm text-gray-600">Qualidade dos Dados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">5.3M</div>
            <p className="text-sm text-gray-600">Registros Sincronizados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">96.8%</div>
            <p className="text-sm text-gray-600">Disponibilidade APIs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">15min</div>
            <p className="text-sm text-gray-600">Latência Média</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OpenDataIntegration;
