
import FtxToken from "../../../assets/filled/FtxToken.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FtxTokenIcon({ className, dataTestid = "FtxTokenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FtxToken data-testid={dataTestid} className={classes} {...rest} />
  );
}
