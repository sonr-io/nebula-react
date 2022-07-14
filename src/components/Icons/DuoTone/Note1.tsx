
import Note1 from "../../../assets/duotone/Note1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Note1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Note1 data-testid="Note1Icon" className={classes} />
  );
}
