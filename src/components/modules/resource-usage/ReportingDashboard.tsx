
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  FileText, 
  Download,
  Calendar,
  Sliders,
  LineChart,
  PieChart,
  RefreshCw
} from 'lucide-react';

interface ResourceStat {
  type: string;
  current: string;
  target: string;
  efficiency: string;
  trend: string;
  icon: any;
  color: string;
  status: string;
}

interface ReportingDashboardProps {
  resourceStats: ResourceStat[];
}

const ReportingDashboard: React.FC<ReportingDashboardProps> = ({ resourceStats }) => {
  const [selectedReport, setSelectedReport] = useState('csrd');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const reportTypes = [
    { id: 'csrd', name: 'CSRD', description: 'Corporate Sustainability Reporting Directive' },
    { id: 'gri', name: 'GRI', description: 'Global Reporting Initiative' },
    { id: 'esrs', name: 'ESRS', description: 'European Sustainability Reporting Standards' },
    { id: 'iso', name: 'ISO 14001', description: 'Sistema de Gestão Ambiental' },
    { id: 'custom', name: 'Personalizado', description: 'Relatórios customizados' }
  ];

  const dataPeriods = [
    { id: 'day', name: 'Diário' },
    { id: 'week', name: 'Semanal' },
    { id: 'month', name: 'Mensal' },
    { id: 'quarter', name: 'Trimestral' },
    { id: 'year', name: 'Anual' }
  ];

  const exportFormats = [
    { id: 'pdf', name: 'PDF' },
    { id: 'excel', name: 'Excel' },
    { id: 'csv', name: 'CSV' },
    { id: 'json', name: 'JSON' }
  ];

  const metricCategories = [
    {
      name: 'Energia',
      indicators: [
        { name: 'Consumo Total', value: '2,456 kWh', trend: '-5%', chart: LineChart },
        { name: 'Consumo por m²', value: '145 kWh/m²', trend: '-3%', chart: BarChart3 },
        { name: 'Consumo por Unidade', value: '24.5 kWh/un', trend: '-8%', chart: LineChart },
        { name: 'Fonte Renovável', value: '35%', trend: '+15%', chart: PieChart }
      ]
    },
    {
      name: 'Água',
      indicators: [
        { name: 'Consumo Total', value: '1,234 L', trend: '-8%', chart: LineChart },
        { name: 'Consumo per capita', value: '3.2 L/pessoa', trend: '-4%', chart: BarChart3 },
        { name: 'Água Reciclada', value: '25%', trend: '+10%', chart: PieChart },
        { name: 'Efluentes Tratados', value: '98%', trend: '+2%', chart: LineChart }
      ]
    },
    {
      name: 'Materiais',
      indicators: [
        { name: 'Consumo Total', value: '856 kg', trend: '-12%', chart: LineChart },
        { name: 'Taxa de Reciclagem', value: '68%', trend: '+15%', chart: PieChart },
        { name: 'Resíduo por Unidade', value: '0.8 kg/un', trend: '-15%', chart: BarChart3 },
        { name: 'Material Renovável', value: '45%', trend: '+8%', chart: PieChart }
      ]
    }
  ];

  const reports = [
    {
      name: 'Relatório CSRD - Dezembro 2023',
      date: '2024-01-15',
      format: 'PDF',
      status: 'completed',
      fileSize: '3.4 MB',
      metrics: 42
    },
    {
      name: 'Relatório GRI - Q4 2023',
      date: '2024-01-10',
      format: 'Excel',
      status: 'completed',
      fileSize: '2.1 MB',
      metrics: 36
    },
    {
      name: 'Uso de Recursos - Trimestral',
      date: '2024-01-05',
      format: 'PDF',
      status: 'completed',
      fileSize: '1.8 MB',
      metrics: 28
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendColor = (trend: string) => {
    return trend.startsWith('-') ? 'text-green-600' : 
           trend.startsWith('+') ? 'text-blue-600' : 'text-gray-600';
  };

  const scheduleReport = () => {
    console.log('Scheduling report:', selectedReport, selectedPeriod);
  };

  return (
    <div className="space-y-6">
      {/* Dashboard Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Dashboard de Relatórios
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Sliders className="h-4 w-4 mr-1" />
                Personalizar
              </Button>
              <Button size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                Atualizar Dados
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium text-gray-600 mr-2">Tipo de Relatório:</span>
            {reportTypes.map(report => (
              <Button
                key={report.id}
                size="sm"
                variant={selectedReport === report.id ? "default" : "outline"}
                onClick={() => setSelectedReport(report.id)}
              >
                {report.name}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium text-gray-600 mr-2">Período:</span>
            {dataPeriods.map(period => (
              <Button
                key={period.id}
                size="sm"
                variant={selectedPeriod === period.id ? "default" : "outline"}
                onClick={() => setSelectedPeriod(period.id)}
              >
                {period.name}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-600 mr-2">Exportar Como:</span>
            {exportFormats.map(format => (
              <Button
                key={format.id}
                size="sm"
                variant="outline"
              >
                <Download className="h-4 w-4 mr-1" />
                {format.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {metricCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{category.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {category.indicators.map((indicator, idx) => {
                  const ChartIcon = indicator.chart;
                  return (
                    <div key={idx} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <ChartIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{indicator.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">{indicator.value}</span>
                        <span className={`text-xs ${getTrendColor(indicator.trend)}`}>
                          {indicator.trend}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button size="sm" variant="outline" className="w-full mt-4">
                <BarChart3 className="h-4 w-4 mr-1" />
                Ver Detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-green-600" />
            Geração de Relatórios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-green-600" />
                Agendar Relatório
              </h3>
              
              <div className="space-y-4 mb-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Tipo de Relatório</label>
                  <select className="w-full p-2 border rounded-md">
                    {reportTypes.map(report => (
                      <option key={report.id} value={report.id}>
                        {report.name} - {report.description}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Frequência</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="weekly">Semanal</option>
                    <option value="monthly">Mensal</option>
                    <option value="quarterly">Trimestral</option>
                    <option value="annually">Anual</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Formato</label>
                  <select className="w-full p-2 border rounded-md">
                    {exportFormats.map(format => (
                      <option key={format.id} value={format.id}>
                        {format.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Destinatários</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="email@exemplo.com" />
                </div>
              </div>
              
              <Button onClick={scheduleReport} className="w-full">
                Agendar Relatório
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Relatórios Recentes</h3>
              
              {reports.map((report, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{report.name}</h4>
                    <Badge className={getStatusColor(report.status)}>
                      {report.status === 'completed' ? 'Concluído' :
                       report.status === 'pending' ? 'Pendente' : 'Agendado'}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mb-3">
                    <span>Gerado em: {new Date(report.date).toLocaleDateString()}</span>
                    <span>{report.metrics} métricas</span>
                    <span>{report.fileSize}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="h-3 w-3 mr-1" />
                      {report.format}
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Visualizar
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                Ver Todos os Relatórios
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Status de Conformidade com Padrões
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg bg-blue-50">
              <h3 className="font-medium text-center mb-2">CSRD</h3>
              <div className="flex justify-center mb-2">
                <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-blue-500 flex items-center justify-center">
                  <span className="font-bold text-blue-800">92%</span>
                </div>
              </div>
              <div className="text-center text-xs text-gray-600">
                <p>Próxima deadline: 2025-06-30</p>
                <p className="font-medium text-blue-700 mt-1">2 métricas pendentes</p>
              </div>
              <Button size="sm" className="w-full mt-3">
                Completar Conformidade
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg bg-green-50">
              <h3 className="font-medium text-center mb-2">GRI</h3>
              <div className="flex justify-center mb-2">
                <div className="w-16 h-16 rounded-full bg-green-100 border-4 border-green-500 flex items-center justify-center">
                  <span className="font-bold text-green-800">100%</span>
                </div>
              </div>
              <div className="text-center text-xs text-gray-600">
                <p>Atualizado: 2024-01-15</p>
                <p className="font-medium text-green-700 mt-1">Conformidade completa</p>
              </div>
              <Button size="sm" variant="outline" className="w-full mt-3">
                Ver Detalhes
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg bg-purple-50">
              <h3 className="font-medium text-center mb-2">ESRS</h3>
              <div className="flex justify-center mb-2">
                <div className="w-16 h-16 rounded-full bg-purple-100 border-4 border-purple-500 flex items-center justify-center">
                  <span className="font-bold text-purple-800">85%</span>
                </div>
              </div>
              <div className="text-center text-xs text-gray-600">
                <p>Próxima deadline: 2025-07-31</p>
                <p className="font-medium text-purple-700 mt-1">4 métricas pendentes</p>
              </div>
              <Button size="sm" className="w-full mt-3">
                Completar Conformidade
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg bg-yellow-50">
              <h3 className="font-medium text-center mb-2">ISO 14001</h3>
              <div className="flex justify-center mb-2">
                <div className="w-16 h-16 rounded-full bg-yellow-100 border-4 border-yellow-500 flex items-center justify-center">
                  <span className="font-bold text-yellow-800">98%</span>
                </div>
              </div>
              <div className="text-center text-xs text-gray-600">
                <p>Auditoria: 2024-03-15</p>
                <p className="font-medium text-yellow-700 mt-1">1 métrica pendente</p>
              </div>
              <Button size="sm" className="w-full mt-3">
                Preparar para Auditoria
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportingDashboard;
