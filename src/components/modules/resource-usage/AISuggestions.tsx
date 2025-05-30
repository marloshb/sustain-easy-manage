
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle,
  Lightbulb,
  Zap,
  Droplets,
  Package,
  DollarSign,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

interface ResourceData {
  energy: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
  water: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
  materials: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
}

interface AISuggestionsProps {
  resourceData: ResourceData;
}

const AISuggestions: React.FC<AISuggestionsProps> = ({ resourceData }) => {
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [implementedSuggestions, setImplementedSuggestions] = useState<string[]>([]);

  const aiSuggestions = [
    {
      id: 'energy-001',
      category: 'Energia',
      priority: 'high',
      title: 'Otimização de Horários de Pico',
      description: 'IA detectou consumo 35% maior entre 14h-16h na Fábrica A',
      recommendation: 'Reagendar operações não críticas para horários de menor demanda',
      impact: {
        saving: 'R$ 15.600/mês',
        reduction: '22% consumo pico',
        implementation: '2 semanas'
      },
      confidence: 94,
      icon: Zap,
      color: 'text-yellow-600',
      aiInsight: 'Padrão identificado através de análise de 6 meses de dados de consumo',
      technologies: ['Sistema de automação', 'Sensores IoT', 'Algoritmos de otimização'],
      steps: [
        'Instalar sistema de monitoramento em tempo real',
        'Configurar algoritmos de reagendamento automático',
        'Treinar equipe operacional',
        'Monitorar resultados por 30 dias'
      ]
    },
    {
      id: 'water-002',
      category: 'Água',
      priority: 'critical',
      title: 'Sistema de Reciclagem Inteligente',
      description: 'Vazamentos detectados consomem 180L/h desnecessariamente',
      recommendation: 'Implementar sistema de reciclagem com sensores IoT para detecção precoce',
      impact: {
        saving: 'R$ 8.900/mês',
        reduction: '45% desperdício',
        implementation: '6 semanas'
      },
      confidence: 87,
      icon: Droplets,
      color: 'text-blue-600',
      aiInsight: 'Análise de padrões de fluxo indica potencial de recuperação de 65% da água',
      technologies: ['Sensores de vazamento IoT', 'Sistema de reciclagem', 'IA preditiva'],
      steps: [
        'Mapear pontos críticos de vazamento',
        'Instalar sensores IoT de detecção',
        'Implementar sistema de reciclagem',
        'Configurar alertas automáticos'
      ]
    },
    {
      id: 'materials-003',
      category: 'Materiais',
      priority: 'medium',
      title: 'Otimização de Estoque Inteligente',
      description: 'IA prevê redução de 28% no desperdício com ajustes na gestão de estoque',
      recommendation: 'Implementar sistema preditivo para gestão just-in-time',
      impact: {
        saving: 'R$ 12.300/mês',
        reduction: '28% desperdício',
        implementation: '4 semanas'
      },
      confidence: 91,
      icon: Package,
      color: 'text-green-600',
      aiInsight: 'Algoritmo de ML identifica padrões de demanda com 91% de precisão',
      technologies: ['Machine Learning', 'Sistemas ERP integrados', 'Análise preditiva'],
      steps: [
        'Integrar dados históricos de consumo',
        'Treinar modelo de ML para predição',
        'Configurar alertas de reposição',
        'Implementar sistema just-in-time'
      ]
    },
    {
      id: 'energy-004',
      category: 'Energia',
      priority: 'low',
      title: 'Iluminação Adaptativa por IA',
      description: 'Sistema de iluminação pode ser otimizado baseado em ocupação e luz natural',
      recommendation: 'Implementar iluminação LED inteligente com sensores de presença',
      impact: {
        saving: 'R$ 4.200/mês',
        reduction: '18% consumo iluminação',
        implementation: '3 semanas'
      },
      confidence: 89,
      icon: Lightbulb,
      color: 'text-yellow-500',
      aiInsight: 'Análise de padrões de ocupação mostra 40% do tempo com iluminação desnecessária',
      technologies: ['Sensores de presença', 'LEDs inteligentes', 'Sistema de automação'],
      steps: [
        'Mapear padrões de ocupação',
        'Instalar sensores de presença',
        'Substituir por LEDs inteligentes',
        'Configurar sistema adaptativo'
      ]
    }
  ];

  const trends = [
    {
      type: 'anomaly',
      description: 'Aumento súbito de 18% no consumo de água na Fábrica B',
      timeDetected: '2 horas atrás',
      severity: 'high',
      possibleCause: 'Possível vazamento no sistema de refrigeração',
      action: 'Inspeção urgente recomendada'
    },
    {
      type: 'optimization',
      description: 'Padrão de eficiência 12% superior identificado no turno noturno',
      timeDetected: '1 dia atrás',
      severity: 'medium',
      possibleCause: 'Menor carga na rede elétrica e temperatura ambiente',
      action: 'Considerar redistribuição de operações para período noturno'
    },
    {
      type: 'prediction',
      description: 'Modelo prevê aumento de 8% no consumo energético próxima semana',
      timeDetected: '3 horas atrás',
      severity: 'low',
      possibleCause: 'Previsão de onda de calor baseada em dados meteorológicos NOAA',
      action: 'Preparar medidas de eficiência energética preventivas'
    }
  ];

  const bestPractices = [
    {
      title: 'Benchmark Setorial',
      comparison: 'Energia: 15% abaixo da média do setor',
      recommendation: 'Implementar sistema de cogeração para maior eficiência'
    },
    {
      title: 'Padrões Internacionais',
      comparison: 'Água: Conforme ISO 14001, mas 8% acima de empresas similares',
      recommendation: 'Adotar tecnologias de reciclagem de água em circuito fechado'
    },
    {
      title: 'Tendências do Mercado',
      comparison: 'Materiais: Alinhado com práticas de economia circular',
      recommendation: 'Expandir programa de upcycling para resíduos'
    }
  ];

  const priorities = [
    { value: 'all', label: 'Todas' },
    { value: 'critical', label: 'Crítica' },
    { value: 'high', label: 'Alta' },
    { value: 'medium', label: 'Média' },
    { value: 'low', label: 'Baixa' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const filteredSuggestions = selectedPriority === 'all' 
    ? aiSuggestions 
    : aiSuggestions.filter(s => s.priority === selectedPriority);

  const implementSuggestion = (suggestionId: string) => {
    setImplementedSuggestions(prev => [...prev, suggestionId]);
  };

  return (
    <div className="space-y-6">
      {/* AI Insights Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center border-purple-200">
          <CardContent className="p-4">
            <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">
              {aiSuggestions.length}
            </div>
            <p className="text-sm text-gray-600">Sugestões IA</p>
          </CardContent>
        </Card>
        <Card className="text-center border-green-200">
          <CardContent className="p-4">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">
              R$ 41k
            </div>
            <p className="text-sm text-gray-600">Economia Potencial/mês</p>
          </CardContent>
        </Card>
        <Card className="text-center border-blue-200">
          <CardContent className="p-4">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">
              28%
            </div>
            <p className="text-sm text-gray-600">Redução Média Esperada</p>
          </CardContent>
        </Card>
        <Card className="text-center border-orange-200">
          <CardContent className="p-4">
            <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">
              3.8
            </div>
            <p className="text-sm text-gray-600">Semanas Impl. Média</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Sugestões de IA para Otimização
            </span>
            <div className="flex gap-2">
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-3 py-1 border rounded text-sm"
              >
                {priorities.map(priority => (
                  <option key={priority.value} value={priority.value}>
                    {priority.label}
                  </option>
                ))}
              </select>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredSuggestions.map((suggestion) => {
              const SuggestionIcon = suggestion.icon;
              const isImplemented = implementedSuggestions.includes(suggestion.id);
              
              return (
                <div key={suggestion.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <SuggestionIcon className={`h-6 w-6 ${suggestion.color}`} />
                      <div>
                        <h3 className="font-semibold text-lg">{suggestion.title}</h3>
                        <p className="text-sm text-gray-600">{suggestion.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(suggestion.priority)}>
                        {suggestion.priority === 'critical' ? 'Crítica' : 
                         suggestion.priority === 'high' ? 'Alta' :
                         suggestion.priority === 'medium' ? 'Média' : 'Baixa'}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{suggestion.confidence}%</span>
                      </div>
                      {isImplemented && (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Implementado
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{suggestion.description}</p>
                  
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-purple-800 mb-2">💡 Recomendação da IA</h4>
                    <p className="text-purple-700 text-sm">{suggestion.recommendation}</p>
                    <p className="text-purple-600 text-xs mt-2 italic">{suggestion.aiInsight}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                      <p className="font-bold text-green-700">{suggestion.impact.saving}</p>
                      <p className="text-xs text-gray-600">Economia Mensal</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                      <p className="font-bold text-blue-700">{suggestion.impact.reduction}</p>
                      <p className="text-xs text-gray-600">Redução Esperada</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                      <p className="font-bold text-orange-700">{suggestion.impact.implementation}</p>
                      <p className="text-xs text-gray-600">Tempo Implementação</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Tecnologias Necessárias</h4>
                      <div className="flex flex-wrap gap-1">
                        {suggestion.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Próximos Passos</h4>
                      <ol className="text-xs text-gray-600 space-y-1">
                        {suggestion.steps.slice(0, 2).map((step, index) => (
                          <li key={index}>
                            {index + 1}. {step}
                          </li>
                        ))}
                        {suggestion.steps.length > 2 && (
                          <li className="text-gray-500">+{suggestion.steps.length - 2} mais passos...</li>
                        )}
                      </ol>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={() => implementSuggestion(suggestion.id)}
                      disabled={isImplemented}
                      className="flex-1"
                    >
                      {isImplemented ? 'Implementado' : 'Implementar Sugestão'}
                    </Button>
                    <Button variant="outline">
                      Ver Detalhes
                    </Button>
                    <Button variant="outline">
                      Simular Impacto
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Trend Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Análise de Ten dências e Anomalias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trends.map((trend, index) => (
              <div key={index} className={`p-4 border-l-4 rounded-lg ${getSeverityColor(trend.severity)}`}>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">
                    {trend.type === 'anomaly' ? 'Anomalia' : 
                     trend.type === 'optimization' ? 'Otimização' : 'Previsão'}
                  </Badge>
                  <span className="text-sm text-gray-600">Detectado: {trend.timeDetected}</span>
                </div>
                <p className="text-sm font-medium mb-1">{trend.description}</p>
                <div className="text-xs space-y-1">
                  <div>
                    <span className="font-medium">Possível Causa:</span>
                    <span className="ml-1">{trend.possibleCause}</span>
                  </div>
                  <div>
                    <span className="font-medium">Ação Recomendada:</span>
                    <span className="ml-1">{trend.action}</span>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline">
                    Investigar
                  </Button>
                  <Button size="sm" variant="outline">
                    Ignorar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Melhores Práticas de Mercado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">{practice.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{practice.comparison}</p>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">Recomendação:</span>
                    <span className="ml-1">{practice.recommendation}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AISuggestions;
