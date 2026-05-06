/**
 * Shared design tokens and data used across the Bansag website.
 * Single source of truth — import from here instead of redeclaring.
 */

// ── Brand Colors ──
export const ORANGE = "#FF5500";
export const DARK = "#0A0A0A";
export const LIGHT = "#F5F0EB";

// ── Baybayin Letter Map ──
export const baybayinMap: Record<string, string> = {
  B: "ᜊ",
  A: "ᜀ",
  N: "ᜈ",
  S: "ᜐ",
  G: "ᜄ",
};

export const brandLetters = ["B", "A", "N", "S", "A", "G"] as const;

// ── Navigation ──
export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ── Contact ──
export const CONTACT_EMAIL = "hello@bansag.com";

// ── Marquee Words (shared between HomePage and AboutSection) ──
export const marqueeWords = [
  "BANSAG", "BRAND", "IDENTITY", "品牌", "ᜊᜀᜈᜐᜀᜄ",
  "BUILD", "DIGITAL", "VOICE", "PRESENCE", "技術",
  "PLATFORM", "브랜드", "BANSAG", "BRAND", "IDENTITY",
  "品牌", "ᜊᜀᜈᜐᜀᜄ", "BUILD", "DIGITAL", "VOICE",
] as const;
