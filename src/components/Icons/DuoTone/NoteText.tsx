
import NoteText from "../../../assets/duotone/NoteText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteTextIcon({ className, dataTestid = "NoteTextIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NoteText data-testid={dataTestid} className={classes} {...rest} />
  );
}
