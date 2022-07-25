
import Notification2 from "../../../assets/outline/Notification2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Notification2Icon({ className, dataTestid = "Notification2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Notification2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
