
import MaximizeCircle from "../../../assets/duotone/MaximizeCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MaximizeCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MaximizeCircle data-testid="MaximizeCircleIcon" className={classes} />
  );
}
