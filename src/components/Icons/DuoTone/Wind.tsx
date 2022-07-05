
import Wind from "../../../assets/duotone/Wind.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WindIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wind data-testid="WindIcon" className={classes} />
  );
}
