
import Buildings2 from "../../../assets/filled/Buildings2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Buildings2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Buildings2} data-testid="Buildings2Icon" className={classes} />
  );
}
