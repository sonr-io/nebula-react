
import Maker from "../../../assets/duotone/Maker.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MakerIcon({ className, dataTestid = "MakerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Maker data-testid={dataTestid} className={classes} {...rest} />
  );
}
