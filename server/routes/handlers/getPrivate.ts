module.exports = (req, res) => {
  const key = process.env.WEATHER_API_KEY;
  console.log('Sending Key!');
  console.log(key);
  if (key) {
    res.json(key);
  }
};
