export class ErrorHandler{
  returnHttpError(error: any) : Object {
    return {
      "errors": [
        {
          "status": error.error_code,
          "ok": error.ok,
          "detail": error.description,
        }
      ]
    }
  }
}