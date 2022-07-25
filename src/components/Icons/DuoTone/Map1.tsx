
import Map1 from "../../../assets/duotone/Map1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Map1Icon({ className, dataTestid = "Map1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Map1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
