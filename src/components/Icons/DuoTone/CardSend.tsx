
import CardSend from "../../../assets/duotone/CardSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardSendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CardSend} data-testid="CardSendIcon" className={classes} />
  );
}
