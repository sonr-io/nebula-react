
import Minus from "../../../assets/filled/Minus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Minus data-testid="MinusIcon" className={classes} />
  );
}
