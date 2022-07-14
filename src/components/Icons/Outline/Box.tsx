
import Box from "../../../assets/outline/Box.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Box data-testid="BoxIcon" className={classes} />
  );
}
