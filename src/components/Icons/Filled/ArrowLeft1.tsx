
import ArrowLeft1 from "../../../assets/filled/ArrowLeft1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowLeft1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowLeft1} data-testid="ArrowLeft1Icon" className={classes} />
  );
}
