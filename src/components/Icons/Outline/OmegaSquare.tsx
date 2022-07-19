
import OmegaSquare from "../../../assets/outline/OmegaSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OmegaSquareIcon({ className, dataTestid = "OmegaSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <OmegaSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
