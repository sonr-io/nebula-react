
import PercentageSquare from "../../../assets/filled/PercentageSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PercentageSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PercentageSquare} data-testid="PercentageSquareIcon" className={classes} />
  );
}
