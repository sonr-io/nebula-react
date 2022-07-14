
import ArrowUp1 from "../../../assets/duotone/ArrowUp1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUp1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowUp1} data-testid="ArrowUp1Icon" className={classes} />
  );
}
