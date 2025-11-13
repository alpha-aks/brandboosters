import { NextPage } from 'next';
import Head from 'next/head';

const WebDevelopmentPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Web Development Services | BrandBoosters</title>
        <meta name="description" content="Custom web development solutions for businesses looking to establish a strong online presence" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Web Development Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Custom Web Solutions</h2>
            <p className="text-lg text-gray-700 mb-6">
              We build fast, secure, and scalable websites that deliver exceptional user experiences. 
              Our development process focuses on performance, accessibility, and mobile responsiveness.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Our Development Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>React.js / Next.js</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Tailwind CSS</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Express</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>MongoDB / PostgreSQL</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Custom Website Development</h4>
                <p className="text-gray-600 text-sm">Tailored solutions that match your specific business needs.</p>
              </li>
              <li>
                <h4 className="font-medium">E-commerce Solutions</h4>
                <p className="text-gray-600 text-sm">Secure and scalable online stores with seamless payment integration.</p>
              </li>
              <li>
                <h4 className="font-medium">Web Applications</h4>
                <p className="text-gray-600 text-sm">Interactive and dynamic web applications for your business.</p>
              </li>
              <li>
                <h4 className="font-medium">API Development</h4>
                <p className="text-gray-600 text-sm">Robust APIs to power your applications and integrations.</p>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Start Your Project</h4>
              <p className="text-gray-600 text-sm mb-4">
                Ready to build something amazing? Let's discuss your web development needs.
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebDevelopmentPage;
