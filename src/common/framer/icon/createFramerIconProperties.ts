import { pascalCase } from 'change-case';
import { ControlDescription, ControlType } from 'framer';
import { ICONS } from './icons';

export function createFramerIconProperties({
  title,
  optional = false,
}: {
  title: string;
  optional?: boolean;
}): ControlDescription {
  const typeOptions = ['filled', 'outlined', 'round', 'two-tone', 'sharp'];

  if (optional) {
    typeOptions.unshift('none');
  }

  return {
    title,
    type: ControlType.Object,
    controls: {
      type: {
        title: 'Type',
        type: ControlType.Enum,
        options: typeOptions,
        optionTitles: typeOptions.map(toPascalCase),
        defaultValue: typeOptions[0],
      },
      name: {
        title: 'Name',
        type: ControlType.Enum,
        options: [...ICONS],
        optionTitles: [...ICONS].map(toPascalCase),
        defaultValue: 'favorite',
        hidden: (props) => props.type === 'none',
      },
    },
    defaultValue: {
      type: typeOptions[0],
      name: 'favorite',
    },
  };
}

function toPascalCase(str: string) {
  return pascalCase(str);
}
