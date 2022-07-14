
import TrendDown from "../../../assets/filled/TrendDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrendDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TrendDown} data-testid="TrendDownIcon" className={classes} />
  );
}
