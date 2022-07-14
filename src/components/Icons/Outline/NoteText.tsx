
import NoteText from "../../../assets/outline/NoteText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NoteText data-testid="NoteTextIcon" className={classes} />
  );
}
