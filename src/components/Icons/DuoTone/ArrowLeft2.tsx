
import ArrowLeft2 from "../../../assets/duotone/ArrowLeft2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowLeft2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowLeft2} data-testid="ArrowLeft2Icon" className={classes} />
  );
}
