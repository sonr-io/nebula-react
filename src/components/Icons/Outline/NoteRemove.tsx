
import NoteRemove from "../../../assets/outline/NoteRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={NoteRemove} data-testid="NoteRemoveIcon" className={classes} />
  );
}
