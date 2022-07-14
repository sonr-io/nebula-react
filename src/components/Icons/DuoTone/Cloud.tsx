
import Cloud from "../../../assets/duotone/Cloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Cloud} data-testid="CloudIcon" className={classes} />
  );
}
