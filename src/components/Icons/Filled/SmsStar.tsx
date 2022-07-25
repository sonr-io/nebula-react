
import SmsStar from "../../../assets/filled/SmsStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsStarIcon({ className, dataTestid = "SmsStarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SmsStar data-testid={dataTestid} className={classes} {...rest} />
  );
}
