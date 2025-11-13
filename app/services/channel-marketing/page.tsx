import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channel Marketing Services | BrandBoosters",
  description: "Strategic channel marketing solutions to expand your reach and drive growth through effective partnerships.",
};

export default function ChannelMarketingPage() {
  return (
    <main className="w-full min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Channel Marketing Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Channel Partner Strategy</h2>
            <p className="text-lg text-gray-700 mb-6">
              We help businesses develop and execute effective channel marketing strategies that drive revenue through 
              partnerships, resellers, and distributors. Our approach ensures alignment between your brand and channel partners.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Channel Partner Recruitment & Onboarding</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Partner Portal Development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Co-Marketing Campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Channel Sales Enablement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Partner Performance Analytics</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Expanded Market Reach</h4>
                <p className="text-gray-600 text-sm">Leverage partner networks to access new markets and customers.</p>
              </li>
              <li>
                <h4 className="font-medium">Revenue Growth</h4>
                <p className="text-gray-600 text-sm">Drive incremental sales through strategic partnerships.</p>
              </li>
              <li>
                <h4 className="font-medium">Brand Consistency</h4>
                <p className="text-gray-600 text-sm">Ensure consistent messaging across all channel partners.</p>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Get Started</h4>
              <p className="text-gray-600 text-sm mb-4">
                Ready to build a powerful channel marketing strategy? Contact us today to discuss how we can help.
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
