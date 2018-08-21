export class Notes {
  id: number;
  Title : string;
  Text : string;
  complete: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
