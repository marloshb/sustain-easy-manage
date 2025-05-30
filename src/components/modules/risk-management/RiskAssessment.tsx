
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp, 
  Users,
  Calendar,
  MapPin,
  Brain,
  FileText,
  CheckCircle,
  Clock
} from 'lucide-react';

interface RiskItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  probability: string;
  impact: string;
  riskLevel: string;
  status: string;
  owner: string;
  lastReview: string;
  location: string;
  geotagged: boolean;
  aiScore: number;
  regulatoryImpact: string;
}

interface RiskAssessmentProps {
  riskMatrix: RiskItem[];
}

const RiskAssessment: React.FC<RiskAssessmentProps> = ({ riskMatrix }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showAIRecommendations, setShowAIRecommendations] = useState(false);

  const categories = ['Todos', 'Ambiental', 'Climático', 'Compliance', 'Recursos', 'Segurança', 'Social'];

  const filteredRisks = selectedCategory === 'Todos' 
    ? riskMatrix 
    : riskMatrix.filter(risk => risk.category === selectedCategory);

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Crítico': return 'bg-red-500 text-white';
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Baixo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': case 'Crítico': return 'bg-red-100 text-red-800';
      case 'Mitigado': return 'bg-green-100 text-green-800';
      case 'Em Tratamento': case 'Em Análise': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const aiRecommendations = [
    {
      riskId: "R-001",
      recommendation: "Instalar sensores IoT para detecção precoce de vazamentos",
      priority: "Alta",
      estimatedReduction: "65%"
    },
    {
      riskId: "R-002", 
      recommendation: "Integrar dados NOAA para alertas climáticos automatizados",
      priority: "Crítica",
      estimatedReduction: "80%"
    },
    {
      riskId: "R-004",
      recommendation: "Implementar sistema de reciclagem de água baseado em IA",
      priority: "Média",
      estimatedReduction: "45%"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Assessment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center border-red-200">
          <CardContent className="p-4">
            <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-600">
              {riskMatrix.filter(r => r.riskLevel === 'Crítico' || r.riskLevel === 'Alto').length}
            </div>
            <p className="text-sm text-gray-600">Riscos Críticos/Altos</p>
          </CardContent>
        </Card>
        <Card className="text-center border-yellow-200">
          <CardContent className="p-4">
            <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">
              {riskMatrix.filter(r => r.riskLevel === 'Médio').length}
            </div>
            <p className="text-sm text-gray-600">Riscos Médios</p>
          </CardContent>
        </Card>
        <Card className="text-center border-green-200">
          <CardContent className="p-4">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">
              {riskMatrix.filter(r => r.status === 'Mitigado').length}
            </div>
            <p className="text-sm text-gray-600">Riscos Mitigados</p>
          </CardContent>
        </Card>
        <Card className="text-center border-blue-200">
          <CardContent className="p-4">
            <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">
              {riskMatrix.filter(r => r.aiScore > 8.0).length}
            </div>
            <p className="text-sm text-gray-600">Alertas IA</p>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Matriz de Avaliação de Riscos</span>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setShowAIRecommendations(!showAIRecommendations)}>
                <Brain className="h-4 w-4 mr-1" />
                {showAIRecommendations ? 'Ocultar' : 'Mostrar'} IA
              </Button>
              <Button size="sm">
                <AlertTriangle className="h-4 w-4 mr-1" />
                Novo Risco
              </Button>
              <Button size="sm" variant="outline">
                <FileText className="h-4 w-4 mr-1" />
                Exportar
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <Button
                key={category}
                size="sm"
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Risk Matrix Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">ID</th>
                  <th className="text-left py-3 px-2">Risco</th>
                  <th className="text-left py-3 px-2">Categoria</th>
                  <th className="text-left py-3 px-2">Probabilidade</th>
                  <th className="text-left py-3 px-2">Impacto</th>
                  <th className="text-left py-3 px-2">Nível</th>
                  <th className="text-left py-3 px-2">Status</th>
                  <th className="text-left py-3 px-2">Score IA</th>
                  <th className="text-left py-3 px-2">Localização</th>
                  <th className="text-left py-3 px-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredRisks.map((risk) => (
                  <tr key={risk.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2 font-medium">{risk.id}</td>
                    <td className="py-3 px-2">
                      <div>
                        <p className="font-medium">{risk.name}</p>
                        <p className="text-xs text-gray-500">{risk.subcategory}</p>
                      </div>
                    </td>
                    <td className="py-3 px-2">{risk.category}</td>
                    <td className="py-3 px-2">{risk.probability}</td>
                    <td className="py-3 px-2">{risk.impact}</td>
                    <td className="py-3 px-2">
                      <Badge className={getRiskLevelColor(risk.riskLevel)}>
                        {risk.riskLevel}
                      </Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge className={getStatusColor(risk.status)}>
                        {risk.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <span className={`font-bold ${risk.aiScore > 8 ? 'text-red-600' : risk.aiScore > 6 ? 'text-yellow-600' : 'text-green-600'}`}>
                          {risk.aiScore}
                        </span>
                        {risk.aiScore > 8 && <Brain className="h-3 w-3 text-red-600" />}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <span className="text-xs">{risk.location}</span>
                        {risk.geotagged && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          Ver
                        </Button>
                        <Button size="sm" variant="outline">
                          Editar
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations Panel */}
      {showAIRecommendations && (
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Recomendações de IA para Mitigação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiRecommendations.map((rec, index) => (
                <div key={index} className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Risco {rec.riskId}</Badge>
                      <Badge className={
                        rec.priority === 'Crítica' ? 'bg-red-100 text-red-800' :
                        rec.priority === 'Alta' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {rec.priority}
                      </Badge>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      -{rec.estimatedReduction} risco
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{rec.recommendation}</p>
                  <div className="flex gap-2">
                    <Button size="sm">
                      Implementar
                    </Button>
                    <Button size="sm" variant="outline">
                      Mais Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Risk Assessment Matrix Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Matriz de Probabilidade x Impacto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div></div>
            <div className="text-center font-medium">Baixo</div>
            <div className="text-center font-medium">Médio</div>
            <div className="text-center font-medium">Alto</div>
            
            <div className="font-medium">Alta</div>
            <div className="bg-yellow-200 p-3 text-center rounded border">
              Médio
              <div className="text-xs mt-1">2 riscos</div>
            </div>
            <div className="bg-red-200 p-3 text-center rounded border">
              Alto
              <div className="text-xs mt-1">3 riscos</div>
            </div>
            <div className="bg-red-500 p-3 text-center rounded border text-white">
              Crítico
              <div className="text-xs mt-1">1 risco</div>
            </div>
            
            <div className="font-medium">Média</div>
            <div className="bg-green-200 p-3 text-center rounded border">
              Baixo
              <div className="text-xs mt-1">0 riscos</div>
            </div>
            <div className="bg-yellow-200 p-3 text-center rounded border">
              Médio
              <div className="text-xs mt-1">1 risco</div>
            </div>
            <div className="bg-red-200 p-3 text-center rounded border">
              Alto
              <div className="text-xs mt-1">2 riscos</div>
            </div>
            
            <div className="font-medium">Baixa</div>
            <div className="bg-green-200 p-3 text-center rounded border">
              Baixo
              <div className="text-xs mt-1">0 riscos</div>
            </div>
            <div className="bg-green-200 p-3 text-center rounded border">
              Baixo
              <div className="text-xs mt-1">0 riscos</div>
            </div>
            <div className="bg-yellow-200 p-3 text-center rounded border">
              Médio
              <div className="text-xs mt-1">1 risco</div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-600">
            <p><strong>Legenda:</strong> Impacto (horizontal) • Probabilidade (vertical)</p>
            <p>Total de riscos mapeados: {riskMatrix.length}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskAssessment;
