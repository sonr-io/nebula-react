
import Additem from "../../../assets/outline/Additem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AdditemIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Additem data-testid="AdditemIcon" className={classes} />
  );
}
