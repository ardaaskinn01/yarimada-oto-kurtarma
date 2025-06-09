import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "next/head";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import CallButton from "./components/CallButton";

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
       <script async src="https://www.googletagmanager.com/gtag/js?id=AM-17178419606" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AM-17178419606');
            `,
          }}
        />
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



      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
        <Navbar />

        <main className="container mx-auto px-4 py-24">
          {/* Hero Bölümü */}
          <section className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Metin Alanı */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Profesyonel</span> Oto Kurtarma Hizmeti
              </h1>
              <p className="text-lg text-gray-600">
                7/24 acil İzmir, Karaburun, Urla oto kurtarma,  yol yardım, çekici hizmeti ve full kaskolu + taşıma kaskolu oto kurtarma çözümleri.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <CallButton phoneNumber={phoneNumber} />
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <p className="text-sm text-blue-700">Acil Yardım Hattı</p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>

            {/* Görsel */}
            <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/70 backdrop-blur-xs"></div>
              <Image
                src="/(4).jpeg"
                alt="İzmir oto kurtarma"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <CallButton
                  phoneNumber={phoneNumber}
                  className="bg-blue-500 hover:bg-blue-700 text-blue-600 py-4 px-8 rounded-full shadow-lg animate-pulse"
                />
              </div>
            </div>
          </section>

          {/* Hizmetler */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              <span className="text-blue-600">Neden</span> Bizi Tercih Etmelisiniz?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-blue-50/50 hover:bg-blue-100/50 p-6 rounded-lg border border-blue-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Müşteri Yorumları */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              <span className="text-blue-600">Müşterilerimizin</span> Yorumları
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Ali Y.",
                  comment: "Gece saat 3'te bile hemen geldiler. Hızlı ve güvenilir hizmet. Teşekkürler!",
                },
                {
                  name: "Ayşe K.",
                  comment: "Çekici çağırmam gerektiğinde ilk aradığım yer. Fiyatlar da gayet uygun.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md border border-blue-100"
                >
                  <p className="italic text-gray-600">&quot;{item.comment}&quot;</p>
                  <p className="mt-4 text-right font-semibold text-blue-800">- {item.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Acil Çağrı */}
          <section className="bg-red-600 rounded-xl p-6 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ACİL DURUMDA MISINIZ?</h2>
            <CallButton
              phoneNumber={phoneNumber}
              label={`ACİL ÇAĞRI: ${phoneNumber}`}
              className="bg-blue-500 hover:bg-blue-700 text-red-600 mx-auto py-4 px-8"
            />
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Yarımada Oto Kurtarma</h3>
                <p className="text-gray-400">Profesyonel Yol Yardım Hizmetleri</p>
              </div>
              <div className="space-y-2 text-center md:text-right">
                <a
                  href="tel:+905340314004"
                  className="text-xl font-bold hover:text-blue-400 transition-colors"
                >
                  {phoneNumber}
                </a>
                <p className="text-gray-400">7/24 Hizmet Hattı</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Yarımada Oto Kurtarma, Türkiye&apos;nin her yerine, özellikle İzmir&apos;in Karaburun ve Urla ilçelerine özel 7/24 çekici ve yol yardım hizmeti sunar.
              <strong> Karaburun çekici</strong>, <strong>Urla çekici</strong> ve <strong>İzmir çekici</strong> arayanlar için güvenilir çözümler.
            </p>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              © {new Date().getFullYear()} Yarımada Oto Kurtarma. Tüm hakları saklıdır.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
