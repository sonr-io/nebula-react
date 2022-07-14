
import DirectSend from "../../../assets/outline/DirectSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectSendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectSend} data-testid="DirectSendIcon" className={classes} />
  );
}
