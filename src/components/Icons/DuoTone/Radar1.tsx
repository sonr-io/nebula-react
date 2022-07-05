
import Radar1 from "../../../assets/duotone/Radar1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Radar1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Radar1 data-testid="Radar1Icon" className={classes} />
  );
}
