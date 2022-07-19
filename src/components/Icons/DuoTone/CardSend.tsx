
import CardSend from "../../../assets/duotone/CardSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardSendIcon({ className, dataTestid = "CardSendIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardSend data-testid={dataTestid} className={classes} {...rest} />
  );
}
