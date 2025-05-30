
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
  Target
} from 'lucide-react';

const AIAnalytics = () => {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'user',
      message: 'Quais são as principais causas de acidentes em 2024?',
      timestamp: '14:30'
    },
    {
      type: 'ai',
      message: 'Baseado na análise dos dados, as principais causas de acidentes em 2024 são:\n\n1. **Falhas de equipamento** (35% dos casos)\n2. **Procedimentos não seguidos** (28% dos casos)\n3. **Condições ambientais** (22% dos casos)\n4. **Erro humano** (15% dos casos)\n\nRecomendo focar em manutenção preventiva e treinamentos de segurança.',
      timestamp: '14:31'
    }
  ]);

  const aiInsights = [
    {
      type: 'Tendência',
      title: 'Redução de Incidentes',
      description: 'Detectei uma redução de 23% nos incidentes nos últimos 3 meses',
      confidence: 94,
      icon: TrendingUp,
      color: 'text-green-600',
      action: 'Investigar fatores contributivos'
    },
    {
      type: 'Anomalia',
      title: 'Pico de Observações',
      description: 'Aumento anômalo de 45% nas observações de segurança na Linha 2',
      confidence: 87,
      icon: AlertTriangle,
      color: 'text-orange-600',
      action: 'Verificar condições operacionais'
    },
    {
      type: 'Predição',
      title: 'Risco de Acidente',
      description: 'Probabilidade de 31% de acidente na próxima semana sem intervenção',
      confidence: 78,
      icon: Target,
      color: 'text-red-600',
      action: 'Implementar medidas preventivas'
    },
    {
      type: 'Recomendação',
      title: 'Otimização de Treinamento',
      description: 'IA sugere treinamento específico para operadores da Linha 1',
      confidence: 91,
      icon: Lightbulb,
      color: 'text-blue-600',
      action: 'Agendar sessão de treinamento'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Precisão da IA',
      value: '94.2%',
      trend: '+2.1%',
      description: 'Acurácia das predições de incidentes'
    },
    {
      metric: 'Tempo de Resposta',
      value: '1.3s',
      trend: '-0.2s',
      description: 'Tempo médio de análise'
    },
    {
      metric: 'Cobertura de Dados',
      value: '98.7%',
      trend: '+1.5%',
      description: 'Porcentagem de dados processados'
    },
    {
      metric: 'Insights Gerados',
      value: '147',
      trend: '+23',
      description: 'Insights únicos este mês'
    }
  ];

  const quickQuestions = [
    'Quais áreas têm maior risco de acidentes?',
    'Como está o progresso das metas de segurança?',
    'Quais treinamentos são mais urgentes?',
    'Analise as tendências de incidentes',
    'Sugira melhorias para o programa EHS'
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
        message: `Analisando sua pergunta: "${query}"\n\nBaseado nos dados disponíveis, posso fornecer as seguintes informações:\n\n• Análise em tempo real dos indicadores EHS\n• Correlações identificadas com dados históricos\n• Recomendações específicas para sua situação\n\nPrecisa de mais detalhes sobre algum aspecto específico?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setQuery(question);
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
                Assistente de IA para EHS
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto border rounded-lg p-4 mb-4 bg-gray-50">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white border shadow-sm'
                    }`}>
                      <div className="whitespace-pre-line">{message.message}</div>
                      <div className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Perguntas rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Faça uma pergunta sobre EHS..."
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <span className="text-xs text-gray-500">
                        Confiança: {insight.confidence}%
                      </span>
                      <div className="w-16 h-1 bg-gray-200 rounded">
                        <div 
                          className="h-1 bg-blue-600 rounded"
                          style={{ width: `${insight.confidence}%` }}
                        />
                      </div>
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
              <h3 className="font-semibold">Análise Preditiva</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Use IA para prever incidentes e identificar tendências
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
              <h3 className="font-semibold">Otimização</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Identifique oportunidades de melhoria com IA
            </p>
            <Button size="sm" className="w-full" variant="outline">
              Buscar Melhorias
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold">Detecção de Anomalias</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Monitore padrões anômalos em tempo real
            </p>
            <Button size="sm" className="w-full" variant="outline">
              Verificar Anomalias
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAnalytics;
