
import Tether from "../../../assets/duotone/Tether.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TetherIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Tether data-testid="TetherIcon" className={classes} />
  );
}
