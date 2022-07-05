
import BagCross from "../../../assets/filled/BagCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BagCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BagCross data-testid="BagCrossIcon" className={classes} />
  );
}
