import { NextPage } from 'next';
import Head from 'next/head';

const GraphicDesignPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Graphic Design Services | BrandBoosters</title>
        <meta name="description" content="Professional graphic design services for brands that want to make a lasting impression" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Graphic Design Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Visual Branding & Design</h2>
            <p className="text-lg text-gray-700 mb-6">
              We create stunning visual identities that capture your brand's essence and resonate with your target audience. 
              Our designs are not just beautiful - they're strategically crafted to communicate your message effectively.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Our Design Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Logo & Brand Identity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Print & Digital Collateral</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Social Media Graphics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Packaging Design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Infographics & Data Visualization</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Design Process</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Discovery & Research</h4>
                <p className="text-gray-600 text-sm">We start by understanding your brand, audience, and goals.</p>
              </li>
              <li>
                <h4 className="font-medium">Concept Development</h4>
                <p className="text-gray-600 text-sm">Creating multiple design directions based on your requirements.</p>
              </li>
              <li>
                <h4 className="font-medium">Refinement</h4>
                <p className="text-gray-600 text-sm">Perfecting the chosen concept based on your feedback.</p>
              </li>
              <li>
                <h4 className="font-medium">Delivery</h4>
                <p className="text-gray-600 text-sm">Providing all necessary files and formats for your use.</p>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Start Your Project</h4>
              <p className="text-gray-600 text-sm mb-4">
                Ready to elevate your brand with professional design? Let's discuss your project.
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GraphicDesignPage;
