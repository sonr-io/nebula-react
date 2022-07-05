
import Like1 from "../../../assets/duotone/Like1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Like1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Like1 data-testid="Like1Icon" className={classes} />
  );
}
