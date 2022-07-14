
import Element2 from "../../../assets/filled/Element2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Element2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Element2} data-testid="Element2Icon" className={classes} />
  );
}
