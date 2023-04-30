const httpError = (res, err) => {
  // eslint-disable-next-line no-console
  console.log(err);
  return res.status(500).end();
};

export default httpError;
