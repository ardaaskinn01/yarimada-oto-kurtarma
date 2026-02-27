import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "next/head";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import CallButton from "./components/CallButton";
import Script from 'next/script';
import CommentSection from "./components/CommentSection";

export default function Home() {
  const phoneNumber = "+90 (534) 031 40 04";

  const services = [
    {
      title: "7/24 Acil Yardım",
      description: "Gece gündüz demeden her an yanınızdayız"
    },
    {
      title: "Uzman Ekip",
      description: "Deneyimli ve sertifikalı teknik personel"
    },
    {
      title: "Hızlı Müdahale",
      description: "Siz aradıktan sonra en hızlı şekilde oradayız."
    },
    {
      title: "Modern Ekipman",
      description: "Son teknoloji kurtarma araç ve gereçleri"
    },
    {
      title: "Sigortalı Taşıma",
      description: "Full kaskolu + taşıma kaskolu güvenli taşıma hizmeti"
    },
    {
      title: "Uygun Fiyat",
      description: "Cebinizi yakmayacak ekonomik çözümler"
    }
  ];

  return (
    <>

      <Head>
        <title>İzmir, Karaburun ve Urla Çekici | 7/24 Oto Kurtarma ve Yol Yardım</title>
        <meta
          name="description"
          content="İzmir, Karaburun ve Urla bölgelerinde 7/24 oto kurtarma, çekici ve acil yol yardım hizmeti. Hızlı ve güvenilir destek için hemen arayın!"
        />
        <meta
          name="keywords"
          content="oto kurtarma, izmir çekici, karaburun çekici, urla çekici, izmir oto yardım, yol yardım, araç çekici, izmir oto kurtarma"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>



      <div className="min-h-screen bg-[#070b14] text-gray-200 selection:bg-blue-500/30">
        <Navbar />

        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <main className="container mx-auto px-4 py-32 relative z-10">
          {/* Hero Bölümü */}
          <section className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            {/* Metin Alanı */}
            <div className="lg:w-1/2 space-y-8 relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                İzmir & Çevresi 7/24 Aktif
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Yolda Kalmaya Son: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Premium Oto Kurtarma</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                Urla, Karaburun ve İzmir'in her noktasına dakikalar içinde ulaşıyoruz. Full kaskolu, güvenli ve profesyonel çekici hizmetinde 1 numarayız.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mt-10">
                <CallButton
                  phoneNumber={phoneNumber}
                  label="HEMEN ARA"
                  className="bg-blue-600 hover:bg-blue-500 text-white py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1 transition-all duration-300 text-lg"
                />
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col justify-center items-center sm:items-start group hover:bg-white/10 transition-colors">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Acil Yardım Hattı</p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>

            {/* Görsel */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-80 z-10"></div>
                <Image
                  src="/(4).jpeg"
                  alt="İzmir oto kurtarma"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-4/5 text-center">
                  <p className="text-white/90 text-sm uppercase tracking-widest bg-black/50 backdrop-blur-md py-2 px-4 rounded-full border border-white/20 inline-block shadow-xl">
                    Güvenli Taşıma Garantisi
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px]"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[50px]"></div>
            </div>
          </section>

          {/* Hizmetler */}
          <section className="mb-24 relative">
            <div className="text-center mb-16">
              <h2 className="text-sm text-blue-500 font-bold tracking-widest uppercase mb-3">Neden Biz?</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">
                Fark Yaratan Hizmetlerimiz
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-transform">
                    <CheckCircleIcon className="h-7 w-7 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Müşteri Yorumları */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-sm text-blue-500 font-bold tracking-widest uppercase mb-3">Referanslarımız</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">
                Müşteri Deneyimleri
              </h3>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <CommentSection />
            </div>
          </section>

          {/* Floating Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-red-500 text-white p-4 rounded-full shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center border border-red-400/50"
            aria-label="Acil Yardım Hattı"
          >
            <span className="text-2xl animate-pulse">🚨</span>
            <span className="ml-3 font-semibold mr-2">ACİL</span>
          </a>

          {/* Acil Çağrı */}
          <section className="bg-gradient-to-r from-red-800 to-red-600 backdrop-blur-lg rounded-3xl p-12 text-center border border-red-500/30 shadow-[0_0_50px_rgba(220,38,38,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white drop-shadow-md">YOLDA MI KALDINIZ?</h2>
              <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto font-light">Ekiplerimiz çağrınızı bekliyor. Bizimle iletişime geçtiğiniz anda bulunduğunuz konuma en yakın aracımız hareket eder.</p>
              <CallButton
                phoneNumber={phoneNumber}
                label={`ACİL ÇAĞRI: ${phoneNumber}`}
                className="bg-white hover:bg-gray-100 text-red-700 mx-auto py-5 px-10 text-xl font-bold rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#03060c] border-t border-white/5 pt-16 pb-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <h3 className="text-3xl font-black mb-3 text-white tracking-tight">Yarımada <span className="text-blue-500">Oto Kurtarma</span></h3>
                <p className="text-gray-500 max-w-xs font-light tracking-wide">İzmir ve ilçelerinde profesyonel, güvenilir ve jet hızında yol yardım hizmeti.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center md:items-end w-full md:w-auto">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">7/24 Kesintisiz Hat</p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 font-light border-y border-white/5 py-8 mb-8">
              <p className="leading-relaxed">
                Yarımada Oto Kurtarma olarak; müşteri öncelikli yaklaşımımızla tam donanımlı araç filomuzla hizmet veriyoruz. Önceliğimiz aracınızın ve sizin güvenliğinizdir.
              </p>
              <p className="leading-relaxed md:text-right">
                <strong className="text-gray-300">İzmir Çekici</strong>, <strong className="text-gray-300">Urla Çekici</strong>, <strong className="text-gray-300">Karaburun Çekici</strong>, <strong className="text-gray-300">Çeşme Yol Yardım</strong> hizmetlerimiz için tek adresiniz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
              <p>© {new Date().getFullYear()} Yarımada Oto Kurtarma. Tüm hakları saklıdır.</p>
              <p className="mt-2 sm:mt-0">Premium SEO & Web Altyapısı</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
