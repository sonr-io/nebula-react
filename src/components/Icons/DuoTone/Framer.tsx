
import Framer from "../../../assets/duotone/Framer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FramerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Framer data-testid="FramerIcon" className={classes} />
  );
}
