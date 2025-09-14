export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient + abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-800 to-brand-900 animate-gradient-x"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-mint-500 opacity-20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-mint-400 opacity-20 rounded-full filter blur-3xl animate-pulse-slow delay-2000"></div>

      {/* Content */}
      <div className="relative text-center px-6 z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-mint-500 mb-4 leading-tight">
          Keystone Group Investment
        </h1>
        <p className="text-xl md:text-2xl text-neutral-100 mb-6 max-w-2xl mx-auto">
          Driving sustainable growth across transportation, finance, consultancy, and real estate in Ethiopia and beyond.
        </p>
        <a
          href="/about"
          className="bg-mint-500 text-brand-900 px-6 py-3 rounded-lg font-semibold hover:bg-mint-400 transition shadow-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
