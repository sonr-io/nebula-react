
import CardEdit from "../../../assets/outline/CardEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardEdit data-testid="CardEditIcon" className={classes} />
  );
}