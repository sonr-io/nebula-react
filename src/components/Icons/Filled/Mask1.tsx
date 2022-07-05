
import Mask1 from "../../../assets/filled/Mask1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Mask1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Mask1 data-testid="Mask1Icon" className={classes} />
  );
}
