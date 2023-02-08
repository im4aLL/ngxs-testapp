export class AddItemAction {
  static readonly type = '[TODO] Add item';

  constructor(public name: string) {}
}

export class ToggleItemAction {
  static readonly type = '[TODO] Toggle item';

  constructor(public name: string) {}
}
