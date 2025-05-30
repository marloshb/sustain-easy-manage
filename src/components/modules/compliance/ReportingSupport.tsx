
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, CheckCircle } from 'lucide-react';

const ReportingSupport = () => {
  const templates = [
    {
      name: 'Relatório GRI Completo',
      framework: 'GRI',
      type: 'Template',
      description: 'Template completo para relatório de sustentabilidade GRI',
      fields: 45,
      status: 'Disponível'
    },
    {
      name: 'ESRS E1 - Mudanças Climáticas',
      framework: 'ESRS',
      type: 'Formulário',
      description: 'Formulário específico para ESRS E1',
      fields: 23,
      status: 'Disponível'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Suporte para Relatórios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map((template, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Badge>{template.framework}</Badge>
                      <span className="text-sm text-gray-500">{template.fields} campos</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Usar Template
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportingSupport;
