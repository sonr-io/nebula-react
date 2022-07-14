
import DirectboxSend from "../../../assets/duotone/DirectboxSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxSendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectboxSend data-testid="DirectboxSendIcon" className={classes} />
  );
}
