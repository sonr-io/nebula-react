
import Sms from "../../../assets/duotone/Sms.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsIcon({ className, dataTestid = "SmsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Sms data-testid={dataTestid} className={classes} {...rest} />
  );
}
