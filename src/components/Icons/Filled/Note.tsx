
import Note from "../../../assets/filled/Note.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Note} data-testid="NoteIcon" className={classes} />
  );
}
