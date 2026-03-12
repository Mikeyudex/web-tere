export default function Achievements() {
 const ACHIEVEMENTS = [
 { label: 'PROJECTS DONE', value: '150+' },
 { label: 'HAPPY CLIENTS', value: '300+' },
 { label: 'SUCCESS RATE', value: '100%' },
 { label: 'FOLLOWERS', value: '100k' },
 ];

 return (
 <section className="py-20 border-y border-white/5 bg-[#0e0e0e]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-4 text-center">
 {ACHIEVEMENTS.map((item) => (
 <div key={item.label} className="flex flex-col items-center justify-center p-4 group">
 <h3 className=" text-4xl md:text-5xl font-light text-[#dac5a7] mb-2 group-hover:text-[#dac5a7] transition-colors">{item.value}</h3>
 <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#dac5a7]">{item.label}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
