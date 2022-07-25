
import Health from "../../../assets/filled/Health.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HealthIcon({ className, dataTestid = "HealthIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Health data-testid={dataTestid} className={classes} {...rest} />
  );
}
