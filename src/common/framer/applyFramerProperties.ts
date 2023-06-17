import { addPropertyControls, ControlDescription, PropertyControls } from 'framer';

type HigherOrderComponent<Props> = (Component: React.ComponentType<Props>, props?: Props) => React.ComponentType<Props>;

type PropertyControlsType<Props extends Record<string, any>> = {
  [K in keyof Props]: ControlDescription<Partial<Props>> & {
    title: string;
  };
};

export function applyFramerProperties<Props extends Record<string, any>>(
  component: React.ComponentType<Props> | React.ForwardRefExoticComponent<Props> | HigherOrderComponent<Props>,
  propertyControls: PropertyControlsType<Props>,
): void {
  addPropertyControls(component, propertyControls as PropertyControls<Props>);
}
