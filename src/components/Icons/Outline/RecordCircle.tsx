
import RecordCircle from "../../../assets/outline/RecordCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RecordCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RecordCircle data-testid="RecordCircleIcon" className={classes} />
  );
}
