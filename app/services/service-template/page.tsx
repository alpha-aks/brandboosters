import { Metadata } from "next";

type ServicePageProps = {
  title: string;
  description: string;
  services: string[];
  benefits: string[];
  icon: string;
};

export function createServicePage({
  title,
  description,
  services,
  benefits,
  icon,
}: ServicePageProps) {
  return function ServicePage() {
    return (
      <main className="w-full min-h-screen bg-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-4">{icon}</span>
            <h1 className="text-4xl font-bold">{title}</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our {title} Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                {description}
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Get Started</h3>
                <p className="mb-4">Ready to boost your business with our {title.toLowerCase()} services?</p>
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
}
