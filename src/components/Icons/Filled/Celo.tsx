
import Celo from "../../../assets/filled/Celo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CeloIcon({ className, dataTestid = "CeloIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Celo data-testid={dataTestid} className={classes} {...rest} />
  );
}
