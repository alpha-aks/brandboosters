import { NextPage } from 'next';
import Head from 'next/head';

const SEOPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Services | BrandBoosters</title>
        <meta name="description" content="Professional SEO services to improve your website's visibility and organic traffic" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">SEO Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Search Engine Optimization</h2>
            <p className="text-lg text-gray-700 mb-6">
              We help businesses improve their online visibility and drive organic traffic through comprehensive SEO strategies.
              Our data-driven approach ensures sustainable growth and higher search engine rankings.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Our SEO Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Keyword Research & Strategy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>On-Page Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Technical SEO Audit</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Content Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Link Building</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Proven Results</h4>
                <p className="text-gray-600 text-sm">We deliver measurable improvements in search rankings and organic traffic.</p>
              </li>
              <li>
                <h4 className="font-medium">White-Hat Techniques</h4>
                <p className="text-gray-600 text-sm">We use only ethical, Google-approved SEO practices.</p>
              </li>
              <li>
                <h4 className="font-medium">Transparent Reporting</h4>
                <p className="text-gray-600 text-sm">Regular updates and clear metrics to track your success.</p>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Get Started</h4>
              <p className="text-gray-600 text-sm mb-4">
                Ready to improve your search engine rankings? Contact us for a free SEO audit.
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SEOPage;
