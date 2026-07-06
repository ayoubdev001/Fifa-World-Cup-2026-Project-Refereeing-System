export const validateArbitre = (req, res, next) => {
  const { nom, prenom, nationalite, confederation, categorie, experience, statut } = req.body;

  const validConfederations = ["UEFA", "CONMEBOL", "CAF", "AFC", "CONCACAF", "OFC"];
  const validCategories = ["Central", "Assistant", "Fourth", "VAR", "AVAR"];
  const validStatuts = ["active", "suspended", "injured", "retired"];

  if (!nom || !prenom || !nationalite || !confederation || !categorie) {
    return res.status(400).json({
      message: "Missing required fields: nom, prenom, nationalite, confederation, categorie",
    });
  }

  if (!validConfederations.includes(confederation)) {
    return res.status(400).json({
      message: `Invalid confederation. Must be one of: ${validConfederations.join(", ")}`,
    });
  }

  if (!validCategories.includes(categorie)) {
    return res.status(400).json({
      message: `Invalid categorie. Must be one of: ${validCategories.join(", ")}`,
    });
  }

  if (statut && !validStatuts.includes(statut)) {
    return res.status(400).json({
      message: `Invalid statut. Must be one of: ${validStatuts.join(", ")}`,
    });
  }

  if (experience !== undefined && (typeof experience !== "number" || experience < 0)) {
    return res.status(400).json({
      message: "Experience must be a positive number",
    });
  }

  next();
};

export const validateMatch = (req, res, next) => {
  const { equipeDomicile, equipeExterieur, stade, villeHote, dateMatch, phase } = req.body;

  const validPhases = ["Groups", "8th", "4th", "Semi", "Final"];

  if (!equipeDomicile || !equipeExterieur || !stade || !villeHote || !dateMatch || !phase) {
    return res.status(400).json({
      message: "Missing required fields: equipeDomicile, equipeExterieur, stade, villeHote, dateMatch, phase",
    });
  }

  if (!validPhases.includes(phase)) {
    return res.status(400).json({
      message: `Invalid phase. Must be one of: ${validPhases.join(", ")}`,
    });
  }

  if (isNaN(Date.parse(dateMatch))) {
    return res.status(400).json({
      message: "Invalid dateMatch format. Use ISO format: 2026-06-15T20:00:00Z",
    });
  }

  next();
};

export const validateAffectation = (req, res, next) => {
  const { arbitreId, matchId, role } = req.body;

  const validRoles = ["central", "assistant", "VAR", "AVAR", "4th"];

  if (!arbitreId || !matchId || !role) {
    return res.status(400).json({
      message: "Missing required fields: arbitreId, matchId, role",
    });
  }

  if (!validRoles.includes(role)) {
    return res.status(400).json({
      message: `Invalid role. Must be one of: ${validRoles.join(", ")}`,
    });
  }

  if (typeof arbitreId !== "number" || typeof matchId !== "number") {
    return res.status(400).json({
      message: "arbitreId and matchId must be numbers",
    });
  }

  next();
};