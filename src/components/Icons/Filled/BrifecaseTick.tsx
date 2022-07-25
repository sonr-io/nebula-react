
import BrifecaseTick from "../../../assets/filled/BrifecaseTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrifecaseTickIcon({ className, dataTestid = "BrifecaseTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BrifecaseTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
