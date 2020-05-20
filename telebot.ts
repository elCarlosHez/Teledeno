import { RequestHandler } from './network/requestHandler.ts';
import { ErrorHandler } from './network/errorHandler.ts';

export class Client {
  private token: string;
  private _requestHandler: RequestHandler;
  private _errorHandler: ErrorHandler;

  constructor(token: string) {
    this.token = token; 
    this._requestHandler = new RequestHandler();
    this._errorHandler = new ErrorHandler();
  }

  sendMessage(chatId: string, msg: string, options?: Object) : Object { 
    return this._requestHandler.POST("@todo",{
      ...options,
      chat_id: chatId,
      text: msg,
    })
      .then(data =>  data )
      .catch(e => this._errorHandler.returnHttpError( e ));
  }
}