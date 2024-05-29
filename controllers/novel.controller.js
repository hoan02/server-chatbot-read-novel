import Novel from "../models/novel.model.js";

export const getNovels = async (req, res, next) => {
  const novels = await Novel.find();
  res.status(200).send(novels);
};
