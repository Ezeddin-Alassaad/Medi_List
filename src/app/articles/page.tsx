import ArticlesItem from "@/components/articles/ArticlesItem";
import { Article } from "@/utils/types";

const references = [
  { url: "https://www.frontiersin.org/articles/10.3389/fpubh.2023.1092905/full", description: "دراسة حول الصحة العامة والأمراض المزمنة." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410", description: "أعراض وأسباب ارتفاع ضغط الدم." },
  { url: "https://www.moh.gov.sa/awarenessplateform/ChronicDisease/Pages/Hypertension.aspx", description: "معلومات حول ارتفاع ضغط الدم من وزارة الصحة." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/high-blood-pressure/diagnosis-treatment/drc-20373417", description: "تشخيص وعلاج ارتفاع ضغط الدم." },
  { url: "https://pubmed.ncbi.nlm.nih.gov/33001495/", description: "دراسة علمية حول ارتفاع ضغط الدم." },
  { url: "https://pubmed.ncbi.nlm.nih.gov/37395100/", description: "دراسة علمية حول الأمراض المزمنة." },
  { url: "https://pubmed.ncbi.nlm.nih.gov/37450768/", description: "دراسة حول إدارة أزمات ارتفاع ضغط الدم." },
  { url: "https://www.cureus.com/articles/183851-management-strategies-for-hypertensive-crisis-a-systematic-review", description: "مراجعة استراتيجيات إدارة أزمة ارتفاع ضغط الدم." },
  { url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/dash-diet/art-20047110", description: "نظام DASH الغذائي لضبط ضغط الدم." },
  { url: "https://www.drugs.com/", description: "معلومات شاملة عن الأدوية." },
  { url: "https://pubmed.ncbi.nlm.nih.gov/31513033/", description: "دراسة علمية حول سرطان الثدي." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/breast-cancer/symptoms-causes/syc-20352470", description: "أعراض وأسباب سرطان الثدي." },
  { url: "https://pubmed.ncbi.nlm.nih.gov/31161190/", description: "دراسة حول عوامل خطر سرطان الثدي." },
  { url: "https://www.bcrf.org/about-breast-cancer/breast-cancer-diet-nutrition", description: "تغذية وسرطان الثدي." },
  { url: "https://pubmed.ncbi.nlm.nih.gov/36856579/", description: "دراسة حول التهاب القولون وسرطانه." },
  { url: "https://acsjournals.onlinelibrary.wiley.com/doi/10.3322/caac.21772", description: "تقرير حول تقدم أبحاث السرطان." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/colon-cancer/diagnosis-treatment/drc-20353674", description: "تشخيص وعلاج سرطان القولون." },
  { url: "https://doi.org/10.29074/ascls.2022003206", description: "دراسة حول سرطان القولون والمستقيم." },
  { url: "https://www.healthline.com/health-news/inflammation-diet-colorectal-cancer-risk#The-best-foods-to-lower-cancer-risk", description: "نظام غذائي لتقليل مخاطر سرطان القولون." },
  { url: "https://www.frontiersin.org/articles/10.3389/fonc.2022.859984/full", description: "دراسة حول أورام الغدة الدرقية." },
  { url: "https://www.ncbi.nlm.nih.gov/books/NBK45929/", description: "كتاب عن اضطرابات الغدة الدرقية." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/thyroid-cancer/diagnosis-treatment/drc-20354167", description: "تشخيص وعلاج سرطان الغدة الدرقية." },
  { url: "https://aacrjournals.org/cebp/article/31/10/1812/709882/Cancer-Progress-and-Priorities-Epidemiology-of", description: "أولويات وبائيات سرطان الغدة الدرقية." },
  { url: "https://www.thyroid.org/low-iodine-diet/", description: "نظام غذائي منخفض اليود للغدة الدرقية." },
  { url: "https://pubmed.ncbi.nlm.nih.gov/32167552/", description: "دراسة حول الربو ومسبباته." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/asthma/symptoms-causes/syc-20369653", description: "أعراض وأسباب الربو." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/asthma/in-depth/asthma/art-20045198", description: "إدارة وعلاج الربو." },
  { url: "https://my.clevelandclinic.org/health/diseases/6424-asthma", description: "معلومات شاملة حول الربو." },
  { url: "https://www.healthline.com/health-news/can-vitamin-d-reduce-asthma-attack-risk", description: "فيتامين D وتقليل مخاطر الربو." },
  { url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8971946/", description: "دراسة حول حب الشباب." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/acne/symptoms-causes/syc-20368047", description: "أعراض وأسباب حب الشباب." },
  { url: "https://www.healthline.com/health/anti-acne-diet#foods-to-include", description: "نظام غذائي لمكافحة حب الشباب." },
  { url: "https://www.moh.gov.sa/HealthAwareness/EducationalContent/Diseases/Dermatology/Pages/Alopecia.aspx", description: "معلومات حول الثعلبة من وزارة الصحة." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/ringworm-scalp/symptoms-causes/syc-20354918", description: "أعراض وأسباب سعفة فروة الرأس." },
  { url: "https://www.mayoclinic.org/ar/diseases-conditions/ringworm-scalp/diagnosis-treatment/drc-20354924", description: "تشخيص وعلاج سعفة فروة الرأس." },
  { url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5939003/", description: "دراسة حول الثعلبة وأسبابها." },
  { url: "https://www.healthline.com/health/alopecia-areata-and-diet#what-to-eat", description: "نظام غذائي لعلاج الثعلبة." },
];

const ArticlesPage = async () => {
  try {
    const response = await fetch("https://cdn.jsdelivr.net/gh/Ezeddin-Alassaad/Diseases@e34aa68b575521fcaa854c62ee7ce48769ff8095/diseases.json");

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
        {/* References Section */}
        <div className="w-full max-w-4xl mt-12 bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 text-right" style={{ direction: 'rtl' }}>
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">المراجع</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-500">
            {references.map((ref, index) => (
              <li key={index}>
                <a 
                  href={ref.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline break-all"
                >
                  {ref.url}
                </a>
                <p className="text-gray-900 mt-1">{ref.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
    return <div>Error loading articles</div>;
  }
};

export default ArticlesPage;