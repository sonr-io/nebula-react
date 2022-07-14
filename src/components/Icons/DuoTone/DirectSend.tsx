
import DirectSend from "../../../assets/duotone/DirectSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectSendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectSend data-testid="DirectSendIcon" className={classes} />
  );
}
