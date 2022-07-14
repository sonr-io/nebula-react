
import StatusUp from "../../../assets/outline/StatusUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StatusUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <StatusUp data-testid="StatusUpIcon" className={classes} />
  );
}
