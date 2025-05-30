
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Database, 
  RefreshCw, 
  TrendingUp, 
  Globe,
  Satellite,
  Cloud,
  Leaf,
  Users,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const OpenDataIntegration = () => {
  const [activeTab, setActiveTab] = useState('environmental');
  const [lastSync, setLastSync] = useState('2024-01-15 14:30');

  const dataSources = {
    environmental: [
      {
        name: 'EPA Air Quality',
        description: 'Dados de qualidade do ar dos EUA',
        status: 'connected',
        lastUpdate: '2024-01-15 12:00',
        dataPoints: 1247,
        coverage: 'Nacional (EUA)',
        icon: Cloud,
        metrics: ['PM2.5', 'CO2', 'NOx', 'SO2']
      },
      {
        name: 'NOAA Climate Data',
        description: 'Dados meteorológicos e climáticos',
        status: 'connected',
        lastUpdate: '2024-01-15 06:00',
        dataPoints: 2856,
        coverage: 'Global',
        icon: Satellite,
        metrics: ['Temperatura', 'Precipitação', 'Umidade', 'Ventos']
      },
      {
        name: 'Copernicus Satellite',
        description: 'Imagens de satélite e dados ambientais',
        status: 'connected',
        lastUpdate: '2024-01-14 18:00',
        dataPoints: 584,
        coverage: 'Europa/Global',
        icon: Satellite,
        metrics: ['Cobertura terrestre', 'Qualidade da água', 'Desflorestamento']
      },
      {
        name: 'IUCN Red List',
        description: 'Dados de biodiversidade e espécies ameaçadas',
        status: 'warning',
        lastUpdate: '2024-01-10 10:00',
        dataPoints: 142,
        coverage: 'Global',
        icon: Leaf,
        metrics: ['Espécies ameaçadas', 'Habitats', 'Áreas protegidas']
      }
    ],
    social: [
      {
        name: 'World Bank Data',
        description: 'Indicadores socioeconômicos globais',
        status: 'connected',
        lastUpdate: '2024-01-15 08:00',
        dataPoints: 2145,
        coverage: 'Global',
        icon: Users,
        metrics: ['PIB per capita', 'Índice de desenvolvimento', 'Demografia']
      },
      {
        name: 'UN SDG Database',
        description: 'Dados dos Objetivos de Desenvolvimento Sustentável',
        status: 'connected',
        lastUpdate: '2024-01-12 16:00',
        dataPoints: 756,
        coverage: 'Global',
        icon: Globe,
        metrics: ['ODS 1-17', 'Metas', 'Indicadores']
      }
    ],
    governance: [
      {
        name: 'Transparency International',
        description: 'Índices de transparência e corrupção',
        status: 'connected',
        lastUpdate: '2024-01-14 12:00',
        dataPoints: 189,
        coverage: 'Global',
        icon: Globe,
        metrics: ['Índice de Percepção de Corrupção', 'Transparência']
      }
    ]
  };

  const benchmarkData = [
    {
      metric: 'Emissões CO2 por Setor',
      ourValue: 2.4,
      sectorAverage: 3.1,
      bestInClass: 1.8,
      unit: 't CO2/milhão USD',
      performance: 'above_average'
    },
    {
      metric: 'Consumo de Água',
      ourValue: 156,
      sectorAverage: 189,
      bestInClass: 98,
      unit: 'm³/t produto',
      performance: 'above_average'
    },
    {
      metric: 'Diversidade de Gênero',
      ourValue: 42,
      sectorAverage: 35,
      bestInClass: 48,
      unit: '% mulheres',
      performance: 'above_average'
    },
    {
      metric: 'Acidentes de Trabalho',
      ourValue: 2.1,
      sectorAverage: 4.2,
      bestInClass: 0.8,
      unit: 'por 100.000h',
      performance: 'above_average'
    }
  ];

  const integrationStatus = [
    { name: 'APIs Conectadas', value: 7, total: 8, percentage: 87.5 },
    { name: 'Dados Sincronizados', value: 15420, total: 16000, percentage: 96.4 },
    { name: 'Cobertura Geográfica', value: 95, total: 100, percentage: 95 },
    { name: 'Atualização Automática', value: 6, total: 7, percentage: 85.7 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'above_average': return 'text-green-600';
      case 'average': return 'text-yellow-600';
      case 'below_average': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            Integração com Dados Abertos
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Última sincronização: {lastSync}
            </p>
            <Button size="sm" onClick={() => setLastSync(new Date().toLocaleString('pt-BR'))}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Sincronizar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {integrationStatus.map((status, index) => (
              <Card key={index} className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {status.name === 'Dados Sincronizados' ? status.value.toLocaleString() : status.value}
                  </div>
                  <p className="text-sm text-blue-800 mb-2">{status.name}</p>
                  <Progress value={status.percentage} className="h-2" />
                  <p className="text-xs text-blue-600 mt-1">{status.percentage.toFixed(1)}%</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="environmental">Ambiental</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="governance">Governança</TabsTrigger>
            </TabsList>

            {Object.entries(dataSources).map(([category, sources]) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sources.map((source, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <source.icon className="h-5 w-5 text-blue-600" />
                            <h3 className="font-semibold">{source.name}</h3>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(source.status)}
                            <Badge className={getStatusColor(source.status)}>
                              {source.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{source.description}</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Última atualização:</span>
                            <span className="font-medium">{source.lastUpdate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Pontos de dados:</span>
                            <span className="font-medium">{source.dataPoints.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Cobertura:</span>
                            <span className="font-medium">{source.coverage}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <p className="text-xs text-gray-500 mb-1">Métricas disponíveis:</p>
                          <div className="flex flex-wrap gap-1">
                            {source.metrics.map((metric, metricIndex) => (
                              <Badge key={metricIndex} variant="outline" className="text-xs">
                                {metric}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Benchmarking Setorial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {benchmarkData.map((benchmark, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{benchmark.metric}</h3>
                  <span className={`text-sm font-medium ${getPerformanceColor(benchmark.performance)}`}>
                    Acima da média
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-bold text-blue-600">{benchmark.ourValue}</div>
                    <div className="text-blue-800">Nossa Performance</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-600">{benchmark.sectorAverage}</div>
                    <div className="text-gray-800">Média do Setor</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-bold text-green-600">{benchmark.bestInClass}</div>
                    <div className="text-green-800">Melhor da Classe</div>
                  </div>
                </div>
                
                <div className="text-center text-xs text-gray-500">
                  Unidade: {benchmark.unit}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configurações de Integração</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4 text-center">
                <RefreshCw className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Sincronização Automática</h3>
                <p className="text-sm text-gray-600 mb-3">Configure frequência de atualização</p>
                <Button size="sm" className="w-full">Configurar</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4 text-center">
                <Database className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Novas Fontes</h3>
                <p className="text-sm text-gray-600 mb-3">Adicionar novas APIs de dados</p>
                <Button size="sm" variant="outline" className="w-full">Explorar</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Relatórios</h3>
                <p className="text-sm text-gray-600 mb-3">Relatórios de integração de dados</p>
                <Button size="sm" variant="outline" className="w-full">Ver Relatórios</Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenDataIntegration;
