"use client";
import { CardGrid } from "@/shared/components/CardGrid";
import { TitleSection } from "@/shared/components/TitleSection";
import React from "react";

const Offers = () => {
  const services = [
    {
      title: "Otel Rezervasiyası",
      description: "Seçilmiş İslam dostu otelləri kəşf edin.",
      icon: "🏨",
      features: ["Qadınlar üçün ayrı hovuzlar", "Alkoqolsuz ailə paketləri"],
    },
    {
      title: "Hava Limanı Transferləri",
      description: "Rahat və etibarlı transfer xidmətləri.",
      icon: "🚖",
      features: ["VIP transferlər", "Ailə üçün geniş nəqliyyat vasitələri"],
    },
    {
      title: "Xüsusi Təkliflər",
      description: "Mövsümi və xüsusi təkliflərimizi qaçırmayın.",
      icon: "🎁",
      features: ["Endirimli paketlər", "Seçmə lüks villalar"],
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
    <TitleSection title="Special Offers" description="Enjoy a completely Islamic-friendly experience with Hotel Reservations, Airport Transfers and Special Offers."/>
      <div className="xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl  xl:max-w-7xl mx-auto xl:px-6">
      <CardGrid/>
      </div>
    </div>
  );
};

export default Offers;
