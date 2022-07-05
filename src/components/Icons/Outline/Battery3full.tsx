
import Battery3full from "../../../assets/outline/Battery3full.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Battery3fullIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Battery3full data-testid="Battery3fullIcon" className={classes} />
  );
}
