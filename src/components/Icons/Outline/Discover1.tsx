
import Discover1 from "../../../assets/outline/Discover1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Discover1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Discover1 data-testid="Discover1Icon" className={classes} />
  );
}
