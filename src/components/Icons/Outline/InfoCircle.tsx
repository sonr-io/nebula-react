
import InfoCircle from "../../../assets/outline/InfoCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function InfoCircleIcon({ className, dataTestid = "InfoCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <InfoCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
