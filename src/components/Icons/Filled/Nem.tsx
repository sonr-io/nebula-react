
import Nem from "../../../assets/filled/Nem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NemIcon({ className, dataTestid = "NemIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Nem data-testid={dataTestid} className={classes} {...rest} />
  );
}
