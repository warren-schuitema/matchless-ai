import { useEffect, useState } from "react";

export default function TidyCalEmbed() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="tidycal"]');
    
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load TidyCal script");
    };
    
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-[600px]">
      {!scriptLoaded && (
        <div className="flex items-center justify-center py-20">
          <p className="text-muted-foreground">Loading calendar...</p>
        </div>
      )}
      <div 
        className="tidycal-embed" 
        data-path="warren2"
        data-testid="tidycal-embed"
        style={{ minHeight: scriptLoaded ? '600px' : '0' }}
      />
    </div>
  );
}
