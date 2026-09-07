import React from 'react';

/**
 * MetricStat — big-number stat block, used on the brand kit's Metrics page
 * (Global Offices, Team Members, Customers, Products).
 */
export function MetricStat({ value, label, tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div
      style={{
        fontFamily: 'var(--font-body)',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 'var(--space-1)',
        padding: 'var(--space-4) var(--space-6)',
        minWidth: 160,
      }}
    >
      <div
        style={{
          font: 'var(--text-display-lg)',
          fontFamily: 'var(--font-display)',
          color: dark ? 'var(--text-inverse)' : 'var(--accent-primary)',
          letterSpacing: 'var(--tracking-tight)',
        }}
      >
        {value}
      </div>
      <div
        style={{
          font: 'var(--text-label)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-caps)',
          color: dark ? 'var(--text-inverse)' : 'var(--text-secondary)',
          opacity: dark ? 0.8 : 1,
        }}
      >
        {label}
      </div>
    </div>
  );
}
