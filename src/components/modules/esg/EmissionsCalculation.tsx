
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calculator, 
  Zap, 
  Car, 
  Factory, 
  Leaf,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const EmissionsCalculation = () => {
  const [selectedScope, setSelectedScope] = useState('scope1');

  const emissionsData = {
    scope1: {
      total: 2654,
      sources: [
        { name: 'Combustão Estacionária', value: 1200, percentage: 45.2, icon: Factory },
        { name: 'Transporte Próprio', value: 890, percentage: 33.5, icon: Car },
        { name: 'Fugitivas', value: 564, percentage: 21.3, icon: AlertTriangle }
      ]
    },
    scope2: {
      total: 1823,
      sources: [
        { name: 'Eletricidade Comprada', value: 1456, percentage: 79.9, icon: Zap },
        { name: 'Vapor/Calor Comprado', value: 367, percentage: 20.1, icon: Factory }
      ]
    },
    scope3: {
      total: 8945,
      sources: [
        { name: 'Cadeia de Suprimentos', value: 3578, percentage: 40.0, icon: Factory },
        { name: 'Transporte Terceirizado', value: 2687, percentage: 30.0, icon: Car },
        { name: 'Resíduos', value: 1789, percentage: 20.0, icon: AlertTriangle },
        { name: 'Viagens de Negócios', value: 891, percentage: 10.0, icon: Car }
      ]
    }
  };

  const calculationFactors = [
    {
      category: 'Combustíveis',
      factors: [
        { name: 'Diesel', factor: '2.68 kg CO2/L', standard: 'GHG Protocol' },
        { name: 'Gasolina', factor: '2.31 kg CO2/L', standard: 'GHG Protocol' },
        { name: 'Gás Natural', factor: '2.03 kg CO2/m³', standard: 'IPCC' }
      ]
    },
    {
      category: 'Eletricidade',
      factors: [
        { name: 'Grid Brasil', factor: '0.075 kg CO2/kWh', standard: 'EPE 2023' },
        { name: 'Grid EUA', factor: '0.386 kg CO2/kWh', standard: 'EPA 2023' },
        { name: 'Grid UE', factor: '0.295 kg CO2/kWh', standard: 'EEA 2023' }
      ]
    }
  ];

  const validationResults = [
    { check: 'Completude dos Dados', status: 'passed', percentage: 98 },
    { check: 'Fatores de Emissão', status: 'passed', percentage: 100 },
    { check: 'Consistência Temporal', status: 'warning', percentage: 87 },
    { check: 'Conformidade GHG Protocol', status: 'passed', percentage: 95 }
  ];

  const getCurrentScopeData = () => {
    return emissionsData[selectedScope as keyof typeof emissionsData];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'failed': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-green-600" />
            Cálculo Automatizado de Emissões
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-red-800 mb-2">Escopo 1</h3>
                <div className="text-2xl font-bold text-red-600">{emissionsData.scope1.total.toLocaleString()}</div>
                <p className="text-sm text-red-600">t CO2e</p>
                <p className="text-xs text-red-500 mt-1">Emissões diretas</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-yellow-800 mb-2">Escopo 2</h3>
                <div className="text-2xl font-bold text-yellow-600">{emissionsData.scope2.total.toLocaleString()}</div>
                <p className="text-sm text-yellow-600">t CO2e</p>
                <p className="text-xs text-yellow-500 mt-1">Energia comprada</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-blue-800 mb-2">Escopo 3</h3>
                <div className="text-2xl font-bold text-blue-600">{emissionsData.scope3.total.toLocaleString()}</div>
                <p className="text-sm text-blue-600">t CO2e</p>
                <p className="text-xs text-blue-500 mt-1">Cadeia de valor</p>
              </CardContent>
            </Card>
          </div>

          <Tabs value={selectedScope} onValueChange={setSelectedScope}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="scope1">Escopo 1</TabsTrigger>
              <TabsTrigger value="scope2">Escopo 2</TabsTrigger>
              <TabsTrigger value="scope3">Escopo 3</TabsTrigger>
            </TabsList>

            {['scope1', 'scope2', 'scope3'].map((scope) => (
              <TabsContent key={scope} value={scope} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Fontes de Emissão</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {getCurrentScopeData().sources.map((source, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <source.icon className="h-4 w-4 text-gray-600" />
                                <span className="font-medium">{source.name}</span>
                              </div>
                              <span className="text-sm font-semibold">{source.value.toLocaleString()} t CO2e</span>
                            </div>
                            <Progress value={source.percentage} className="h-2" />
                            <p className="text-xs text-gray-600">{source.percentage}% do total</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tendência Mensal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {['Janeiro', 'Fevereiro', 'Março', 'Abril'].map((month, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{month}</span>
                            <div className="flex items-center gap-2">
                              <Progress value={Math.random() * 100} className="h-2 w-24" />
                              <span className="text-sm font-medium">
                                {Math.floor(getCurrentScopeData().total * (0.8 + Math.random() * 0.4) / 4).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fatores de Emissão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {calculationFactors.map((category, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{category.category}</h3>
                  <div className="space-y-2">
                    {category.factors.map((factor, factorIndex) => (
                      <div key={factorIndex} className="flex justify-between text-sm">
                        <span>{factor.name}</span>
                        <div className="text-right">
                          <div className="font-medium">{factor.factor}</div>
                          <Badge variant="outline" className="text-xs">{factor.standard}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Validação com IA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {validationResults.map((result, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.status)}
                      <span className="font-medium">{result.check}</span>
                    </div>
                    <span className="text-sm font-semibold">{result.percentage}%</span>
                  </div>
                  <Progress value={result.percentage} className="h-2" />
                </div>
              ))}
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Dados validados e prontos para relatório</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center">
              <Calculator className="h-5 w-5 mb-2" />
              <span className="text-sm">Recalcular</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <TrendingUp className="h-5 w-5 mb-2" />
              <span className="text-sm">Projeções</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Leaf className="h-5 w-5 mb-2" />
              <span className="text-sm">Cenários</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <CheckCircle className="h-5 w-5 mb-2" />
              <span className="text-sm">Exportar</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmissionsCalculation;
