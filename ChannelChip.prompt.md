ChannelChip is a labeled pill for one of Insider's product/channels (Web, Email, SMS, WhatsApp, RCS, Push, TikTok, and more) — used in "channels we support" grids.

```jsx
<ChannelChip channel="whatsapp" label="WhatsApp" />
<ChannelChip channel="web" label="Web" />
```

**Icon substitution flagged:** the brand kit's real channel icons are embedded vector art inside the PDF and could not be extracted as reusable files, so this component loads [Lucide](https://lucide.dev) icons via CDN as a stroke-based stand-in. Requires the Lucide CDN script + `lucide.createIcons()` call to render the `<i data-lucide>` glyphs. Swap in Insider's real icon set when available.
