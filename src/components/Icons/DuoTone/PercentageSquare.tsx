
import PercentageSquare from "../../../assets/duotone/PercentageSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PercentageSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PercentageSquare data-testid="PercentageSquareIcon" className={classes} />
  );
}