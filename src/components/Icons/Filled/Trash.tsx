
import Trash from "../../../assets/filled/Trash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TrashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Trash data-testid="TrashIcon" className={classes} />
  );
}
