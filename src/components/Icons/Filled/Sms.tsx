
import Sms from "../../../assets/filled/Sms.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sms data-testid="SmsIcon" className={classes} />
  );
}