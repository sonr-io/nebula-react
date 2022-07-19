
import ConvertCard from "../../../assets/duotone/ConvertCard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ConvertCardIcon({ className, dataTestid = "ConvertCardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ConvertCard data-testid={dataTestid} className={classes} {...rest} />
  );
}
