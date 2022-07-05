
import Direct from "../../../assets/outline/Direct.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DirectIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Direct data-testid="DirectIcon" className={classes} />
  );
}
