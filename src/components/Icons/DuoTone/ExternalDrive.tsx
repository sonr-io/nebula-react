
import ExternalDrive from "../../../assets/duotone/ExternalDrive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ExternalDriveIcon({ className, dataTestid = "ExternalDriveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ExternalDrive data-testid={dataTestid} className={classes} {...rest} />
  );
}
