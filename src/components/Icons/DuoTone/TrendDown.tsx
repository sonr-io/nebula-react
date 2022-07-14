
import TrendDown from "../../../assets/duotone/TrendDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrendDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TrendDown data-testid="TrendDownIcon" className={classes} />
  );
}
