
import GoogleDrive from "../../../assets/duotone/GoogleDrive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GoogleDriveIcon({ className, dataTestid = "GoogleDriveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GoogleDrive data-testid={dataTestid} className={classes} {...rest} />
  );
}
