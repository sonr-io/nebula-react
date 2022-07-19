
import Pet from "../../../assets/duotone/Pet.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PetIcon({ className, dataTestid = "PetIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Pet data-testid={dataTestid} className={classes} {...rest} />
  );
}
