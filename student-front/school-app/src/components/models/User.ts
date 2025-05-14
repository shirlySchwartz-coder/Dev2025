export class User {
  public userId:number;
  public userName: string;
  public userEmail?: string;
  public userPass?: string; //if forgat password
  public role?: string;
  public jwt?: string;

  constructor(
    userId:number,
    userName: string,
    userEmail?: string,
    userPass?: string,
    role?: string,
    jwt?: string
  ) {
    this.userId=userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPass = userPass;
    this.role = role;
    this.jwt = jwt;
  }
}
