
import SmsTracking from "../../../assets/outline/SmsTracking.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsTrackingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SmsTracking} data-testid="SmsTrackingIcon" className={classes} />
  );
}
