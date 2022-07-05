
import Dropbox from "../../../assets/duotone/Dropbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DropboxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Dropbox data-testid="DropboxIcon" className={classes} />
  );
}
