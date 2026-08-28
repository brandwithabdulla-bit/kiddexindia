import React from 'react';
import './WhatsAppButton.css';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "919180233454"; // Provided by user

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello%20Kiddex%20India!%20%F0%9F%91%8B%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20products.`, '_blank');
  };

  return (
    <div className="whatsapp-floating-btn" onClick={handleClick} title="Chat with us">
      <MessageCircle size={28} color="white" />
    </div>
  );
};

export default WhatsAppButton;
