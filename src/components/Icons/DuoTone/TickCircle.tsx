
import TickCircle from "../../../assets/duotone/TickCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TickCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TickCircle} data-testid="TickCircleIcon" className={classes} />
  );
}
