
import Home1 from "../../../assets/outline/Home1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Home1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Home1} data-testid="Home1Icon" className={classes} />
  );
}
