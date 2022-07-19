
import AirplaneSquare from "../../../assets/filled/AirplaneSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirplaneSquareIcon({ className, dataTestid = "AirplaneSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AirplaneSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
