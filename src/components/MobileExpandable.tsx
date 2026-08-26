import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function MobileExpandable({ 
  children,
  collapsedHeight = "80px",
  gradientFrom = "from-card-bg" // Change based on background
}: { 
  children: React.ReactNode, 
  collapsedHeight?: string,
  gradientFrom?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpander, setNeedsExpander] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the content is taller than the collapsed height
    if (contentRef.current) {
      // Create a temporary div to measure true height on mobile
      const height = contentRef.current.scrollHeight;
      // Convert collapsedHeight to pixels roughly if it's '80px'
      const maxH = parseInt(collapsedHeight);
      if (height > maxH + 20) { // Add a buffer so we don't show "more" for 5px
        setNeedsExpander(true);
      }
    }
  }, [children, collapsedHeight]);

  return (
    <div className="w-full">
      {/* Mobile view */}
      <div className="md:hidden w-full">
        <div 
          ref={contentRef}
          className={`relative overflow-hidden transition-all duration-300 ease-in-out`}
          style={{ maxHeight: isExpanded ? '2000px' : collapsedHeight }}
        >
           {children}
           
           {!isExpanded && needsExpander && (
             <div className={`absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t ${gradientFrom} to-transparent pointer-events-none`} />
           )}
        </div>
        
        {needsExpander && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-primary-theme font-medium hover:text-accent-theme inline-flex items-center gap-1 text-sm underline decoration-primary-theme/30 underline-offset-4"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="w-3 h-3" /></>
            ) : (
              <>Read More <ChevronDown className="w-3 h-3" /></>
            )}
          </button>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block w-full">
        {children}
      </div>
    </div>
  );
}
