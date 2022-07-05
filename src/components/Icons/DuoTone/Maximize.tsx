
import Maximize from "../../../assets/duotone/Maximize.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MaximizeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Maximize data-testid="MaximizeIcon" className={classes} />
  );
}
