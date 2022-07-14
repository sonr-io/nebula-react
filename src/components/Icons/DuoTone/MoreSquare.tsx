
import MoreSquare from "../../../assets/duotone/MoreSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MoreSquare} data-testid="MoreSquareIcon" className={classes} />
  );
}
