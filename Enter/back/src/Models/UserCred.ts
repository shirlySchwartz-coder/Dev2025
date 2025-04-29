export class UserCred {
  public userId: number;
  public userName: string;
  public userEmail?: string;
  public isAdmin?: boolean;
  public jwt?: string;

  constructor(
    userId: number,
    userName: string,
    userEmail?: string,
    isAdmin?: boolean,
    userPass?: string,
    jwt?: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.isAdmin = isAdmin;
    this.jwt = jwt;
  }
}
