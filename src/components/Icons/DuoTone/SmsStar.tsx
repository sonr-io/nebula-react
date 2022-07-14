
import SmsStar from "../../../assets/duotone/SmsStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsStarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SmsStar data-testid="SmsStarIcon" className={classes} />
  );
}
