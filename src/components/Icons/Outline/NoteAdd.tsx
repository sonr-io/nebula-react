
import NoteAdd from "../../../assets/outline/NoteAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={NoteAdd} data-testid="NoteAddIcon" className={classes} />
  );
}
