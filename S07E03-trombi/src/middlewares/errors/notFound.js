function notFound(req, res, next) {
    const error = new Error('Nous ne trouvons pas la ressource demandée');

    error.statusCode = 404;

    error.viewName = '404';

    next(error);
}

export { notFound }