
import SmsEdit from "../../../assets/duotone/SmsEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SmsEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SmsEdit data-testid="SmsEditIcon" className={classes} />
  );
}
