const logger = (req, res, next) => {

    console.log('Logger');
    next();

};

export default logger;
