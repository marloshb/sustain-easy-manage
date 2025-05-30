
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Upload, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Target,
  TrendingUp,
  Eye,
  Edit
} from 'lucide-react';

const AutomatedReporting = () => {
  const [activeView, setActiveView] = useState('reports');

  const auditReports = [
    {
      id: "REP-001",
      title: "Relatório Auditoria ISO 14001 - Planta São Paulo",
      auditId: "AUD-001",
      facility: "Planta Industrial São Paulo",
      standard: "ISO 14001",
      auditor: "João Silva",
      date: "2024-02-15",
      status: "Concluído",
      conformities: 42,
      nonConformities: 3,
      observations: 7,
      capaRequired: 3,
      severity: "Menor",
      reportType: "Auditoria Interna",
      nextAudit: "2024-08-15"
    },
    {
      id: "REP-002",
      title: "Relatório Inspeção OSHA - Fábrica Campinas",
      auditId: "AUD-002",
      facility: "Fábrica Campinas",
      standard: "OSHA",
      auditor: "Maria Santos",
      date: "2024-02-18",
      status: "Em Revisão",
      conformities: 38,
      nonConformities: 5,
      observations: 4,
      capaRequired: 5,
      severity: "Maior",
      reportType: "Inspeção Externa",
      nextAudit: "2024-05-18"
    },
    {
      id: "REP-003",
      title: "Relatório CSRD - Escritório Central",
      auditId: "AUD-003",
      facility: "Escritório Central",
      standard: "CSRD",
      auditor: "Carlos Lima",
      date: "2024-02-22",
      status: "Rascunho",
      conformities: 28,
      nonConformities: 1,
      observations: 3,
      capaRequired: 1,
      severity: "Menor",
      reportType: "Auditoria de Conformidade",
      nextAudit: "2024-11-22"
    }
  ];

  const capaActions = [
    {
      id: "CAPA-001",
      title: "Implementar controle de emissões atmosféricas",
      reportId: "REP-001",
      finding: "Ausência de medição contínua de NOx na chaminé principal",
      responsible: "Eng. Ambiental",
      priority: "Alta",
      dueDate: "2024-03-15",
      status: "Em Andamento",
      progress: 60,
      actions: [
        "Instalar analisador contínuo de NOx",
        "Calibrar equipamento",
        "Treinar operadores",
        "Implementar procedimentos"
      ],
      estimatedCost: "R$ 45.000",
      category: "Controle Operacional"
    },
    {
      id: "CAPA-002",
      title: "Revisar procedimento de uso de EPI",
      reportId: "REP-002",
      finding: "Funcionários sem capacete em área restrita",
      responsible: "Supervisor de Segurança",
      priority: "Crítica",
      dueDate: "2024-02-25",
      status: "Atrasada",
      progress: 30,
      actions: [
        "Revisar procedimento de EPI",
        "Realizar treinamento",
        "Implementar controle de acesso",
        "Definir penalidades"
      ],
      estimatedCost: "R$ 8.000",
      category: "Segurança do Trabalho"
    },
    {
      id: "CAPA-003",
      title: "Atualizar relatório de materialidade ESG",
      reportId: "REP-003",
      finding: "Análise de materialidade desatualizada",
      responsible: "Analista ESG",
      priority: "Média",
      dueDate: "2024-03-30",
      status: "Planejada",
      progress: 0,
      actions: [
        "Consultar stakeholders",
        "Analisar impactos",
        "Atualizar matriz",
        "Validar com liderança"
      ],
      estimatedCost: "R$ 12.000",
      category: "ESG"
    }
  ];

  const reportTemplates = [
    {
      id: "TEMP-001",
      name: "Template ISO 14001",
      standard: "ISO 14001",
      sections: ["Escopo", "Política", "Aspectos", "Objetivos", "Controle", "Melhoria"],
      fields: 45,
      autoGenerate: true,
      compliance: "ISO 14001:2015"
    },
    {
      id: "TEMP-002",
      name: "Template OSHA",
      standard: "OSHA",
      sections: ["Segurança", "Saúde", "Equipamentos", "Treinamento", "Incidentes"],
      fields: 38,
      autoGenerate: true,
      compliance: "OSHA Standards"
    },
    {
      id: "TEMP-003",
      name: "Template CSRD",
      standard: "CSRD",
      sections: ["Governança", "Estratégia", "Gestão de Riscos", "Métricas"],
      fields: 67,
      autoGenerate: true,
      compliance: "CSRD/ESRS"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': case 'Concluída': return 'bg-green-100 text-green-800';
      case 'Em Revisão': case 'Em Andamento': return 'bg-yellow-100 text-yellow-800';
      case 'Rascunho': case 'Planejada': return 'bg-blue-100 text-blue-800';
      case 'Atrasada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Crítica': return 'bg-red-100 text-red-800';
      case 'Maior': return 'bg-orange-100 text-orange-800';
      case 'Menor': return 'bg-yellow-100 text-yellow-800';
      case 'Observação': return 'bg-blue-100 text-blue-800';
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
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Relatórios Automatizados e CAPA
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={activeView === 'reports' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('reports')}
              >
                Relatórios
              </Button>
              <Button 
                variant={activeView === 'capa' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('capa')}
              >
                CAPA
              </Button>
              <Button 
                variant={activeView === 'templates' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveView('templates')}
              >
                Templates
              </Button>
              <Button size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Novo Relatório
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {activeView === 'reports' && (
            <div className="space-y-4">
              {auditReports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{report.title}</h3>
                          <p className="text-sm text-gray-600">{report.facility}</p>
                          <p className="text-xs text-gray-500">
                            {report.auditor} • {report.date} • {report.reportType}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getSeverityColor(report.severity)}>
                            {report.severity}
                          </Badge>
                          <Badge className={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                          <div className="text-lg font-bold text-green-600">{report.conformities}</div>
                          <p className="text-xs text-gray-600">Conformidades</p>
                        </div>
                        
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                          <AlertTriangle className="h-6 w-6 text-red-600 mx-auto mb-1" />
                          <div className="text-lg font-bold text-red-600">{report.nonConformities}</div>
                          <p className="text-xs text-gray-600">Não Conformidades</p>
                        </div>
                        
                        <div className="text-center p-3 bg-yellow-50 rounded-lg">
                          <Eye className="h-6 w-6 text-yellow-600 mx-auto mb-1" />
                          <div className="text-lg font-bold text-yellow-600">{report.observations}</div>
                          <p className="text-xs text-gray-600">Observações</p>
                        </div>
                        
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <Target className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                          <div className="text-lg font-bold text-blue-600">{report.capaRequired}</div>
                          <p className="text-xs text-gray-600">CAPA Requeridas</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <p className="text-sm font-medium">Padrão Auditado</p>
                          <p className="text-sm text-gray-600">{report.standard}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Próxima Auditoria</p>
                          <p className="text-sm text-gray-600">{report.nextAudit}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">ID: {report.id}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            Visualizar
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Editar
                          </Button>
                          <Button size="sm">
                            <Download className="h-3 w-3 mr-1" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'capa' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Planos de Ação Corretiva e Preventiva (CAPA)</h3>
              {capaActions.map((capa) => (
                <Card key={capa.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{capa.title}</h3>
                          <p className="text-sm text-gray-600">{capa.finding}</p>
                          <p className="text-xs text-gray-500">
                            Responsável: {capa.responsible} • Categoria: {capa.category}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getPriorityColor(capa.priority)}>
                            {capa.priority}
                          </Badge>
                          <Badge className={getStatusColor(capa.status)}>
                            {capa.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm font-medium">Prazo</p>
                          <p className="text-sm text-gray-600">{capa.dueDate}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Custo Estimado</p>
                          <p className="text-sm text-gray-600">{capa.estimatedCost}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Progresso</p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                                style={{width: `${capa.progress}%`}}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{capa.progress}%</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Ações Planejadas</p>
                        <div className="space-y-1">
                          {capa.actions.map((action, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                              <span className="text-gray-700">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            Relatório: {capa.reportId}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Atualizar Progresso
                          </Button>
                          <Button size="sm" variant="outline">
                            Ver Relatório
                          </Button>
                          <Button size="sm">
                            Gerenciar CAPA
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeView === 'templates' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Templates de Relatórios</h3>
              {reportTemplates.map((template) => (
                <Card key={template.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{template.name}</h3>
                          <p className="text-sm text-gray-600">Padrão: {template.standard}</p>
                          <p className="text-xs text-gray-500">Conformidade: {template.compliance}</p>
                        </div>
                        <div className="flex gap-2">
                          {template.autoGenerate && (
                            <Badge className="bg-green-100 text-green-800">
                              Auto-Geração
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-600">{template.fields}</div>
                          <p className="text-xs text-gray-600">Campos</p>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{template.sections.length}</div>
                          <p className="text-xs text-gray-600">Seções</p>
                        </div>
                        <div>
                          <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                          <p className="text-xs text-gray-600">Conformidade</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Seções do Template</p>
                        <div className="flex flex-wrap gap-1">
                          {template.sections.map((section, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {section}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-1" />
                          Visualizar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3 mr-1" />
                          Customizar
                        </Button>
                        <Button size="sm">
                          Usar Template
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomatedReporting;
