
import Discover from "../../../assets/outline/Discover.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DiscoverIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Discover data-testid="DiscoverIcon" className={classes} />
  );
}
