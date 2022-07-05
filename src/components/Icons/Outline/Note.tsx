
import Note from "../../../assets/outline/Note.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function NoteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Note data-testid="NoteIcon" className={classes} />
  );
}
