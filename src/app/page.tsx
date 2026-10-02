import { MapPin, Calendar, Users, Search } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-300/40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/40 blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-yellow-300/30 blur-[80px] pointer-events-none" />

      {/* Hero Section */}
      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800 mb-6 leading-tight">
          Temukan Keajaiban <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Yogyakarta</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl">
          Rencanakan liburan impianmu dengan cerdas. Platform terpadu untuk mengeksplorasi destinasi, penginapan, dan transportasi dengan bantuan AI.
        </p>

        {/* Search Widget - Glassmorphism */}
        <div className="w-full glass rounded-3xl p-3 md:p-4 mb-20 shadow-xl border border-white/50">
          <div className="flex flex-col md:flex-row items-center gap-2">
            
            {/* Location Input */}
            <div className="flex-1 w-full bg-white/40 hover:bg-white/60 transition-colors rounded-2xl p-4 flex items-center gap-3">
              <MapPin className="text-primary w-5 h-5" />
              <div className="flex-1 text-left">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Lokasi</p>
                <input 
                  type="text" 
                  placeholder="Mau ke mana di Jogja?" 
                  className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 font-medium"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="flex-1 w-full bg-white/40 hover:bg-white/60 transition-colors rounded-2xl p-4 flex items-center gap-3">
              <Calendar className="text-primary w-5 h-5" />
              <div className="flex-1 text-left">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Tanggal</p>
                <input 
                  type="text" 
                  placeholder="Check in - Check out" 
                  className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 font-medium"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full md:w-auto h-full min-h-[72px] bg-primary hover:bg-primary/90 text-white rounded-2xl px-8 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/30">
              <Search className="w-5 h-5" />
              <span className="font-semibold text-lg">Cari</span>
            </button>
            
          </div>
        </div>
      </div>
    </main>
  );
}
