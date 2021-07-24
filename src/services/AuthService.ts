import { User } from "../Model/Model";

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "user" && password === "123") {
      return {
        userName: userName,
        email: "someOne@gmail.com",
      };
    } else {
      return undefined;
    }
  }
}
