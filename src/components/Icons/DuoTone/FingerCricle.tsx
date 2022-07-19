
import FingerCricle from "../../../assets/duotone/FingerCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FingerCricleIcon({ className, dataTestid = "FingerCricleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FingerCricle data-testid={dataTestid} className={classes} {...rest} />
  );
}
