
import Lifebuoy from "../../../assets/duotone/Lifebuoy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LifebuoyIcon({ className, dataTestid = "LifebuoyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Lifebuoy data-testid={dataTestid} className={classes} {...rest} />
  );
}
