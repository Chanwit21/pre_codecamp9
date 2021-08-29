const monk = require('monk');
const url = 'localhost:27017/Test';
const db = monk(url);

const creteUser = async (req, res) => {
  const { f_name, l_name } = req.body;
  const users = db.get('users');

  users.insert(
    {
      f_name: f_name,
      l_name: l_name,
    },
    (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).json({ data });
      }
    }
  );
};

module.exports = { creteUser };
