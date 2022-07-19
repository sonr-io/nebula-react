import * as FilledIcons from "../components/Icons/Filled";
import * as OutlineIcons from "../components/Icons/Outline";
import * as DuotoneIcons from "../components/Icons/DuoTone";

export type FilledIconNames = keyof typeof FilledIcons;
export type OutlinedIconNames = keyof typeof OutlineIcons;
export type DuoTonedIconNames = keyof typeof DuotoneIcons;

export type IconNames = FilledIconNames | OutlinedIconNames | DuoTonedIconNames;
export type IconTypes = 'filled' | 'outline' | 'duotone';
export type IconProps = React.SVGProps<SVGElement>
export interface NebulaIconProps extends IconProps {
  iconName: IconNames;
  iconType?: IconTypes;
  dataTestid?: string;
}
