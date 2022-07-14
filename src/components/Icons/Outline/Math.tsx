
import Math from "../../../assets/outline/Math.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MathIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Math} data-testid="MathIcon" className={classes} />
  );
}
