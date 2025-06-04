import React from 'react';
import { Coffee } from 'lucide-react';

const FloatingButton: React.FC = () => {
  return (
    <a
      href="https://ko-fi.com/Z8Z3W37RG"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#ff6900] text-black px-6 py-3 rounded-full shadow-lg hover:bg-[#ff8c00] transition-all duration-300 hover:scale-110 hover:shadow-[#ff690066] flex items-center space-x-2"
      aria-label="Support us on Ko-fi"
    >
      <Coffee className="h-5 w-5" />
      <span className="font-medium">¿Nos apoyas?</span>
    </a>
  );
};

export default FloatingButton;