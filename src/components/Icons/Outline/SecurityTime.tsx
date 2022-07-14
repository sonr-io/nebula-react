
import SecurityTime from "../../../assets/outline/SecurityTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecurityTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SecurityTime data-testid="SecurityTimeIcon" className={classes} />
  );
}