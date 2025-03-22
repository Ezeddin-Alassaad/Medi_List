import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const HealthyPage = () => {
  return (
    <>
      <Head>
        <title>أسلوب الحياة الصحي - Healthy Lifestyle</title>
        <meta name="description" content="Explore healthy lifestyle tips, expert advice, and more." />
      </Head>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Header */}
        <header className="bg-green-700 bg-opacity-80 text-white p-4 text-center text-2xl font-bold">
          أسلوب الحياة الصحي
        </header>

        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="max-w-9xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-extrabold text-green-700 mb-4">
              مرحباً بكم في أسلوب الحياة الصحي
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              اكتشف نصائح وحيل لتحسين نمط حياتك من خلال مقالاتنا وخبراتنا في التغذية، واللياقة البدنية، والصحة النفسية.
              هدفنا مساعدتك على الوصول إلى أفضل نسخة من نفسك بطريقة بسيطة وممتعة.
            </p>

            {/* Tips Section */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-green-600 mb-2">نصائح للحياة الصحية</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>تناول وجبات متوازنة غنية بالفيتامينات والمعادن.</li>
                <li>مارس الرياضة بانتظام لتحسين لياقتك البدنية.</li>
                <li>احرص على شرب كمية كافية من الماء يومياً.</li>
                <li>خصص وقتاً للاسترخاء والابتعاد عن التوتر.</li>
                <li>احصل على قسط كافٍ من النوم لتحسين صحتك العامة.</li>
              </ul>
            </div>

            {/* Testimonials Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">آراء العملاء</h3>
              <div className="space-y-6">
                <div className="flex items-start border-l-4 border-green-500 pl-4">
                  <FaStar className="text-yellow-500 mr-2" />
                  <blockquote className="italic text-gray-600">
                    &quot;لقد ساعدتني النصائح في هذه الصفحة على تحسين نمط حياتي بشكل كبير. أشعر الآن بأنني أكثر صحة وسعادة!&quot;
                    <footer className="mt-2 font-bold">- أحمد</footer>
                  </blockquote>
                </div>
                <div className="flex items-start border-l-4 border-green-500 pl-4">
                  <FaStar className="text-yellow-500 mr-2" />
                  <blockquote className="italic text-gray-600">
                    &quot;المقالات هنا مفيدة جداً! شكرًا لكم على المعلومات القيمة.&quot;
                    <footer className="mt-2 font-bold">- سارة</footer>
                  </blockquote>
                </div>
                <div className="flex items-start border-l-4 border-green-500 pl-4">
                  <FaStar className="text-yellow-500 mr-2" />
                  <blockquote className="italic text-gray-600">
                    &quot;تجربتي مع هذه النصائح كانت رائعة! أنصح الجميع بمتابعتها.&quot;
                    <footer className="mt-2 font-bold">- فاطمة</footer>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-6 rounded transition"
              >
                تواصل معنا
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HealthyPage;