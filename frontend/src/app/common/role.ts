import { StatusRole } from './statusRole';

export class Role {
  id: number;
  authority: StatusRole;

  constructor(id: number, authority: StatusRole) {
    this.id = id;
    this.authority = authority;
  }
}

