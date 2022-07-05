
import TrendDown from "../../../assets/filled/TrendDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TrendDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TrendDown data-testid="TrendDownIcon" className={classes} />
  );
}
