LogoLockup renders the real, approved Insider One logo — never recreate or recolor it.

```jsx
<LogoLockup variant="light" logoHeight={28} />
<LogoLockup variant="dark" logoHeight={80} />
```

Per brand guidelines: place on the left of a slide if a partner logo shares the page (partner logo goes right); place on the right if Insider's is the only logo. Only use on simple, clean backgrounds.

Note: resolves its image path via `window.__DS_BASE__` (a relative path back to the project root, e.g. `'../..'`) — whoever loads `_ds_bundle.js` should set `window.__DS_BASE__` to that same relative prefix first (see `templates/partner-deck/ds-base.js` for the pattern). Falls back to `'.'` if unset.
