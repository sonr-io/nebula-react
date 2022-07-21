export type AvatarSize = 'lg' | 'md' | 'sm';

export type AvatarColor = 'purple' | 'green' | 'red' | 'orange' | 'teal';
export interface AvatarProps {
  src?: string;
  alt: string;
  size?: AvatarSize;
  online?: boolean;
  color?: AvatarColor;
}
