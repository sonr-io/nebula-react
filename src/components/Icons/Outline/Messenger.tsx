
import Messenger from "../../../assets/outline/Messenger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessengerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Messenger data-testid="MessengerIcon" className={classes} />
  );
}
