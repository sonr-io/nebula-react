
import SmsEdit from "../../../assets/outline/SmsEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsEditIcon({ className, dataTestid = "SmsEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SmsEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
