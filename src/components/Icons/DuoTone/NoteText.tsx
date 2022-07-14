
import NoteText from "../../../assets/duotone/NoteText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={NoteText} data-testid="NoteTextIcon" className={classes} />
  );
}
