
import NoteRemove from "../../../assets/duotone/NoteRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function NoteRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NoteRemove data-testid="NoteRemoveIcon" className={classes} />
  );
}
