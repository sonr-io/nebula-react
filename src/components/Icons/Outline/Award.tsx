
import Award from "../../../assets/outline/Award.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AwardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Award data-testid="AwardIcon" className={classes} />
  );
}
