
import HomeTrendUp from "../../../assets/outline/HomeTrendUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeTrendUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HomeTrendUp} data-testid="HomeTrendUpIcon" className={classes} />
  );
}
