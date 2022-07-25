
import Airpod from "../../../assets/filled/Airpod.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirpodIcon({ className, dataTestid = "AirpodIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Airpod data-testid={dataTestid} className={classes} {...rest} />
  );
}
