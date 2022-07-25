
import Send from "../../../assets/outline/Send.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SendIcon({ className, dataTestid = "SendIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Send data-testid={dataTestid} className={classes} {...rest} />
  );
}
