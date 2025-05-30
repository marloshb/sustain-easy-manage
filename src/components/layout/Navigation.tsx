
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Activity,
  Brain,
  Map,
  Globe,
  Leaf, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  Bell, 
  Settings,
  User,
  FileText,
  CheckSquare,
  Database,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';

interface NavigationProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeModule, setActiveModule }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuGroups = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: BarChart3,
      color: 'text-gray-600',
      notifications: 0,
      isStandalone: true
    },
    {
      id: 'management',
      label: 'Gestão Central',
      icon: Activity,
      color: 'text-orange-600',
      notifications: 5,
      items: [
        {
          id: 'environmental',
          label: 'Gestão Ambiental',
          icon: Leaf,
          description: 'Monitoramento e controle ambiental'
        },
        {
          id: 'ehs',
          label: 'Sistema EHS',
          icon: Shield,
          description: 'Saúde, segurança e meio ambiente'
        },
        {
          id: 'esg',
          label: 'ESG Management',
          icon: TrendingUp,
          description: 'Governança e sustentabilidade'
        }
      ]
    },
    {
      id: 'compliance',
      label: 'Conformidade & Dados',
      icon: CheckSquare,
      color: 'text-blue-600',
      notifications: 3,
      items: [
        {
          id: 'compliance',
          label: 'Conformidade',
          icon: CheckSquare,
          description: 'Padrões e regulamentações'
        },
        {
          id: 'data-collection',
          label: 'Coleta de Dados',
          icon: Database,
          description: 'Integração e relatórios'
        }
      ]
    },
    {
      id: 'analytics',
      label: 'Analytics & IA',
      icon: Brain,
      color: 'text-purple-600',
      notifications: 8,
      items: [
        {
          id: 'gis',
          label: 'Sistema GIS',
          icon: Map,
          description: 'Análise geoespacial'
        },
        {
          id: 'ai-insights',
          label: 'IA Insights',
          icon: Brain,
          description: 'Inteligência artificial'
        },
        {
          id: 'risk',
          label: 'Gestão de Riscos',
          icon: AlertTriangle,
          description: 'Identificação e mitigação'
        }
      ]
    }
  ];

  const quickAccessItems = [
    {
      id: 'ai-alerts',
      label: 'IA - Alertas',
      icon: Brain,
      color: 'text-purple-600'
    },
    {
      id: 'gis-monitoring',
      label: 'GIS Monitor',
      icon: Map,
      color: 'text-green-600'
    },
    {
      id: 'global-compliance',
      label: 'Compliance',
      icon: Globe,
      color: 'text-blue-600'
    },
    {
      id: 'integrated-management',
      label: 'Gestão Integrada',
      icon: Activity,
      color: 'text-orange-600'
    }
  ];

  const handleModuleSelect = (moduleId: string) => {
    setActiveModule(moduleId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">EcoSystem Pro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {menuGroups.map((group) => (
                  <NavigationMenuItem key={group.id}>
                    {group.isStandalone ? (
                      <Button
                        variant={activeModule === group.id ? "default" : "ghost"}
                        onClick={() => handleModuleSelect(group.id)}
                        className={`text-sm ${activeModule === group.id ? 'bg-green-600 hover:bg-green-700 text-white' : 'hover:bg-gray-100'}`}
                        size="sm"
                      >
                        <group.icon className={`h-4 w-4 mr-2 ${activeModule === group.id ? 'text-white' : group.color}`} />
                        {group.label}
                        {group.notifications > 0 && (
                          <Badge className="ml-2 bg-red-500 text-white text-xs px-1 py-0 min-w-[1rem] h-4">
                            {group.notifications}
                          </Badge>
                        )}
                      </Button>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="text-sm font-medium">
                          <group.icon className={`h-4 w-4 mr-2 ${group.color}`} />
                          {group.label}
                          {group.notifications > 0 && (
                            <Badge className="ml-2 bg-red-500 text-white text-xs px-1 py-0 min-w-[1rem] h-4">
                              {group.notifications}
                            </Badge>
                          )}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4">
                            {group.items?.map((item) => (
                              <Button
                                key={item.id}
                                variant="ghost"
                                onClick={() => handleModuleSelect(item.id)}
                                className="h-auto p-3 text-left justify-start"
                              >
                                <item.icon className={`h-5 w-5 mr-3 ${item.id === 'environmental' ? 'text-green-600' : 
                                  item.id === 'ehs' ? 'text-orange-600' :
                                  item.id === 'esg' ? 'text-blue-600' :
                                  item.id === 'compliance' ? 'text-blue-600' :
                                  item.id === 'data-collection' ? 'text-indigo-600' :
                                  item.id === 'gis' ? 'text-green-600' :
                                  item.id === 'ai-insights' ? 'text-purple-600' :
                                  'text-red-600'}`} />
                                <div>
                                  <div className="font-medium">{item.label}</div>
                                  <div className="text-sm text-gray-500">{item.description}</div>
                                </div>
                              </Button>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Quick Access */}
          <div className="hidden xl:flex items-center space-x-1 border-l pl-4">
            {quickAccessItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleModuleSelect(item.id)}
                className="text-xs px-2 py-1"
                size="sm"
              >
                <item.icon className={`h-3 w-3 mr-1 ${item.color}`} />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              size="sm"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <FileText className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Relatórios</span>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0 min-w-[1rem] h-4">
                23
              </Badge>
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {menuGroups.map((group) => (
                <div key={group.id}>
                  {group.isStandalone ? (
                    <Button
                      variant={activeModule === group.id ? "default" : "ghost"}
                      onClick={() => handleModuleSelect(group.id)}
                      className="w-full justify-start"
                    >
                      <group.icon className="h-4 w-4 mr-2" />
                      {group.label}
                    </Button>
                  ) : (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-700 flex items-center">
                        <group.icon className={`h-4 w-4 mr-2 ${group.color}`} />
                        {group.label}
                      </div>
                      {group.items?.map((item) => (
                        <Button
                          key={item.id}
                          variant="ghost"
                          onClick={() => handleModuleSelect(item.id)}
                          className="w-full justify-start pl-8"
                        >
                          <item.icon className="h-4 w-4 mr-2 text-gray-600" />
                          {item.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
