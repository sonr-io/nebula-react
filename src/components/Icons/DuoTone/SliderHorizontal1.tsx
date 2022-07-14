
import SliderHorizontal1 from "../../../assets/duotone/SliderHorizontal1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderHorizontal1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SliderHorizontal1 data-testid="SliderHorizontal1Icon" className={classes} />
  );
}
