const TESTIMONIALS = [
 { id: 1, name: 'John Doe', role: 'CEO at TechCorp', text: 'Arik transformed our online presence completely. His attention to detail and design sensibility are unmatched.', image: 'JD' },
 { id: 2, name: 'Sarah Smith', role: 'Founder, DesignCo', text: 'Working with Arik was a seamless experience. He understood our vision right away and delivered beyond expectations.', image: 'SS' },
 { id: 3, name: 'Mike Johnson', role: 'Marketing Director', text: 'The new website has significantly improved our conversion rates. Beautiful design backed by solid development.', image: 'MJ' },
 { id: 4, name: 'Emily Brown', role: 'Creative Lead', text: 'A true professional who brings both technical expertise and creative brilliance to every project.', image: 'EB' },
];

export default function Testimonials() {
 return (
 <section className="py-32 bg-[#0e0e0e]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-20 animate-fade-in-up">
 <p className="text-sm uppercase tracking-widest text-[#dac5a7] mb-4">Testimonials</p>
 <h2 className=" text-4xl md:text-5xl font-medium mb-6 text-[#dac5a7] tracking-wide">
 What my<br/>clients say
 </h2>
 <p className="text-[#dac5a7] text-sm max-w-lg mx-auto">
 Read what previous clients have said about my services and the results they achieved.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {TESTIMONIALS.map((testimonial) => (
 <div key={testimonial.id} className="bg-[#0e0e0e] border border-white/5 p-8 md:p-12 rounded-sm hover:border-gold/30 transition-colors flex flex-col h-full">
 <div className="flex items-center gap-2 text-[#dac5a7] mb-6">
 {/* Quote icon placeholder */}
 <span className="text-4xl leading-none ">"</span>
 </div>
 <p className="text-[#dac5a7] text-lg leading-relaxed mb-8 flex-grow">
 {testimonial.text}
 </p>
 <div className="flex items-center gap-4 mt-auto">
 <div className="w-12 h-12 rounded-full bg-[#0e0e0e] flex items-center justify-center text-xs text-[#dac5a7] border border-white/10 uppercase tracking-widest">
 {testimonial.image}
 </div>
 <div>
 <h4 className="text-[#dac5a7] font-medium text-sm">{testimonial.name}</h4>
 <p className="text-xs text-[#dac5a7]">{testimonial.role}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
