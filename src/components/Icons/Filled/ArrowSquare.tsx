
import ArrowSquare from "../../../assets/filled/ArrowSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowSquare data-testid="ArrowSquareIcon" className={classes} />
  );
}
