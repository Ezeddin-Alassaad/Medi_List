import { Article } from "@/utils/types";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

const fetchArticles = async () => {
  const response = await fetch(
    "https://cdn.jsdelivr.net/gh/Ezeddin-Alassaad/Diseases@ba3033e4234e4d2bd26d279f6d1bc19c1ac0ce1d/diseases.json",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
};

const SingleArticlePage = async ({ params }: PageProps) => {
  const resolvedParams = await params; // ✅ Await params directly
  const id = resolvedParams.id;

  if (!id) {
    return <div className="text-center text-red-600 text-xl mt-10">Invalid Article ID</div>;
  }

  const articles: Article[] = await fetchArticles();
  const article = articles.find((item) => item.id === parseInt(id, 10));

  if (!article) {
    return <div className="text-center text-red-600 text-xl mt-10">Article not found</div>;
  }
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
          <Link
            href="#"
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