
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  MessageSquare, 
  TrendingUp, 
  AlertTriangle,
  Search,
  Lightbulb,
  Eye,
  FileText,
  BarChart3,
  Zap
} from 'lucide-react';

const AIAnalytics = () => {
  const [activeView, setActiveView] = useState('insights');
  const [chatQuery, setChatQuery] = useState('');

  const aiInsights = [
    {
      id: "AI-001",
      title: "Padrão de Não Conformidades Identificado",
      description: "IA detectou correlação entre turnos noturnos e aumento de 34% em não conformidades de segurança",
      type: "Análise Preditiva",
      severity: "Alto",
      confidence: "89%",
      impact: "Segurança",
      recommendation: "Implementar supervisão adicional e treinamento específico para turnos noturnos",
      affectedFacilities: ["Planta São Paulo", "Fábrica Campinas"],
      dateDiscovered: "2024-02-20",
      actionRequired: true
    },
    {
      id: "AI-002",
      title: "Anomalia em Dados Ambientais",
      description: "Algoritmo detectou desvio anômalo nas emissões de NOx da Planta São Paulo nos últimos 7 dias",
      type: "Detecção de Anomalias",
      severity: "Médio",
      confidence: "92%",
      impact: "Ambiental",
      recommendation: "Verificar calibração de equipamentos de monitoramento e sistema de controle de emissões",
      affectedFacilities: ["Planta São Paulo"],
      dateDiscovered: "2024-02-22",
      actionRequired: true
    },
    {
      id: "AI-003",
      title: "Otimização de Cronograma de Auditorias",
      description: "Modelo ML sugere reagendamento de 3 auditorias para maximizar eficiência baseado em dados históricos",
      type: "Otimização",
      severity: "Baixo",
      confidence: "76%",
      impact: "Operacional",
      recommendation: "Aplicar cronograma otimizado pode reduzir custos em 15% e melhorar cobertura em 12%",
      affectedFacilities: ["Todas"],
      dateDiscovered: "2024-02-18",
      actionRequired: false
    },
    {
      id: "AI-004",
      title: "Risco de Não Conformidade Futura",
      description: "Predição indica 78% de probabilidade de não conformidade CSRD na próxima auditoria do Centro de Distribuição",
      type: "Análise Preditiva",
      severity: "Alto",
      confidence: "83%",
      impact: "Conformidade",
      recommendation: "Iniciar programa de preparação imediata focado em documentação ESG e treinamento de equipe",
      affectedFacilities: ["Centro de Distribuição"],
      dateDiscovered: "2024-02-15",
      actionRequired: true
    }
  ];

  const documentAnalysis = [
    {
      id: "DOC-001",
      document: "Política Ambiental v3.2",
      analysis: "Documento atende 94% dos requisitos ISO 14001. Identificadas 3 cláusulas que necessitam revisão",
      compliance: "94%",
      issues: ["Ausência de compromisso específico com biodiversidade", "Falta detalhamento sobre economia circular"],
      recommendations: ["Incluir seção sobre proteção à biodiversidade", "Adicionar metas de circularidade"],
      lastAnalysis: "2024-02-20"
    },
    {
      id: "DOC-002",
      document: "Procedimento de Gestão de Resíduos",
      analysis: "Procedimento conforme com regulamentações locais, mas não alinhado com melhores práticas ESRS",
      compliance: "78%",
      issues: ["Classificação de resíduos incompleta", "Ausência de rastreabilidade digital"],
      recommendations: ["Atualizar classificação conforme ESRS E5", "Implementar sistema de QR codes"],
      lastAnalysis: "2024-02-18"
    },
    {
      id: "DOC-003",
      document: "Relatório de Auditoria OSHA Q1",
      analysis: "Relatório completo e bem estruturado. IA identificou 2 oportunidades de melhoria na metodologia",
      compliance: "96%",
      issues: ["Falta análise quantitativa de riscos", "Ausência de benchmarking setorial"],
      recommendations: ["Incluir matriz de risco quantitativa", "Adicionar comparação com médias do setor"],
      lastAnalysis: "2024-02-15"
    }
  ];

  const chatHistory = [
    {
      id: "CHAT-001",
      query: "Quais instalações têm maior risco de não conformidade nos próximos 6 meses?",
      response: "Baseado na análise preditiva, as instalações com maior risco são: 1) Centro de Distribuição (78% probabilidade), 2) Fábrica Campinas (45% probabilidade), 3) Escritório Central (23% probabilidade). O principal fator de risco é a deficiência em documentação ESG.",
      timestamp: "2024-02-25 14:30",
      confidence: "87%"
    },
    {
      id: "CHAT-002",
      query: "Como melhorar a eficiência das auditorias de segurança?",
      response: "Análise dos dados sugere 3 ações principais: 1) Implementar checklists digitais (redução de 25% no tempo), 2) Usar rotas otimizadas por GIS (economia de 18% em deslocamento), 3) Aplicar análise preditiva para focar em áreas de maior risco (aumento de 30% na detecção de problemas).",
      timestamp: "2024-02-24 10:15",
      confidence: "82%"
    },
    {
      id: "CHAT-003",
      query: "Qual é o impacto das mudanças climáticas nas nossas operações?",
      response: "Análise integrada com dados NOAA indica: aumento de 12% em eventos climáticos extremos na região, potencial impacto de R$ 2.3M em interrupções operacionais, e necessidade de adaptação em 3 instalações. Recomendo implementar plano de resiliência climática.",
      timestamp: "2024-02-23 16:45",
      confidence: "79%"
    }
  ];

  const mlModels = [
    {
      id: "MODEL-001",
      name: "Preditor de Não Conformidades",
      type: "Classificação",
      accuracy: "89%",
      status: "Ativo",
      lastTrained: "2024-02-15",
      features: ["Histórico de auditorias", "Tipo de instalação", "Idade dos equipamentos", "Frequência de treinamentos"],
      predictions: 156
    },
    {
      id: "MODEL-002",
      name: "Detector de Anomalias Ambientais",
      type: "Detecção de Anomalias",
      accuracy: "92%",
      status: "Ativo",
      lastTrained: "2024-02-18",
      features: ["Dados de emissões", "Condições meteorológicas", "Parâmetros operacionais", "Histórico de manutenção"],
      predictions: 89
    },
    {
      id: "MODEL-003",
      name: "Otimizador de Cronogramas",
      type: "Otimização",
      accuracy: "76%",
      status: "Treinamento",
      lastTrained: "2024-02-10",
      features: ["Disponibilidade de auditores", "Localização geográfica", "Complexidade da auditoria", "Recursos necessários"],
      predictions: 23
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Treinamento': return 'bg-yellow-100 text-yellow-800';
      case 'Inativo': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatQuery.trim()) {
      // Simular resposta da IA
      console.log('Query enviada:', chatQuery);
      setChatQuery('');
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Agente de IA para Análises de Auditorias
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={activeView === 'insights' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('insights')}
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                Insights
              </Button>
              <Button 
                variant={activeView === 'documents' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('documents')}
              >
                <FileText className="h-4 w-4 mr-2" />
                Documentos
              </Button>
              <Button 
                variant={activeView === 'chat' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('chat')}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat IA
              </Button>
              <Button 
                variant={activeView === 'models' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('models')}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Modelos
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {activeView === 'insights' && (
            <div className="space-y-4">
              {aiInsights.map((insight) => (
                <Card key={insight.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{insight.title}</h3>
                          <p className="text-sm text-gray-600">{insight.description}</p>
                          <p className="text-xs text-gray-500">
                            Descoberto em: {insight.dateDiscovered} • Confiança: {insight.confidence}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">{insight.type}</Badge>
                          <Badge className={getSeverityColor(insight.severity)}>
                            {insight.severity}
                          </Badge>
                          {insight.actionRequired && (
                            <Badge className="bg-orange-100 text-orange-800">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              Ação Requerida
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm font-medium">Impacto</p>
                          <p className="text-sm text-gray-600">{insight.impact}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Confiança</p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{width: insight.confidence}}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{insight.confidence}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Instalações Afetadas</p>
                          <p className="text-sm text-gray-600">{insight.affectedFacilities.join(', ')}</p>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 mb-1">Recomendação da IA</p>
                        <p className="text-sm text-blue-700">{insight.recommendation}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span className="text-sm text-gray-600">Gerado por IA • ID: {insight.id}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            Ver Detalhes
                          </Button>
                          <Button size="sm" variant="outline">
                            Criar CAPA
                          </Button>
                          {insight.actionRequired && (
                            <Button size="sm">
                              <Zap className="h-3 w-3 mr-1" />
                              Executar Ação
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'documents' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Análise Automática de Documentos</h3>
              {documentAnalysis.map((doc) => (
                <Card key={doc.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{doc.document}</h3>
                          <p className="text-sm text-gray-600">{doc.analysis}</p>
                          <p className="text-xs text-gray-500">Última análise: {doc.lastAnalysis}</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{doc.compliance}</div>
                          <p className="text-xs text-gray-600">Conformidade</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Problemas Identificados</p>
                          <div className="space-y-1">
                            {doc.issues.map((issue, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <AlertTriangle className="h-3 w-3 text-orange-500 flex-shrink-0" />
                                <span className="text-gray-700">{issue}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Recomendações</p>
                          <div className="space-y-1">
                            {doc.recommendations.map((rec, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <Lightbulb className="h-3 w-3 text-blue-500 flex-shrink-0" />
                                <span className="text-gray-700">{rec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Análise por NLP • ID: {doc.id}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Ver Documento Original
                          </Button>
                          <Button size="sm" variant="outline">
                            Reanalizar
                          </Button>
                          <Button size="sm">
                            Aplicar Correções
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'chat' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Chat com Agente de IA</h3>
              
              {/* Interface de Chat */}
              <Card>
                <CardContent className="p-4">
                  <form onSubmit={handleChatSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={chatQuery}
                      onChange={(e) => setChatQuery(e.target.value)}
                      placeholder="Faça uma pergunta sobre auditorias, conformidade ou dados ambientais..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button type="submit" size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Histórico de Conversas */}
              <div className="space-y-3">
                {chatHistory.map((chat) => (
                  <Card key={chat.id}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{chat.query}</p>
                            <p className="text-xs text-gray-500">{chat.timestamp}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Brain className="h-4 w-4 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-700">{chat.response}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                Confiança: {chat.confidence}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeView === 'models' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Modelos de Machine Learning</h3>
              {mlModels.map((model) => (
                <Card key={model.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{model.name}</h3>
                          <p className="text-sm text-gray-600">Tipo: {model.type}</p>
                          <p className="text-xs text-gray-500">Último treinamento: {model.lastTrained}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(model.status)}>
                            {model.status}
                          </Badge>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{model.accuracy}</div>
                            <p className="text-xs text-gray-600">Precisão</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Features do Modelo</p>
                          <div className="flex flex-wrap gap-1">
                            {model.features.map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{model.predictions}</div>
                          <p className="text-sm text-gray-600">Predições Realizadas</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Modelo ID: {model.id}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Ver Métricas
                          </Button>
                          <Button size="sm" variant="outline">
                            Retreinar
                          </Button>
                          <Button size="sm">
                            Executar Predição
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Estatísticas da IA */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-lg font-bold">4</div>
            <p className="text-xs text-gray-600">Insights Ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-bold">87%</div>
            <p className="text-xs text-gray-600">Precisão Média</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold">156</div>
            <p className="text-xs text-gray-600">Documentos Analisados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MessageSquare className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-lg font-bold">89</div>
            <p className="text-xs text-gray-600">Consultas Respondidas</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAnalytics;
