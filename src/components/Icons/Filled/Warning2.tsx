
import Warning2 from "../../../assets/filled/Warning2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Warning2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Warning2} data-testid="Warning2Icon" className={classes} />
  );
}
