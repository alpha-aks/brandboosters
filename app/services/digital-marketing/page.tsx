import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | BrandBoosters",
  description: "Comprehensive digital marketing solutions to grow your online presence and drive business growth.",
};

export default function DigitalMarketingPage() {
  return (
    <main className="w-full min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Digital Marketing Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-6">
              We create data-driven digital marketing strategies that deliver measurable results. 
              Our team combines creativity with analytics to drive targeted traffic and conversions.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Key Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Search Engine Marketing (SEM)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Social Media Marketing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Content Marketing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Email Marketing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Marketing Automation</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Data-Driven Strategies</h4>
                <p className="text-gray-600 text-sm">We base our decisions on analytics and performance metrics.</p>
              </li>
              <li>
                <h4 className="font-medium">Transparent Reporting</h4>
                <p className="text-gray-600 text-sm">Regular updates and clear insights into campaign performance.</p>
              </li>
              <li>
                <h4 className="font-medium">Custom Solutions</h4>
                <p className="text-gray-600 text-sm">Tailored strategies to meet your specific business goals.</p>
              </li>
            </ul>
            
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
