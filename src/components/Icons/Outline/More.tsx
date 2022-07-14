
import More from "../../../assets/outline/More.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <More data-testid="MoreIcon" className={classes} />
  );
}
