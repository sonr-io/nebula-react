import { IconNames, IconTypes } from "./iconProps";

export interface DropdownOptionProps {
    className?: string;
    title: string;
    leftIconName?: IconNames;
    leftIconType?: IconTypes;
    rightIconName?: IconNames;
    rightIconType?: IconTypes;
}