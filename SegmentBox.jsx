import React from 'react';

const segmentBoxStyles = {
  wrap: {
    fontFamily: 'var(--font-body)',
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    padding: 'var(--space-5)',
    width: 240,
    boxSizing: 'border-box',
  },
  title: {
    font: 'var(--text-label)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)',
    color: 'var(--text-muted)',
    marginBottom: 'var(--space-3)',
  },
  item: {
    font: 'var(--text-body-sm)',
    color: 'var(--text-primary)',
    padding: 'var(--space-2) 0',
    borderBottom: '1px solid var(--border-subtle)',
  },
  audienceRow: {
    marginTop: 'var(--space-4)',
    paddingTop: 'var(--space-4)',
    borderTop: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  audienceValue: {
    font: 'var(--text-display-xs)',
    fontFamily: 'var(--font-display)',
    color: 'var(--accent-primary)',
  },
  audienceLabel: {
    font: 'var(--text-caption)',
    color: 'var(--text-muted)',
  },
};

/**
 * SegmentBox — journey-builder "segment" card: a named audience list plus an
 * estimated-reach number, used inside Architect journey diagrams.
 */
export function SegmentBox({ segments = [], audience }) {
  return (
    <div style={segmentBoxStyles.wrap}>
      <div style={segmentBoxStyles.title}>Segment</div>
      {segments.map((s, i) => (
        <div key={i} style={segmentBoxStyles.item}>{s}</div>
      ))}
      {audience && (
        <div style={segmentBoxStyles.audienceRow}>
          <span style={segmentBoxStyles.audienceValue}>{audience}</span>
          <span style={segmentBoxStyles.audienceLabel}>Est. audience</span>
        </div>
      )}
    </div>
  );
}
