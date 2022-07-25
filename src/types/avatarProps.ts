import { CSSProperties } from "react";

export type AvatarSize = 'lg' | 'md' | 'sm';

export type AvatarColor = 'gray' | 'purple' | 'green' | 'red' | 'orange' | 'teal';
export interface AvatarProps {
  src?: string;
  alt: string;
  size?: AvatarSize;
  style?: CSSProperties;
  nearby?: boolean;
  color?: AvatarColor;
}
