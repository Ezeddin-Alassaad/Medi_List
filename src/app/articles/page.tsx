import ArticlesItem from "@/components/articles/ArticlesItem";
import { Article } from "@/utils/types";

const ArticlesPage = async () => {
  try {
    const response = await fetch("https://cdn.jsdelivr.net/gh/Ezeddin-Alassaad/Diseases@546c7def36bf46c09b318c0a137a6efab2680fda/diseases.json");

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    const articles: Article[] = await response.json();

    return (
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center text-white p-8 bg-cover bg-center" 
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="flex items-center justify-center flex-wrap gap-7 py-10">
          {articles.map((item) => (
            <ArticlesItem article={item} key={item.id} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
    return <div>Error loading articles</div>;
  }
};

export default ArticlesPage;