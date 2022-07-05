
import Headphones from "../../../assets/outline/Headphones.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HeadphonesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Headphones data-testid="HeadphonesIcon" className={classes} />
  );
}
