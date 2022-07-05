
import Brush4 from "../../../assets/filled/Brush4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Brush4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Brush4 data-testid="Brush4Icon" className={classes} />
  );
}
