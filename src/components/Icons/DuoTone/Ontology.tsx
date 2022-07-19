
import Ontology from "../../../assets/duotone/Ontology.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OntologyIcon({ className, dataTestid = "OntologyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ontology data-testid={dataTestid} className={classes} {...rest} />
  );
}
