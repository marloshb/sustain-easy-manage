
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Brain, 
  MessageSquare, 
  TrendingUp, 
  AlertTriangle,
  Search,
  BarChart3,
  Lightbulb,
  Target,
  Zap,
  Download,
  Settings
} from 'lucide-react';

const AIAgent = () => {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'user',
      message: 'Quais são os principais riscos ESG identificados pela IA?',
      timestamp: '14:30'
    },
    {
      type: 'ai',
      message: 'Baseado na análise integrada de todos os módulos, identifiquei os seguintes riscos ESG prioritários:\n\n**Ambiental (E):**\n• Risco Alto: Emissões Escopo 3 acima da meta (-12% vs -30%)\n• Localização: 65% das emissões concentradas na região Sudeste\n• Predição IA: 73% probabilidade de não conformidade CSRD Q3\n\n**Social (S):**\n• Cluster de incidentes detectado na Unidade A (87% confiança)\n• Gap de diversidade: 42% atual vs 50% meta 2025\n• Impacto em 8 comunidades próximas às operações\n\n**Governança (G):**\n• Conformidade CSRD: 87% atual, necessário 100% até março\n• 23 documentos com gaps identificados pelo NLP\n• Relatórios de fornecedores: 31% com dados incompletos\n\n**Recomendações Prioritárias:**\n1. Implementar plano acelerado para Escopo 3\n2. Inspeção detalhada na Unidade A\n3. Completar documentação CSRD\n\nPrecisa de análise detalhada de algum risco específico?',
      timestamp: '14:31'
    }
  ]);

  const agentCapabilities = [
    {
      category: 'Análise Preditiva',
      description: 'Previsões e tendências baseadas em ML',
      accuracy: 94,
      examples: [
        'Prever riscos de não conformidade',
        'Antecipar demanda de recursos',
        'Identificar tendências de emissões'
      ]
    },
    {
      category: 'Detecção de Anomalias',
      description: 'Identificação automática de inconsistências',
      accuracy: 97,
      examples: [
        'Picos anômalos em consumo',
        'Padrões incomuns de incidentes',
        'Desvios em relatórios'
      ]
    },
    {
      category: 'Análise Documental',
      description: 'NLP para processamento de textos',
      accuracy: 91,
      examples: [
        'Verificar conformidade ESRS',
        'Extrair KPIs de relatórios',
        'Classificar riscos em documentos'
      ]
    },
    {
      category: 'Otimização de Recursos',
      description: 'ML para eficiência operacional',
      accuracy: 89,
      examples: [
        'Reduzir consumo energético',
        'Otimizar uso de água',
        'Maximizar reciclagem'
      ]
    },
    {
      category: 'Análise Espacial',
      description: 'GIS integrado com IA',
      accuracy: 96,
      examples: [
        'Mapear hotspots de risco',
        'Análise de proximidade',
        'Otimização espacial'
      ]
    },
    {
      category: 'Benchmarking',
      description: 'Comparação com dados externos',
      accuracy: 93,
      examples: [
        'Comparar com setor',
        'Análise regional',
        'Melhores práticas'
      ]
    }
  ];

  const quickQuestions = [
    'Quais áreas têm maior risco de não conformidade?',
    'Como está nosso progresso nas metas ESG?',
    'Quais oportunidades de otimização a IA identificou?',
    'Mostre as principais anomalias detectadas hoje',
    'Compare nosso desempenho com o setor',
    'Quais documentos precisam de revisão?',
    'Preveja nosso consumo energético para o próximo mês',
    'Identifique hotspots de emissões no mapa'
  ];

  const recentInsights = [
    {
      type: 'Predição',
      title: 'Risco de Não Conformidade CSRD',
      confidence: 94,
      description: 'Probabilidade de 73% de não atingir conformidade total até março',
      action: 'Acelerar documentação de Escopo 3',
      priority: 'Alta'
    },
    {
      type: 'Anomalia',
      title: 'Cluster de Incidentes Detectado',
      confidence: 87,
      description: 'Padrão anômalo de acidentes na Unidade A nos últimos 30 dias',
      action: 'Inspeção de segurança imediata',
      priority: 'Crítica'
    },
    {
      type: 'Otimização',
      title: 'Oportunidade Energética',
      confidence: 91,
      description: 'Potencial economia de 25% reduzindo operações no pico',
      action: 'Implementar gestão inteligente',
      priority: 'Média'
    },
    {
      type: 'Spatial',
      title: 'Hotspot de Emissões',
      confidence: 96,
      description: 'Concentração de 65% das emissões em 2.5 km² na região Norte',
      action: 'Priorizar intervenções na área',
      priority: 'Alta'
    }
  ];

  const agentMetrics = [
    {
      metric: 'Consultas Processadas',
      value: '2,847',
      change: '+18%',
      period: 'Este mês'
    },
    {
      metric: 'Precisão Média',
      value: '93.7%',
      change: '+2.1%',
      period: 'Todos módulos'
    },
    {
      metric: 'Insights Gerados',
      value: '1,247',
      change: '+23%',
      period: 'Últimos 30 dias'
    },
    {
      metric: 'Tempo de Resposta',
      value: '1.2s',
      change: '-0.3s',
      period: 'Média atual'
    }
  ];

  const handleSendMessage = () => {
    if (!query.trim()) return;

    const newUserMessage = {
      type: 'user' as const,
      message: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, newUserMessage]);
    setQuery('');

    // Simulate AI response based on query content
    setTimeout(() => {
      let response = '';
      
      if (query.toLowerCase().includes('risco')) {
        response = `Analisando riscos identificados:\n\n🔴 **Riscos Críticos:**\n• Não conformidade CSRD (73% probabilidade)\n• Cluster de incidentes Unidade A (87% confiança)\n\n🟡 **Riscos Médios:**\n• Emissões Escopo 3 acima da meta\n• Gaps em documentação fornecedores\n\n**Ações Recomendadas:**\n1. Priorizar documentação CSRD\n2. Inspeção imediata Unidade A\n3. Engajar fornecedores para dados Escopo 3`;
      } else if (query.toLowerCase().includes('meta')) {
        response = `Status das metas ESG:\n\n📊 **Environmental:**\n• Escopo 1&2: 18% redução (Meta: 30% até 2025)\n• Energia renovável: 65% (Meta: 80%)\n• Consumo água: 12% redução (Meta: 25%)\n\n👥 **Social:**\n• Diversidade: 42% (Meta: 50%)\n• Dias sem acidentes: 127 dias\n• Treinamentos: 94% compliance\n\n🏛️ **Governance:**\n• Conformidade CSRD: 87% (Meta: 100%)\n• Transparência: 91% score\n\n**Recomendação:** Acelerar programas de água e diversidade.`;
      } else if (query.toLowerCase().includes('otimização')) {
        response = `Oportunidades de otimização identificadas:\n\n⚡ **Energia:**\n• Reduzir 25% consumo em pico (Economia: $2,800/mês)\n• HVAC inteligente (Payback: 4 meses)\n\n💧 **Água:**\n• Sistema reuso (Economia: $1,950/mês)\n• Detecção vazamentos (ROI: 200%)\n\n♻️ **Materiais:**\n• Valorização resíduos ($1,200/mês)\n• Circularidade 90% (Meta: 85%)\n\n**Total economia estimada:** $11,650/mês`;
      } else {
        response = `Analisando sua consulta: "${query}"\n\nCom base nos dados integrados de todos os módulos:\n\n• Análise preditiva processada ✓\n• Anomalias verificadas ✓\n• Dados espaciais consultados ✓\n• Benchmarks atualizados ✓\n\nResultados específicos foram compilados. Precisa de detalhamento em alguma área específica?`;
      }

      const aiResponse = {
        type: 'ai' as const,
        message: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setQuery(question);
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

  return (
    <div className="space-y-6">
      {/* Agent Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {agentMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">{metric.metric}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500">{metric.period}</p>
                  <span className={`text-xs font-medium ${
                    metric.change.startsWith('+') ? 'text-green-600' : 
                    metric.change.startsWith('-') && metric.metric.includes('Tempo') ? 'text-green-600' : 
                    'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Chat Interface */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Agente de IA Integrado
              </CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Chat
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto border rounded-lg p-4 mb-4 bg-gray-50">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white border shadow-sm'
                    }`}>
                      <div className="whitespace-pre-line text-sm">{message.message}</div>
                      <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-purple-100' : 'text-gray-500'}`}>
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Perguntas sugeridas:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs text-left h-auto py-2 px-3 justify-start"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Faça uma pergunta ao agente de IA..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} disabled={!query.trim()}>
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Insights */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Insights Prioritários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentInsights.map((insight, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{insight.type}</Badge>
                      <Badge className={getPriorityColor(insight.priority)}>
                        {insight.priority}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{insight.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{insight.description}</p>
                    <div className="text-xs text-blue-600 font-medium mb-2">
                      Ação: {insight.action}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Confiança: {insight.confidence}%
                      </span>
                      <Button size="sm" variant="outline">
                        Detalhar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Capacidades do Agente de IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agentCapabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">{capability.category}</h3>
                    <span className="text-sm font-medium text-green-600">
                      {capability.accuracy}%
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{capability.description}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precisão:</span>
                      <span className="font-medium">{capability.accuracy}%</span>
                    </div>
                    <Progress value={capability.accuracy} className="h-2" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-2">Exemplos:</p>
                    <ul className="space-y-1">
                      {capability.examples.slice(0, 2).map((example, exIndex) => (
                        <li key={exIndex} className="text-xs text-gray-600 flex items-start gap-1">
                          <Lightbulb className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Agent Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            Ferramentas do Agente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Search className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Busca Inteligente</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Encontre informações em todos os módulos
                </p>
                <Button size="sm" className="w-full">
                  Abrir Busca
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Análise Automática</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Relatórios automatizados com IA
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Gerar Análise
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Recomendações</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Sugestões personalizadas baseadas em dados
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Ver Sugestões
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAgent;
