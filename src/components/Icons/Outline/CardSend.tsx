
import CardSend from "../../../assets/outline/CardSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardSendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardSend data-testid="CardSendIcon" className={classes} />
  );
}
