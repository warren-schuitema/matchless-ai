import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Resources from "@/pages/Resources";
import BookAssessment from "@/pages/BookAssessment";
import ResultsRedirect from "@/pages/ResultsRedirect";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTopButton from "@/components/BackToTopButton";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/results" component={ResultsRedirect} />
      <Route path="/resources" component={Resources} />
      <Route path="/book" component={BookAssessment} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <BackToTopButton />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
