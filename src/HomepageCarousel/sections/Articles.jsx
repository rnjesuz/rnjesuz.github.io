import { articles } from "../data/articles";

const Articles = () => (
  <div className="w-full h-full p-8 grid place-items-center overflow-y-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 text-left">
      {articles.map((article, index) => (
        <a
          key={index}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-md mx-auto border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
        >
          <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.description}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Articles;
