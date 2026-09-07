export interface MetricStatProps {
  /** The big number/value to display, e.g. "1500+" or "27" */
  value: string;
  /** Label underneath, e.g. "Top Global Brands" */
  label: string;
  /** 'light' for use on Nova/white surfaces, 'dark' for Eclipse/Dark Matter surfaces */
  tone?: 'light' | 'dark';
}
