import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>İzmir Oto Kurtarma | Acil Yol Yardım & Çekici Hizmeti</title>
        <meta
          name="description"
          content="İzmir'de 7/24 oto kurtarma, çekici ve acil yol yardım hizmeti. Hızlı, güvenilir ve profesyonel destek için hemen arayın!"
        />
        <meta
          name="keywords"
          content="oto kurtarma, izmir çekici, izmir oto yardım, yol yardım, araç çekici, izmir oto kurtarma"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-br from-yellow-50 to-blue-100 text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Ana İçerik */}
        <main className="flex flex-col items-center justify-center px-4 py-16 gap-8">
          <div className="shadow-xl rounded-xl overflow-hidden">
            <Image
              src="/(7).jpeg"
              alt="İzmir oto kurtarma"
              width={800}
              height={500}
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 drop-shadow-md">
            İzmir Oto Kurtarma — Yolda Kalmayın, Biz Varız!
          </h1>
          <p className="text-center max-w-2xl text-gray-700 text-lg">
            Türkiye’nin her noktasına <strong>7/24 çekici</strong> ve <strong>acil yol yardım hizmeti</strong>. Güvenilir, hızlı ve uygun fiyatlı çözümler için bizi arayın.
          </p>
          <a
            href="tel:+905551112233"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-lg"
          >
            Hemen Ara: 0555 111 22 33
          </a>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-600 bg-white border-t">
          © {new Date().getFullYear()} <span className="font-semibold">Yarımada Oto Kurtarma</span>. Tüm hakları saklıdır.
        </footer>
      </div>
    </>
  );
}
