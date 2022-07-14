
import Stacks from "../../../assets/filled/Stacks.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StacksIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Stacks} data-testid="StacksIcon" className={classes} />
  );
}
