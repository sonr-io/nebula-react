
import Grid3 from "../../../assets/filled/Grid3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Grid3} data-testid="Grid3Icon" className={classes} />
  );
}
