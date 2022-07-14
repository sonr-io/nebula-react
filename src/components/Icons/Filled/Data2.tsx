
import Data2 from "../../../assets/filled/Data2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Data2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Data2} data-testid="Data2Icon" className={classes} />
  );
}
