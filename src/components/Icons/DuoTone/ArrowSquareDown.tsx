
import ArrowSquareDown from "../../../assets/duotone/ArrowSquareDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSquareDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowSquareDown} data-testid="ArrowSquareDownIcon" className={classes} />
  );
}
