
import Element3 from "../../../assets/filled/Element3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Element3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Element3} data-testid="Element3Icon" className={classes} />
  );
}
