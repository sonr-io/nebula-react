
import Brush3 from "../../../assets/outline/Brush3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Brush3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Brush3} data-testid="Brush3Icon" className={classes} />
  );
}
