import React from 'react';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AlertCircle, Clock, ShieldCheck, Zap } from 'lucide-react';

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
      <div className="mb-8 animate-float">
        <span className="bg-primary/20 text-primary border border-primary/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] animate-pulse-glow glow-crimson">
          ACESSO LIMITADO
        </span>
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] text-glow-crimson">
          O PAINEL QUE <span className="text-primary">MUDA O JOGO</span> ESTÁ LIBERADO.
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
          A tecnologia que os grandes players usam em segredo acaba de abrir uma brecha. 
          <span className="text-white font-medium block mt-2">Você foi selecionado para o teste exclusivo.</span>
        </p>
      </div>

      {/* Urgency Alert */}
      <div className="w-full max-w-lg mb-12 transform hover:scale-[1.02] transition-transform">
        <div className="bg-muted/30 border border-primary/30 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap className="w-24 h-24 text-primary" />
          </div>
          
          <div className="flex items-center gap-3 justify-center mb-2">
            <AlertCircle className="text-primary w-6 h-6 animate-bounce" />
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">ALERTA DE ESCASSEZ</h3>
          </div>
          
          <p className="text-muted-foreground text-lg">
            ⚠️ Somente <span className="text-primary font-bold">100 testes</span> liberados para hoje.
          </p>
          
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden max-w-[200px]">
              <div className="h-full bg-primary w-[87%] animate-pulse" />
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest">87% das vagas preenchidas</p>
        </div>
      </div>

      {/* Support Information */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12 text-muted-foreground font-medium">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <Clock className="w-4 h-4 text-secondary" />
          <span>Suporte das 08h às 02h</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <ShieldCheck className="w-4 h-4 text-whatsapp" />
          <span>Teste 100% Garantido</span>
        </div>
      </div>

      {/* Main CTA */}
      <div className="w-full flex justify-center mb-6">
        <WhatsAppButton />
      </div>

      {/* Fear of Missing Out Footer */}
      <div className="max-w-md mx-auto">
        <p className="text-muted-foreground text-sm italic">
          *Aviso: O link de acesso expira assim que as 100 vagas forem preenchidas. Se você sair desta página, sua oportunidade pode ser repassada para o próximo da fila.
        </p>
      </div>

      {/* Visual Accents - Background Glows */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
    </main>
  );
}
