import React from 'react';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AlertCircle, Clock, ShieldCheck, Zap, Trophy, ShieldAlert, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-24 text-center">
      {/* Logo Section */}
      <div className="mb-10 transform hover:scale-105 transition-transform duration-500">
        <Image 
          src="/logo.png" 
          alt="Elite Access Logo" 
          width={280} 
          height={100} 
          className="mx-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* Top Badge */}
      <div className="mb-8 animate-float flex flex-col items-center gap-3">
        <span className="bg-whatsapp/20 text-whatsapp border border-whatsapp/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] animate-pulse-glow glow-whatsapp">
          SISTEMA ONLINE
        </span>
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
          <Smartphone className="w-4 h-4" />
          Exclusivo para Android
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[0.95] text-glow-crimson uppercase">
          🔥 O PAINEL MAIS COMPLETO DO <span className="text-primary italic">FREE FIRE</span> LIBEROU <span className="underline decoration-primary">TESTE GRÁTIS 5 DIAS</span> 😳
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
          O Sistema 2026 chegou com a nova e exclusiva função de <span className="text-white font-bold text-glow-crimson">DESBANIMENTO</span>, Antiban e Camuflagem avançada. 
          <span className="text-white font-medium block mt-2">Domine os apostadinhos e nunca mais sinta o medo de perder sua conta principal.</span>
        </p>
      </div>

      {/* Pain Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12">
        <div className="bg-card/50 border border-border p-4 rounded-xl flex items-center gap-3 text-left">
          <ShieldAlert className="text-primary w-10 h-10 shrink-0" />
          <div>
            <p className="text-white font-bold text-sm uppercase">Anti-Blacklist</p>
            <p className="text-xs text-muted-foreground">Jogue sem cair em partidas com hacks.</p>
          </div>
        </div>
        <div className="bg-card/50 border border-border p-4 rounded-xl flex items-center gap-3 text-left">
          <Trophy className="text-secondary w-10 h-10 shrink-0" />
          <div>
            <p className="text-white font-bold text-sm uppercase">Foco nos Apostados</p>
            <p className="text-xs text-muted-foreground">Invisível para qualquer sistema de live.</p>
          </div>
        </div>
        <div className="bg-card/50 border border-border p-4 rounded-xl flex items-center gap-3 text-left border-primary/40">
          <Smartphone className="text-whatsapp w-10 h-10 shrink-0" />
          <div>
            <p className="text-white font-bold text-sm uppercase">100% Android</p>
            <p className="text-xs text-muted-foreground">Otimizado para todos os celulares Android.</p>
          </div>
        </div>
      </div>

      {/* Urgency Alert */}
      <div className="w-full max-w-lg mb-12 transform hover:scale-[1.02] transition-transform">
        <div className="bg-muted/30 border border-primary/30 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertCircle className="w-24 h-24 text-primary" />
          </div>
          
          <div className="flex items-center gap-3 justify-center mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">ÚLTIMAS LICENÇAS DISPONÍVEIS</h3>
          </div>
          
          <p className="text-muted-foreground text-lg">
            ⚠️ O servidor suporta apenas mais <span className="text-primary font-bold">12 pessoas</span> com teste ativo.
          </p>
          
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden max-w-[250px]">
              <div className="h-full bg-primary w-[92%] animate-pulse" />
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-[0.3em]">92% DA CAPACIDADE ATINGIDA</p>
        </div>
      </div>

      {/* Main CTA */}
      <div className="w-full flex justify-center mb-6">
        <WhatsAppButton />
      </div>

      {/* Support Information */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12 text-muted-foreground font-medium">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <Clock className="w-4 h-4 text-secondary" />
          <span>Suporte Imediato (08h - 02h)</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <ShieldCheck className="w-4 h-4 text-whatsapp" />
          <span>Método 100% Anti-Ban</span>
        </div>
      </div>

      {/* Fear of Missing Out Footer */}
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-primary font-bold text-sm uppercase tracking-tighter">
          ⚠️ ATENÇÃO: NÃO FUNCIONA EM IPHONE (iOS)
        </p>
        <p className="text-muted-foreground text-sm italic">
          *Se você fechar esta página, seu IP será removido da lista de prioridade e a vaga grátis será liberada para outro jogador Android.
        </p>
      </div>

      {/* Visual Accents - Background Glows */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
    </main>
  );
}
