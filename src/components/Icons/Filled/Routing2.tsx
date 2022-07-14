
import Routing2 from "../../../assets/filled/Routing2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Routing2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Routing2} data-testid="Routing2Icon" className={classes} />
  );
}
