import { Match, Arbitre } from "../models/index.js";



export const createMatch = async (req, res, next) => {
  try {
    const match = await Match.create(req.body);
    return res.status(201).json({
      message: "Match created successfully",
      data: match,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllMatchs = async (req, res, next) => {
  try {
    const matchs = await Match.findAll({
      attributes: [
        "id",
        "equipeDomicile",
        "equipeExterieur",
        "stade",
        "villeHote",
        "dateMatch",
        "phase",
      ],
    });
    return res.status(200).json({
      message: "Matches retrieved successfully",
      data: matchs,
    });
  } catch (error) {
    next(error);
  }
};


export const getMatchById = async (req, res, next) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }
    return res.status(200).json({
      message: "Match retrieved successfully",
      data: match,
    });
  } catch (error) {
    next(error);
  }
};

export const updateMatch = async (req, res, next) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }
    await match.update(req.body);
    return res.status(200).json({
      message: "Match updated successfully",
      data: match,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMatch = async (req, res, next) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }
    await match.destroy();
    return res.status(200).json({
      message: "Match deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};


export const getMatchArbitres = async (req, res, next) => {
  try {
    const match = await Match.findByPk(req.params.id, {
      attributes: [
        "id",
        "equipeDomicile",
        "equipeExterieur",
        "stade",
        "villeHote",
        "dateMatch",
        "phase",
      ],
      include: [
        {
          model: Arbitre,
          attributes: [
            "id",
            "nom",
            "prenom",
            "nationalite",
            "confederation",
            "categorie",
          ],
          through: {
            attributes: ["role"],
          },
        },
      ],
    });
    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }
    return res.status(200).json({
      message: "Match referees retrieved successfully",
      data: match,
    });
  } catch (error) {
    next(error);
  }
};