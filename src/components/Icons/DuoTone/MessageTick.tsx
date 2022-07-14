
import MessageTick from "../../../assets/duotone/MessageTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MessageTick} data-testid="MessageTickIcon" className={classes} />
  );
}
