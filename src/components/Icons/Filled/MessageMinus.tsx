
import MessageMinus from "../../../assets/filled/MessageMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageMinus data-testid="MessageMinusIcon" className={classes} />
  );
}