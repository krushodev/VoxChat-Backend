import { Server } from "http";

interface IApplication {
  init: () => void;
  build: () => void;
  listen: () => Server;
}

export default IApplication;
