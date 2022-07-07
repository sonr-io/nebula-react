import { CSSProperties } from "react";

export type AvatarSize = 'lg' | 'md' | 'sm';

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: AvatarSize;
  online?: boolean;
  style?: CSSProperties;
}
