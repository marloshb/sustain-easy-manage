
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Target,
  BarChart3,
  Zap,
  Eye,
  Settings,
  RefreshCw,
  Download,
  MessageSquare,
  Activity
} from 'lucide-react';

interface AIInsight {
  type: string;
  message: string;
  confidence: number;
  action: string;
  priority: string;
}

interface AIAnalyticsProps {
  aiInsights: AIInsight[];
}

const AIAnalytics: React.FC<AIAnalyticsProps> = ({ aiInsights }) => {
  const [activeModel, setActiveModel] = useState('risk-prediction');
  const [chatInput, setChatInput] = useState('');

  const aiModels = [
    {
      id: 'risk-prediction',
      name: 'Predição de Riscos',
      description: 'Modelo preditivo para identificação precoce de riscos',
      accuracy: 89,
      lastTrained: '2024-01-20',
      status: 'Ativo',
      predictions: 156
    },
    {
      id: 'anomaly-detection',
      name: 'Detecção de Anomalias',
      description: 'Identifica padrões anômalos em dados operacionais',
      accuracy: 94,
      lastTrained: '2024-01-18',
      status: 'Ativo',
      predictions: 23
    },
    {
      id: 'impact-assessment',
      name: 'Avaliação de Impacto',
      description: 'Calcula impactos potenciais de riscos identificados',
      accuracy: 85,
      lastTrained: '2024-01-15',
      status: 'Ativo',
      predictions: 78
    },
    {
      id: 'optimization',
      name: 'Otimização de Recursos',
      description: 'Sugere alocação otimal de recursos para mitigação',
      accuracy: 91,
      lastTrained: '2024-01-22',
      status: 'Ativo',
      predictions: 42
    }
  ];

  const predictiveAnalytics = [
    {
      category: 'Riscos Ambientais',
      currentRisk: 65,
      predictedRisk: 45,
      trend: 'down',
      confidence: 87,
      timeframe: '3 meses',
      factors: ['Melhoria em filtros', 'Redução produção', 'Condições climáticas']
    },
    {
      category: 'Riscos Climáticos',
      currentRisk: 78,
      predictedRisk: 85,
      trend: 'up',
      confidence: 92,
      timeframe: '6 meses',
      factors: ['El Niño', 'Aquecimento global', 'Padrões de precipitação']
    },
    {
      category: 'Riscos Operacionais',
      currentRisk: 42,
      predictedRisk: 38,
      trend: 'down',
      confidence: 79,
      timeframe: '1 mês',
      factors: ['Treinamento equipe', 'Novos procedimentos', 'Manutenção preventiva']
    },
    {
      category: 'Riscos Regulatórios',
      currentRisk: 55,
      predictedRisk: 70,
      trend: 'up',
      confidence: 83,
      timeframe: '12 meses',
      factors: ['CSRD implementação', 'Novas diretrizes', 'Fiscalização aumentada']
    }
  ];

  const automatedRecommendations = [
    {
      id: 'REC-001',
      type: 'Investimento',
      title: 'Sistema de Captura de Carbono',
      description: 'IA sugere investimento em tecnologia de captura para reduzir 40% das emissões',
      impact: 'Alto',
      cost: 'R$ 2.1M',
      roi: '18 meses',
      confidence: 91,
      implementation: 'Q3 2024'
    },
    {
      id: 'REC-002',
      type: 'Operacional',
      title: 'Otimização de Rotas Logísticas',
      description: 'Análise de padrões sugere nova configuração de rotas para reduzir emissões',
      impact: 'Médio',
      cost: 'R$ 180k',
      roi: '8 meses',
      confidence: 86,
      implementation: 'Q2 2024'
    },
    {
      id: 'REC-003',
      type: 'Preventivo',
      title: 'Sensores Preditivos IoT',
      description: 'Instalação de sensores para detecção precoce de falhas em equipamentos',
      impact: 'Alto',
      cost: 'R$ 450k',
      roi: '12 meses',
      confidence: 94,
      implementation: 'Q2 2024'
    }
  ];

  const nlpQueries = [
    'Quais são os maiores riscos climáticos para os próximos 5 anos?',
    'Como otimizar o orçamento de mitigação?',
    'Qual impacto da nova regulamentação CSRD?',
    'Identificar padrões em incidentes históricos',
    'Sugerir KPIs para monitoramento de riscos'
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-600" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-green-600 rotate-180" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Models Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {aiModels.map((model) => (
          <Card key={model.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <Brain className="h-6 w-6 text-purple-600" />
                <Badge className="bg-green-100 text-green-800 text-xs">
                  {model.status}
                </Badge>
              </div>
              <h3 className="font-medium text-sm mb-1">{model.name}</h3>
              <p className="text-xs text-gray-600 mb-3">{model.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Precisão:</span>
                  <span className={`font-medium ${getConfidenceColor(model.accuracy)}`}>
                    {model.accuracy}%
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Predições:</span>
                  <span className="font-medium">{model.predictions}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Atualizado:</span>
                  <span className="font-medium">{model.lastTrained}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Chat Interface */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-purple-600" />
            Assistente IA para Análise de Riscos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg max-h-60 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-purple-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      Olá! Sou seu assistente de IA para análise de riscos. Como posso ajudá-lo hoje?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Digite sua pergunta sobre riscos..."
                className="flex-1 p-2 border rounded-md"
              />
              <Button>
                <MessageSquare className="h-4 w-4 mr-1" />
                Enviar
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Sugestões:</span>
              {nlpQueries.slice(0, 3).map((query, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className="text-xs"
                  onClick={() => setChatInput(query)}
                >
                  {query.slice(0, 30)}...
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Predictive Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Análises Preditivas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {predictiveAnalytics.map((analytics, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{analytics.category}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {analytics.confidence}% confiança
                    </Badge>
                    {getTrendIcon(analytics.trend)}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-600">Risco Atual</p>
                    <p className="text-lg font-bold text-gray-900">{analytics.currentRisk}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Predição ({analytics.timeframe})</p>
                    <p className={`text-lg font-bold ${
                      analytics.trend === 'down' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {analytics.predictedRisk}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Variação</p>
                    <p className={`text-lg font-bold ${
                      analytics.trend === 'down' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {analytics.trend === 'down' ? '-' : '+'}{Math.abs(analytics.predictedRisk - analytics.currentRisk)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Horizonte</p>
                    <p className="text-lg font-bold text-gray-900">{analytics.timeframe}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-600 mb-2">Principais Fatores:</p>
                  <div className="flex flex-wrap gap-1">
                    {analytics.factors.map((factor, factorIndex) => (
                      <Badge key={factorIndex} variant="outline" className="text-xs">
                        {factor}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automated Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-orange-600" />
              Recomendações Automatizadas da IA
            </span>
            <Button size="sm" variant="outline">
              <RefreshCw className="h-4 w-4 mr-1" />
              Atualizar
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automatedRecommendations.map((rec) => (
              <div key={rec.id} className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{rec.type}</Badge>
                    <Badge className={getImpactColor(rec.impact)}>
                      Impacto {rec.impact}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {rec.confidence}% confiança
                  </Badge>
                </div>
                
                <h3 className="font-medium mb-2">{rec.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{rec.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-600">Investimento</p>
                    <p className="font-medium text-sm">{rec.cost}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">ROI</p>
                    <p className="font-medium text-sm text-green-600">{rec.roi}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Implementação</p>
                    <p className="font-medium text-sm">{rec.implementation}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Confiança IA</p>
                    <p className={`font-medium text-sm ${getConfidenceColor(rec.confidence)}`}>
                      {rec.confidence}%
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm">
                    <Target className="h-3 w-3 mr-1" />
                    Implementar
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-1" />
                    Análise Detalhada
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-3 w-3 mr-1" />
                    Relatório
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-gray-600" />
            Configuração de Modelos IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Parâmetros de Treinamento</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Frequência de Retreinamento</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Semanal</option>
                    <option>Quinzenal</option>
                    <option>Mensal</option>
                    <option>Trimestral</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Threshold de Confiança</label>
                  <input 
                    type="number" 
                    className="w-full mt-1 p-2 border rounded-md"
                    defaultValue="80"
                    min="50"
                    max="99"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Período de Dados Históricos</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>6 meses</option>
                    <option>1 ano</option>
                    <option>2 anos</option>
                    <option>5 anos</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Alertas e Notificações</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Alertas de Alto Risco</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Recomendações Automáticas</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Relatórios Semanais</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Anomalias em Tempo Real</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button>Salvar Configuração</Button>
            <Button variant="outline">Teste de Modelo</Button>
            <Button variant="outline">Exportar Config</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAnalytics;
