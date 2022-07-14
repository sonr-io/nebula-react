
import SliderHorizontal from "../../../assets/duotone/SliderHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderHorizontalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SliderHorizontal data-testid="SliderHorizontalIcon" className={classes} />
  );
}
