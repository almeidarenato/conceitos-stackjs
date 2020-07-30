import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "renatoam@ymail.com",
    password: "123455",
    techs: [
      "NodeJs",
      "ReactJs",
      "ReactNative",
      { title: "Javascript", experience: 100 },
      { title: "NewReact", experience: 50 },
    ],
  });
  return response.json({ message: "Hello World" });
}
