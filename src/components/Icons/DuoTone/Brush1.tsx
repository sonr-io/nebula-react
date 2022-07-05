
import Brush1 from "../../../assets/duotone/Brush1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Brush1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Brush1 data-testid="Brush1Icon" className={classes} />
  );
}
