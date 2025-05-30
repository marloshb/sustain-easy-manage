
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  Play, 
  Pause, 
  RotateCcw,
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const AuditSimulations = () => {
  const [activeView, setActiveView] = useState('scenarios');

  const simulationScenarios = [
    {
      id: "SIM-001",
      name: "Implementação Nova Regulamentação CSRD",
      description: "Simula impacto da implementação completa dos requisitos CSRD em todas as instalações",
      type: "Conformidade Regulatória",
      status: "Concluído",
      duration: "45 dias",
      progress: 100,
      findings: {
        conformityGap: "23%",
        estimatedCost: "R$ 2.8M",
        timeToCompliance: "18 meses",
        criticalIssues: 7,
        riskLevel: "Médio"
      },
      recommendations: [
        "Priorizar instalações com maior gap de conformidade",
        "Implementar programa de treinamento intensivo",
        "Estabelecer sistema de monitoramento contínuo",
        "Alocar recursos adicionais para áreas críticas"
      ]
    },
    {
      id: "SIM-002",
      name: "Cenário de Incidente Ambiental Crítico",
      description: "Modela resposta e impacto de vazamento de resíduos químicos na Planta São Paulo",
      type: "Gestão de Riscos",
      status: "Em Execução",
      duration: "30 dias",
      progress: 67,
      findings: {
        responseTime: "4.2 horas",
        affectedArea: "2.5 km²",
        estimatedDamage: "R$ 850k",
        complianceRisk: "Alto",
        reputationImpact: "Significativo"
      },
      recommendations: [
        "Revisar procedimentos de resposta de emergência",
        "Instalar sistemas de detecção precoce",
        "Melhorar treinamento de equipes",
        "Implementar redundâncias em sistemas críticos"
      ]
    },
    {
      id: "SIM-003",
      name: "Otimização de Cronograma de Auditorias",
      description: "Analisa diferentes cenários de agendamento para maximizar eficiência e cobertura",
      type: "Planejamento Operacional",
      status: "Planejado",
      duration: "14 dias",
      progress: 0,
      findings: {
        currentEfficiency: "72%",
        optimizedEfficiency: "89%",
        costReduction: "15%",
        coverageImprovement: "23%",
        resourceUtilization: "95%"
      },
      recommendations: [
        "Implementar agendamento baseado em risco",
        "Utilizar rotas otimizadas por GIS",
        "Balancear carga de trabalho entre auditores",
        "Implementar auditorias preditivas com IA"
      ]
    }
  ];

  const riskModels = [
    {
      id: "RISK-001",
      name: "Modelo de Risco de Não Conformidade",
      description: "Prediz probabilidade de não conformidades baseado em dados históricos",
      accuracy: "87%",
      lastUpdate: "2024-02-20",
      variables: ["Histórico de auditorias", "Tipo de instalação", "Idade dos equipamentos", "Frequência de treinamentos"],
      predictions: [
        { facility: "Planta São Paulo", risk: "Baixo", probability: "12%" },
        { facility: "Fábrica Campinas", risk: "Alto", probability: "73%" },
        { facility: "Centro Distribuição", risk: "Médio", probability: "35%" }
      ]
    },
    {
      id: "RISK-002",
      name: "Modelo de Impacto Ambiental",
      description: "Avalia potencial impacto ambiental de diferentes cenários operacionais",
      accuracy: "82%",
      lastUpdate: "2024-02-18",
      variables: ["Emissões históricas", "Localização geográfica", "Proximidade a áreas sensíveis", "Volume de produção"],
      predictions: [
        { scenario: "Aumento produção 20%", impact: "Médio", score: "6.2/10" },
        { scenario: "Nova linha produção", impact: "Alto", score: "7.8/10" },
        { scenario: "Implementação filtros", impact: "Baixo", score: "2.1/10" }
      ]
    }
  ];

  const complianceProjections = [
    {
      id: "PROJ-001",
      regulation: "CSRD - Corporate Sustainability Reporting Directive",
      currentCompliance: "77%",
      projectedCompliance: "95%",
      timeframe: "24 meses",
      investmentRequired: "R$ 3.2M",
      keyMilestones: [
        { phase: "Fase 1 - Análise de Gap", completion: "3 meses", cost: "R$ 400k" },
        { phase: "Fase 2 - Implementação Sistemas", completion: "12 meses", cost: "R$ 1.8M" },
        { phase: "Fase 3 - Treinamento e Certificação", completion: "6 meses", cost: "R$ 600k" },
        { phase: "Fase 4 - Auditoria e Validação", completion: "3 meses", cost: "R$ 400k" }
      ]
    },
    {
      id: "PROJ-002",
      regulation: "ISO 14001:2015 - Sistema de Gestão Ambiental",
      currentCompliance: "89%",
      projectedCompliance: "98%",
      timeframe: "12 meses",
      investmentRequired: "R$ 1.5M",
      keyMilestones: [
        { phase: "Revisão de Processos", completion: "3 meses", cost: "R$ 300k" },
        { phase: "Adequação de Documentação", completion: "4 meses", cost: "R$ 400k" },
        { phase: "Treinamento de Equipes", completion: "3 meses", cost: "R$ 500k" },
        { phase: "Auditoria de Certificação", completion: "2 meses", cost: "R$ 300k" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'bg-green-100 text-green-800';
      case 'Em Execução': return 'bg-yellow-100 text-yellow-800';
      case 'Planejado': return 'bg-blue-100 text-blue-800';
      case 'Pausado': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Baixo': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Alto': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Baixo': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Alto': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Simulações para Planejamento de Auditorias
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={activeView === 'scenarios' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('scenarios')}
              >
                Cenários
              </Button>
              <Button 
                variant={activeView === 'risk' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('risk')}
              >
                Modelos de Risco
              </Button>
              <Button 
                variant={activeView === 'projections' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('projections')}
              >
                Projeções
              </Button>
              <Button size="sm">
                <Play className="h-4 w-4 mr-2" />
                Nova Simulação
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {activeView === 'scenarios' && (
            <div className="space-y-4">
              {simulationScenarios.map((scenario) => (
                <Card key={scenario.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{scenario.name}</h3>
                          <p className="text-sm text-gray-600">{scenario.description}</p>
                          <p className="text-xs text-gray-500">Duração: {scenario.duration}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">{scenario.type}</Badge>
                          <Badge className={getStatusColor(scenario.status)}>
                            {scenario.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso da Simulação</span>
                          <span>{scenario.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{width: `${scenario.progress}%`}}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {Object.entries(scenario.findings).map(([key, value], index) => (
                          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm font-bold text-gray-900">{value}</div>
                            <p className="text-xs text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Principais Recomendações</p>
                        <div className="space-y-1">
                          {scenario.recommendations.map((recommendation, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                              <span className="text-gray-700">{recommendation}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">ID: {scenario.id}</span>
                        </div>
                        <div className="flex gap-2">
                          {scenario.status === 'Em Execução' && (
                            <Button size="sm" variant="outline">
                              <Pause className="h-3 w-3 mr-1" />
                              Pausar
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <RotateCcw className="h-3 w-3 mr-1" />
                            Reexecutar
                          </Button>
                          <Button size="sm">
                            Ver Relatório Completo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'risk' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Modelos Preditivos de Risco</h3>
              {riskModels.map((model) => (
                <Card key={model.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{model.name}</h3>
                          <p className="text-sm text-gray-600">{model.description}</p>
                          <p className="text-xs text-gray-500">Última atualização: {model.lastUpdate}</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{model.accuracy}</div>
                          <p className="text-xs text-gray-600">Precisão</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Variáveis do Modelo</p>
                        <div className="flex flex-wrap gap-1">
                          {model.variables.map((variable, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {variable}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-3">Predições Atuais</p>
                        <div className="space-y-2">
                          {model.predictions.map((prediction, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex-1">
                                <span className="text-sm font-medium">
                                  {prediction.facility || prediction.scenario}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className={getRiskColor(prediction.risk) || getImpactColor(prediction.impact)}>
                                  {prediction.risk || prediction.impact}
                                </Badge>
                                <span className="text-sm font-medium">
                                  {prediction.probability || prediction.score}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">Modelo ativo e atualizado</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Calibrar Modelo
                          </Button>
                          <Button size="sm" variant="outline">
                            Ver Histórico
                          </Button>
                          <Button size="sm">
                            Executar Análise
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'projections' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Projeções de Conformidade</h3>
              {complianceProjections.map((projection) => (
                <Card key={projection.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{projection.regulation}</h3>
                          <p className="text-sm text-gray-600">Prazo: {projection.timeframe}</p>
                          <p className="text-sm text-gray-600">Investimento: {projection.investmentRequired}</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            <div>
                              <div className="text-sm text-gray-600">
                                {projection.currentCompliance} → {projection.projectedCompliance}
                              </div>
                              <p className="text-xs text-gray-500">Conformidade</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{projection.currentCompliance}</div>
                          <p className="text-sm text-gray-600">Conformidade Atual</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{projection.projectedCompliance}</div>
                          <p className="text-sm text-gray-600">Conformidade Projetada</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-3">Marcos do Projeto</p>
                        <div className="space-y-2">
                          {projection.keyMilestones.map((milestone, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex-1">
                                <span className="text-sm font-medium">{milestone.phase}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-600">{milestone.completion}</span>
                                <span className="text-sm font-medium">{milestone.cost}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-600">Projeção baseada em dados históricos</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Ajustar Parâmetros
                          </Button>
                          <Button size="sm" variant="outline">
                            Ver Cronograma
                          </Button>
                          <Button size="sm">
                            Executar Projeto
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

      {/* Resumo de Simulações */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold">3</div>
            <p className="text-xs text-gray-600">Simulações Ativas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-bold">87%</div>
            <p className="text-xs text-gray-600">Precisão Média</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-bold">12</div>
            <p className="text-xs text-gray-600">Cenários Testados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-lg font-bold">5</div>
            <p className="text-xs text-gray-600">Riscos Identificados</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuditSimulations;
