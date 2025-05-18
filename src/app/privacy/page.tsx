import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPage = () => {
  return (
    <>
      <Head>
        <title>سياسة الخصوصية - MediList</title>
        <meta
          name="description"
          content="تعرف على سياسة الخصوصية الخاصة بـ MediList وكيف نحمي معلوماتك الشخصية."
        />
      </Head>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Header */}
        <header className="bg-green-700 bg-opacity-80 text-white p-4 text-center text-2xl font-bold">
          سياسة الخصوصية لـ MediList
        </header>

        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="max-w-7xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-extrabold text-green-700 mb-4">
              حماية خصوصيتك هي أولويتنا
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              في MediList، نلتزم بحماية معلوماتك الشخصية وضمان سلامتها.
              توضح سياسة الخصوصية هذه الأنواع المختلفة من المعلومات التي نقوم بجمعها وكيفية استخدامها.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mb-2">جمع المعلومات</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              نقوم بجمع المعلومات التي تقدمها طوعاً عند التسجيل أو أثناء استخدام خدماتنا،
              مثل الاسم، وعنوان البريد الإلكتروني، وغيرها من البيانات ذات الصلة.
              كما نقوم بجمع بعض البيانات تلقائياً أثناء تصفحك لموقعنا مثل عنوان IP ونوع المتصفح.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mb-2">استخدام المعلومات</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              نستخدم المعلومات التي نجمعها لتحسين خدماتنا، وتقديم محتوى مخصص،
              وضمان تجربة مستخدم أفضل، بالإضافة إلى التواصل معك بخصوص التحديثات والعروض الخاصة.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mb-2">حماية المعلومات</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              نتبع إجراءات أمنية صارمة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الكشف.
              تُخزن بياناتك في بيئة آمنة مع بروتوكولات حماية متقدمة.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mb-2">مشاركة المعلومات</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              لا نقوم ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف خارجية دون موافقتك،
              إلا في الحالات التي يقتضيها القانون أو لحماية حقوقنا وممتلكاتنا.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mb-2">حقوق المستخدم</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها إذا رغبت بذلك.
              إذا كان لديك أي استفسار أو ترغب في ممارسة حقوقك، فلا تتردد في{' '}
              <Link href="/contact" className="text-green-600 hover:underline">
                التواصل معنا
              </Link>.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mb-2">التغييرات على سياسة الخصوصية</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              قد نقوم بتحديث سياسة الخصوصية هذه بين الحين والآخر لتعكس التغييرات في ممارساتنا أو القوانين المعمول بها.
              سيتم نشر أي تغييرات على هذه الصفحة.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mb-2">الاتصال بنا</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية الخاصة بنا،
              يرجى عدم التردد في{' '}
              <Link href="/contact" className="text-green-600 hover:underline">
                التواصل معنا
              </Link>.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default PrivacyPage;
