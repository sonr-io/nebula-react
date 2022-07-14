
import ArrowSwapHorizontal from "../../../assets/filled/ArrowSwapHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSwapHorizontalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowSwapHorizontal data-testid="ArrowSwapHorizontalIcon" className={classes} />
  );
}