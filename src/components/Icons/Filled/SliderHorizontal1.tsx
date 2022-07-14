
import SliderHorizontal1 from "../../../assets/filled/SliderHorizontal1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderHorizontal1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SliderHorizontal1} data-testid="SliderHorizontal1Icon" className={classes} />
  );
}
