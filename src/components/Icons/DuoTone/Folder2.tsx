
import Folder2 from "../../../assets/duotone/Folder2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Folder2Icon({ className, dataTestid = "Folder2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Folder2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
