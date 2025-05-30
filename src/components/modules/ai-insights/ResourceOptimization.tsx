
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Zap, 
  Droplets, 
  Recycle,
  TrendingUp,
  Target,
  Lightbulb,
  BarChart3,
  Settings,
  Play,
  Download,
  RefreshCw
} from 'lucide-react';

const ResourceOptimization = () => {
  const [selectedResource, setSelectedResource] = useState('energy');

  const optimizationModels = [
    {
      id: 'energy_optimization',
      name: 'Otimização Energética',
      resource: 'Energia',
      algorithm: 'Redes Neurais',
      currentConsumption: 1250,
      optimizedConsumption: 1075,
      savings: 14.0,
      cost: '$ 24,500',
      costSavings: '$ 3,430',
      status: 'Ativo',
      recommendations: [
        'Reduzir operações em horário de pico (14h-16h)',
        'Substituir equipamentos da Linha 2',
        'Implementar sistema de recuperação de calor'
      ],
      icon: Zap,
      color: 'text-yellow-600'
    },
    {
      id: 'water_optimization',
      name: 'Gestão Hídrica',
      resource: 'Água',
      algorithm: 'Algoritmo Genético',
      currentConsumption: 850,
      optimizedConsumption: 680,
      savings: 20.0,
      cost: '$ 12,750',
      costSavings: '$ 2,550',
      status: 'Ativo',
      recommendations: [
        'Implementar sistema de reuso de água',
        'Otimizar processos de limpeza',
        'Instalar sensores de vazamento'
      ],
      icon: Droplets,
      color: 'text-blue-600'
    },
    {
      id: 'waste_optimization',
      name: 'Economia Circular',
      resource: 'Materiais',
      algorithm: 'Otimização Linear',
      currentConsumption: 450,
      optimizedConsumption: 315,
      savings: 30.0,
      cost: '$ 18,900',
      costSavings: '$ 5,670',
      status: 'Ativo',
      recommendations: [
        'Aumentar taxa de reciclagem para 85%',
        'Implementar design for circularity',
        'Parcerias para valorização de resíduos'
      ],
      icon: Recycle,
      color: 'text-green-600'
    }
  ];

  const efficiencyMetrics = [
    {
      metric: 'Economia Total',
      value: '$ 11,650',
      change: '+23%',
      period: 'Mensal',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      metric: 'Eficiência Energética',
      value: '92.3%',
      change: '+5.2%',
      period: 'Atual',
      icon: Zap,
      color: 'text-yellow-600'
    },
    {
      metric: 'Reuso de Água',
      value: '78%',
      change: '+12%',
      period: 'Este mês',
      icon: Droplets,
      color: 'text-blue-600'
    },
    {
      metric: 'Taxa de Reciclagem',
      value: '85%',
      change: '+8%',
      period: 'Meta atingida',
      icon: Recycle,
      color: 'text-green-600'
    }
  ];

  const optimizationOpportunities = [
    {
      id: 'opp_001',
      title: 'Pico de Consumo Energético',
      description: 'Reduzir 25% do consumo em horários de pico',
      impact: 'Alto',
      savings: '$ 2,800/mês',
      implementation: 'Médio',
      payback: '8 meses',
      resource: 'Energia',
      confidence: 94
    },
    {
      id: 'opp_002',
      title: 'Sistema de Reuso de Água',
      description: 'Implementar circuito fechado na produção',
      impact: 'Alto',
      savings: '$ 1,950/mês',
      implementation: 'Alto',
      payback: '14 meses',
      resource: 'Água',
      confidence: 87
    },
    {
      id: 'opp_003',
      title: 'Valorização de Subprodutos',
      description: 'Transformar resíduos em matéria-prima',
      impact: 'Médio',
      savings: '$ 1,200/mês',
      implementation: 'Baixo',
      payback: '6 meses',
      resource: 'Materiais',
      confidence: 91
    },
    {
      id: 'opp_004',
      title: 'Otimização de HVAC',
      description: 'IA para controle inteligente de climatização',
      impact: 'Médio',
      savings: '$ 1,500/mês',
      implementation: 'Baixo',
      payback: '4 meses',
      resource: 'Energia',
      confidence: 96
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Alto': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImplementationColor = (implementation: string) => {
    switch (implementation) {
      case 'Baixo': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Alto': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResourceIcon = (resource: string) => {
    switch (resource) {
      case 'Energia': return Zap;
      case 'Água': return Droplets;
      case 'Materiais': return Recycle;
      default: return Target;
    }
  };

  return (
    <div className="space-y-6">
      {/* Efficiency Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {efficiencyMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.metric}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.period}</p>
                </div>
                <div className="text-right">
                  <metric.icon className={`h-6 w-6 ${metric.color} mb-2`} />
                  <span className="text-xs font-medium text-green-600">
                    {metric.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Optimization Models */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-600" />
              Modelos de Otimização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {optimizationModels.map((model) => (
                <div key={model.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <model.icon className={`h-5 w-5 ${model.color}`} />
                      <h3 className="font-semibold">{model.name}</h3>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {model.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div>
                      <span className="text-gray-500">Algoritmo: </span>
                      <span className="font-medium">{model.algorithm}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Recurso: </span>
                      <span className="font-medium">{model.resource}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded mb-3">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500">Consumo Atual</p>
                        <p className="font-bold text-red-600">
                          {model.currentConsumption.toLocaleString()} kWh
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Consumo Otimizado</p>
                        <p className="font-bold text-green-600">
                          {model.optimizedConsumption.toLocaleString()} kWh
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Economia</p>
                        <p className="font-bold text-blue-600">{model.savings}%</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Economia $</p>
                        <p className="font-bold text-green-600">{model.costSavings}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <p className="text-sm font-medium text-gray-700">Recomendações:</p>
                    <ul className="space-y-1">
                      {model.recommendations.slice(0, 2).map((rec, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Lightbulb className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Play className="h-3 w-3 mr-1" />
                      Aplicar
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Optimization Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              Oportunidades de Otimização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {optimizationOpportunities.map((opportunity) => {
                const ResourceIcon = getResourceIcon(opportunity.resource);
                return (
                  <div key={opportunity.id} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <ResourceIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm">{opportunity.title}</h3>
                          <Badge className={getImpactColor(opportunity.impact)} variant="outline">
                            {opportunity.impact}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{opportunity.description}</p>
                        
                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                          <div>
                            <span className="text-gray-500">Economia: </span>
                            <span className="font-medium text-green-600">{opportunity.savings}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Payback: </span>
                            <span className="font-medium">{opportunity.payback}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Implementação: </span>
                            <Badge className={getImplementationColor(opportunity.implementation)} variant="outline">
                              {opportunity.implementation}
                            </Badge>
                          </div>
                          <div>
                            <span className="text-gray-500">Confiança: </span>
                            <span className="font-medium text-blue-600">{opportunity.confidence}%</span>
                          </div>
                        </div>

                        <div className="space-y-2 mb-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Viabilidade:</span>
                            <span className="font-medium">{opportunity.confidence}%</span>
                          </div>
                          <Progress value={opportunity.confidence} className="h-2" />
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            Implementar
                          </Button>
                          <Button size="sm" variant="outline">
                            Analisar
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

      {/* Resource Management Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Dashboard de Recursos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Definir Metas</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Estabelecer objetivos de eficiência
                </p>
                <Button size="sm" className="w-full">
                  Configurar Metas
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <RefreshCw className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Otimização Automática</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Aplicar recomendações da IA
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Ativar Auto-Otimização
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Relatórios</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Exportar análises de eficiência
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Gerar Relatório
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceOptimization;
