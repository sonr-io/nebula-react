
import Triangle1 from "../../../assets/outline/Triangle1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Triangle1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Triangle1} data-testid="Triangle1Icon" className={classes} />
  );
}
