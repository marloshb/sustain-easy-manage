
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Activity, 
  Wifi, 
  WifiOff, 
  MapPin, 
  AlertTriangle,
  Upload,
  Download,
  Zap,
  Droplets,
  Package
} from 'lucide-react';

interface ResourceData {
  energy: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
  water: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
  materials: Array<{ location: string; consumption: number; efficiency: number; coordinates: number[] }>;
}

interface RealTimeTrackingProps {
  resourceData: ResourceData;
}

const RealTimeTracking: React.FC<RealTimeTrackingProps> = ({ resourceData }) => {
  const [selectedResource, setSelectedResource] = useState('energy');
  const [uploadFormat, setUploadFormat] = useState('csv');

  const iotSensors = [
    {
      id: 'SENSOR-001',
      type: 'Energia',
      location: 'Fábrica A - Linha 1',
      status: 'online',
      lastReading: '2,456 kWh',
      lastUpdate: '2 min atrás',
      coordinates: '[-23.5505, -46.6333]',
      icon: Zap,
      color: 'text-yellow-600'
    },
    {
      id: 'SENSOR-002',
      type: 'Água',
      location: 'Fábrica A - Tratamento',
      status: 'online',
      lastReading: '1,234 L/h',
      lastUpdate: '1 min atrás',
      coordinates: '[-23.5505, -46.6333]',
      icon: Droplets,
      color: 'text-blue-600'
    },
    {
      id: 'SENSOR-003',
      type: 'Materiais',
      location: 'Depósito Central',
      status: 'offline',
      lastReading: '856 kg',
      lastUpdate: '15 min atrás',
      coordinates: '[-23.5489, -46.6388]',
      icon: Package,
      color: 'text-green-600'
    },
    {
      id: 'SENSOR-004',
      type: 'Energia',
      location: 'Fábrica B - Produção',
      status: 'online',
      lastReading: '1,890 kWh',
      lastUpdate: '3 min atrás',
      coordinates: '[-22.9068, -43.1729]',
      icon: Zap,
      color: 'text-yellow-600'
    }
  ];

  const dataValidationAlerts = [
    {
      sensor: 'SENSOR-001',
      issue: 'Valor fora do intervalo esperado',
      value: '4,200 kWh',
      expected: '2,000-3,000 kWh',
      severity: 'medium',
      timestamp: '10:30'
    },
    {
      sensor: 'SENSOR-002',
      issue: 'Anomalia detectada pela IA',
      value: '2,500 L/h',
      expected: '1,000-1,500 L/h',
      severity: 'high',
      timestamp: '09:45'
    }
  ];

  const resourceTypes = [
    { id: 'energy', name: 'Energia', icon: Zap, color: 'text-yellow-600' },
    { id: 'water', name: 'Água', icon: Droplets, color: 'text-blue-600' },
    { id: 'materials', name: 'Materiais', icon: Package, color: 'text-green-600' }
  ];

  const getStatusColor = (status: string) => {
    return status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* IoT Sensors Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-green-600" />
            Status dos Sensores IoT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {iotSensors.map((sensor) => (
              <div key={sensor.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <sensor.icon className={`h-5 w-5 ${sensor.color}`} />
                    <div>
                      <h3 className="font-medium">{sensor.id}</h3>
                      <p className="text-sm text-gray-600">{sensor.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {sensor.status === 'online' ? (
                      <Wifi className="h-4 w-4 text-green-600" />
                    ) : (
                      <WifiOff className="h-4 w-4 text-red-600" />
                    )}
                    <Badge className={getStatusColor(sensor.status)}>
                      {sensor.status === 'online' ? 'Online' : 'Offline'}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Local:</span>
                    <span className="font-medium">{sensor.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Última Leitura:</span>
                    <span className="font-medium">{sensor.lastReading}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Atualizado:</span>
                    <span className="font-medium">{sensor.lastUpdate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coordenadas:</span>
                    <span className="font-medium text-xs">{sensor.coordinates}</span>
                  </div>
                </div>
                
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    Ver no Mapa
                  </Button>
                  <Button size="sm" variant="outline">
                    Calibrar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Validation Alerts */}
      {dataValidationAlerts.length > 0 && (
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Alertas de Validação de Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dataValidationAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{alert.sensor}</Badge>
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity === 'high' ? 'Alto' : 
                         alert.severity === 'medium' ? 'Médio' : 'Baixo'}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-600">{alert.timestamp}</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{alert.issue}</p>
                  <div className="text-xs text-gray-600">
                    <span>Valor: <strong>{alert.value}</strong> | </span>
                    <span>Esperado: <strong>{alert.expected}</strong></span>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">
                      Investigar
                    </Button>
                    <Button size="sm" variant="outline">
                      Aprovar Valor
                    </Button>
                    <Button size="sm" variant="outline">
                      Recalibrar Sensor
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Data Upload Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-blue-600" />
              Upload de Dados Manuais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="resource-type">Tipo de Recurso</Label>
              <select 
                id="resource-type"
                className="w-full p-2 border rounded-md"
                value={selectedResource}
                onChange={(e) => setSelectedResource(e.target.value)}
              >
                {resourceTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="data-format">Formato de Dados</Label>
              <select 
                id="data-format"
                className="w-full p-2 border rounded-md"
                value={uploadFormat}
                onChange={(e) => setUploadFormat(e.target.value)}
              >
                <option value="csv">CSV</option>
                <option value="json">JSON</option>
                <option value="xml">XML</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="file-upload">Arquivo de Dados</Label>
              <Input id="file-upload" type="file" accept=".csv,.json,.xml" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Localização (opcional)</Label>
              <Input 
                id="location" 
                placeholder="Ex: Fábrica A, Linha de Produção 1" 
              />
            </div>

            <Button className="w-full">
              <Upload className="h-4 w-4 mr-2" />
              Fazer Upload e Validar
            </Button>

            <div className="text-xs text-gray-600 mt-2">
              <p><strong>Formatos aceitos:</strong> CSV, JSON, XML</p>
              <p><strong>Validação automática:</strong> IA detecta anomalias e valores fora do padrão</p>
              <p><strong>Geotagging:</strong> Coordenadas automáticas se localização fornecida</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-green-600" />
              Dados em Tempo Real
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resourceTypes.map(type => {
                const TypeIcon = type.icon;
                const data = resourceData[type.id as keyof ResourceData];
                const totalConsumption = data.reduce((sum, item) => sum + item.consumption, 0);
                const avgEfficiency = data.reduce((sum, item) => sum + item.efficiency, 0) / data.length;
                
                return (
                  <div key={type.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <TypeIcon className={`h-4 w-4 ${type.color}`} />
                        <span className="font-medium">{type.name}</span>
                      </div>
                      <Badge variant="outline">{data.length} locais</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Total:</span>
                        <span className="font-medium ml-1">
                          {totalConsumption.toLocaleString()}
                          {type.id === 'energy' ? ' kWh' : type.id === 'water' ? ' L' : ' kg'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Eficiência Média:</span>
                        <span className="font-medium ml-1">{avgEfficiency.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-800 mb-1">
                Frequência de Atualização
              </p>
              <p className="text-xs text-blue-600">
                • Sensores IoT: Tempo real (1-5 min)<br />
                • Uploads manuais: Sob demanda<br />
                • Validação IA: Automática
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RealTimeTracking;
