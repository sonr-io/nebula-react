
import Folder2 from "../../../assets/duotone/Folder2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Folder2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Folder2 data-testid="Folder2Icon" className={classes} />
  );
}
