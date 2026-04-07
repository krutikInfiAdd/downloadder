import React, { useState } from 'react';
import axios from 'axios';
import { Download, Loader2, ExternalLink, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DownloaderProps {
  platform: string;
  title: string;
  placeholder: string;
  icon: React.ReactNode;
  color: string;
}

interface DownloadResult {
  downloadUrl: string;
  title: string;
  thumbnail: string;
}

export const Downloader: React.FC<DownloaderProps> = ({ platform, title, placeholder, icon, color }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${url}`);
    if (!url) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.get(`https://downloaderbackend-5uz7.onrender.com/${platform}?url=${url}`);

      const apiData = response.data;

      if (!apiData.success || !apiData.data || apiData.data.length === 0) {
        throw new Error("No media found");
      }

      const item = apiData.data[0];

      setResult({
        downloadUrl: item.url,
        title: item.title || "Downloaded Media",
        thumbnail: item.thumbnail || item.url
      });

    } catch (err: any) {
      setError(err.message || "Failed to process URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className={`h-2 ${color}`} />
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl bg-opacity-10 ${color.replace('bg-', 'bg-opacity-10 text-')}`}>
              {icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{title} Downloader</h2>
          </div>

          <form onSubmit={handleDownload} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-12"
              />
              {url && (
                <button
                  type="button"
                  onClick={() => setUrl('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !url}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${loading || !url ? 'bg-gray-300 cursor-not-allowed' : `${color} hover:opacity-90 active:scale-[0.98]`
                }`}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Download className="w-5 h-5" />
              )}
              {loading ? 'Processing...' : 'Get Download Link'}
            </button>
          </form>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </motion.div>
            )}

            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={result.thumbnail}
                    alt="Thumbnail"
                    className="w-full md:w-48 h-32 object-cover rounded-lg shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 line-clamp-2 mb-2">{result.title}</h3>
                      <p className="text-sm text-gray-500 truncate max-w-[250px]">{url}</p>
                    </div>
                    {/* <a
                      href={result.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all ${color} hover:opacity-90`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Download Now
                    </a> */}
                    <a
                      href={`https://downloaderbackend-5uz7.onrender.com/download?url=${encodeURIComponent(result.downloadUrl)}`}
                      className={`mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all ${color} hover:opacity-90`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Download Now
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>Paste the URL of the {title} content you want to download.</p>
        <p className="mt-1 italic">Note: This is a demonstration. Real downloads would require backend integration.</p>
      </div>
    </div>
  );
};
