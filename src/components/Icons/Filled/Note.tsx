
import Note from "../../../assets/filled/Note.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteIcon({ className, dataTestid = "NoteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Note data-testid={dataTestid} className={classes} {...rest} />
  );
}
