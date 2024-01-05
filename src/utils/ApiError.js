class ApiError extends Error{
    constructor(
        message="Something went wrong",
        errors=[
            {
                msg: "Something went wrong",
                param: "errors",
            },
        ],
        stack= "",
        statusCode
        
        ){
            super(message);
            this.errors = errors;
            this.statusCode = statusCode;
            this.data =null;
            this.success = false;
this.message = message;


            if(stack){
                this.stack = stack;
            }
            else{
                Error.captureStackTrace(this, this.constructor);
            }
        }


}

export default ApiError;