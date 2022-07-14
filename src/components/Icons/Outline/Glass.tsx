
import Glass from "../../../assets/outline/Glass.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlassIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Glass} data-testid="GlassIcon" className={classes} />
  );
}
