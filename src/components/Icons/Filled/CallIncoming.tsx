
import CallIncoming from "../../../assets/filled/CallIncoming.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallIncomingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CallIncoming data-testid="CallIncomingIcon" className={classes} />
  );
}
