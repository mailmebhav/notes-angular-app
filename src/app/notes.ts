export class Notes {
  id: number;
  Title : string;
  Text : string;
  pinned: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
