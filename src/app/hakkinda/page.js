import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';

export default function Hakkinda() {
  return (
    <>

      <Head>
        <title>Hakkımızda | Güvenilir Oto Kurtarma ve Mor Yağ Hizmetleri</title>
        <meta
          name="description"
          content="3 yılı aşkın süredir oto kurtarma ve araç bakım sektöründe hizmet veren firmamız, 7/24 destek, full kasko ve taşıma kasko güvencesi ve Mor Yağ markasıyla aracınıza tam destek sunuyor."
        />
      </Head>

      <div className="relative min-h-screen">
        {/* Arkaplan Görseli */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/(6).jpeg"
            alt="background"
            fill
            className="object-cover blur-xs"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-75" />
        </div>

        <Navbar />

        {/* İçerik */}
        <main className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-gray-200">
          <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Hakkımızda
          </h1>

          <section className="mb-10">
            <p className="text-lg leading-8">
              3 yılı aşkın süredir oto kurtarma sektöründe faaliyet gösteren firmamız, güvenilirlik ve hızlı müdahale anlayışıyla yolda kalanların her zaman yanında olmuştur. 7/24 kesintisiz destek sunarak, araç sahiplerine en zorlu anlarında güvenli ve hızlı çözümler sağlıyoruz. Donanımlı araç filomuz ve deneyimli ekibimizle hem şehir içi hem de şehir dışı oto kurtarma hizmetlerini başarıyla yürütüyoruz.
            </p>
          </section>

          <section className="mb-10">
            <p className="text-lg leading-8">
              Müşteri memnuniyetini temel ilke edinen firmamız, full kasko ve kapsamındaki kurtarma hizmetleriyle araç sahiplerine ekstra güvenlik sunmaktadır. Anlaşmalı sigorta firmalarıyla entegre çalışan sistemimiz sayesinde, kaza veya arıza anlarında hızlı ve sorunsuz bir müdahale süreci sağlıyor, tüm işlemleri sizin adınıza kolaylaştırıyoruz. Güçlü iletişim altyapımız ve operasyonel yetkinliğimizle her zaman yanınızdayız.
            </p>
          </section>

          <section>
            <p className="text-lg leading-8">
              Ayrıca otomotiv sektöründe “Mor Yağ” markamızla da faaliyet gösteriyoruz. Yüksek kalite standartlarına sahip motor yağları ve araç bakım ürünlerimizle, aracınızın performansını ve güvenliğini en üst seviyeye taşıyoruz. Hem yol yardım hem de bakım çözümlerimizle aracınıza uçtan uca hizmet sunuyoruz.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
