const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Forbidden — requires one of these roles: ${roles.join(", ")}`,
      });
    }
    next();
  };
};

export default authorize;