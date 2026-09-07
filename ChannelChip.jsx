import React from 'react';

/* Product/channel icon substitution: the brand kit's own channel icons are
   embedded vector art inside the PDF (not extractable raster/SVG assets).
   Lucide (CDN, stroke-based) is used here as the closest open substitute —
   flagged in readme.md > Iconography. Swap for Insider's real icon set if
   it becomes available. */
const LUCIDE_ICON = {
  web: 'globe',
  email: 'mail',
  sms: 'message-square',
  mms: 'image',
  rcs: 'message-circle',
  app: 'smartphone',
  whatsapp: 'phone',
  push: 'bell',
  tiktok: 'music-2',
  search: 'search',
  recommender: 'sparkles',
  analytics: 'bar-chart-2',
  campaign: 'megaphone',
  ai: 'bot',
  gamification: 'gamepad-2',
  ab: 'split',
};

const channelChipStyles = {
  chip: {
    fontFamily: 'var(--font-body)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-pill)',
    padding: 'var(--space-2) var(--space-4)',
    font: 'var(--text-body-sm)',
    color: 'var(--text-primary)',
  },
  iconWrap: {
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent-primary)',
  },
};

/**
 * ChannelChip — a labeled product/channel icon chip (Web, Email, SMS, WhatsApp, …)
 * as seen on the brand kit's "Icons You Might Need" page.
 */
export function ChannelChip({ channel, label }) {
  const icon = LUCIDE_ICON[channel] || 'circle';
  return (
    <span style={channelChipStyles.chip}>
      <span style={channelChipStyles.iconWrap}>
        <i data-lucide={icon} style={{ width: 16, height: 16 }} />
      </span>
      {label}
    </span>
  );
}
