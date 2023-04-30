import { httpError } from '#src/helpers';

const getExample = async (req, res) => {
  try {
    return res.end();
  } catch (err) {
    return httpError(res, err);
  }
};

const createExample = async ({ body }, res) => {
  try {
    return res.send(body).end();
  } catch (err) {
    return httpError(res, err);
  }
};

export { getExample, createExample };
