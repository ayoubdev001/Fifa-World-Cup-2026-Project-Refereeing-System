import { Affectation, Arbitre, Match } from "../models/index.js";


export const createAffectation = async (req, res, next) => {
  try {
    const affectation = await Affectation.create(req.body);
     res.status(201).json(affectation);
  } catch (error) {
    next(error);
  }
};


export const getAllAffectations = async (req, res, next) => {
  try {
    const affectations = await Affectation.findAll({
      attributes: ["id", "arbitreId", "matchId", "role"],
      include: [
        {
          model: Arbitre,
          attributes: ["id", "nom", "prenom", "confederation", "categorie"],
        },
        {
          model: Match,
          attributes: ["id", "equipeDomicile", "equipeExterieur", "dateMatch", "phase"],
        },
      ],
    });
    return res.status(200).json({
      message: "Assignments retrieved successfully",
      data: affectations,
    });
  } catch (error) {
    next(error);
  }
};


export const getAffectationById = async (req, res, next) => {
  try {
    const affectation = await Affectation.findByPk(req.params.id, {
      attributes: ["id", "arbitreId", "matchId", "role"],
      include: [
        {
          model: Arbitre,
          attributes: ["id", "nom", "prenom", "confederation", "categorie"],
        },
        {
          model: Match,
          attributes: ["id", "equipeDomicile", "equipeExterieur", "dateMatch", "phase"],
        },
      ],
    });
    if (!affectation) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }
    return res.status(200).json({
      message: "Assignment retrieved successfully",
      data: affectation,
    });
  } catch (error) {
    next(error);
  }
};

export const updateAffectation = async (req, res, next) => {
  try {
    const affectation = await Affectation.findByPk(req.params.id);
    if (!affectation) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }
    await affectation.update(req.body);
    return res.status(200).json({
      message: "Assignment updated successfully",
      data: affectation,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAffectation = async (req, res, next) => {
  try {
    const affectation = await Affectation.findByPk(req.params.id);
    if (!affectation) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }
    await affectation.destroy();
    return res.status(200).json({
      message: "Assignment deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};