import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import PromptForm from './components/PromptForm';
import PricingCard from './components/PricingCard';
import Steps from './components/Steps';

function App() {
  const [showPricing, setShowPricing] = useState(false);
  const [formData, setFormData] = useState<{ prompt: string; email: string } | null>(null);

  const handleFormSubmit = (data: { prompt: string; email: string }) => {
    setFormData(data);
    setShowPricing(true);
  };

  const handleCheckout = () => {
    // This will be integrated with your backend
    console.log('Processing checkout for:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Wand2 className="h-12 w-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">AI Prompt Generator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your ideas into powerful prompts using our advanced AI technology.
            Perfect for content creators, marketers, and AI enthusiasts.
          </p>
        </div>

        <div className="mb-24">
          <Steps />
        </div>

        <div className="flex flex-col items-center justify-center gap-12">
          {!showPricing ? (
            <PromptForm onSubmit={handleFormSubmit} />
          ) : (
            <div className="animate-fade-in">
              <PricingCard onCheckout={handleCheckout} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;