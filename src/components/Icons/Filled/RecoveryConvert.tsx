
import RecoveryConvert from "../../../assets/filled/RecoveryConvert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RecoveryConvertIcon({ className, dataTestid = "RecoveryConvertIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RecoveryConvert data-testid={dataTestid} className={classes} {...rest} />
  );
}
