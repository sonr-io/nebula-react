
import House2 from "../../../assets/filled/House2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function House2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={House2} data-testid="House2Icon" className={classes} />
  );
}
