import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Head>
        <title>MediList - معلومات عن الأمراض المزمنة</title>
        <meta name="description" content="اكتشف معلومات شاملة حول الأمراض المزمنة وطرق الوقاية لتعزيز صحتك." />
        <meta name="keywords" content="MediList, الأمراض المزمنة, الوقاية, الصحة, نصائح طبية" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://medilist.vercel.app" />
        <meta property="og:title" content="MediList - دليلك للصحة" />
        <meta property="og:description" content="تعرف على الأمراض المزمنة وطرق الوقاية منها عبر موقع MediList." />
        <meta property="og:image" content="https://medilist.vercel.app/og-image.jpg" />
        <meta property="og:url" content="https://medilist.vercel.app" />
      </Head>

      {/* Main Content with Scroll Snap */}
      <main className="relative z-20 text-center">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8">
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/background.jpg" 
              alt="Background Image"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="100vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            مرحبًا بك في MediList
          </h1>
          <p className="text-2xl mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            اكتشف معلومات شاملة حول الأمراض المزمنة وطرق الوقاية لتعزيز صحتك
          </p>
          <Link href="#diseases" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            استكشف المزيد <ArrowRightIcon className="w-6 h-6 ml-2" />
          </Link>
        </section>

        {/* Statistics Section with Integrated Image */}
        <section className="py-12 px-4 sm:px-8 bg-gray-100 text-gray-800" style={{ direction: 'rtl' }}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 transform transition-all hover:shadow-xl">
            <div className="mb-6">
              <Image 
                src="/sa.png" 
                alt="صورة توضيحية للأمراض المزمنة في المملكة العربية السعودية"
                width={800}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg transform transition-all hover:scale-105"
              />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">نسبة الأمراض المزمنة المنتشرة حالياً في المملكة العربية السعودية</h2>
            <p className="text-lg leading-relaxed">
              وفقاً لنشرة إحصاءات الحالة الصحية لعام ٢٠٢٤ التي أصدرتها الهيئة العامة للإحصاء، فقد وأظهرت نتائج النشرة أن %18.95 من البالغين (15 سنة فأكثر) لديهم أحد الأمراض المزمنة، وكان من أبرز الأمراض المزمنة (السكري، ضغط الدم، الكوليسترول، أمراض القلب والشرايين، أمراض السرطان) وعلى مستوى الأطفال (أقل من 15 سنة) بلغت نسبة المصابين بأحد الأمراض المزمنة %9.4 وكان من أبرز الأمراض المزمنة (الربو، الحساسية، الأمراض الجلدية، فرط الحركة، التوحُّد، السكري، السرطان)، وبينت نتائج النشرة أن نسبة البالغين (15 سنة فأكثر) الذين يعانون من اكتئاب شديد بلغت %1.8، وكانت عند الإناث بنسبة %2.5 مقابل %1.4 عند الذكور، بينما بلغت نسبة الذين يعانون من القلق الشديد %0.2 كانت لدى الإناث بنسبة %0.4 مقابل %0.2 للذكور.[٢]
            </p>
          </div>
        </section>

        {/* Featured Diseases Section - Enhanced */}
        <section id="diseases" className="min-h-screen flex flex-col justify-center items-center snap-start bg-gradient-to-br from-blue-50 to-gray-100 text-gray-800 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto p-8 bg-white/80 rounded-3xl shadow-lg">
            <h2 className="text-5xl font-extrabold mb-12 text-center text-blue-700 tracking-tight">الأمراض المزمنة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden">
                <Image src="/diabetes.jpg" alt="السكري" width={400} height={200} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-center">السكري</h3>
                  <p className="text-gray-700 text-center">تعرف على أنواع السكري وأعراضه وطرق التحكم فيه.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden">
                <Image src="/hypertension.jpg" alt="ارتفاع ضغط الدم" width={400} height={200} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-center">ارتفاع ضغط الدم</h3>
                  <p className="text-gray-700 text-center">اكتشف كيف يمكنك الوقاية من ارتفاع ضغط الدم والتحكم فيه.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden">
                <Image src="/other-diseases.jpg" alt="أمراض أخرى" width={400} height={200} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-center">أمراض أخرى</h3>
                  <p className="text-gray-700 text-center">تعرف على أمراض مزمنة أخرى وكيفية التعامل معها.</p>
                </div>
              </div>
            </div>
            <Link href="/articles" className="mt-12 inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full px-10 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              استكشاف المزيد من الأمراض
            </Link>
          </div>
        </section>

        {/* Prevention and Treatment Section */}
        <section id="prevention" className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 sm:px-8">
          <div className="max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 text-center transform transition-all hover:shadow-2xl">
            <div className="flex justify-center mb-6">
              <ShieldCheckIcon className="w-16 h-16 text-white animate-pulse" />
            </div>
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-yellow-300">الوقاية</span> <span className="text-white">والعلاج</span>
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              <span className="font-bold">تعلم طرق الوقاية</span> من الأمراض المزمنة وأحدث العلاجات الفعالة لضمان صحة أفضل.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              من خلال اتباع نصائحنا، يمكنك <span className="font-bold">تقليل المخاطر</span> والحفاظ على حياة صحية.
            </p>
            <Link href="/healthy" className="inline-block px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-lg hover:bg-yellow-100 hover:scale-105 transition-all duration-300">
              تعرف على المزيد
            </Link>
          </div>
        </section>

        {/* Healthy Lifestyle Section */}
        <section id="lifestyle" className="min-h-screen flex flex-col justify-center items-center snap-start bg-white text-gray-800 px-4 sm:px-8">
          <h2 className="text-4xl font-extrabold mb-8 text-center">أسلوب حياة صحي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl">
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square">
                <Image 
                  src="/healthy-food.jpg" 
                  alt="Healthy Food"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-4">تغذية صحية</h3>
              <p className="text-gray-700 text-center">اكتشف الأطعمة التي تعزز صحتك وتقوي مناعتك.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square">
                <Image 
                  src="/exercise.jpg" 
                  alt="Exercise"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-4">ممارسة الرياضة</h3>
              <p className="text-gray-700 text-center">تعرف على أفضل التمارين للحفاظ على لياقتك البدنية.</p>
            </div>
          </div>
          <Link href="/healthy" className="mt-8 inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            احصل على نصائح إضافية
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;