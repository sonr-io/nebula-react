
import Math from "../../../assets/filled/Math.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MathIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Math data-testid="MathIcon" className={classes} />
  );
}
