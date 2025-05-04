function errorHandler(err, req, res, next) {

    const statusCode = err.statusCode || 500;

    const viewName = err.viewName || 'error';
   

    res.status(statusCode).render(viewName, { message: err.message, stack: err.stack });
}

export { errorHandler };