
import Teacher from "../../../assets/outline/Teacher.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TeacherIcon({ className, dataTestid = "TeacherIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Teacher data-testid={dataTestid} className={classes} {...rest} />
  );
}
