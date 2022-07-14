
import Home2 from "../../../assets/duotone/Home2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Home2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Home2} data-testid="Home2Icon" className={classes} />
  );
}
