
import DirectUp from "../../../assets/outline/DirectUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectUp} data-testid="DirectUpIcon" className={classes} />
  );
}
