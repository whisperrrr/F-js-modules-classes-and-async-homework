import { ADDRESS, PATH, PORT } from "./constant";

export default function getURL() {
  return `${ADDRESS}:${PORT}${PATH}`;
}
