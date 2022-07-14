
import ArrowDown1 from "../../../assets/filled/ArrowDown1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowDown1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowDown1 data-testid="ArrowDown1Icon" className={classes} />
  );
}
