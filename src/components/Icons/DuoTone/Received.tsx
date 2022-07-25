
import Received from "../../../assets/duotone/Received.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceivedIcon({ className, dataTestid = "ReceivedIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Received data-testid={dataTestid} className={classes} {...rest} />
  );
}
