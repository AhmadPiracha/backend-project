const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
    
    };
}
export default asyncHandler;

// const asyncHandler = ()=>{}
// const asyncHandler = (fn) => {()=>{}}
// const asyncHandler = (fn) => async ()=>{}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({ message: error.message })

//     }
// }


