import { Arbitre } from "../models/index.js"


//post
export const createArbitre = async (req, res, next) => {
    try {
        const arbitre = await Arbitre.create(req.body);
        return res.status(201).json({
            message: "Referee created successfully",
            data: arbitre,
        });

    } catch (error)  {
      next (error);
    }
 };



export const getAllArbitres = async (req, res, next) => {
    try {
        const arbitres = await Arbitre.findAll();
       [
           { id: 1, nom: "Tessema", prenom: "Bamlak" },
           { id: 2, nom: "Ramos", prenom: "Carlos" }
       ]
       return res.status(200).json({
        message: "Referees retrieved successfully",
        data: arbitres,
       });
      } catch (error) {
    next(error);
      }
   };
     


export const getArbitreById = async (req, res, next) => {
  try {
    const arbitre = await Arbitre.findByPk(req.params.id);

    if (!arbitre) {
      return res.status(404).json({
        message: "Referee not found",
      });
    }

    return res.status(200).json({
      message: "Referee retrieved successfully",
      data: arbitre,
    });
  } catch (error) {
    next(error);
  }
};




export const updateArbitre = async (req, res, next) => {
  try {
    const arbitre = await Arbitre.findByPk(req.params.id);

    if (!arbitre) {
      return res.status(404).json({
        message: "Referee not found",
      });
    }

    await arbitre.update(req.body);

    return res.status(200).json({
      message: "Referee updated successfully",
      data: arbitre,
    });
  } catch (error) {
    next(error);
  }
};



export const deleteArbitre = async (req, res, next) => {
  try {
    const arbitre = await Arbitre.findByPk(req.params.id);

    if (!arbitre) {
      return res.status(404).json({
        message: "Referee not found",
      });
    }

    await arbitre.destroy();

    return res.status(200).json({
      message: "Referee deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};