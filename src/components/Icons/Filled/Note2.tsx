
import Note2 from "../../../assets/filled/Note2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Note2Icon({ className, dataTestid = "Note2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Note2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
