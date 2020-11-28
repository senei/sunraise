export default class UserModel {
  tag: string;
  name: string;
  avatar: string;
  isActive: number;

  constructor() {
    this.tag = '--tag--';
    this.name = ' -- no name --';
    this.avatar = '/assets/avatar.png';
    this.isActive = -1;
  }
}