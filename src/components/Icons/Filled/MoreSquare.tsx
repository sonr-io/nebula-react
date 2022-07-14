
import MoreSquare from "../../../assets/filled/MoreSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoreSquare data-testid="MoreSquareIcon" className={classes} />
  );
}
