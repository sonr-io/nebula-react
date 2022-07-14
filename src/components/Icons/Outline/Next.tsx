
import Next from "../../../assets/outline/Next.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Next data-testid="NextIcon" className={classes} />
  );
}
