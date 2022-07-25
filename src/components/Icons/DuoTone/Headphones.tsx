
import Headphones from "../../../assets/duotone/Headphones.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeadphonesIcon({ className, dataTestid = "HeadphonesIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Headphones data-testid={dataTestid} className={classes} {...rest} />
  );
}
