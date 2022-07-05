
import KeySquare from "../../../assets/filled/KeySquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function KeySquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <KeySquare data-testid="KeySquareIcon" className={classes} />
  );
}
