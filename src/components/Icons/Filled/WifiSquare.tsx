
import WifiSquare from "../../../assets/filled/WifiSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WifiSquareIcon({ className, dataTestid = "WifiSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <WifiSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
