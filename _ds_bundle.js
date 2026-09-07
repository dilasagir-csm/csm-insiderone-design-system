/* @ds-bundle: {"format":4,"namespace":"InsiderOneDesignSystem_c84076","components":[{"name":"ChannelChip","sourcePath":"components/brand/ChannelChip.jsx"},{"name":"LogoLockup","sourcePath":"components/brand/LogoLockup.jsx"},{"name":"GoalBox","sourcePath":"components/journey/GoalBox.jsx"},{"name":"JourneyNode","sourcePath":"components/journey/JourneyNode.jsx"},{"name":"SegmentBox","sourcePath":"components/journey/SegmentBox.jsx"},{"name":"MetricStat","sourcePath":"components/metrics/MetricStat.jsx"}],"sourceHashes":{"components/brand/ChannelChip.jsx":"bd79ac8641b7","components/brand/LogoLockup.jsx":"9607fecb33d1","components/journey/GoalBox.jsx":"99c8668aa902","components/journey/JourneyNode.jsx":"baa8e859a14b","components/journey/SegmentBox.jsx":"90b6713e0185","components/metrics/MetricStat.jsx":"95ec746318a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InsiderOneDesignSystem_c84076 = window.InsiderOneDesignSystem_c84076 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ChannelChip.jsx
try { (() => {
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
  ab: 'split'
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
    color: 'var(--text-primary)'
  },
  iconWrap: {
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent-primary)'
  }
};

/**
 * ChannelChip — a labeled product/channel icon chip (Web, Email, SMS, WhatsApp, …)
 * as seen on the brand kit's "Icons You Might Need" page.
 */
function ChannelChip({
  channel,
  label
}) {
  const icon = LUCIDE_ICON[channel] || 'circle';
  return /*#__PURE__*/React.createElement("span", {
    style: channelChipStyles.chip
  }, /*#__PURE__*/React.createElement("span", {
    style: channelChipStyles.iconWrap
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 16,
      height: 16
    }
  })), label);
}
Object.assign(__ds_scope, { ChannelChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ChannelChip.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoLockup.jsx
try { (() => {
// __DS_BASE__ is a relative path (e.g. '../..') set by whoever loads this
// design system's bundle, pointing back at the project root from the current
// page's location — a leading '/' doesn't reliably reach the project root in
// every hosting setup, so assets are addressed relative to that base instead.
function dsAsset(path) {
  const base = typeof window !== 'undefined' && window.__DS_BASE__ || '.';
  return base + '/' + path;
}
const LOGO_SRC = {
  light: dsAsset('assets/logo/insider-one-logo-light-bg.png'),
  dark: dsAsset('assets/logo/insider-one-logo-dark-bg-stacked.png')
};

/**
 * LogoLockup — the real Insider One logo, extracted from the brand kit PDF.
 * Per brand guidelines: never recolor, distort, or add effects to the logo;
 * only place it on simple, clean backgrounds.
 */
function LogoLockup({
  variant = 'light',
  logoHeight = 32
}) {
  // logoHeight may arrive as a numeric string — coerce to a real px value.
  const h = parseFloat(logoHeight) || 32;
  return /*#__PURE__*/React.createElement("img", {
    src: LOGO_SRC[variant] || LOGO_SRC.light,
    alt: "Insider One",
    style: {
      height: h + 'px',
      width: 'auto',
      display: 'block'
    }
  });
}
Object.assign(__ds_scope, { LogoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoLockup.jsx", error: String((e && e.message) || e) }); }

// components/journey/GoalBox.jsx
try { (() => {
const goalBoxStyles = {
  wrap: {
    fontFamily: 'var(--font-body)',
    background: 'var(--success-bg)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--space-5)',
    width: 220,
    boxSizing: 'border-box'
  },
  title: {
    font: 'var(--text-label)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)',
    color: 'var(--success)',
    marginBottom: 'var(--space-3)'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    font: 'var(--text-body-sm)',
    color: 'var(--color-eclipse)',
    padding: 'var(--space-1) 0'
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: 'var(--success)',
    flexShrink: 0
  }
};

/**
 * GoalBox — the journey-builder "goals" card, a short checklist of the goals
 * an Architect flow is optimizing for.
 */
function GoalBox({
  goals = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: goalBoxStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: goalBoxStyles.title
  }, "Goals"), goals.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: goalBoxStyles.item
  }, /*#__PURE__*/React.createElement("span", {
    style: goalBoxStyles.dot
  }), g)));
}
Object.assign(__ds_scope, { GoalBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/journey/GoalBox.jsx", error: String((e && e.message) || e) }); }

// components/journey/JourneyNode.jsx
try { (() => {
const TYPE_COLOR = {
  starter: {
    bg: 'var(--color-solar)',
    fg: '#fff'
  },
  wait: {
    bg: 'var(--color-lunar)',
    fg: 'var(--color-eclipse)'
  },
  channel: {
    bg: 'var(--color-orbit)',
    fg: '#fff'
  },
  action: {
    bg: 'var(--color-celestial)',
    fg: 'var(--color-eclipse)'
  },
  check: {
    bg: 'var(--color-eclipse)',
    fg: 'var(--text-inverse)'
  }
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
    whiteSpace: 'nowrap'
  },
  kicker: {
    font: 'var(--text-caption)',
    opacity: 0.75,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)'
  }
};

/**
 * JourneyNode — a single step pill in an Architect journey-builder flow
 * (Starter / Wait / Channel / Action / Check element types from the brand kit).
 */
function JourneyNode({
  type = 'action',
  label
}) {
  const c = TYPE_COLOR[type] || TYPE_COLOR.action;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...journeyNodeStyles.node,
      background: c.bg,
      color: c.fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: journeyNodeStyles.kicker
  }, type), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { JourneyNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/journey/JourneyNode.jsx", error: String((e && e.message) || e) }); }

// components/journey/SegmentBox.jsx
try { (() => {
const segmentBoxStyles = {
  wrap: {
    fontFamily: 'var(--font-body)',
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    padding: 'var(--space-5)',
    width: 240,
    boxSizing: 'border-box'
  },
  title: {
    font: 'var(--text-label)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)',
    color: 'var(--text-muted)',
    marginBottom: 'var(--space-3)'
  },
  item: {
    font: 'var(--text-body-sm)',
    color: 'var(--text-primary)',
    padding: 'var(--space-2) 0',
    borderBottom: '1px solid var(--border-subtle)'
  },
  audienceRow: {
    marginTop: 'var(--space-4)',
    paddingTop: 'var(--space-4)',
    borderTop: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  audienceValue: {
    font: 'var(--text-display-xs)',
    fontFamily: 'var(--font-display)',
    color: 'var(--accent-primary)'
  },
  audienceLabel: {
    font: 'var(--text-caption)',
    color: 'var(--text-muted)'
  }
};

/**
 * SegmentBox — journey-builder "segment" card: a named audience list plus an
 * estimated-reach number, used inside Architect journey diagrams.
 */
function SegmentBox({
  segments = [],
  audience
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: segmentBoxStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: segmentBoxStyles.title
  }, "Segment"), segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: segmentBoxStyles.item
  }, s)), audience && /*#__PURE__*/React.createElement("div", {
    style: segmentBoxStyles.audienceRow
  }, /*#__PURE__*/React.createElement("span", {
    style: segmentBoxStyles.audienceValue
  }, audience), /*#__PURE__*/React.createElement("span", {
    style: segmentBoxStyles.audienceLabel
  }, "Est. audience")));
}
Object.assign(__ds_scope, { SegmentBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/journey/SegmentBox.jsx", error: String((e && e.message) || e) }); }

// components/metrics/MetricStat.jsx
try { (() => {
/**
 * MetricStat — big-number stat block, used on the brand kit's Metrics page
 * (Global Offices, Team Members, Customers, Products).
 */
function MetricStat({
  value,
  label,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      padding: 'var(--space-4) var(--space-6)',
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-lg)',
      fontFamily: 'var(--font-display)',
      color: dark ? 'var(--text-inverse)' : 'var(--accent-primary)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-secondary)',
      opacity: dark ? 0.8 : 1
    }
  }, label));
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/metrics/MetricStat.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChannelChip = __ds_scope.ChannelChip;

__ds_ns.LogoLockup = __ds_scope.LogoLockup;

__ds_ns.GoalBox = __ds_scope.GoalBox;

__ds_ns.JourneyNode = __ds_scope.JourneyNode;

__ds_ns.SegmentBox = __ds_scope.SegmentBox;

__ds_ns.MetricStat = __ds_scope.MetricStat;

})();
