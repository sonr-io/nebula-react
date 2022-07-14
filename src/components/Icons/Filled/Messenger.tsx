
import Messenger from "../../../assets/filled/Messenger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessengerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Messenger} data-testid="MessengerIcon" className={classes} />
  );
}
