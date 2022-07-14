
import SmsEdit from "../../../assets/outline/SmsEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SmsEdit} data-testid="SmsEditIcon" className={classes} />
  );
}
