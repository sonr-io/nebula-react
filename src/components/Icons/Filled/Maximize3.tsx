
import Maximize3 from "../../../assets/filled/Maximize3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Maximize3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Maximize3 data-testid="Maximize3Icon" className={classes} />
  );
}
