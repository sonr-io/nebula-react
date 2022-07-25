
import SaveAdd from "../../../assets/duotone/SaveAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SaveAddIcon({ className, dataTestid = "SaveAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SaveAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
