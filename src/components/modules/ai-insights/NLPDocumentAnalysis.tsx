
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Upload, 
  Search,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  BarChart3,
  Download,
  Eye,
  Zap
} from 'lucide-react';

const NLPDocumentAnalysis = () => {
  const [query, setQuery] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const documentTypes = [
    {
      type: 'ESG Reports',
      count: 45,
      processed: 42,
      compliance: 89,
      icon: FileText,
      color: 'text-green-600'
    },
    {
      type: 'Compliance Documents',
      count: 28,
      processed: 28,
      compliance: 94,
      icon: CheckCircle,
      color: 'text-blue-600'
    },
    {
      type: 'Audit Reports',
      count: 15,
      processed: 13,
      compliance: 76,
      icon: AlertTriangle,
      color: 'text-orange-600'
    },
    {
      type: 'Supplier Reports',
      count: 67,
      processed: 59,
      compliance: 82,
      icon: FileText,
      color: 'text-purple-600'
    }
  ];

  const recentAnalysis = [
    {
      id: 'DOC-001',
      title: 'Relatório de Sustentabilidade 2024',
      type: 'ESG Report',
      status: 'Processado',
      compliance: 'ESRS',
      score: 89,
      findings: [
        'Dados de Escopo 3 incompletos',
        'Meta de biodiversidade não definida',
        'Relatório de diversidade conforme'
      ],
      recommendations: [
        'Incluir dados detalhados de fornecedores',
        'Definir KPIs específicos para biodiversidade',
        'Expandir seção de engajamento comunitário'
      ],
      processedAt: '2024-01-20 14:30'
    },
    {
      id: 'DOC-002',
      title: 'Auditoria ISO 14001 - Unidade Norte',
      type: 'Audit Report',
      status: 'Processado',
      compliance: 'ISO 14001',
      score: 76,
      findings: [
        'Não conformidade na gestão de resíduos',
        'Procedimentos de emergência desatualizados',
        'Treinamento ambiental em dia'
      ],
      recommendations: [
        'Atualizar plano de gestão de resíduos',
        'Revisar e treinar procedimentos de emergência',
        'Manter cronograma de treinamentos'
      ],
      processedAt: '2024-01-20 12:15'
    },
    {
      id: 'DOC-003',
      title: 'Relatório Fornecedor Alpha Corp',
      type: 'Supplier Report',
      status: 'Processando',
      compliance: 'GRI',
      score: 82,
      findings: [
        'Emissões Escopo 1 e 2 reportadas',
        'Falta informação sobre Escopo 3',
        'Programas sociais bem documentados'
      ],
      recommendations: [
        'Solicitar dados de Escopo 3',
        'Verificar metodologia de cálculo',
        'Incluir métricas de economia circular'
      ],
      processedAt: '2024-01-20 10:45'
    }
  ];

  const nlpCapabilities = [
    {
      capability: 'Extração de Entidades',
      description: 'Identifica dados quantitativos, datas, localizações',
      accuracy: 94,
      examples: ['Emissões: 2,654 tCO2e', 'Meta: 30% redução até 2030']
    },
    {
      capability: 'Classificação de Conformidade',
      description: 'Verifica alinhamento com frameworks regulatórios',
      accuracy: 89,
      examples: ['ESRS-E1 compliant', 'GRI 305 missing data']
    },
    {
      capability: 'Análise de Sentimentos',
      description: 'Avalia percepção de stakeholders em relatórios',
      accuracy: 87,
      examples: ['Positive: community engagement', 'Negative: environmental impact']
    },
    {
      capability: 'Detecção de Gaps',
      description: 'Identifica informações faltantes ou inconsistentes',
      accuracy: 92,
      examples: ['Missing: Scope 3 data', 'Inconsistent: water usage metrics']
    }
  ];

  const queryExamples = [
    'Quais documentos não atendem ao ESRS?',
    'Listar todas as não conformidades de 2024',
    'Encontrar gaps em relatórios de fornecedores',
    'Quais são os principais riscos ESG identificados?',
    'Mostrar evolução das metas de emissões'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processado': return 'bg-green-100 text-green-800';
      case 'Processando': return 'bg-blue-100 text-blue-800';
      case 'Pendente': return 'bg-yellow-100 text-yellow-800';
      case 'Erro': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplianceColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  return (
    <div className="space-y-6">
      {/* Document Processing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {documentTypes.map((type, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <type.icon className={`h-6 w-6 ${type.color}`} />
                <Badge variant="outline">
                  {type.processed}/{type.count}
                </Badge>
              </div>
              <h3 className="font-semibold mb-1">{type.type}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Conformidade:</span>
                  <span className={`font-medium ${getComplianceColor(type.compliance)}`}>
                    {type.compliance}%
                  </span>
                </div>
                <Progress value={type.compliance} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* NLP Query Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Consulta Inteligente de Documentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Faça uma pergunta sobre os documentos..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Perguntas sugeridas:</p>
                <div className="space-y-2">
                  {queryExamples.map((example, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs"
                      onClick={() => setQuery(example)}
                    >
                      {example}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Capacidades de NLP</h4>
                <div className="space-y-3">
                  {nlpCapabilities.map((capability, index) => (
                    <div key={index} className="p-3 border rounded">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium text-sm">{capability.capability}</h5>
                        <span className="text-sm font-medium text-green-600">
                          {capability.accuracy}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{capability.description}</p>
                      <div className="space-y-1">
                        {capability.examples.map((example, exIndex) => (
                          <p key={exIndex} className="text-xs bg-gray-50 p-1 rounded">
                            {example}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Análises Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalysis.map((doc) => (
                <div 
                  key={doc.id} 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedDocument === doc.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedDocument(doc.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm">{doc.title}</h3>
                    <Badge className={getStatusColor(doc.status)}>
                      {doc.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <span className="text-gray-500">Tipo: </span>
                      <span className="font-medium">{doc.type}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Framework: </span>
                      <span className="font-medium">{doc.compliance}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Score: </span>
                      <span className={`font-medium ${getComplianceColor(doc.score)}`}>
                        {doc.score}%
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-medium text-red-700">Descobertas:</p>
                      <ul className="text-xs space-y-1">
                        {doc.findings.slice(0, 2).map((finding, index) => (
                          <li key={index} className="flex items-start gap-1">
                            <AlertTriangle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-blue-700">Recomendações:</p>
                      <ul className="text-xs space-y-1">
                        {doc.recommendations.slice(0, 2).map((rec, index) => (
                          <li key={index} className="flex items-start gap-1">
                            <CheckCircle className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-2 border-t">
                    <span className="text-xs text-gray-500">{doc.processedAt}</span>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Document Upload and Processing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-purple-600" />
            Processamento de Documentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Upload className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Upload de Documentos</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Processar novos relatórios e documentos
                </p>
                <Button size="sm" className="w-full">
                  Selecionar Arquivos
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Processamento Batch</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Analisar múltiplos documentos simultaneamente
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Iniciar Batch
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Relatórios de Análise</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Gerar relatórios consolidados de conformidade
                </p>
                <Button size="sm" className="w-full" variant="outline">
                  Gerar Relatório
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NLPDocumentAnalysis;
