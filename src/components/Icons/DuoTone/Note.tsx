
import Note from "../../../assets/duotone/Note.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Note data-testid="NoteIcon" className={classes} />
  );
}
