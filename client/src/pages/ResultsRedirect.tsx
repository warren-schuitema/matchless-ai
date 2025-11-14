import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ResultsRedirect() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/services");
  }, [setLocation]);

  return null;
}
