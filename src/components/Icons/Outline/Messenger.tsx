
import Messenger from "../../../assets/outline/Messenger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessengerIcon({ className, dataTestid = "MessengerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Messenger data-testid={dataTestid} className={classes} {...rest} />
  );
}
