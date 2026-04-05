import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Downloader } from './components/Downloader';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Music2, 
  HardDrive, 
  Video, 
  Pin, 
  FileArchive 
} from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/instagram" replace />} />
          
          <Route path="instagram" element={
            <Downloader 
              platform="instagram" 
              title="Instagram" 
              placeholder="Paste Instagram post or reel URL here..." 
              icon={<Instagram className="w-8 h-8" />}
              color="bg-pink-600"
            />
          } />
          
          <Route path="tiktok" element={
            <Downloader 
              platform="tiktok" 
              title="TikTok" 
              placeholder="Paste TikTok video URL here..." 
              icon={<Music2 className="w-8 h-8" />}
              color="bg-black"
            />
          } />
          
          <Route path="facebook" element={
            <Downloader 
              platform="facebook" 
              title="Facebook" 
              placeholder="Paste Facebook video URL here..." 
              icon={<Facebook className="w-8 h-8" />}
              color="bg-blue-700"
            />
          } />
          
          <Route path="twitter" element={
            <Downloader 
              platform="twitter" 
              title="Twitter" 
              placeholder="Paste Twitter/X video URL here..." 
              icon={<Twitter className="w-8 h-8" />}
              color="bg-sky-500"
            />
          } />
          
          <Route path="youtube" element={
            <Downloader 
              platform="youtube" 
              title="YouTube" 
              placeholder="Paste YouTube video or shorts URL here..." 
              icon={<Youtube className="w-8 h-8" />}
              color="bg-red-600"
            />
          } />
          
          <Route path="mediafire" element={
            <Downloader 
              platform="mediafire" 
              title="MediaFire" 
              placeholder="Paste MediaFire file URL here..." 
              icon={<FileArchive className="w-8 h-8" />}
              color="bg-blue-500"
            />
          } />
          
          <Route path="capcut" element={
            <Downloader 
              platform="capcut" 
              title="CapCut" 
              placeholder="Paste CapCut template or video URL here..." 
              icon={<Video className="w-8 h-8" />}
              color="bg-gray-800"
            />
          } />
          
          <Route path="drive" element={
            <Downloader 
              platform="drive" 
              title="Google Drive" 
              placeholder="Paste Google Drive file URL here..." 
              icon={<HardDrive className="w-8 h-8" />}
              color="bg-green-600"
            />
          } />
          
          <Route path="pinterest" element={
            <Downloader 
              platform="pinterest" 
              title="Pinterest" 
              placeholder="Paste Pinterest pin URL here..." 
              icon={<Pin className="w-8 h-8" />}
              color="bg-red-700"
            />
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
