import Chapter from "../models/chapter.model.js";

export const getChapters = async (req, res, next) => {
  const chapters = await Chapter.find({
    isLock: false,
  });
  res.status(200).send(chapters);
};
