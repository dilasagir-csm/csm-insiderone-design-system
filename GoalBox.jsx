import React from 'react';

const goalBoxStyles = {
  wrap: {
    fontFamily: 'var(--font-body)',
    background: 'var(--success-bg)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--space-5)',
    width: 220,
    boxSizing: 'border-box',
  },
  title: {
    font: 'var(--text-label)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)',
    color: 'var(--success)',
    marginBottom: 'var(--space-3)',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    font: 'var(--text-body-sm)',
    color: 'var(--color-eclipse)',
    padding: 'var(--space-1) 0',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: 'var(--success)',
    flexShrink: 0,
  },
};

/**
 * GoalBox — the journey-builder "goals" card, a short checklist of the goals
 * an Architect flow is optimizing for.
 */
export function GoalBox({ goals = [] }) {
  return (
    <div style={goalBoxStyles.wrap}>
      <div style={goalBoxStyles.title}>Goals</div>
      {goals.map((g, i) => (
        <div key={i} style={goalBoxStyles.item}>
          <span style={goalBoxStyles.dot} />
          {g}
        </div>
      ))}
    </div>
  );
}
