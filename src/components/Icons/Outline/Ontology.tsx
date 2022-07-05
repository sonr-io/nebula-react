
import Ontology from "../../../assets/outline/Ontology.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function OntologyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ontology data-testid="OntologyIcon" className={classes} />
  );
}
