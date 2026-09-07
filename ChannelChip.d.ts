export interface ChannelChipProps {
  /** Channel key, e.g. 'web' | 'email' | 'sms' | 'mms' | 'rcs' | 'app' | 'whatsapp' | 'push' | 'tiktok' | 'search' | 'recommender' | 'analytics' | 'campaign' | 'ai' | 'gamification' | 'ab' */
  channel: string;
  /** Display label, e.g. "WhatsApp" */
  label: string;
}
