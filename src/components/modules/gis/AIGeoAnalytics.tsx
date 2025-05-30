
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Search,
  TrendingUp,
  AlertTriangle,
  Eye,
  MessageSquare,
  Zap,
  Target,
  Activity,
  CheckCircle,
  Download,
  RefreshCw
} from 'lucide-react';

const AIGeoAnalytics = () => {
  const [activeQuery, setActiveQuery] = useState('');
  const [queryHistory, setQueryHistory] = useState<any[]>([]);
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  const quickQueries = [
    "Quais áreas têm maior concentração de emissões?",
    "Identifique hotspots de incidentes de segurança",
    "Mostre tendências de qualidade do ar nos últimos 6 meses",
    "Áreas próximas a comunidades vulneráveis",
    "Correlação entre uso de água e clima",
    "Previsão de riscos climáticos para próximo trimestre"
  ];

  const aiInsights = [
    {
      id: 'insight_001',
      type: 'pattern',
      title: 'Padrão Temporal de Emissões',
      description: 'IA detectou aumento de 15% nas emissões durante horários de pico (14h-16h)',
      confidence: 94,
      severity: 'medium',
      area: 'Produção Principal',
      recommendations: [
        'Otimizar horários de operação',
        'Implementar sistema de recuperação de energia',
        'Considerar turnos alternativos'
      ],
      evidence: ['Dados IoT de 30 dias', 'Correlação com cronograma de produção'],
      status: 'new'
    },
    {
      id: 'insight_002',
      type: 'anomaly',
      title: 'Anomalia na Qualidade da Água',
      description: 'Valores de pH fora do padrão detectados em área específica do Rio Tietê',
      confidence: 87,
      severity: 'high',
      area: 'Jusante da Instalação',
      recommendations: [
        'Inspeção imediata do sistema de tratamento',
        'Monitoramento adicional 24/7',
        'Investigação de possível vazamento'
      ],
      evidence: ['Sensores de campo', 'Imagens de satélite', 'Dados históricos'],
      status: 'investigating'
    },
    {
      id: 'insight_003',
      type: 'prediction',
      title: 'Previsão de Risco Climático',
      description: 'Modelo prevê 78% de probabilidade de precipitação intensa no próximo mês',
      confidence: 82,
      severity: 'high',
      area: 'Região Metropolitana',
      recommendations: [
        'Preparar sistemas de drenagem',
        'Revisar planos de emergência',
        'Monitorar previsões meteorológicas'
      ],
      evidence: ['Dados NOAA', 'Modelos climáticos', 'Série histórica'],
      status: 'action_required'
    },
    {
      id: 'insight_004',
      type: 'optimization',
      title: 'Oportunidade de Otimização',
      description: 'IA identificou potencial de redução de 12% no consumo de energia',
      confidence: 91,
      severity: 'low',
      area: 'Sistema de Climatização',
      recommendations: [
        'Ajustar horários de climatização',
        'Implementar sensores de ocupação',
        'Atualizar sistema de controle'
      ],
      evidence: ['Padrões de uso', 'Dados de temperatura', 'Ocupação dos espaços'],
      status: 'planned'
    }
  ];

  const modelPerformance = [
    {
      name: 'Detecção de Anomalias',
      accuracy: 94,
      lastTrained: '2024-01-15',
      dataPoints: 10500,
      status: 'active'
    },
    {
      name: 'Previsão Climática',
      accuracy: 87,
      lastTrained: '2024-01-10',
      dataPoints: 8750,
      status: 'active'
    },
    {
      name: 'Análise de Padrões',
      accuracy: 92,
      lastTrained: '2024-01-18',
      dataPoints: 15200,
      status: 'active'
    },
    {
      name: 'Otimização de Recursos',
      accuracy: 89,
      lastTrained: '2024-01-12',
      dataPoints: 6890,
      status: 'training'
    }
  ];

  const queryExamples = [
    {
      question: "Onde estão os maiores hotspots de emissões?",
      answer: "Análise identificou 3 hotspots principais: Fábrica A (45% das emissões), Área de Armazenamento (23%) e Transportes (18%). Mapa GIS mostra concentração na região nordeste da instalação.",
      mapData: "Heatmap com concentrações de CO2",
      confidence: 96
    },
    {
      question: "Qual o impacto das chuvas na qualidade da água?",
      answer: "Correlação forte (r=0.82) entre precipitação e turbidez da água. Após chuvas >20mm, qualidade da água diminui por 2-3 dias. Áreas de runoff identificadas como principais fontes.",
      mapData: "Overlay de precipitação e qualidade da água",
      confidence: 89
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'investigating': return 'bg-orange-100 text-orange-800';
      case 'action_required': return 'bg-red-100 text-red-800';
      case 'planned': return 'bg-purple-100 text-purple-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pattern': return <TrendingUp className="h-4 w-4 text-blue-600" />;
      case 'anomaly': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'prediction': return <Eye className="h-4 w-4 text-purple-600" />;
      case 'optimization': return <Zap className="h-4 w-4 text-green-600" />;
      default: return <Brain className="h-4 w-4 text-gray-600" />;
    }
  };

  const executeQuery = (query: string) => {
    setActiveQuery(query);
    // Simulate AI processing
    console.log(`Executando consulta IA: ${query}`);
  };

  return (
    <div className="space-y-6">
      {/* AI Query Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Agente de IA para Análises Geoespaciais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Query Input */}
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Faça uma pergunta sobre os dados geográficos..."
                  value={activeQuery}
                  onChange={(e) => setActiveQuery(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button onClick={() => executeQuery(activeQuery)}>
                <Search className="h-4 w-4 mr-2" />
                Analisar
              </Button>
            </div>

            {/* Quick Queries */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Consultas sugeridas:</p>
              <div className="flex flex-wrap gap-2">
                {quickQueries.slice(0, 3).map((query, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    onClick={() => executeQuery(query)}
                    className="text-xs"
                  >
                    {query}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="insights" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="insights">Insights de IA</TabsTrigger>
          <TabsTrigger value="queries">Consultas NLP</TabsTrigger>
          <TabsTrigger value="models">Modelos</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Insights Gerados pela IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.map((insight) => (
                    <div 
                      key={insight.id} 
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedInsight?.id === insight.id ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedInsight(insight)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(insight.type)}
                          <h3 className="font-medium">{insight.title}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getSeverityColor(insight.severity)}>
                            {insight.severity === 'high' ? 'Alto' : 
                             insight.severity === 'medium' ? 'Médio' : 'Baixo'}
                          </Badge>
                          <Badge className={getStatusColor(insight.status)}>
                            {insight.status === 'new' ? 'Novo' :
                             insight.status === 'investigating' ? 'Investigando' :
                             insight.status === 'action_required' ? 'Ação Necessária' :
                             insight.status === 'planned' ? 'Planejado' : insight.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Área: {insight.area}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-gray-500">Confiança:</span>
                          <span className="text-xs font-medium text-green-600">{insight.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insight Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  Detalhes do Insight
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedInsight ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">{selectedInsight.title}</h3>
                      <p className="text-sm text-gray-600">{selectedInsight.description}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Recomendações:</p>
                      <ul className="space-y-1">
                        {selectedInsight.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Evidências:</p>
                      <ul className="space-y-1">
                        {selectedInsight.evidence.map((evidence: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{evidence}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Eye className="h-3 w-3 mr-1" />
                          Ver no Mapa
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          Exportar
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Selecione um insight para ver detalhes
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="queries" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Consultas em Linguagem Natural
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {queryExamples.map((example, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-blue-800">{example.question}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Brain className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">{example.answer}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500">
                              Dados visualizados: {example.mapData}
                            </span>
                            <span className="text-xs font-medium text-green-600">
                              Confiança: {example.confidence}%
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-1" />
                          Ver Mapa
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Exportar Análise
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-600" />
                Modelos de IA Ativos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelPerformance.map((model, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{model.name}</h3>
                      <Badge className={model.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                        {model.status === 'active' ? 'Ativo' : 'Treinando'}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-600">Precisão</p>
                        <p className="font-medium text-green-600">{model.accuracy}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Último Treino</p>
                        <p className="font-medium">{model.lastTrained}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Dados</p>
                        <p className="font-medium">{model.dataPoints.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Performance</span>
                        <span>{model.accuracy}%</span>
                      </div>
                      <Progress value={model.accuracy} className="h-2" />
                    </div>
                    
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">
                        <RefreshCw className="h-3 w-3 mr-1" />
                        Retreinar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        Métricas
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">156</div>
                <p className="text-sm text-gray-600">Insights Gerados</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">92%</div>
                <p className="text-sm text-gray-600">Precisão Média</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">47</div>
                <p className="text-sm text-gray-600">Anomalias Detectadas</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">1.2M</div>
                <p className="text-sm text-gray-600">Pontos Analisados</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIGeoAnalytics;
