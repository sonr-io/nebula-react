
import Notification1 from "../../../assets/outline/Notification1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Notification1Icon({ className, dataTestid = "Notification1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Notification1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
