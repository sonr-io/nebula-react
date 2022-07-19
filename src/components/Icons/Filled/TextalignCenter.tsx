
import TextalignCenter from "../../../assets/filled/TextalignCenter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignCenterIcon({ className, dataTestid = "TextalignCenterIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TextalignCenter data-testid={dataTestid} className={classes} {...rest} />
  );
}
