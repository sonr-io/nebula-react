
import SmsSearch from "../../../assets/outline/SmsSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsSearchIcon({ className, dataTestid = "SmsSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SmsSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
