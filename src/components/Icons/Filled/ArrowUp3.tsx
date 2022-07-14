
import ArrowUp3 from "../../../assets/filled/ArrowUp3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUp3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowUp3} data-testid="ArrowUp3Icon" className={classes} />
  );
}
