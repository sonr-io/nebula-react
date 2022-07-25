
import Dropbox from "../../../assets/outline/Dropbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DropboxIcon({ className, dataTestid = "DropboxIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Dropbox data-testid={dataTestid} className={classes} {...rest} />
  );
}
