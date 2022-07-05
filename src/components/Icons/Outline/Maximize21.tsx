
import Maximize21 from "../../../assets/outline/Maximize21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Maximize21Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Maximize21 data-testid="Maximize21Icon" className={classes} />
  );
}
