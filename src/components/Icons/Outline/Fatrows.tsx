
import Fatrows from "../../../assets/outline/Fatrows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FatrowsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Fatrows data-testid="FatrowsIcon" className={classes} />
  );
}
