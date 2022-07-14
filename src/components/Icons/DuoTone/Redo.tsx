
import Redo from "../../../assets/duotone/Redo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RedoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Redo} data-testid="RedoIcon" className={classes} />
  );
}
