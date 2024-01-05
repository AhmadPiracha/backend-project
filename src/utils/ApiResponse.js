class ApiResponse {
  constructor(data, message="success", statusCode) {
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
    this.statusCode = statusCode;
  }
}