
import Brush3 from "../../../assets/filled/Brush3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Brush3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Brush3 data-testid="Brush3Icon" className={classes} />
  );
}
