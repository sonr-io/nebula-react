
import ArrangeSquare from "../../../assets/filled/ArrangeSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrangeSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrangeSquare data-testid="ArrangeSquareIcon" className={classes} />
  );
}
