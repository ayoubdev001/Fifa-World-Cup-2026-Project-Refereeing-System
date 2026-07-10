import { z } from "zod";

// Register schema
const registerSchema = z.object({
  nom: z.string().min(4, "nom is required"),
  email: z.email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 6 characters"),
  role: z.enum(["admin", "commissioner", "referee", "consultation"], {
    errorMap: () => ({
      message: "Invalid role. Must be one of: admin, commissioner, referee, consultation",
    }),
  }),
});

// Login schema
const loginSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(8, "Password is required"),
});

// Validate register middleware
export const validateRegister = (req, res, next) => {
  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Validation error",
      errors: result.error.errors.map((e) => e.message),
    });
  }
  next();
};

// Validate login middleware
export const validateLogin = (req, res, next) => {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Validation error",
      errors: result.error.errors.map((e) => e.message),
    });
  }
  next();
};