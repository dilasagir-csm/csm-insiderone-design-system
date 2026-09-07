export interface JourneyNodeProps {
  /** Which Architect flow-element family this node represents */
  type?: 'starter' | 'wait' | 'channel' | 'action' | 'check';
  /** Node label, e.g. "Sign-up not completed?" */
  label: string;
}
