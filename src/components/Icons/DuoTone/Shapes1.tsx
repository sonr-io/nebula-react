
import Shapes1 from "../../../assets/duotone/Shapes1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Shapes1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Shapes1 data-testid="Shapes1Icon" className={classes} />
  );
}
