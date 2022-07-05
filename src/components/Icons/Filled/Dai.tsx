
import Dai from "../../../assets/filled/Dai.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DaiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Dai data-testid="DaiIcon" className={classes} />
  );
}
