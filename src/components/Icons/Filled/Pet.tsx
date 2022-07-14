
import Pet from "../../../assets/filled/Pet.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PetIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Pet data-testid="PetIcon" className={classes} />
  );
}