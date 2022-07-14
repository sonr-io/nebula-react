
import MoneySend from "../../../assets/duotone/MoneySend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneySendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MoneySend} data-testid="MoneySendIcon" className={classes} />
  );
}
