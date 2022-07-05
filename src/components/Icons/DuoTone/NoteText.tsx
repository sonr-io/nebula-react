
import NoteText from "../../../assets/duotone/NoteText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function NoteTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NoteText data-testid="NoteTextIcon" className={classes} />
  );
}
