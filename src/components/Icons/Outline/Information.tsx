
import Information from "../../../assets/outline/Information.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function InformationIcon({ className, dataTestid = "InformationIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Information data-testid={dataTestid} className={classes} {...rest} />
  );
}
