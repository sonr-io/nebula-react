
import HomeTrendDown from "../../../assets/filled/HomeTrendDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeTrendDownIcon({ className, dataTestid = "HomeTrendDownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HomeTrendDown data-testid={dataTestid} className={classes} {...rest} />
  );
}
