import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/services/seo" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">SEO Services</h2>
          <p className="text-gray-600">Improve your search engine rankings and drive organic traffic to your website.</p>
        </Link>
        {/* Add more service cards as needed */}
      </div>
    </div>
  );
}
