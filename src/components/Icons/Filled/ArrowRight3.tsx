
import ArrowRight3 from "../../../assets/filled/ArrowRight3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRight3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowRight3} data-testid="ArrowRight3Icon" className={classes} />
  );
}
