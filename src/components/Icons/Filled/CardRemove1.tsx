
import CardRemove1 from "../../../assets/filled/CardRemove1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardRemove1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardRemove1 data-testid="CardRemove1Icon" className={classes} />
  );
}
