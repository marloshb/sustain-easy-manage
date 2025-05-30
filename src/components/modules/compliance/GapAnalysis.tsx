
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Target,
  TrendingUp,
  FileText,
  Play
} from 'lucide-react';

const GapAnalysis = () => {
  const [selectedStandard, setSelectedStandard] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);

  const standards = [
    { id: 'iso14001', name: 'ISO 14001:2015', category: 'Ambiental' },
    { id: 'gri', name: 'GRI Standards', category: 'Sustentabilidade' },
    { id: 'esrs', name: 'ESRS (CSRD)', category: 'ESG' },
    { id: 'osha', name: 'OSHA Standards', category: 'Segurança' },
    { id: 'iso45001', name: 'ISO 45001:2018', category: 'Segurança' }
  ];

  const sampleResults = {
    standard: 'ISO 14001:2015',
    overallScore: 76,
    sections: [
      {
        name: 'Contexto da Organização',
        score: 85,
        status: 'conforme',
        gaps: ['Não identificados fatores externos específicos do setor'],
        recommendations: ['Realizar análise setorial detalhada']
      },
      {
        name: 'Liderança',
        score: 92,
        status: 'conforme',
        gaps: [],
        recommendations: ['Manter comprometimento atual']
      },
      {
        name: 'Planejamento',
        score: 68,
        status: 'atencao',
        gaps: [
          'Aspectos ambientais não totalmente identificados',
          'Objetivos ambientais não quantificados'
        ],
        recommendations: [
          'Completar inventário de aspectos ambientais',
          'Definir metas SMART para objetivos'
        ]
      },
      {
        name: 'Suporte',
        score: 45,
        status: 'critico',
        gaps: [
          'Recursos insuficientes alocados',
          'Treinamento de conscientização incompleto',
          'Comunicação interna inadequada'
        ],
        recommendations: [
          'Alocar recursos específicos para SGA',
          'Implementar programa de treinamento',
          'Estabelecer canais de comunicação'
        ]
      },
      {
        name: 'Operação',
        score: 78,
        status: 'conforme',
        gaps: ['Alguns controles operacionais não documentados'],
        recommendations: ['Documentar todos os controles operacionais']
      },
      {
        name: 'Avaliação de Desempenho',
        score: 82,
        status: 'conforme',
        gaps: ['Auditorias internas não programadas regularmente'],
        recommendations: ['Estabelecer cronograma de auditorias']
      },
      {
        name: 'Melhoria',
        score: 71,
        status: 'atencao',
        gaps: ['Ações corretivas não sistematizadas'],
        recommendations: ['Implementar sistema de gestão de não conformidades']
      }
    ],
    priorityActions: [
      {
        priority: 'Crítica',
        action: 'Alocar recursos para SGA',
        impact: 'Alto',
        effort: 'Médio',
        deadline: '30 dias'
      },
      {
        priority: 'Alta',
        action: 'Completar inventário de aspectos',
        impact: 'Alto',
        effort: 'Alto',
        deadline: '45 dias'
      },
      {
        priority: 'Média',
        action: 'Documentar controles operacionais',
        impact: 'Médio',
        effort: 'Baixo',
        deadline: '60 dias'
      }
    ]
  };

  const startAnalysis = () => {
    if (selectedStandard) {
      // Simular análise
      setTimeout(() => {
        setAnalysisResults(sampleResults);
      }, 2000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'conforme': return 'bg-green-100 text-green-800';
      case 'atencao': return 'bg-yellow-100 text-yellow-800';
      case 'critico': return 'bg-red-100 text-red-800';
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Ferramenta de Análise de Lacunas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Selecione o Padrão para Análise
              </label>
              <select
                value={selectedStandard}
                onChange={(e) => setSelectedStandard(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Escolha um padrão...</option>
                {standards.map((standard) => (
                  <option key={standard.id} value={standard.id}>
                    {standard.name} - {standard.category}
                  </option>
                ))}
              </select>
            </div>
            
            <Button 
              onClick={startAnalysis}
              disabled={!selectedStandard}
              className="w-full"
            >
              <Play className="h-4 w-4 mr-2" />
              Iniciar Análise de Lacunas
            </Button>
          </div>
        </CardContent>
      </Card>

      {analysisResults && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Resultado da Análise - {analysisResults.standard}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Target className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold">{analysisResults.overallScore}%</div>
                    <p className="text-sm text-gray-600">Score Geral</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <div className="text-2xl font-bold">
                      {analysisResults.sections.filter(s => s.status === 'conforme').length}
                    </div>
                    <p className="text-sm text-gray-600">Seções Conformes</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-red-600" />
                    <div className="text-2xl font-bold">
                      {analysisResults.sections.filter(s => s.status === 'critico').length}
                    </div>
                    <p className="text-sm text-gray-600">Lacunas Críticas</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Análise por Seção</h3>
                {analysisResults.sections.map((section, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{section.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{section.score}%</span>
                          <Badge className={getStatusColor(section.status)}>
                            {section.status === 'conforme' ? 'Conforme' :
                             section.status === 'atencao' ? 'Atenção' : 'Crítico'}
                          </Badge>
                        </div>
                      </div>
                      
                      <Progress value={section.score} className="mb-3 h-2" />
                      
                      {section.gaps.length > 0 && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-red-600 mb-1">Lacunas Identificadas:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {section.gaps.map((gap, gapIndex) => (
                              <li key={gapIndex} className="flex items-start gap-2">
                                <XCircle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                {gap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <p className="text-sm font-medium text-blue-600 mb-1">Recomendações:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {section.recommendations.map((rec, recIndex) => (
                            <li key={recIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              {rec}
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Plano de Ação Prioritário
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysisResults.priorityActions.map((action, index) => (
                  <Card key={index} className="border-l-4 border-l-orange-400">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{action.action}</h4>
                        <Badge className={getPriorityColor(action.priority)}>
                          {action.priority}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Impacto:</span> {action.impact}
                        </div>
                        <div>
                          <span className="font-medium">Esforço:</span> {action.effort}
                        </div>
                        <div>
                          <span className="font-medium">Prazo:</span> {action.deadline}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 flex gap-2">
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Exportar Relatório
                </Button>
                <Button variant="outline">
                  Criar Plano de Ação
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default GapAnalysis;
