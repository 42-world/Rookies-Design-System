import { addPropertyControls, PropertyControls } from 'framer';

type HigherOrderComponent<Props> = (Component: React.ComponentType<Props>, props?: Props) => React.ComponentType<Props>;

export function applyFramerProperties<Props extends Record<string, any>>(
  component: React.ComponentType<Props> | React.ForwardRefExoticComponent<Props> | HigherOrderComponent<Props>,
  propertyControls: PropertyControls<Props>,
): void {
  addPropertyControls(component, propertyControls);
}
