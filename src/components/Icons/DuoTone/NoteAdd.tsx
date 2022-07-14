
import NoteAdd from "../../../assets/duotone/NoteAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NoteAdd data-testid="NoteAddIcon" className={classes} />
  );
}
