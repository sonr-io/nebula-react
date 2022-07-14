
import MaximizeCircle from "../../../assets/outline/MaximizeCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MaximizeCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MaximizeCircle data-testid="MaximizeCircleIcon" className={classes} />
  );
}
