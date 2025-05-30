
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Eye,
  Zap,
  Target,
  Activity,
  MessageSquare,
  BarChart3,
  CheckCircle
} from 'lucide-react';

const AIInsights = () => {
  const [activeTab, setActiveTab] = useState('alerts');

  const aiAlerts = [
    {
      id: "AI-001",
      type: "Anomalia Detectada",
      severity: "Alta",
      description: "Emissões CO2 35% acima da média nas últimas 4 horas",
      confidence: 94,
      timestamp: "2024-01-16 14:30",
      source: "Sensor IOT-001",
      recommendation: "Verificar equipamento de combustão - possível mau funcionamento"
    },
    {
      id: "AI-002", 
      type: "Previsão de Risco",
      severity: "Média",
      description: "85% probabilidade de não conformidade CSRD até março",
      confidence: 87,
      timestamp: "2024-01-16 12:15",
      source: "Modelo Preditivo",
      recommendation: "Acelerar coleta de dados ESG e treinamento da equipe"
    },
    {
      id: "AI-003",
      type: "Oportunidade de Otimização",
      severity: "Baixa",
      description: "Redução de 12% no consumo energético identificada",
      confidence: 91,
      timestamp: "2024-01-16 10:45", 
      source: "Análise de Padrões",
      recommendation: "Implementar ajustes no sistema de climatização"
    },
    {
      id: "AI-004",
      type: "Análise de Documentos",
      severity: "Média",
      description: "3 inconsistências encontradas em relatórios ESG",
      confidence: 78,
      timestamp: "2024-01-16 09:20",
      source: "NLP Engine",
      recommendation: "Revisar seções de dados sociais e governança"
    }
  ];

  const predictiveModels = [
    {
      name: "Previsão de Emissões",
      type: "Regressão Temporal",
      accuracy: 94,
      status: "Ativo",
      lastTrained: "2024-01-10",
      predictions: "7 dias à frente"
    },
    {
      name: "Risco de Compliance",
      type: "Classificação",
      accuracy: 87,
      status: "Ativo", 
      lastTrained: "2024-01-08",
      predictions: "Mensal"
    },
    {
      name: "Otimização Energética",
      type: "Otimização",
      accuracy: 91,
      status: "Treinando",
      lastTrained: "2024-01-15",
      predictions: "Diário"
    },
    {
      name: "Detecção de Anomalias",
      type: "Detecção",
      accuracy: 96,
      status: "Ativo",
      lastTrained: "2024-01-12",
      predictions: "Tempo Real"
    }
  ];

  const documentAnalysis = [
    {
      document: "Relatório ESG Q4 2023",
      type: "PDF",
      status: "Analisado",
      issues: 2,
      suggestions: 5,
      completeness: 78,
      lastAnalysis: "2024-01-15"
    },
    {
      document: "Política Ambiental v2.1",
      type: "DOCX", 
      status: "Em Análise",
      issues: 0,
      suggestions: 3,
      completeness: 92,
      lastAnalysis: "2024-01-16"
    },
    {
      document: "Manual de Segurança",
      type: "PDF",
      status: "Pendente",
      issues: 0,
      suggestions: 0,
      completeness: 0,
      lastAnalysis: "N/A"
    }
  ];

  const insights = [
    {
      title: "Tendência de Melhoria",
      description: "Emissões de CO2 reduziram 8.4% nos últimos 3 meses",
      impact: "Positivo",
      confidence: 92,
      category: "Ambiental"
    },
    {
      title: "Padrão de Consumo",
      description: "Pico de energia detectado sempre às 14h - oportunidade de otimização",
      impact: "Neutro",
      confidence: 85,
      category: "Eficiência"
    },
    {
      title: "Risco Emergente",
      description: "Aumento gradual de incidents de segurança - investigação necessária",
      impact: "Negativo", 
      confidence: 76,
      category: "Segurança"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': case 'Analisado': return 'bg-green-100 text-green-800';
      case 'Treinando': case 'Em Análise': return 'bg-yellow-100 text-yellow-800';
      case 'Pendente': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Positivo': return 'text-green-600';
      case 'Negativo': return 'text-red-600';
      case 'Neutro': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="alerts" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Alertas IA
          </TabsTrigger>
          <TabsTrigger value="predictions" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Previsões
          </TabsTrigger>
          <TabsTrigger value="anomalies" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Anomalias
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Análise de Docs
          </TabsTrigger>
          <TabsTrigger value="insights" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-red-200">
              <CardContent className="p-6">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-600">8</div>
                <p className="text-sm text-gray-600">Alertas Críticos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="p-6">
                <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">94%</div>
                <p className="text-sm text-gray-600">Precisão IA</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">247</div>
                <p className="text-sm text-gray-600">Previsões/Hora</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">23</div>
                <p className="text-sm text-gray-600">Problemas Prevenidos</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Alertas Inteligentes em Tempo Real</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Configurar Alertas</Button>
                <Button size="sm" variant="outline">Histórico</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiAlerts.map((alert, index) => (
                  <div key={index} className="p-4 border-l-4 border-l-purple-400 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium">{alert.type}</h3>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                        <Badge variant="outline">
                          Confiança: {alert.confidence}%
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">{alert.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{alert.description}</p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Fonte:</strong> {alert.source}
                    </p>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-l-blue-400">
                      <p className="text-sm font-medium text-blue-800">Recomendação da IA:</p>
                      <p className="text-sm text-blue-700">{alert.recommendation}</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">
                        Investigar
                      </Button>
                      <Button size="sm" variant="outline">
                        Marcar como Resolvido
                      </Button>
                      <Button size="sm" variant="outline">
                        Feedback IA
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Modelos Preditivos Ativos</CardTitle>
              <Button size="sm">Treinar Novo Modelo</Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {predictiveModels.map((model, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{model.name}</CardTitle>
                        <Badge className={getStatusColor(model.status)}>
                          {model.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Precisão</span>
                            <span>{model.accuracy}%</span>
                          </div>
                          <Progress value={model.accuracy} className="h-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Tipo</p>
                            <p className="font-medium">{model.type}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Previsões</p>
                            <p className="font-medium">{model.predictions}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Último Treinamento</p>
                          <p className="font-medium">{model.lastTrained}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            Ver Previsões
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            Retreinar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anomalies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detecção de Anomalias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Monitoramento de Anomalias</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    IA detecta padrões anômalos em dados ambientais e de sustentabilidade
                  </p>
                  <div className="flex justify-center gap-2">
                    <Badge className="bg-green-100 text-green-800">Normal: 94%</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">Anomalias: 6%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Últimas Anomalias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-2 bg-red-50 rounded text-sm">
                    <p className="font-medium">Pico de CO2</p>
                    <p className="text-xs text-gray-600">14:30 - Sensor A1</p>
                  </div>
                  <div className="p-2 bg-yellow-50 rounded text-sm">
                    <p className="font-medium">Consumo Atípico</p>
                    <p className="text-xs text-gray-600">12:15 - Energia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Configurações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-gray-600">Sensibilidade</label>
                    <select className="w-full text-sm p-1 border rounded">
                      <option>Alta</option>
                      <option>Média</option>
                      <option>Baixa</option>
                    </select>
                  </div>
                  <Button size="sm" className="w-full">
                    Aplicar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Detecções hoje:</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Falsos positivos:</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precisão:</span>
                    <span className="font-medium">91%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise Inteligente de Documentos (NLP)</CardTitle>
              <div className="flex gap-2">
                <Button size="sm">Upload Documento</Button>
                <Button size="sm" variant="outline">Configurar NLP</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documentAnalysis.map((doc, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{doc.document}</h3>
                        <p className="text-sm text-gray-600">{doc.type} • {doc.lastAnalysis}</p>
                      </div>
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Completude</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={doc.completeness} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{doc.completeness}%</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Problemas</p>
                        <p className="text-xl font-bold text-red-600">{doc.issues}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Sugestões</p>
                        <p className="text-xl font-bold text-blue-600">{doc.suggestions}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button size="sm" variant="outline" className="flex-1">
                          Ver Análise
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Insights Gerados pela IA</CardTitle>
              <Button size="sm">Gerar Novo Insight</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="p-4 border-l-4 border-l-blue-400 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{insight.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{insight.category}</Badge>
                        <span className={`text-sm font-medium ${getImpactColor(insight.impact)}`}>
                          {insight.impact}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{insight.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Confiança:</span>
                        <Progress value={insight.confidence} className="w-20 h-2" />
                        <span className="text-sm font-medium">{insight.confidence}%</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Explorar
                        </Button>
                        <Button size="sm" variant="outline">
                          Criar Ação
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Insights por Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Ambiental</span>
                    <Badge>12</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Eficiência</span>
                    <Badge>8</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Segurança</span>
                    <Badge>5</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Compliance</span>
                    <Badge>3</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ações Recomendadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded border">
                    <p className="text-sm font-medium">Otimizar horários de energia</p>
                    <p className="text-xs text-gray-600">Economia estimada: R$ 12.000/mês</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border">
                    <p className="text-sm font-medium">Acelerar coleta ESG</p>
                    <p className="text-xs text-gray-600">Prazo crítico: 15 dias</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIInsights;
