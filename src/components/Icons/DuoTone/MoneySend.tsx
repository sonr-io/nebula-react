
import MoneySend from "../../../assets/duotone/MoneySend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneySendIcon({ className, dataTestid = "MoneySendIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoneySend data-testid={dataTestid} className={classes} {...rest} />
  );
}
