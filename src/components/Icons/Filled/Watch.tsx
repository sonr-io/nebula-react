
import Watch from "../../../assets/filled/Watch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WatchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Watch data-testid="WatchIcon" className={classes} />
  );
}
