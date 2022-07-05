
import Sms from "../../../assets/duotone/Sms.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SmsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sms data-testid="SmsIcon" className={classes} />
  );
}
