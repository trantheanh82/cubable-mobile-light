import { fromObject } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object;
  const vm = fromObject({
    workspaces: [
      { id: 1, name: 'Workspace 1' },
      { id: 2, name: 'Workspace 2' },
      { id: 3, name: 'Workspace 3' },
      { id: 4, name: 'Workspace 4' },
    ]
  });
  page.bindingContext = vm;

  const grid = page.getViewById('workspacesGrid');
  vm.workspaces.forEach((workspace, index) => {
    const button = new Button();
    button.text = workspace.name;
    button.className = 'bg-white p-4 m-2 rounded-lg text-center';
    button.on('tap', () => onWorkspaceTap(workspace));
    grid.addChild(button);
    GridLayout.setColumn(button, index % 2);
    GridLayout.setRow(button, Math.floor(index / 2));
  });
}

function onWorkspaceTap(workspace) {
  const navigationEntry = {
    moduleName: 'pages/bases/bases-page',
    context: { workspaceId: workspace.id },
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