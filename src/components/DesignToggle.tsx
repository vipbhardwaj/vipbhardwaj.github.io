"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DesignToggle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLegacy, setIsLegacy] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const design = searchParams.get("design");
    setIsLegacy(design === "legacy");
  }, [searchParams]);

  const toggleDesign = () => {
    const newDesign = isLegacy ? "current" : "legacy";
    router.push(`/?design=${newDesign}`);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleDesign}
      className="fixed top-4 left-4 z-50 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-magenta hover:from-purple-700 hover:to-magenta text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-magenta/50"
      title={`Switch to ${isLegacy ? "Current" : "Legacy"} Design`}
    >
      {isLegacy ? "🎨 Current Design" : "🕰️ Legacy Design"}
    </button>
  );
}
