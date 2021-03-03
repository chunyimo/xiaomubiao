export interface HttpMessage {
  code: number;
  message: string;
  payload?: any;
}
const httpMessages:Record<string, HttpMessage> = {

}

export default httpMessages;
