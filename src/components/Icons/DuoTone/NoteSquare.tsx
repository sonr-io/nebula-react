
import NoteSquare from "../../../assets/duotone/NoteSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteSquareIcon({ className, dataTestid = "NoteSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NoteSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
