
import NoteSquare from "../../../assets/outline/NoteSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={NoteSquare} data-testid="NoteSquareIcon" className={classes} />
  );
}
