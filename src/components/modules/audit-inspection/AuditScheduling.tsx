
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Users, Clock, MapPin, Bell } from 'lucide-react';

const AuditScheduling = () => {
  const [selectedView, setSelectedView] = useState('calendar');

  const scheduledAudits = [
    {
      id: "AUD-001",
      title: "Auditoria ISO 14001 - Sistema de Gestão Ambiental",
      facility: "Planta Industrial São Paulo",
      location: "Av. Paulista, 1000 - São Paulo/SP",
      coordinates: "-23.5613, -46.6563",
      auditor: "João Silva",
      team: ["Maria Santos", "Carlos Lima"],
      date: "2024-02-15",
      startTime: "09:00",
      endTime: "17:00",
      status: "Agendada",
      priority: "Alta",
      standard: "ISO 14001",
      scope: "Sistema de Gestão Ambiental completo",
      estimatedDuration: "8 horas",
      requirements: ["Documentação do SGA", "Registros de treinamento", "Análise de aspectos ambientais"],
      notifications: ["7 dias antes", "1 dia antes", "1 hora antes"]
    },
    {
      id: "AUD-002",
      title: "Inspeção OSHA - Segurança no Trabalho",
      facility: "Fábrica Campinas",
      location: "Rod. Dom Pedro I, Km 143 - Campinas/SP",
      coordinates: "-22.9056, -47.0608",
      auditor: "Maria Santos",
      team: ["Pedro Costa"],
      date: "2024-02-18",
      startTime: "08:00",
      endTime: "16:00",
      status: "Em Andamento",
      priority: "Crítica",
      standard: "OSHA",
      scope: "Segurança ocupacional e equipamentos",
      estimatedDuration: "8 horas",
      requirements: ["EPI", "Procedimentos de segurança", "Registros de acidentes"],
      notifications: ["Notificação enviada"]
    },
    {
      id: "AUD-003",
      title: "Auditoria CSRD - Relatórios de Sustentabilidade",
      facility: "Escritório Central",
      location: "Av. Faria Lima, 3000 - São Paulo/SP",
      coordinates: "-23.5775, -46.6872",
      auditor: "Carlos Lima",
      team: ["Ana Oliveira", "Roberto Silva"],
      date: "2024-02-22",
      startTime: "14:00",
      endTime: "18:00",
      status: "Planejada",
      priority: "Média",
      standard: "CSRD",
      scope: "Conformidade com relatórios ESG",
      estimatedDuration: "4 horas",
      requirements: ["Dados ESG", "Relatórios anteriores", "Políticas de sustentabilidade"],
      notifications: ["Agendamento pendente"]
    }
  ];

  const auditTeam = [
    {
      id: "AUD-001",
      name: "João Silva",
      role: "Auditor Sênior",
      certifications: ["ISO 14001", "ISO 45001", "OHSAS 18001"],
      availability: "Disponível",
      currentAudits: 2,
      location: "São Paulo"
    },
    {
      id: "AUD-002",
      name: "Maria Santos",
      role: "Auditora Especialista",
      certifications: ["OSHA", "HSE", "ISO 14001"],
      availability: "Em Auditoria",
      currentAudits: 1,
      location: "Campinas"
    },
    {
      id: "AUD-003",
      name: "Carlos Lima",
      role: "Auditor ESG",
      certifications: ["GRI", "CSRD", "ESRS"],
      availability: "Disponível",
      currentAudits: 1,
      location: "São Paulo"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluída': return 'bg-green-100 text-green-800';
      case 'Em Andamento': return 'bg-yellow-100 text-yellow-800';
      case 'Agendada': case 'Planejada': return 'bg-blue-100 text-blue-800';
      case 'Atrasada': return 'bg-red-100 text-red-800';
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

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Disponível': return 'bg-green-100 text-green-800';
      case 'Em Auditoria': return 'bg-yellow-100 text-yellow-800';
      case 'Indisponível': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Agendamento e Rastreamento de Auditorias
            </CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={selectedView === 'calendar' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setSelectedView('calendar')}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Calendário
              </Button>
              <Button 
                variant={selectedView === 'list' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setSelectedView('list')}
              >
                Lista
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nova Auditoria
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {selectedView === 'calendar' ? (
            <div className="space-y-4">
              {/* Placeholder para calendário visual */}
              <div className="h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Calendário de Auditorias</h3>
                  <p className="text-sm text-gray-500">
                    Visualização mensal com auditorias agendadas e status
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {scheduledAudits.map((audit) => (
                <Card key={audit.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{audit.title}</h3>
                          <p className="text-sm text-gray-600">{audit.scope}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getPriorityColor(audit.priority)}>
                            {audit.priority}
                          </Badge>
                          <Badge className={getStatusColor(audit.status)}>
                            {audit.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-medium">Local</span>
                          </div>
                          <p className="text-sm text-gray-600">{audit.facility}</p>
                          <p className="text-xs text-gray-500">{audit.location}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-medium">Horário</span>
                          </div>
                          <p className="text-sm text-gray-600">{audit.date}</p>
                          <p className="text-xs text-gray-500">{audit.startTime} - {audit.endTime}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-medium">Equipe</span>
                          </div>
                          <p className="text-sm text-gray-600">{audit.auditor} (Lead)</p>
                          <p className="text-xs text-gray-500">+{audit.team.length} membros</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Requisitos</h4>
                        <div className="flex flex-wrap gap-1">
                          {audit.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Bell className="h-4 w-4 text-gray-500" />
                          <span className="text-xs text-gray-500">
                            {audit.notifications.length} notificações ativas
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Editar
                          </Button>
                          <Button size="sm" variant="outline">
                            Ver no Mapa
                          </Button>
                          <Button size="sm">
                            Iniciar Auditoria
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

      {/* Equipe de Auditores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Equipe de Auditores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {auditTeam.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{member.name}</h3>
                      <Badge className={getAvailabilityColor(member.availability)}>
                        {member.availability}
                      </Badge>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.location}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium">Certificações</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {member.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Auditorias Ativas:</span>
                      <span className="font-medium">{member.currentAudits}</span>
                    </div>
                    
                    <Button size="sm" className="w-full">
                      Atribuir Auditoria
                    </Button>
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

export default AuditScheduling;
