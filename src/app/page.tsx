import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/background.jpg" 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-20 text-center py-16 px-4 sm:px-8">
        <h1 className="text-5xl font-extrabold mb-6">
           مرحبًا بك في
           MediList
           </h1>
        <p className="text-2xl mb-12 max-w-2xl mx-auto">
          اكتشف معلومات شاملة حول الأمراض المزمنة وطرق الوقاية لتعزيز صحتك
        </p>

        {/* Featured Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">الأمراض المزمنة</h2>
            <p className="text-gray-700">تعرف على السكري، ارتفاع ضغط الدم، وأمراض أخرى</p>
            <Link href="/articles" className="text-blue-500 mt-4 block text-center">
              استكشاف الأمراض
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">الوقاية والعلاج</h2>
            <p className="text-gray-700">تعلم طرق الوقاية وأحدث العلاجات الفعالة</p>
            <Link href="/healthy" className="text-blue-500 mt-4 block text-center">
              تعرف على المزيد
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">أسلوب حياة صحي</h2>
            <p className="text-gray-700">اكتشف العادات الصحية التي تعزز حياتك</p>
            <Link href="/healthy" className="text-blue-500 mt-4 block text-center">
              احصل على نصائح
            </Link>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-4 text-white"> انضم اليوم إلى
          MediList 
          </h3>
          <p className="text-xl text-white mb-6">
           و احصل على معلومات موثوقة لدعم صحتك واتخاذ قرارات أفضل لحياتك
          </p>
          <Link href="/healthy" className="text-lg text-blue-600 hover:text-blue-900">
           اكتشف كيف يمكن أن يساعدك MediList
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
