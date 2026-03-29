"use client";

import { useEffect, useState } from "react";

interface SectionBounds {
  top: number;
  bottom: number;
  left: number;
  right: number;
  centerX: number;
}

export default function ScrollPath() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [sectionBounds, setSectionBounds] = useState<SectionBounds[]>([]);
  const [lineOffsets, setLineOffsets] = useState<Array<{ y: number; x: number }>>([]);

  useEffect(() => {
    // Get all sections with scroll-section attribute
    const updateSectionBounds = () => {
      const sections = document.querySelectorAll("[data-scroll-section]");
      const bounds: SectionBounds[] = [];

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.scrollY;
        
        bounds.push({
          top: scrollTop + rect.top,
          bottom: scrollTop + rect.bottom,
          left: rect.left,
          right: rect.right,
          centerX: rect.left + rect.width / 2,
        });
      });

      setSectionBounds(bounds);
    };

    updateSectionBounds();
    window.addEventListener("resize", updateSectionBounds);
    return () => window.removeEventListener("resize", updateSectionBounds);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setScrollHeight(Math.min(scrollPercentage, 100));

      // Calculate line path based on sections
      const centerX = window.innerWidth / 2;
      const viewportMid = scrolled + window.innerHeight / 2;
      let currentOffsetX = 0;

      // Check which section we're in and offset accordingly
      for (const section of sectionBounds) {
        if (viewportMid >= section.top && viewportMid <= section.bottom) {
          // User is viewing this section - offset to the edge
          const sectionCenterX = section.centerX;
          const maxWidth = window.innerWidth * 0.35; // Max distance from center
          
          // Offset to left edge of section
          currentOffsetX = -(window.innerWidth / 2 - section.left - 20);
          currentOffsetX = Math.max(currentOffsetX, -maxWidth);
          break;
        }
      }

      setLineOffsets([{ y: scrolled, x: currentOffsetX }]);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionBounds]);

  const currentOffsetX = lineOffsets[0]?.x || 0;

  return (
    <div className="fixed left-1/2 top-0 h-screen pointer-events-none z-2">
      {/* Background reference line - full height */}
      <div className="absolute inset-0 w-0.5 bg-gradient-to-b from-purple-500/15 via-pink-500/15 to-red-500/15 -translate-x-1/2" />

      {/* Main scroll line - traces around sections */}
      <div
        className="absolute top-0 w-0.5 transition-[left,height] duration-100 ease-out"
        style={{
          height: `${scrollHeight}%`,
          left: `${currentOffsetX}px`,
          transform: "translateX(-50%)",
          background: "linear-gradient(to bottom, rgb(168, 85, 247), rgb(236, 72, 153), rgb(239, 68, 68))",
          boxShadow: `
            0 0 15px rgba(230, 126, 255, ${0.3 + scrollHeight / 200}),
            0 0 30px rgba(168, 85, 247, ${scrollHeight / 300}),
            inset -1px 0 8px rgba(255, 255, 255, ${scrollHeight / 250})
          `,
          filter: `drop-shadow(0 0 ${5 + scrollHeight / 20}px rgba(230, 126, 255, ${0.4 + scrollHeight / 250}))`,
        }}
      />

      {/* Light reflection ray */}
      <div
        className="absolute top-0 w-px transition-[left,height] duration-100 ease-out"
        style={{
          height: `${scrollHeight}%`,
          left: `${currentOffsetX - 2}px`,
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1), transparent)",
        }}
      />
    </div>
  );
}
