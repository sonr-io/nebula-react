
import Note1 from "../../../assets/filled/Note1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Note1Icon({ className, dataTestid = "Note1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Note1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
