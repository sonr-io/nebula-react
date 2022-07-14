
import ArrangeSquare2 from "../../../assets/duotone/ArrangeSquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrangeSquare2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrangeSquare2} data-testid="ArrangeSquare2Icon" className={classes} />
  );
}
