import { IconNames, IconTypes } from "./iconProps";

export interface DropdownOptionProps {
    title: string;
    leftIconName?: IconNames;
    leftIconType?: IconTypes;
    rightIconName?: IconNames;
    rightIconType?: IconTypes;
}