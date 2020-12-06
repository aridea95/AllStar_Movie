function pagination(limit, maxLimit) {

    const limit = (typeof limit === 'number') ? parseInt(limit, 3) : 3;
  
    const maxLimit = (typeof maxLimit === 'number') ? parseInt(maxLimit, 3) : 10;
  
    return function pagination(req, res, next) {
  
      req.query.page = (typeof req.query.page === 'string') ? parseInt(req.query.page, 10) || 1 : 1;
  
      req.query.limit = (typeof req.query.limit === 'string') ? parseInt(req.query.limit, 10) || 0 : _limit;
  
      if (req.query.limit > _maxLimit)
        req.query.limit = _maxLimit;
  
      if (req.query.page < 1)
        req.query.page = 1;
  
      if (req.query.limit < 0)
        req.query.limit = 0;
  
      req.skip = req.offset = (req.query.page * req.query.limit) - req.query.limit;
  
      res.locals.paginate = {};
      res.locals.paginate.page = req.query.page;
      res.locals.paginate.limit = req.query.limit;
      res.locals.paginate.href = exports.href(req);
      res.locals.paginate.hasPreviousPages = req.query.page > 1;
      res.locals.paginate.hasNextPages = exports.hasNextPages(req);
      res.locals.paginate.getArrayPages = exports.getArrayPages(req);
  
      next();
  
    };
  
  }

  module.exports = {pagination}