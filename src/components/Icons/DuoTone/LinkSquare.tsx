
import LinkSquare from "../../../assets/duotone/LinkSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LinkSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LinkSquare data-testid="LinkSquareIcon" className={classes} />
  );
}
