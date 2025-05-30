
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, Download, Edit, Trash2 } from 'lucide-react';

const DocumentManagement = () => {
  const documents = [
    {
      name: 'Política Ambiental 2024',
      type: 'Política',
      framework: 'ISO 14001',
      version: 'v2.1',
      status: 'Aprovado',
      lastUpdate: '2024-01-10',
      size: '2.3 MB'
    },
    {
      name: 'Relatório GRI 2023',
      type: 'Relatório',
      framework: 'GRI',
      version: 'v1.0',
      status: 'Publicado',
      lastUpdate: '2024-01-05',
      size: '15.7 MB'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Gerenciamento de Documentação
          </CardTitle>
          <div className="flex gap-2">
            <Button size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
            <Button size="sm" variant="outline">
              Nova Pasta
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Documento</th>
                  <th className="text-left py-2">Tipo</th>
                  <th className="text-left py-2">Framework</th>
                  <th className="text-left py-2">Versão</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Atualização</th>
                  <th className="text-left py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.size}</p>
                      </div>
                    </td>
                    <td className="py-2">{doc.type}</td>
                    <td className="py-2">{doc.framework}</td>
                    <td className="py-2">{doc.version}</td>
                    <td className="py-2">
                      <Badge className="bg-green-100 text-green-800">
                        {doc.status}
                      </Badge>
                    </td>
                    <td className="py-2">{doc.lastUpdate}</td>
                    <td className="py-2">
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-3 w-3" />
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
    </div>
  );
};

export default DocumentManagement;
