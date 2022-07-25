
import CardCoin from "../../../assets/filled/CardCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardCoinIcon({ className, dataTestid = "CardCoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardCoin data-testid={dataTestid} className={classes} {...rest} />
  );
}
