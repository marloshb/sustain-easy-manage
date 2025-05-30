
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Play, Award, Users } from 'lucide-react';

const TrainingLibrary = () => {
  const courses = [
    {
      title: 'Implementação ISO 14001',
      duration: '4 horas',
      level: 'Intermediário',
      enrolled: 45,
      completed: 38,
      framework: 'ISO 14001'
    },
    {
      title: 'Relatórios GRI',
      duration: '6 horas',
      level: 'Avançado',
      enrolled: 22,
      completed: 18,
      framework: 'GRI'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Biblioteca de Treinamento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-gray-600">{course.framework}</p>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>{course.duration}</span>
                      <Badge>{course.level}</Badge>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso</span>
                        <span>{course.completed}/{course.enrolled}</span>
                      </div>
                      <Progress value={(course.completed / course.enrolled) * 100} className="h-2" />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Play className="h-3 w-3 mr-1" />
                        Iniciar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Users className="h-3 w-3" />
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

export default TrainingLibrary;
