import React from 'react';

// __DS_BASE__ is a relative path (e.g. '../..') set by whoever loads this
// design system's bundle, pointing back at the project root from the current
// page's location — a leading '/' doesn't reliably reach the project root in
// every hosting setup, so assets are addressed relative to that base instead.
function dsAsset(path) {
  const base = (typeof window !== 'undefined' && window.__DS_BASE__) || '.';
  return base + '/' + path;
}

const LOGO_SRC = {
  light: dsAsset('assets/logo/insider-one-logo-light-bg.png'),
  dark: dsAsset('assets/logo/insider-one-logo-dark-bg-stacked.png'),
};

/**
 * LogoLockup — the real Insider One logo, extracted from the brand kit PDF.
 * Per brand guidelines: never recolor, distort, or add effects to the logo;
 * only place it on simple, clean backgrounds.
 */
export function LogoLockup({ variant = 'light', logoHeight = 32 }) {
  // logoHeight may arrive as a numeric string — coerce to a real px value.
  const h = parseFloat(logoHeight) || 32;
  return (
    <img
      src={LOGO_SRC[variant] || LOGO_SRC.light}
      alt="Insider One"
      style={{ height: h + 'px', width: 'auto', display: 'block' }}
    />
  );
}
