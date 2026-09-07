export interface LogoLockupProps {
  /** 'light' = gradient mark + black wordmark (use on Nova/white); 'dark' = cream mark + wordmark (use on Eclipse/Dark Matter) */
  variant?: 'light' | 'dark';
  /** Rendered height in px; width scales proportionally. Named `logoHeight` (not `height`) because plain `height` is reserved by the `<x-import>`/`<dc-import>` mount sizing contract and never reaches the component as a prop. */
  logoHeight?: number;
}
