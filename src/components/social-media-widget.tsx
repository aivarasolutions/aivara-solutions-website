import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface SocialMediaWidgetProps {
  className?: string;
}

export default function SocialMediaWidget({ className = '' }: SocialMediaWidgetProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a 
        href="https://www.facebook.com/share/1F3GADmDyn/?mibextid=wwXIfr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary hover:text-secondary transition-colors"
        aria-label="Facebook"
      >
        <FaFacebook size={24} />
      </a>
      <a 
        href="https://www.instagram.com/aivarasolutions" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary hover:text-secondary transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/company/aivara-solutions-llc/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary hover:text-secondary transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
