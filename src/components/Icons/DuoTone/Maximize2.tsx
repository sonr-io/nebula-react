
import Maximize2 from "../../../assets/duotone/Maximize2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Maximize2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Maximize2 data-testid="Maximize2Icon" className={classes} />
  );
}
