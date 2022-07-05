
import AirplaneSquare from "../../../assets/filled/AirplaneSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AirplaneSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AirplaneSquare data-testid="AirplaneSquareIcon" className={classes} />
  );
}
