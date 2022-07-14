
import SmsTracking from "../../../assets/duotone/SmsTracking.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsTrackingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SmsTracking data-testid="SmsTrackingIcon" className={classes} />
  );
}
