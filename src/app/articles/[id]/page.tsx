/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable */
import { Article } from "@/utils/types";
import { FaBook, FaStethoscope, FaExclamationTriangle, FaDiagnoses, FaPills, FaLink } from 'react-icons/fa';

const videoLinks = [
  "https://youtu.be/Syw3DqawJ74?si=sCtdnRA0ddIFgqqL",       // مرض السكري
  "https://youtu.be/eb-92ppbW6I?si=BkyZ_hMmhjX2Eqxc",     // ارتفاع ضغط الدم
  "https://youtu.be/5FC0QHQCdFs?si=CgiXNFNv4j7vbWLO",      // سرطان الثدي
  "https://youtu.be/9aI6shQThDg?si=DhHIk0K5TFLvEf9U",     // سرطان الغدة الدرقية
  "https://youtu.be/7GLx_EpmB2o?si=pPS3fcJJbcLoIw5t",     // سرطان القولون
  "https://youtu.be/ifzlLq2TqXY?si=GNaBVLyJxTAfCeFo",     // الربو
  "https://youtube.com/shorts/BPdOsfxu-Jg?si=AjaseigWl0TagxRO",     // حب الشباب
  "https://youtu.be/KKxuCvcx4mQ?si=aARZ9_UhssoC_LIy",      // الثعلبة
  "https://youtu.be/jmJRYb3nnY4?si=jCO8UW1l-Wb9O3zH",     // الصرع
  "https://youtu.be/YgK52xFcn-A?si=Af_WIXsKgBFwehlu",     // اضطراب فرط الحركة ونقص الانتباه
  "https://youtu.be/kklueIZIy2Q?si=dWVQPgFOZ34m57y0",      // فرط كوليسترول الدم
  "https://youtu.be/Ou1gfXd96kA?si=ir7_ADaAPH8lNSta"       // التهاب المفاصل الروماتويدي
];

interface PageProps {
  params: Promise<{ id: string }>;
}

const fetchArticles = async () => {
  const response = await fetch(
    "https://cdn.jsdelivr.net/gh/Ezeddin-Alassaad/Diseases@e34aa68b575521fcaa854c62ee7ce48769ff8095/diseases.json",
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch articles");
  return response.json();
};

// Function to split the body into sections based on headers
const splitBodyIntoSections = (body: string) => {
  const sections = body.split(/\n(?=[^\n]+:)/);
  return sections.map((section) => {
    const [header, ...content] = section.split(":");
    return { header: header.trim(), content: content.join(":").trim() };
  });
};

// Function to process content into lists or paragraphs
const processContent = (content: string) => {
  const lines = content.split("\n").filter(line => line.trim() !== "");
  if (lines.every(line => line.trim().startsWith("-"))) {
    return (
      <ul className="list-disc list-inside space-y-2">
        {lines.map((line, index) => (
          <li key={index} className="text-gray-700">{line.trim().substring(1).trim()}</li>
        ))}
      </ul>
    );
  } else {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
    ));
  }
};

// Header icons mapping
const headerIcons:Record<string, JSX.Element> = {
  "تعريف المرض": <FaBook className="text-teal-600" />,
  "الأعراض": <FaStethoscope className="text-teal-600" />,
  "المضاعفات": <FaExclamationTriangle className="text-teal-600" />,
  "التشخيص": <FaDiagnoses className="text-teal-600" />,
  "الأنواع": <FaPills className="text-teal-600" />,
  "العلاج": <FaPills className="text-teal-600" />,
  "الأدوية": <FaPills className="text-teal-600" />,
  "المراجع": <FaLink className="text-teal-600" />,
  "النظام الغذائي الموصى به": <FaPills className="text-teal-600" />,
};

const SingleArticlePage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  if (!id) return <div className="text-center text-red-600 text-xl mt-10">Invalid Article ID</div>;

  const articles: Article[] = await fetchArticles();
  const article = articles.find((item) => item.id === parseInt(id, 10));

  if (!article) return <div className="text-center text-red-600 text-xl mt-10">Article not found</div>;

  const articleIndex = articles.findIndex((a) => a.id === article.id);
  const videoUrl = videoLinks[articleIndex];

  // Split the body into sections
  const sections = splitBodyIntoSections(article.body);

  return (
    <section className="min-h-screen w-full px-4 py-12 bg-gradient-to-br from-teal-50 via-blue-100 to-purple-100 rtl:text-right">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 transition-all duration-300 hover:shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6 text-center tracking-wide">
          {article.title}
        </h1>
        <div className="text-gray-600 text-center mb-8 text-sm italic">
          {new Date().toLocaleDateString()}
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-12 rounded-full"></div>

        {/* Table of Contents */}
        <div className="mb-12">
          <h3 className="text-xl font-medium text-gray-700 mb-4">المحتويات</h3>
          <ul className="list-disc list-inside space-y-1">
            {sections.map((section, index) => (
              <li key={index}>
                <a href={`#section-${index}`} className="text-blue-600 hover:underline">
                  {section.header}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Render sections with icons and processed content */}
        {sections.map((section, index) => (
          <div key={index} id={`section-${index}`} className="mb-12 p-6 rounded-xl bg-gray-50 border-l-4 border-teal-400 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              {headerIcons[section.header] || <FaBook className="text-teal-600" />}
              <h2 className="text-2xl font-semibold text-teal-800 ml-2">{section.header}</h2>
            </div>
            {section.header === "المراجع" ? (
              <ul className="list-decimal list-inside space-y-2">
                {section.content.split(", ").map((ref, refIndex) => (
                  <li key={refIndex}>
                    <a href={ref.trim()} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {ref.trim()}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              processContent(section.content)
            )}
          </div>
        ))}
        {/* Embedded Video */}
        {videoUrl && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">فيديو توضيحي</h3>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoUrl.split("/").pop()?.split("?")[0] || "default-fallback-id"}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleArticlePage;