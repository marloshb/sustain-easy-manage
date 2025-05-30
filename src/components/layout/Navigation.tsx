
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
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
  Map,
  AlertTriangle,
  Brain,
  Activity
} from 'lucide-react';

interface NavigationProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeModule, setActiveModule }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: BarChart3,
      color: 'text-gray-600',
      notifications: 0
    },
    {
      id: 'compliance',
      label: 'Conformidade',
      icon: CheckSquare,
      color: 'text-blue-600',
      notifications: 5
    },
    {
      id: 'data-collection',
      label: 'Coleta de Dados',
      icon: Database,
      color: 'text-indigo-600',
      notifications: 2
    },
    {
      id: 'gis',
      label: 'Sistema GIS',
      icon: Map,
      color: 'text-green-600',
      notifications: 1
    },
    {
      id: 'environmental',
      label: 'Ambiental',
      icon: Leaf,
      color: 'text-green-600',
      notifications: 3
    },
    {
      id: 'ehs',
      label: 'EHS',
      icon: Shield,
      color: 'text-orange-600',
      notifications: 2
    },
    {
      id: 'esg',
      label: 'ESG',
      icon: TrendingUp,
      color: 'text-blue-600',
      notifications: 1
    },
    {
      id: 'risk',
      label: 'Riscos',
      icon: AlertTriangle,
      color: 'text-red-600',
      notifications: 4
    },
    {
      id: 'ai-insights',
      label: 'IA Insights',
      icon: Brain,
      color: 'text-purple-600',
      notifications: 8
    }
  ];

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

          {/* Navigation Menu - Scrollable on smaller screens */}
          <div className="hidden lg:flex items-center space-x-1 overflow-x-auto">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeModule === item.id ? "default" : "ghost"}
                onClick={() => setActiveModule(item.id)}
                className={`relative text-xs px-2 py-1 ${activeModule === item.id ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-gray-100'}`}
                size="sm"
              >
                <item.icon className={`h-3 w-3 mr-1 ${activeModule === item.id ? 'text-white' : item.color}`} />
                <span className={activeModule === item.id ? 'text-white' : 'text-gray-700'}>
                  {item.label}
                </span>
                {item.notifications > 0 && (
                  <Badge 
                    className="ml-1 bg-red-500 text-white text-xs px-1 py-0 min-w-[1rem] h-4"
                  >
                    {item.notifications}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <select 
              value={activeModule} 
              onChange={(e) => setActiveModule(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded px-3 py-1 text-sm"
            >
              {menuItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label} {item.notifications > 0 && `(${item.notifications})`}
                </option>
              ))}
            </select>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <FileText className="h-4 w-4 mr-1" />
              Relatórios
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
      </div>
    </nav>
  );
};

export default Navigation;
