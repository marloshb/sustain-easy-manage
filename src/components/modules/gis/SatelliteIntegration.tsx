
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Satellite, 
  Cloud,
  Calendar,
  Download,
  Eye,
  Layers,
  MapPin,
  Zap,
  Thermometer,
  Droplets,
  Leaf
} from 'lucide-react';

const SatelliteIntegration = () => {
  const [selectedDataset, setSelectedDataset] = useState('copernicus');
  const [activeTimeframe, setActiveTimeframe] = useState('current');

  const satelliteDatasets = [
    {
      id: 'copernicus',
      name: 'Copernicus Sentinel',
      provider: 'ESA',
      description: 'Dados de observação da Terra',
      coverage: 'Global',
      resolution: '10-60m',
      updateFreq: '5-10 dias',
      dataTypes: ['Vegetação', 'Uso do Solo', 'Atmosfera', 'Oceanos'],
      status: 'active',
      lastUpdate: '2024-01-20'
    },
    {
      id: 'nasa_earth',
      name: 'NASA Earth Data',
      provider: 'NASA',
      description: 'Dados climáticos e ambientais',
      coverage: 'Global',
      resolution: '1km-30m',
      updateFreq: 'Diário',
      dataTypes: ['Clima', 'Temperatura', 'Precipitação', 'Qualidade do Ar'],
      status: 'active',
      lastUpdate: '2024-01-21'
    },
    {
      id: 'landsat',
      name: 'Landsat Collection',
      provider: 'USGS/NASA',
      description: 'Imagens multiespectrais históricas',
      coverage: 'Global',
      resolution: '15-30m',
      updateFreq: '16 dias',
      dataTypes: ['Mudanças do Solo', 'Vegetação', 'Água', 'Urbano'],
      status: 'active',
      lastUpdate: '2024-01-19'
    },
    {
      id: 'modis',
      name: 'MODIS Terra/Aqua',
      provider: 'NASA',
      description: 'Monitoramento atmosférico e terrestre',
      coverage: 'Global',
      resolution: '250m-1km',
      updateFreq: 'Diário',
      dataTypes: ['Incêndios', 'Vegetação', 'Nuvens', 'Aerossóis'],
      status: 'active',
      lastUpdate: '2024-01-21'
    }
  ];

  const imageAnalyses = [
    {
      id: 'veg_001',
      name: 'Análise de Vegetação - NDVI',
      type: 'vegetation',
      dataset: 'copernicus',
      area: 'Instalação Principal',
      timeRange: 'Jan 2023 - Jan 2024',
      progress: 100,
      status: 'completed',
      results: {
        trend: 'improving',
        change: '+12%',
        description: 'Aumento da cobertura vegetal ao redor da instalação'
      }
    },
    {
      id: 'land_002',
      name: 'Mudanças do Uso do Solo',
      type: 'landuse',
      dataset: 'landsat',
      area: 'Região Metropolitana',
      timeRange: '2020-2024',
      progress: 75,
      status: 'processing',
      results: null
    },
    {
      id: 'air_003',
      name: 'Qualidade do Ar - NO2',
      type: 'atmosphere',
      dataset: 'copernicus',
      area: 'Área Industrial',
      timeRange: 'Últimos 6 meses',
      progress: 100,
      status: 'completed',
      results: {
        trend: 'stable',
        change: '-2%',
        description: 'Pequena redução nas concentrações de NO2'
      }
    }
  ];

  const monitoringAreas = [
    {
      name: 'Instalação Principal',
      coordinates: [-23.5505, -46.6333],
      area: '2.5 km²',
      priority: 'Alta',
      monitored: ['Vegetação', 'Qualidade do Ar', 'Uso do Solo'],
      alerts: 1
    },
    {
      name: 'Área de Conservação',
      coordinates: [-23.5520, -46.6280],
      area: '8.7 km²',
      priority: 'Crítica',
      monitored: ['Biodiversidade', 'Desmatamento', 'Corpos Hídricos'],
      alerts: 0
    },
    {
      name: 'Corredor Logístico',
      coordinates: [-23.5480, -46.6400],
      area: '12.3 km²',
      priority: 'Média',
      monitored: ['Expansão Urbana', 'Infraestrutura', 'Poluição'],
      alerts: 2
    }
  ];

  const timeframes = [
    { id: 'current', name: 'Atual', description: 'Últimas imagens disponíveis' },
    { id: '6months', name: '6 Meses', description: 'Comparação temporal' },
    { id: '1year', name: '1 Ano', description: 'Análise anual' },
    { id: '5years', name: '5 Anos', description: 'Tendência histórica' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Crítica': return 'bg-red-100 text-red-800';
      case 'Alta': return 'bg-orange-100 text-orange-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return '📈';
      case 'declining': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const getDataTypeIcon = (type: string) => {
    switch (type) {
      case 'Vegetação': case 'vegetation': return <Leaf className="h-4 w-4 text-green-600" />;
      case 'Clima': case 'Temperatura': return <Thermometer className="h-4 w-4 text-red-600" />;
      case 'Precipitação': case 'Água': return <Droplets className="h-4 w-4 text-blue-600" />;
      case 'Qualidade do Ar': case 'atmosphere': return <Cloud className="h-4 w-4 text-gray-600" />;
      default: return <Satellite className="h-4 w-4 text-purple-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={selectedDataset} onValueChange={setSelectedDataset} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {satelliteDatasets.map((dataset) => (
            <TabsTrigger key={dataset.id} value={dataset.id} className="text-xs">
              {dataset.name.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {satelliteDatasets.map((dataset) => (
          <TabsContent key={dataset.id} value={dataset.id} className="space-y-6">
            {/* Dataset Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-5 w-5 text-blue-600" />
                  {dataset.name} - Integração de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Provedor</p>
                    <p className="font-medium">{dataset.provider}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Cobertura</p>
                    <p className="font-medium">{dataset.coverage}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Resolução</p>
                    <p className="font-medium">{dataset.resolution}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Atualização</p>
                    <p className="font-medium">{dataset.updateFreq}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Tipos de Dados Disponíveis</p>
                    <div className="flex flex-wrap gap-2">
                      {dataset.dataTypes.map((type, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          {getDataTypeIcon(type)}
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(dataset.status)}>
                        {dataset.status === 'active' ? 'Ativo' : dataset.status}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        Última atualização: {dataset.lastUpdate}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        Visualizar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Baixar Dados
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-green-600" />
              Análises de Imagem em Execução
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {imageAnalyses.map((analysis) => (
                <div key={analysis.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{analysis.name}</h3>
                    <Badge className={getStatusColor(analysis.status)}>
                      {analysis.status === 'completed' ? 'Concluído' : 
                       analysis.status === 'processing' ? 'Processando' : analysis.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Dataset:</span>
                      <span>{satelliteDatasets.find(d => d.id === analysis.dataset)?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Área:</span>
                      <span>{analysis.area}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Período:</span>
                      <span>{analysis.timeRange}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{analysis.progress}%</span>
                    </div>
                    <Progress value={analysis.progress} className="h-2" />
                  </div>

                  {analysis.results && (
                    <div className="mt-3 p-3 bg-green-50 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium">Resultados:</span>
                        <span className="text-lg">{getTrendIcon(analysis.results.trend)}</span>
                        <span className="text-sm font-medium text-green-600">
                          {analysis.results.change}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{analysis.results.description}</p>
                    </div>
                  )}

                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      Ver Resultados
                    </Button>
                    {analysis.status === 'completed' && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="h-3 w-3 mr-1" />
                        Exportar
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-600" />
              Áreas de Monitoramento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monitoringAreas.map((area, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{area.name}</h3>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(area.priority)}>
                        {area.priority}
                      </Badge>
                      {area.alerts > 0 && (
                        <Badge className="bg-red-100 text-red-800">
                          {area.alerts} Alerta{area.alerts > 1 ? 's' : ''}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Coordenadas:</span>
                      <span className="font-mono text-xs">{area.coordinates.join(', ')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Área:</span>
                      <span>{area.area}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Monitoramento Ativo:</p>
                    <div className="flex flex-wrap gap-1">
                      {area.monitored.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      Ver no Mapa
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Histórico
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeframe Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            Análise Temporal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            {timeframes.map((timeframe) => (
              <Button
                key={timeframe.id}
                size="sm"
                variant={activeTimeframe === timeframe.id ? 'default' : 'outline'}
                onClick={() => setActiveTimeframe(timeframe.id)}
              >
                {timeframe.name}
              </Button>
            ))}
          </div>

          <div className="relative h-48 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Análise Temporal - {timeframes.find(t => t.id === activeTimeframe)?.name}
              </h3>
              <p className="text-sm text-gray-500">
                {timeframes.find(t => t.id === activeTimeframe)?.description}
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <Badge className="bg-blue-100 text-blue-800">
                  Imagens Processadas: 156
                </Badge>
                <Badge className="bg-green-100 text-green-800">
                  Mudanças Detectadas: 23
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <p className="text-sm text-gray-600">Datasets Ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">847</div>
            <p className="text-sm text-gray-600">Imagens Processadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">15</div>
            <p className="text-sm text-gray-600">Áreas Monitoradas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">98%</div>
            <p className="text-sm text-gray-600">Qualidade dos Dados</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SatelliteIntegration;
