
import LinkSquare from "../../../assets/filled/LinkSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LinkSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LinkSquare data-testid="LinkSquareIcon" className={classes} />
  );
}
