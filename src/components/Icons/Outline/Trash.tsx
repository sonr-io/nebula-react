
import Trash from "../../../assets/outline/Trash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Trash} data-testid="TrashIcon" className={classes} />
  );
}
