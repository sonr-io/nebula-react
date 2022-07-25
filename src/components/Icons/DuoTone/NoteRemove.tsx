
import NoteRemove from "../../../assets/duotone/NoteRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteRemoveIcon({ className, dataTestid = "NoteRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NoteRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
