
import ArrowLeft3 from "../../../assets/filled/ArrowLeft3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowLeft3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowLeft3 data-testid="ArrowLeft3Icon" className={classes} />
  );
}
