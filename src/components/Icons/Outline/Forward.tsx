
import Forward from "../../../assets/outline/Forward.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForwardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Forward data-testid="ForwardIcon" className={classes} />
  );
}
