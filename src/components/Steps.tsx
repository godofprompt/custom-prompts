import React from 'react';
import { PenLine, Mail, CreditCard, Sparkles } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      icon: PenLine,
      title: 'Describe Your Needs',
      description: 'Tell us what kind of prompt you need'
    },
    {
      icon: Mail,
      title: 'Add Your Email',
      description: 'Where should we send your prompt?'
    },
    {
      icon: CreditCard,
      title: 'Quick Payment',
      description: 'Secure checkout with Stripe'
    },
    {
      icon: Sparkles,
      title: 'Receive Your Prompt',
      description: 'Get your AI-crafted prompt via email'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <step.icon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}