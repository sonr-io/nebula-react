
import SliderVertical from "../../../assets/duotone/SliderVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderVerticalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SliderVertical} data-testid="SliderVerticalIcon" className={classes} />
  );
}
