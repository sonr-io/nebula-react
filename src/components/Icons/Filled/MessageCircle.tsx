
import MessageCircle from "../../../assets/filled/MessageCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MessageCircle} data-testid="MessageCircleIcon" className={classes} />
  );
}
