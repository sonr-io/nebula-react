
import CallAdd from "../../../assets/outline/CallAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CallAdd} data-testid="CallAddIcon" className={classes} />
  );
}
