
import Forbidden2 from "../../../assets/filled/Forbidden2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Forbidden2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Forbidden2} data-testid="Forbidden2Icon" className={classes} />
  );
}
