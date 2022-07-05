
import Forbidden from "../../../assets/duotone/Forbidden.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ForbiddenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Forbidden data-testid="ForbiddenIcon" className={classes} />
  );
}
