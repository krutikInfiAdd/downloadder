import React from 'react';
import { ShieldCheck, Lock, Eye, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
        <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      </div>

      <div className="prose prose-blue max-w-none space-y-8 text-gray-600">
        <section>
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <Eye className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold">Information We Collect</h2>
          </div>
          <p>
            We collect information that you provide directly to us when you use our media downloader service. 
            This includes the URLs you submit for processing and any technical data automatically collected 
            by our servers to ensure the stability and security of the service.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <Lock className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          </div>
          <p>
            The primary purpose of collecting your data is to facilitate the media downloading process. 
            We do not store the media files on our servers permanently; they are processed in real-time 
            and delivered to you. We may use anonymized usage data to improve our algorithms and user experience.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>To provide, maintain, and improve our services.</li>
            <li>To monitor and analyze trends, usage, and activities.</li>
            <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <Bell className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          </div>
          <p>
            We may update this Privacy Policy from time to time. If we make changes, we will notify you 
            by revising the date at the top of the policy and, in some cases, we may provide you with 
            additional notice (such as adding a statement to our homepage).
          </p>
        </section>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-12">
          <p className="text-sm text-blue-800 font-medium">
            Last Updated: April 5, 2026. This policy is for demonstration purposes only.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
