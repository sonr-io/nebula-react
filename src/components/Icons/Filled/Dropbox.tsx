
import Dropbox from "../../../assets/filled/Dropbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DropboxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Dropbox data-testid="DropboxIcon" className={classes} />
  );
}
