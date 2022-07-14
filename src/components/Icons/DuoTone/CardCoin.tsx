
import CardCoin from "../../../assets/duotone/CardCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CardCoin} data-testid="CardCoinIcon" className={classes} />
  );
}
