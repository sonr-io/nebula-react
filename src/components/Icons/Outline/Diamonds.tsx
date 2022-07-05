
import Diamonds from "../../../assets/outline/Diamonds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DiamondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Diamonds data-testid="DiamondsIcon" className={classes} />
  );
}
