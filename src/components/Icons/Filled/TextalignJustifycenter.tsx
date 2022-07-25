
import TextalignJustifycenter from "../../../assets/filled/TextalignJustifycenter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignJustifycenterIcon({ className, dataTestid = "TextalignJustifycenterIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TextalignJustifycenter data-testid={dataTestid} className={classes} {...rest} />
  );
}
