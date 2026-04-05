import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Music2, 
  HardDrive, 
  Video, 
  Pin, 
  FileArchive,
  Download
} from 'lucide-react';
import { cn } from '../lib/utils';

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, path: '/instagram', color: 'bg-pink-600' },
  { id: 'tiktok', name: 'TikTok', icon: Music2, path: '/tiktok', color: 'bg-black' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, path: '/facebook', color: 'bg-blue-700' },
  { id: 'twitter', name: 'Twitter', icon: Twitter, path: '/twitter', color: 'bg-sky-500' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, path: '/youtube', color: 'bg-red-600' },
  { id: 'mediafire', name: 'MediaFire', icon: FileArchive, path: '/mediafire', color: 'bg-blue-500' },
  { id: 'capcut', name: 'CapCut', icon: Video, path: '/capcut', color: 'bg-gray-800' },
  { id: 'drive', name: 'Drive', icon: HardDrive, path: '/drive', color: 'bg-green-600' },
  { id: 'pinterest', name: 'Pinterest', icon: Pin, path: '/pinterest', color: 'bg-red-700' },
];

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                MediaDownloader
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/privacy" className={({ isActive }) => cn("text-sm font-medium transition-colors", isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600")}>Privacy Policy</NavLink>
              <NavLink to="/terms" className={({ isActive }) => cn("text-sm font-medium transition-colors", isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600")}>Terms of Service</NavLink>
              <NavLink to="/contact" className={({ isActive }) => cn("text-sm font-medium transition-colors", isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600")}>Contact Us</NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 overflow-x-auto lg:overflow-visible flex lg:flex-col gap-1 no-scrollbar">
              {platforms.map((platform) => (
                <NavLink
                  key={platform.id}
                  to={platform.path}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                    isActive 
                      ? "bg-blue-50 text-blue-600 shadow-sm" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <platform.icon className={cn("w-5 h-5")} />
                  {platform.name}
                </NavLink>
              ))}
            </div>
          </aside>

          {/* Page Content */}
          <section className="flex-1">
            <Outlet />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 MediaDownloader. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <NavLink to="/privacy" className="text-gray-400 hover:text-gray-600 text-xs">Privacy Policy</NavLink>
            <NavLink to="/terms" className="text-gray-400 hover:text-gray-600 text-xs">Terms of Service</NavLink>
            <NavLink to="/contact" className="text-gray-400 hover:text-gray-600 text-xs">Contact Us</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};
