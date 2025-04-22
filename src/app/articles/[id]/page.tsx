import { Article } from "@/utils/types";
import Link from "next/link";

// Step 1: Create video links array matching your JSON order
const videoLinks = [
  "https://youtu.be/Syw3DqawJ74?si=sCtdnRA0ddIFgqqL",       // 11. السكري
  "https://youtu.be/NQy7ufCRWXE?si=XyiOLQKTx5wB0l_7",       // 12. الربو
  "https://youtu.be/bmkamXLuiZM?si=3acXZqjUMj3LArMH",       // 13. التهاب الكبد ب
  "https://youtu.be/Ou1gfXd96kA?si=N4ZI7e-zlhLOlAwQ",       // 14. التهاب المفاصل الروماتويدي
  "https://youtu.be/tEhJYe8ICyM?si=XE6b-DZSK1-TlY7C",       // 15. السكتة الدماغية
  "https://youtu.be/F_w92DZG2Jc?si=kRkww1KnnKUK2b9W",       // 16. الذئبة الحمامية
  "https://youtu.be/rh3YPCGrDl8?si=wDHtFQEiVrBynzen",       // 17. التصلب المتعدد
  "https://youtu.be/t2clDnSWf5g?si=-flk1fdK2GsUZ2cy",       // 18. السرطان
  "https://youtu.be/Y4r09ewArf4?si=Ug81Wqm821fLyYdX",       // 19. الاكتئاب
  "https://youtu.be/I6MmZkKADEk?si=nAWWPImD9ru0c8kd",       // 20. التليف الكيسي
  "https://youtu.be/APs6JltknXA?si=3N6cpQB_78r5li7W",       // 25. الزهايمر
  "https://youtu.be/8VraoicroFA?si=tOpjI5u9wvkfW3Fn",       // 26. أمراض الكلى
  "https://youtu.be/JUPn8Vq2H4I?si=sFHl1jYXEKykZo85",       // 27. القولون العصبي
  "https://youtu.be/_lRpFnFW_L8?si=H9d2-BbO5v4ssu3e",       // 28. الصداع النصفي
  "https://youtu.be/urq_HdUY2Eg?si=y-UJ5-KLOsbyvW-D",       // 29. الصدفية
  "https://youtu.be/J74IAXMWjk4?si=BMpWJyCXDugJY5Md"        // 30. فيبروميالغيا
];

interface PageProps {
  params: Promise<{ id: string }>;
}

const fetchArticles = async () => {
  const response = await fetch(
    "https://cdn.jsdelivr.net/gh/Ezeddin-Alassaad/Diseases@546c7def36bf46c09b318c0a137a6efab2680fda/diseases.json",
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch articles");
  return response.json();
};

const SingleArticlePage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  if (!id) return <div className="text-center text-red-600 text-xl mt-10">Invalid Article ID</div>;

  const articles: Article[] = await fetchArticles();
  const article = articles.find((item) => item.id === parseInt(id, 10));

  if (!article) return <div className="text-center text-red-600 text-xl mt-10">Article not found</div>;

  // Step 2: Find the corresponding video link
  const articleIndex = articles.findIndex(a => a.id === article.id);
  const videoUrl = videoLinks[articleIndex];

  return (
    <section
      className="container mx-auto w-full px-5 pt-8 md:w-3/4 rtl:text-right relative bg-cover bg-center"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage: "url('/background.jpg')",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="relative bg-white p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto z-10 mt-20 md:mt-24 transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center sm:text-3xl md:text-5xl leading-tight tracking-wide hover:text-blue-500 transition-all">
          {article.title}
        </h1>
        <div className="text-gray-400 text-center mb-6 text-sm sm:text-base italic">
          {new Date().toLocaleDateString()}
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 leading-relaxed sm:text-base md:text-lg mb-8">
          {article.body}
        </p>
        <div className="flex justify-center">
          {/* Step 3: Add dynamic video link */}
          <Link
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            مشاهدة الفيديو
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleArticlePage;