import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Plus, ChevronRight } from 'lucide-react';

const faqs = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids?",
];

const getAnswer = (question) => {
  switch (question) {
    case "What is Netflix?":
      return "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, and more.";
    case "How much does Netflix cost?":
      return "Netflix offers plans to fit your needs. Pay one monthly price with no extra costs.";
    case "Where can I watch?":
      return "You can watch Netflix on any internet-connected device that offers the Netflix app.";
    case "How do I cancel?":
      return "You can cancel your Netflix membership at any time, with no cancellation fees.";
    case "What can I watch on Netflix?":
      return "You can watch TV shows, movies, documentaries, anime, and Netflix originals.";
    case "Is Netflix good for kids?":
      return "Netflix has a dedicated Kids experience with parental controls and kid-friendly content.";
    default:
      return "Answer coming soon...";
  }
};

const FAQ = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-start px-3 md:px-40">
         <span className="block md:inline">Frequently Asked Questions</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((question, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="bg-gray-700 rounded-lg overflow-hidden">
                <Disclosure.Button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-600 transition-colors">
                  <span className="text-2xl font-bold">{question}</span>
                  <Plus
                    className={`w-8 h-8 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-6 text-gray-300 text-lg">
                  {getAnswer(question)}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>

      <section className="py-16 px-6 md:px-12 text-center">
        <p className="text-lg mb-8">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-black/50 border border-gray-600 rounded-md text-white placeholder-gray-400 h-14 px-4 text-lg"
          />
          <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-md h-14 px-6 text-lg font-semibold text-white">
            Get Started
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default FAQ;
