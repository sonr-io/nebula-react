
import Element4 from "../../../assets/filled/Element4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Element4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Element4 data-testid="Element4Icon" className={classes} />
  );
}