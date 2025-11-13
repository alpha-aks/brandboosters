import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Solutions | BrandBoosters",
  description: "Comprehensive e-commerce solutions to grow your online store and increase sales.",
};

export default function EcommercePage() {
  return (
    <main className="w-full min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">E-commerce Solutions</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">E-commerce Development</h2>
            <p className="text-lg text-gray-700 mb-6">
              We create powerful, user-friendly e-commerce websites that drive sales and provide an exceptional shopping experience.
              Our solutions are tailored to meet your specific business needs and goals.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Custom E-commerce Development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Shopping Cart Integration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Payment Gateway Integration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mobile-Optimized Design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Product Catalog Management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Mobile-First Approach</h4>
                <p className="text-gray-600 text-sm">We design for mobile users first to ensure the best experience on all devices.</p>
              </li>
              <li>
                <h4 className="font-medium">Conversion Optimization</h4>
                <p className="text-gray-600 text-sm">Our designs are optimized to maximize conversions and sales.</p>
              </li>
              <li>
                <h4 className="font-medium">Secure & Scalable</h4>
                <p className="text-gray-600 text-sm">We build secure platforms that grow with your business.</p>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Get Started</h4>
              <p className="text-gray-600 text-sm mb-4">
                Ready to launch or upgrade your e-commerce store? Contact us today for a free consultation.
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
