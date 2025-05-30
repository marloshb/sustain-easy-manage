
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Map, 
  Target,
  Layers,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Play,
  Pause,
  Download,
  Eye
} from 'lucide-react';

const SpatialAnalysis = () => {
  const [activeAnalysis, setActiveAnalysis] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any[]>([]);

  const analysisTools = [
    {
      id: 'buffer',
      name: 'Análise de Buffer',
      description: 'Avalia impactos em raio específico de pontos',
      type: 'spatial',
      duration: '2-5 min',
      complexity: 'Baixa',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      id: 'overlay',
      name: 'Análise de Sobreposição',
      description: 'Combina camadas para identificar interseções',
      type: 'spatial',
      duration: '3-8 min',
      complexity: 'Média',
      icon: Layers,
      color: 'text-green-600'
    },
    {
      id: 'cluster',
      name: 'Análise de Cluster',
      description: 'Identifica agrupamentos espaciais significativos',
      type: 'statistical',
      duration: '5-10 min',
      complexity: 'Alta',
      icon: Activity,
      color: 'text-purple-600'
    },
    {
      id: 'hotspot',
      name: 'Detecção de Hotspots',
      description: 'Identifica áreas de alta concentração',
      type: 'statistical',
      duration: '4-7 min',
      complexity: 'Média',
      icon: TrendingUp,
      color: 'text-orange-600'
    },
    {
      id: 'trend',
      name: 'Análise de Tendências',
      description: 'Identifica mudanças espaciais ao longo do tempo',
      type: 'temporal',
      duration: '8-15 min',
      complexity: 'Alta',
      icon: TrendingUp,
      color: 'text-red-600'
    },
    {
      id: 'proximity',
      name: 'Análise de Proximidade',
      description: 'Avalia distâncias e relações espaciais',
      type: 'spatial',
      duration: '3-6 min',
      complexity: 'Baixa',
      icon: Target,
      color: 'text-teal-600'
    }
  ];

  const runningAnalyses = [
    {
      id: 'buffer_001',
      name: 'Buffer - Emissões Fábrica A',
      tool: 'buffer',
      progress: 75,
      status: 'running',
      eta: '2 min',
      startTime: '14:32'
    },
    {
      id: 'cluster_002',
      name: 'Cluster - Incidentes Q1 2024',
      tool: 'cluster',
      progress: 100,
      status: 'completed',
      eta: 'Concluído',
      startTime: '14:25',
      results: {
        clustersFound: 3,
        significance: 'Alto',
        hotspots: ['Produção A', 'Almoxarifado', 'Área Externa']
      }
    },
    {
      id: 'overlay_003',
      name: 'Sobreposição - Emissões x Áreas Protegidas',
      tool: 'overlay',
      progress: 45,
      status: 'running',
      eta: '4 min',
      startTime: '14:35'
    }
  ];

  const analysisResults_data = [
    {
      id: 'result_001',
      analysisType: 'Buffer Analysis',
      target: 'Instalação Principal',
      findings: [
        'Raio de 2km afeta 3 comunidades (aprox. 12.500 pessoas)',
        'Sobreposição com 2 corpos hídricos principais',
        'Proximidade com área de conservação (1.8km)'
      ],
      risk: 'Médio',
      recommendations: [
        'Implementar monitoramento adicional nas comunidades',
        'Estabelecer programa de engajamento comunitário',
        'Avaliar impactos na área de conservação'
      ],
      date: '2024-01-20'
    },
    {
      id: 'result_002',
      analysisType: 'Cluster Analysis',
      target: 'Incidentes de Segurança',
      findings: [
        '3 clusters significativos identificados',
        'Cluster principal na área de produção (68% dos incidentes)',
        'Correlação temporal: maioria entre 14h-16h'
      ],
      risk: 'Alto',
      recommendations: [
        'Inspeção detalhada da área de produção',
        'Reforço de segurança no turno da tarde',
        'Treinamento adicional para operadores'
      ],
      date: '2024-01-19'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'queued': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Alta': return 'text-red-600';
      case 'Média': return 'text-yellow-600';
      case 'Baixa': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const startAnalysis = (toolId: string) => {
    setActiveAnalysis(toolId);
    // Simulate analysis start
    console.log(`Iniciando análise: ${toolId}`);
  };

  return (
    <div className="space-y-6">
      {/* Analysis Tools Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-blue-600" />
            Ferramentas de Análise Espacial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {analysisTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <tool.icon className={`h-6 w-6 ${tool.color}`} />
                    <Badge variant="outline" className={getComplexityColor(tool.complexity)}>
                      {tool.complexity}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Duração:</span>
                      <span>{tool.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Tipo:</span>
                      <span className="capitalize">{tool.type}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full mt-3"
                    onClick={() => startAnalysis(tool.id)}
                    disabled={activeAnalysis === tool.id}
                  >
                    {activeAnalysis === tool.id ? (
                      <>
                        <Pause className="h-3 w-3 mr-1" />
                        Executando...
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3 mr-1" />
                        Executar Análise
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Running Analyses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-600" />
              Análises em Execução
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {runningAnalyses.map((analysis) => (
                <div key={analysis.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{analysis.name}</h3>
                    <Badge className={getStatusColor(analysis.status)}>
                      {analysis.status === 'running' ? 'Executando' : 
                       analysis.status === 'completed' ? 'Concluído' : analysis.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{analysis.progress}%</span>
                    </div>
                    <Progress value={analysis.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Iniciado: {analysis.startTime}</span>
                      <span>ETA: {analysis.eta}</span>
                    </div>
                  </div>

                  {analysis.results && (
                    <div className="mt-3 p-2 bg-green-50 rounded">
                      <div className="text-sm">
                        <p><strong>Clusters encontrados:</strong> {analysis.results.clustersFound}</p>
                        <p><strong>Significância:</strong> {analysis.results.significance}</p>
                        <p><strong>Hotspots:</strong> {analysis.results.hotspots.join(', ')}</p>
                      </div>
                      <Button size="sm" variant="outline" className="mt-2">
                        <Eye className="h-3 w-3 mr-1" />
                        Ver Detalhes
                      </Button>
                    </div>
                  )}

                  <div className="flex gap-2 mt-3">
                    {analysis.status === 'running' && (
                      <Button size="sm" variant="outline">
                        <Pause className="h-3 w-3 mr-1" />
                        Pausar
                      </Button>
                    )}
                    {analysis.status === 'completed' && (
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Baixar Resultados
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              Resultados de Análises
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysisResults_data.map((result) => (
                <div key={result.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{result.analysisType}</h3>
                    <Badge className={getRiskColor(result.risk)}>
                      Risco {result.risk}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Alvo da Análise:</p>
                      <p className="text-sm">{result.target}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">Principais Descobertas:</p>
                      <ul className="text-sm space-y-1">
                        {result.findings.map((finding, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">Recomendações:</p>
                      <ul className="text-sm space-y-1">
                        {result.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertTriangle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-xs text-gray-500">Data: {result.date}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-1" />
                          Ver no Mapa
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Exportar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <p className="text-sm text-gray-600">Análises Concluídas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">3</div>
            <p className="text-sm text-gray-600">Em Execução</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">8</div>
            <p className="text-sm text-gray-600">Hotspots Identificados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">95%</div>
            <p className="text-sm text-gray-600">Precisão Média</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpatialAnalysis;
