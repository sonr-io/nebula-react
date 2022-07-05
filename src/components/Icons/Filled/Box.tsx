
import Box from "../../../assets/filled/Box.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BoxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Box data-testid="BoxIcon" className={classes} />
  );
}
