
import GoogleDrive from "../../../assets/duotone/GoogleDrive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GoogleDriveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GoogleDrive data-testid="GoogleDriveIcon" className={classes} />
  );
}
