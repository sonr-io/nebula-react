
import Battery1full from "../../../assets/duotone/Battery1full.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Battery1fullIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Battery1full data-testid="Battery1fullIcon" className={classes} />
  );
}
