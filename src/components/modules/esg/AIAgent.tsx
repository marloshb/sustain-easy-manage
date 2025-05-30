
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
  Leaf
} from 'lucide-react';

const AIAgent = () => {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'user',
      message: 'Quais são nossas metas ESG para 2025 e qual o progresso atual?',
      timestamp: '14:30'
    },
    {
      type: 'ai',
      message: 'Com base na análise dos dados, suas principais metas ESG para 2025 são:\n\n**Ambiental:**\n• Reduzir emissões de Escopo 1 e 2 em 30% (Progresso: 18%)\n• Atingir 80% de energia renovável (Progresso: 65%)\n• Reduzir consumo de água em 25% (Progresso: 12%)\n\n**Social:**\n• Alcançar 50% de diversidade de gênero (Progresso: 42%)\n• Zero acidentes fatais (Progresso: 127 dias sem acidentes)\n\n**Governança:**\n• 100% conformidade CSRD (Progresso: 87%)\n\nRecomendo focar na aceleração da meta de consumo de água e diversidade.',
      timestamp: '14:31'
    }
  ]);

  const aiInsights = [
    {
      type: 'Tendência',
      title: 'Melhoria no Score ESG',
      description: 'Detectei uma melhoria de 15% no score ESG geral nos últimos 6 meses',
      confidence: 94,
      icon: TrendingUp,
      color: 'text-green-600',
      action: 'Analisar fatores contributivos',
      category: 'Performance'
    },
    {
      type: 'Anomalia',
      title: 'Aumento de Emissões',
      description: 'Aumento anômalo de 12% nas emissões de Escopo 3 na divisão de transporte',
      confidence: 87,
      icon: AlertTriangle,
      color: 'text-orange-600',
      action: 'Verificar fornecedores de logística',
      category: 'Environmental'
    },
    {
      type: 'Oportunidade',
      title: 'Meta de Energia Renovável',
      description: 'Identificada oportunidade de acelerar meta de 80% para 2024 com nova tecnologia',
      confidence: 78,
      icon: Zap,
      color: 'text-blue-600',
      action: 'Avaliar investimento em solar',
      category: 'Environmental'
    },
    {
      type: 'Recomendação',
      title: 'Programa de Diversidade',
      description: 'IA sugere expansão do programa de diversidade para alcançar meta de 50%',
      confidence: 91,
      icon: Lightbulb,
      color: 'text-purple-600',
      action: 'Implementar programa acelerado',
      category: 'Social'
    },
    {
      type: 'Predição',
      title: 'Conformidade CSRD',
      description: 'Probabilidade de 95% de atingir conformidade total CSRD até março 2024',
      confidence: 88,
      icon: Target,
      color: 'text-green-600',
      action: 'Continuar cronograma atual',
      category: 'Governance'
    },
    {
      type: 'Alerta',
      title: 'Risco de Não Conformidade',
      description: 'Risco de 23% de não atingir meta de biodiversidade devido a expansão planejada',
      confidence: 82,
      icon: AlertTriangle,
      color: 'text-red-600',
      action: 'Revisar planos de expansão',
      category: 'Environmental'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Precisão da IA',
      value: '96.8%',
      trend: '+3.2%',
      description: 'Acurácia das predições ESG'
    },
    {
      metric: 'Tempo de Resposta',
      value: '0.8s',
      trend: '-0.3s',
      description: 'Tempo médio de análise'
    },
    {
      metric: 'Cobertura de Dados',
      value: '99.2%',
      trend: '+2.1%',
      description: 'Porcentagem de dados ESG processados'
    },
    {
      metric: 'Insights Gerados',
      value: '234',
      trend: '+47',
      description: 'Insights únicos este mês'
    }
  ];

  const quickQuestions = [
    'Como está nosso progresso nas metas de emissões?',
    'Quais são os principais riscos ESG identificados?',
    'Análise do desempenho social da empresa',
    'Sugira melhorias para governança corporativa',
    'Compare nosso ESG com benchmarks do setor',
    'Preveja impactos da nova regulamentação CSRD'
  ];

  const predictiveAnalysis = [
    {
      metric: 'Score ESG 2025',
      prediction: '92-95',
      confidence: '87%',
      factors: ['Energia renovável', 'Programas sociais', 'Transparência'],
      trend: 'Crescente'
    },
    {
      metric: 'Emissões Líquidas',
      prediction: 'Net Zero 2029',
      confidence: '78%',
      factors: ['Tecnologias limpas', 'Compensação', 'Eficiência'],
      trend: 'Decrescente'
    },
    {
      metric: 'Conformidade Regulatória',
      prediction: '98%',
      confidence: '94%',
      factors: ['CSRD', 'Taxonomia EU', 'CSDR'],
      trend: 'Estável'
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: 'ai' as const,
        message: `Analisando sua pergunta: "${query}"\n\nBaseado nos dados ESG disponíveis, posso fornecer as seguintes informações:\n\n• Análise em tempo real dos indicadores de sustentabilidade\n• Correlações identificadas com benchmarks setoriais\n• Recomendações específicas baseadas em melhores práticas\n• Predições para alcançar metas estabelecidas\n\nPrecisa de mais detalhes sobre algum aspecto específico dos critérios ESG?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setQuery(question);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Environmental': return 'bg-green-100 text-green-800';
      case 'Social': return 'bg-blue-100 text-blue-800';
      case 'Governance': return 'bg-purple-100 text-purple-800';
      case 'Performance': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Chat Interface */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Agente de IA para ESG
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto border rounded-lg p-4 mb-4 bg-gray-50">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white border shadow-sm'
                    }`}>
                      <div className="whitespace-pre-line">{message.message}</div>
                      <div className={`text-xs mt-1 ${message.type === 'user' ? 'text-purple-100' : 'text-gray-500'}`}>
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
                      className="text-xs text-left h-auto py-2 px-3"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Faça uma pergunta sobre ESG..."
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

        {/* AI Performance Metrics */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Performance da IA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{metric.metric}</span>
                      <span className="text-lg font-bold">{metric.value}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">{metric.description}</span>
                      <span className={`text-xs font-medium ${
                        metric.trend.startsWith('+') ? 'text-green-600' : 
                        metric.trend.startsWith('-') && metric.metric.includes('Tempo') ? 'text-green-600' : 
                        'text-red-600'
                      }`}>
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Análise Preditiva</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictiveAnalysis.map((analysis, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{analysis.metric}</span>
                      <Badge className="bg-blue-100 text-blue-800">
                        {analysis.confidence}
                      </Badge>
                    </div>
                    <div className="text-lg font-bold text-purple-600 mb-1">
                      {analysis.prediction}
                    </div>
                    <div className="text-xs text-gray-600">
                      Fatores: {analysis.factors.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Insights Automáticos de IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <insight.icon className={`h-5 w-5 ${insight.color} flex-shrink-0 mt-1`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <Badge variant="outline">{insight.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <Badge className={getCategoryColor(insight.category)}>
                        {insight.category}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        Confiança: {insight.confidence}%
                      </span>
                    </div>
                    <div className="w-full h-1 bg-gray-200 rounded mb-3">
                      <div 
                        className="h-1 bg-purple-600 rounded"
                        style={{ width: `${insight.confidence}%` }}
                      />
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      {insight.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <Search className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Análise Predictiva ESG</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Use IA para prever performance ESG e identificar riscos
            </p>
            <Button size="sm" className="w-full">
              Executar Análise
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold">Benchmarking Inteligente</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Compare performance com líderes do setor usando IA
            </p>
            <Button size="sm" className="w-full" variant="outline">
              Comparar Performance
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold">Roadmap Sustentável</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Gere roadmap personalizado para metas ESG
            </p>
            <Button size="sm" className="w-full" variant="outline">
              Criar Roadmap
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAgent;
