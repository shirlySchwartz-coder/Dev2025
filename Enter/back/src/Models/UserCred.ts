export class UserCred {
  public userId: number;
  public userName: string;
  public userEmail: string;
  public role: string;
  public userPass?: string;
  public jwt?: string;

  constructor(
    userId: number,
    userName: string,
    userEmail: string,
    role: string,
    userPass?: string,
    jwt?: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.role = role;
    this.userPass = userPass || '';
    this.jwt = jwt;
  }
}
