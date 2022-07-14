
import RefreshLeftSquare from "../../../assets/duotone/RefreshLeftSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshLeftSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RefreshLeftSquare} data-testid="RefreshLeftSquareIcon" className={classes} />
  );
}
