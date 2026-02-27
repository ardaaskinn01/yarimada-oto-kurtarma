"use client";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';
// CallButton bileşenini import edin
import CallButton from "../components/CallButton";

export default function Iletisim() {
  // Telefon numarasını burada tanımlayın
  const phoneNumber = "+905340314004"; // Boşlukları kaldırarak temiz bir numara

  return (
    <>

      <Head>
        <title>İletişim | Yarımada Oto Kurtarma - Bize Ulaşın</title>
        <meta
          name="description"
          content="Yarımada Oto Kurtarma ile iletişime geçin."
        />
        <meta property="og:title" content="İletişim | Yarımada Oto Kurtarma" />
        <meta property="og:description" content="Yol yardım çekiciyle iletişime geçin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yarimadaotokurtarma.com.tr/iletisim" />
      </Head>

      <div className="min-h-screen bg-blue-900 text-gray-100 flex flex-col relative">
        <Navbar />

        {/* Arkaplan image + blur + siyah opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/(5).jpeg"
            alt="Background"
            fill
            className="object-cover blur-xs"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="flex-grow py-24 px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-blue-400 mb-8">İLETİŞİM</h1>

          {/* Kare kutu, genişlik ve yükseklik eşit */}
          <div
            style={{ width: "400px", height: "400px" }}
            className="bg-white/20 p-10 rounded-2xl border-4 border-blue-400 shadow-lg backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Adres</h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                194.Sokak No.24 <br />
                Mordoğan Mahallesi <br />
                Karaburun/İzmir
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Telefon</h2>
              {/* Burayı CallButton ile değiştiriyoruz */}
              <div className="flex justify-center"> {/* Butonu ortalamak için ekledik */}
                <CallButton
                  phoneNumber={phoneNumber}
                  label="+90 (534) 031 40 04" // Butonun üzerinde görünmesini istediğiniz metin
                  className="w-full sm:w-auto" // Butonun genişliğini ayarlayabiliriz
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}