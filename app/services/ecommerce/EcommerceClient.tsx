"use client";

import { ShoppingCart, Package, CreditCard, BarChart2, Shield, Zap } from "lucide-react";
import ServiceTemplate from "../service-template/ServiceTemplate";
import { useEffect, useState } from 'react';

export default function EcommerceClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ServiceTemplate
      title="E-commerce Solutions"
      description="Transform your online store with our comprehensive e-commerce solutions designed to increase sales and enhance customer experience."
      services={[
        "E-commerce Website Development",
        "Shopping Cart Integration",
        "Payment Gateway Setup",
        "Product Catalog Management",
        "Mobile-Responsive Design",
        "Performance Optimization"
      ]}
      benefits={[
        "Increased online sales",
        "Seamless checkout experience",
        "Secure payment processing",
        "Mobile-friendly shopping",
        "Inventory management",
        "Analytics and reporting"
      ]}
      icon={<ShoppingCart className="w-6 h-6 text-primary" />}
      color="bg-green-400"
    />
  );
}
