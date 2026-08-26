import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function ReadMore({ 
  text, 
  maxLength = 120, 
  className = "" 
}: { 
  text: string, 
  maxLength?: number, 
  className?: string 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text || text.length <= maxLength) {
    return <span className={className}>{text}</span>;
  }

  const truncatedText = text.substring(0, maxLength).trim() + '...';

  return (
    <div className={className}>
      <span className="md:hidden">
        {isExpanded ? text : truncatedText}
      </span>
      <span className="hidden md:inline">{text}</span>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden ml-1 text-primary-theme font-medium hover:text-accent-theme inline-flex items-center gap-1 text-sm underline decoration-primary-theme/30 underline-offset-4 mt-1"
      >
        {isExpanded ? (
          <>Read less <ChevronUp className="w-3 h-3" /></>
        ) : (
          <>Read more <ChevronDown className="w-3 h-3" /></>
        )}
      </button>
    </div>
  );
}
