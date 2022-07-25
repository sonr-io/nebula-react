
import SmsTracking from "../../../assets/filled/SmsTracking.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsTrackingIcon({ className, dataTestid = "SmsTrackingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SmsTracking data-testid={dataTestid} className={classes} {...rest} />
  );
}
