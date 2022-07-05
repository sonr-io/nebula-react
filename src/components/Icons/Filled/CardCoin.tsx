
import CardCoin from "../../../assets/filled/CardCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardCoin data-testid="CardCoinIcon" className={classes} />
  );
}
