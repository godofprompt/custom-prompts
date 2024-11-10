import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  onCheckout: () => void;
}

export default function PricingCard({ onCheckout }: PricingCardProps) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="px-6 py-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <h3 className="text-2xl font-bold">Professional Plan</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">$29</span>
          <span className="text-blue-100">/month</span>
        </div>
      </div>
      
      <div className="px-6 py-8">
        <ul className="space-y-4">
          {[
            'AI-powered prompt generation',
            'Email delivery within minutes',
            'Access to prompt templates',
            'Priority support',
            'Unlimited revisions'
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={onCheckout}
          className="mt-8 w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
        >
          Start Generating
        </button>
      </div>
    </div>
  );
}