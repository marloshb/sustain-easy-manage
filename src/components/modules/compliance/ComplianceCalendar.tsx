
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Bell, Plus } from 'lucide-react';

const ComplianceCalendar = () => {
  const events = [
    {
      id: 1,
      title: 'Auditoria ISO 14001',
      date: '2024-02-15',
      type: 'auditoria',
      status: 'agendado',
      framework: 'ISO 14001',
      description: 'Auditoria interna do SGA'
    },
    {
      id: 2,
      title: 'Relatório CSRD Q1',
      date: '2024-02-28',
      type: 'relatorio',
      status: 'pendente',
      framework: 'CSRD',
      description: 'Entrega relatório trimestral'
    },
    {
      id: 3,
      title: 'Treinamento GRI',
      date: '2024-03-05',
      type: 'treinamento',
      status: 'agendado',
      framework: 'GRI',
      description: 'Capacitação da equipe'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'auditoria': return 'bg-blue-100 text-blue-800';
      case 'relatorio': return 'bg-green-100 text-green-800';
      case 'treinamento': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Calendário de Conformidade
          </CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Novo Evento
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{event.framework}</span>
                      <Badge variant={event.status === 'pendente' ? 'destructive' : 'default'}>
                        {event.status}
                      </Badge>
                    </div>
                    
                    <Button size="sm" className="w-full">
                      Gerenciar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Próximos Prazos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <Clock className="h-5 w-5 text-red-600" />
                <div>
                  <p className="text-sm font-medium">Relatório CSRD Q1</p>
                  <p className="text-xs text-gray-600">Vence em 3 dias</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estatísticas do Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Eventos Agendados</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Relatórios Entregues</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Auditorias Realizadas</span>
                <span className="font-medium">3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComplianceCalendar;
