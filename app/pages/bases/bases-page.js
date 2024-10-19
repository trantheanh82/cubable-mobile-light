import { fromObject } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object;
  const vm = fromObject({
    bases: [
      { id: 1, name: 'Base 1' },
      { id: 2, name: 'Base 2' },
      { id: 3, name: 'Base 3' },
      { id: 4, name: 'Base 4' },
    ]
  });
  page.bindingContext = vm;

  const grid = page.getViewById('basesGrid');
  vm.bases.forEach((base, index) => {
    const button = new Button();
    button.text = base.name;
    button.className = 'bg-white p-4 m-2 rounded-lg text-center';
    button.on('tap', () => onBaseTap(base));
    grid.addChild(button);
    GridLayout.setColumn(button, index % 2);
    GridLayout.setRow(button, Math.floor(index / 2));
  });
}

function onBaseTap(base) {
  const navigationEntry = {
    moduleName: 'pages/table-details/table-details-page',
    context: { baseId: base.id },
    transition: {
      name: 'slide',
      duration: 200,
      curve: 'ease'
    }
  };
  Frame.topmost().navigate(navigationEntry);
}

export function onLogout() {
  Frame.topmost().navigate({
    moduleName: 'pages/access-token/access-token-page',
    clearHistory: true
  });
}