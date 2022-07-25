
import Cardano from "../../../assets/duotone/Cardano.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardanoIcon({ className, dataTestid = "CardanoIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Cardano data-testid={dataTestid} className={classes} {...rest} />
  );
}
