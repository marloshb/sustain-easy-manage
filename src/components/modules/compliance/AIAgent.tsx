
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, MessageCircle, Search, FileText, TrendingUp } from 'lucide-react';

const AIAgent = () => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Olá! Sou seu assistente de conformidade com IA. Como posso ajudá-lo hoje?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    'Como implementar ISO 14001?',
    'Quais são os requisitos do ESRS E1?',
    'Como calcular emissões Escopo 3?',
    'Diferenças entre GRI e CSRD?'
  ];

  const aiFeatures = [
    {
      title: 'Análise de Documentos',
      description: 'IA analisa documentos para verificar conformidade',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Análise Preditiva',
      description: 'Prevê riscos de não conformidade',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Pesquisa Inteligente',
      description: 'Busca contextual em padrões e requisitos',
      icon: Search,
      color: 'green'
    }
  ];

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, 
        { type: 'user', content: inputMessage },
        { type: 'ai', content: 'Analisando sua pergunta... Esta é uma resposta simulada da IA.' }
      ]);
      setInputMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {aiFeatures.map((feature, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-4 text-center">
              <feature.icon className={`h-8 w-8 mx-auto mb-2 text-${feature.color}-600`} />
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Agente de IA para Conformidade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`mb-3 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg max-w-xs ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white border'
                  }`}>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Digite sua pergunta sobre conformidade..."
                className="flex-1 px-3 py-2 border rounded-lg"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button onClick={sendMessage}>
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Perguntas Frequentes:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAgent;
