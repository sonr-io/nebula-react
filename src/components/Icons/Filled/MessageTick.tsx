
import MessageTick from "../../../assets/filled/MessageTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageTick data-testid="MessageTickIcon" className={classes} />
  );
}