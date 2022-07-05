
import ArrowLeft2 from "../../../assets/filled/ArrowLeft2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowLeft2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowLeft2 data-testid="ArrowLeft2Icon" className={classes} />
  );
}
