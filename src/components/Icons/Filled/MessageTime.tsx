
import MessageTime from "../../../assets/filled/MessageTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MessageTime} data-testid="MessageTimeIcon" className={classes} />
  );
}
