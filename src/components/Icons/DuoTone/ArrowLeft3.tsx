
import ArrowLeft3 from "../../../assets/duotone/ArrowLeft3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowLeft3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowLeft3} data-testid="ArrowLeft3Icon" className={classes} />
  );
}
