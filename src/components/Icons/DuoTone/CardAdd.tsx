
import CardAdd from "../../../assets/duotone/CardAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CardAdd} data-testid="CardAddIcon" className={classes} />
  );
}
