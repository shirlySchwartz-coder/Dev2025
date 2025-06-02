export class UserReg {
  public id: number;
  public userFirstName: string;
  public userLastName: string;
  public userEmail: string;
  public userPhone?: string;
  public userPassword: string;
  public role: string;

  constructor(
    id: number,
    userFirstName: string,
    userLastName: string,
    userEmail: string,
    userPhone: string,
    userPassword: string,
    role: string
  ) {
    this.id = id;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userEmail = userEmail;
    this.userPhone = userPhone;
    this.userPassword = userPassword;
    this.role = role;
  }
}