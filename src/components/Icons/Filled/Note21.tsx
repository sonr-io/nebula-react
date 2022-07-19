
import Note21 from "../../../assets/filled/Note21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Note21Icon({ className, dataTestid = "Note21Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Note21 data-testid={dataTestid} className={classes} {...rest} />
  );
}
