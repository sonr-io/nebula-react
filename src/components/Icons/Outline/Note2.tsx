
import Note2 from "../../../assets/outline/Note2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Note2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Note2} data-testid="Note2Icon" className={classes} />
  );
}
