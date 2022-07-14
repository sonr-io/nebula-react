
import Note21 from "../../../assets/outline/Note21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Note21Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Note21} data-testid="Note21Icon" className={classes} />
  );
}
