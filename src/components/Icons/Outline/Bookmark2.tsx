
import Bookmark2 from "../../../assets/outline/Bookmark2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Bookmark2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Bookmark2} data-testid="Bookmark2Icon" className={classes} />
  );
}
