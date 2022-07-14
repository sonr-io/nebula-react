
import ArrowUp2 from "../../../assets/duotone/ArrowUp2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUp2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowUp2} data-testid="ArrowUp2Icon" className={classes} />
  );
}
