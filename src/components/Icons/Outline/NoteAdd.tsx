
import NoteAdd from "../../../assets/outline/NoteAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteAddIcon({ className, dataTestid = "NoteAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NoteAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
