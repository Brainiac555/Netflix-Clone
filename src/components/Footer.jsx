import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <p className="mb-8 text-gray-400">Questions? Contact us.</p>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <a href="#" className="block text-gray-400 hover:underline">FAQ</a>
            <a href="#" className="block text-gray-400 hover:underline">Investor Relations</a>
            <a href="#" className="block text-gray-400 hover:underline">Privacy</a>
            <a href="#" className="block text-gray-400 hover:underline">Speed Test</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block text-gray-400 hover:underline">Help Centre</a>
            <a href="#" className="block text-gray-400 hover:underline">Jobs</a>
            <a href="#" className="block text-gray-400 hover:underline">Cookie Preferences</a>
            <a href="#" className="block text-gray-400 hover:underline">Legal Notices</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block text-gray-400 hover:underline">Account</a>
            <a href="#" className="block text-gray-400 hover:underline">Ways to Watch</a>
            <a href="#" className="block text-gray-400 hover:underline">Corporate Information</a>
            <a href="#" className="block text-gray-400 hover:underline">Only on Netflix</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block text-gray-400 hover:underline">Media Centre</a>
            <a href="#" className="block text-gray-400 hover:underline">Terms of Use</a>
            <a href="#" className="block text-gray-400 hover:underline">Contact Us</a>
          </div>
        </div>

        {/* Language Selector with Disclosure */}
        <Disclosure>
          {({ open }) => (
            <div className="relative w-fit mb-8">
              <Disclosure.Button className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded text-gray-400 hover:text-white hover:border-white transition">
                🌐 English
                <ChevronUp
                  className={`w-4 h-4 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded shadow-lg z-10">
                <button className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-700">English</button>
                <button className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-700">French</button>
                <button className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-700">Spanish</button>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <div className="text-gray-400 space-y-2 text-sm">
          <p>Netflix Nigeria</p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="underline">Learn more</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
