
import Cloud from "../../../assets/outline/Cloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cloud data-testid="CloudIcon" className={classes} />
  );
}
