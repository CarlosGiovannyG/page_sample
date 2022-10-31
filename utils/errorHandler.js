//& CLASE PARA CAPTURAR LOS ERRORES DEL BACK
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
