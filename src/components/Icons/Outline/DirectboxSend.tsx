
import DirectboxSend from "../../../assets/outline/DirectboxSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxSendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectboxSend} data-testid="DirectboxSendIcon" className={classes} />
  );
}
