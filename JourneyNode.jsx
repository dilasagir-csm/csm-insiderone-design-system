import React from 'react';

const TYPE_COLOR = {
  starter: { bg: 'var(--color-solar)', fg: '#fff' },
  wait: { bg: 'var(--color-lunar)', fg: 'var(--color-eclipse)' },
  channel: { bg: 'var(--color-orbit)', fg: '#fff' },
  action: { bg: 'var(--color-celestial)', fg: 'var(--color-eclipse)' },
  check: { bg: 'var(--color-eclipse)', fg: 'var(--text-inverse)' },
};

const journeyNodeStyles = {
  node: {
    fontFamily: 'var(--font-body)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    borderRadius: 'var(--radius-pill)',
    padding: 'var(--space-2) var(--space-4)',
    font: 'var(--text-label)',
    boxShadow: 'var(--shadow-sm)',
    whiteSpace: 'nowrap',
  },
  kicker: {
    font: 'var(--text-caption)',
    opacity: 0.75,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)',
  },
};

/**
 * JourneyNode — a single step pill in an Architect journey-builder flow
 * (Starter / Wait / Channel / Action / Check element types from the brand kit).
 */
export function JourneyNode({ type = 'action', label }) {
  const c = TYPE_COLOR[type] || TYPE_COLOR.action;
  return (
    <div style={{ ...journeyNodeStyles.node, background: c.bg, color: c.fg }}>
      <span style={journeyNodeStyles.kicker}>{type}</span>
      <span>{label}</span>
    </div>
  );
}
