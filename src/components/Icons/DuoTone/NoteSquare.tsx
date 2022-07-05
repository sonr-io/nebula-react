
import NoteSquare from "../../../assets/duotone/NoteSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function NoteSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NoteSquare data-testid="NoteSquareIcon" className={classes} />
  );
}
