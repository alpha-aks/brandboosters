'use client';

import { motion } from 'framer-motion';

type ServiceCardProps = {
  title: string;
  description: string;
  index: number;
};

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 py-8 group"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h3 className="text-4xl md:text-6xl font-medium mb-4 md:mb-0 group-hover:text-gray-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl">
            {description}
          </p>
          <div className="mt-4 md:mt-0">
            <button className="text-lg font-medium hover:text-gray-400 transition-colors duration-300">
              →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
