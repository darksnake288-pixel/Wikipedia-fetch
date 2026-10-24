import { useState, useRef } from 'react'

interface Article {
  title: string;
  description: string;
  url: string;
}

const App = () => {
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const search = useRef<HTMLInputElement>(null);

  async function handleSubmit() {
    const term = search.current?.value.trim();
    if (!term) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(term)}&format=json&origin=*`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      const titles: string[] = data[1] || [];
      const descriptions: string[] = data[2] || [];
      const urls: string[] = data[3] || [];

      const formattedResults: Article[] = titles.map((title, index) => ({
        title,
        description: descriptions[index] || '',
        url: urls[index] || '',
      }));

      setResults(formattedResults);
    } catch (err) {
      console.error('Error: ', err);
      setError('An error occurred while fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <div className="flex gap-6 py-5">
        {/** Title Page */}
        <h1 className="text-center text-4xl font-extralight">Wiki Fetcher</h1>
      </div>
      <div className="flex flex-col items-center gap-6 py-5 border-2 border-white shadow-2xl rounded-2xl w-[420px] max-h-[600px] overflow-hidden">
        {/** Input Page */}
        <label className="text-center text-xl font-extralight">
          Enter a Wikipedia Article:
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            ref={search}
            placeholder="Enter a Wikipedia Article"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
            className="border-2 border-black rounded-md p-2 outline-none"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-black text-white rounded-full p-2 w-[80px] h-[50px] hover:bg-amber-100 hover:text-black active:scale-90 transition disabled:opacity-50"
          >
            {loading ? '...' : 'Search'}
          </button>
        </div>

        {/** Output Page */}
        <div className="w-full px-6 overflow-y-auto flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Results:</h2>
          {loading && <p className="text-gray-500 text-sm">Loading...</p>}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {!loading && !error && results.length === 0 && (
            <p className="text-gray-400 text-sm">No results to display.</p>
          )}
          {!loading &&
            results.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-2 flex flex-col gap-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-medium text-base"
                >
                  {item.title}
                </a>
                {item.description && (
                  <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
