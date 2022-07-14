
import CloudDrizzle from "../../../assets/outline/CloudDrizzle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudDrizzleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudDrizzle data-testid="CloudDrizzleIcon" className={classes} />
  );
}
