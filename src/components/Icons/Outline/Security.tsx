
import Security from "../../../assets/outline/Security.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecurityIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Security} data-testid="SecurityIcon" className={classes} />
  );
}
