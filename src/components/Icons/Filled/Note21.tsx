
import Note21 from "../../../assets/filled/Note21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Note21Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Note21 data-testid="Note21Icon" className={classes} />
  );
}
