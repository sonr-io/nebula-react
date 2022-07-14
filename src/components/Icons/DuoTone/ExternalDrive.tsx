
import ExternalDrive from "../../../assets/duotone/ExternalDrive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ExternalDriveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ExternalDrive} data-testid="ExternalDriveIcon" className={classes} />
  );
}
