import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary/50 rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-primary/25 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/5 left-1/5 w-1 h-1 bg-primary/35 rounded-full animate-ping"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Shooting stars */}
        <div className="absolute top-1/4 left-0 w-px h-px bg-primary opacity-0 animate-shooting-star"></div>
        <div
          className="absolute top-1/2 left-0 w-px h-px bg-primary opacity-0 animate-shooting-star"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-3/4 left-0 w-px h-px bg-primary opacity-0 animate-shooting-star"
          style={{ animationDelay: "8s" }}
        ></div>
      </div>

      <div className="max-w-2xl text-center space-y-8 relative z-10">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center animate-pulse">
            <span className="text-primary-foreground font-bold text-2xl">
              Y
            </span>
          </div>
          <span className="text-3xl font-bold text-foreground">
            YaYa Wallet
          </span>
        </div>

        {/* Welcome Message */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Welcome to Your
            <span className="text-primary block">Transaction Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Monitor and manage your wallet transactions with our powerful REST
            API dashboard
          </p>
        </div>

        {/* Access Dashboard Button */}
        <div className="pt-4">
          <Link href="/app">
            <Button
              size="lg"
              className="text-lg px-12 py-4 h-auto hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Access Dashboard
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
