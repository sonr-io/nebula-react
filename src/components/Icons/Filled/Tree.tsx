
import Tree from "../../../assets/filled/Tree.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TreeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Tree} data-testid="TreeIcon" className={classes} />
  );
}
