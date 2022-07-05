
import RefreshLeftSquare from "../../../assets/filled/RefreshLeftSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RefreshLeftSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RefreshLeftSquare data-testid="RefreshLeftSquareIcon" className={classes} />
  );
}
