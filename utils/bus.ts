import { IUser } from "@usemirrorworld/web3.js";
import mitt from "mitt";

type Events = {
  user: IUser;
};

export const eventBus = mitt<Events>();
