
import Bookmark2 from "../../../assets/filled/Bookmark2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Bookmark2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bookmark2 data-testid="Bookmark2Icon" className={classes} />
  );
}
