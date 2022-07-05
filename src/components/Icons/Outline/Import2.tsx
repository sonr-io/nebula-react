
import Import2 from "../../../assets/outline/Import2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Import2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Import2 data-testid="Import2Icon" className={classes} />
  );
}
