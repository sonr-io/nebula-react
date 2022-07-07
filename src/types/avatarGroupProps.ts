import { AvatarProps } from "./avatarProps";

export type AvatarGroupSize = 'lg' | 'md' | 'sm';

export interface AvatarGroupProps {
  avatars: Array<Pick<AvatarProps, 'alt' | 'src'>>;
  size?: AvatarGroupSize;
}
