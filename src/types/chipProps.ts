export type ChipSkin = 'default' | 'primary' | 'critical';

export interface ChipProps {
  skin?: ChipSkin;
  text: string;
  onRemove?: () => void;
}
