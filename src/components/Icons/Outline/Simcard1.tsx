
import Simcard1 from "../../../assets/outline/Simcard1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Simcard1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Simcard1 data-testid="Simcard1Icon" className={classes} />
  );
}
