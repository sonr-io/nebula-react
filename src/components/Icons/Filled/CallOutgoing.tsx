
import CallOutgoing from "../../../assets/filled/CallOutgoing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallOutgoingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CallOutgoing} data-testid="CallOutgoingIcon" className={classes} />
  );
}
