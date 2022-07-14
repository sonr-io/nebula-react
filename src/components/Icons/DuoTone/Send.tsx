
import Send from "../../../assets/duotone/Send.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Send} data-testid="SendIcon" className={classes} />
  );
}
