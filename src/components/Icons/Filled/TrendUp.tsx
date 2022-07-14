
import TrendUp from "../../../assets/filled/TrendUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrendUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TrendUp data-testid="TrendUpIcon" className={classes} />
  );
}
