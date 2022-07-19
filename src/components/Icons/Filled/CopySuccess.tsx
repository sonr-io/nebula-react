
import CopySuccess from "../../../assets/filled/CopySuccess.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CopySuccessIcon({ className, dataTestid = "CopySuccessIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CopySuccess data-testid={dataTestid} className={classes} {...rest} />
  );
}
