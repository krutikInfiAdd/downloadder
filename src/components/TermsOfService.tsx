import React from 'react';
import { Scale, Gavel, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TermsOfService: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
        <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
          <Scale className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
      </div>

      <div className="prose prose-indigo max-w-none space-y-8 text-gray-600">
        <section>
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <Gavel className="w-5 h-5 text-indigo-500" />
            <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
          </div>
          <p>
            By accessing or using MediaDownloader, you agree to be bound by these Terms of Service. 
            If you do not agree to all the terms and conditions, then you may not access the service.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <CheckCircle className="w-5 h-5 text-indigo-500" />
            <h2 className="text-xl font-semibold">User Responsibility</h2>
          </div>
          <p>
            Users are solely responsible for the content they download. You must ensure that you have 
            the legal right to download and use any media obtained through this service. 
            MediaDownloader does not host any content and only acts as a technical intermediary.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>You must not use the service for any illegal or unauthorized purpose.</li>
            <li>You must not transmit any worms or viruses or any code of a destructive nature.</li>
            <li>You agree not to reproduce, duplicate, copy, or sell any portion of the service.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <AlertTriangle className="w-5 h-5 text-indigo-500" />
            <h2 className="text-xl font-semibold">Disclaimer of Warranties</h2>
          </div>
          <p>
            The service is provided "as is" and "as available" without any warranty or condition, 
            express, implied, or statutory. We do not warrant that the service will be uninterrupted, 
            timely, secure, or error-free.
          </p>
        </section>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mt-12">
          <p className="text-sm text-indigo-800 font-medium">
            By using this tool, you acknowledge that you are complying with the terms of the respective platforms (YouTube, Instagram, etc.).
          </p>
        </div>
      </div>
    </motion.div>
  );
};
