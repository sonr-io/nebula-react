
import Brush2 from "../../../assets/outline/Brush2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Brush2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Brush2 data-testid="Brush2Icon" className={classes} />
  );
}
