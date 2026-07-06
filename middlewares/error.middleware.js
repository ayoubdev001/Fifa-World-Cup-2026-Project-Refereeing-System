const errorHandler = (err, req, res, next) => {
  console.error(`❌ Error: ${err.message}`);

  // Sequelize validation error
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      message: "Validation error",
      errors: err.errors.map((e) => e.message),
    });
  }

  // Sequelize unique constraint error
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(400).json({
      message: "Duplicate entry — this assignment already exists",
      errors: err.errors.map((e) => e.message),
    });
  }

  // Sequelize foreign key error
  if (err.name === "SequelizeForeignKeyConstraintError") {
    return res.status(400).json({
      message: "Invalid arbitreId or matchId — referee or match does not exist",
    });
  }

  // Sequelize database error
  if (err.name === "SequelizeDatabaseError") {
    return res.status(400).json({
      message: "Database error",
      error: err.message,
    });
  }

  // Default 500 error
  return res.status(500).json({
    message: "Internal server error",
    error: err.message,
  });
};

export default errorHandler;