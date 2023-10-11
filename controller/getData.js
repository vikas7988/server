const Json = require("../database/schema");

async function getQueryData(req, res) {
  const { end_year, topic, sector, region, source, country ,pestle} = req.query;

  let data;
  
  if (end_year) {
      data = await Json.find({ end_year: end_year });
    } else {
      data = await Json.find({});
  }

  if (topic) {
    data = data.filter((el) => el.topic == topic);
  }
  if (sector) {
    data =data.filter((el) => el.sector == sector);
  }
  if (region) {
    data =data.filter((el) => el.region == region);
  }
  if (source) {
    data =data.filter((el) => el.source == source);
  }
  if (country) {
    data =data.filter((el) => el.country == country);
  }
  if (pestle) {
    data =data.filter((el) => el.pestle == pestle);
  }

  

  return res.send({
    data:data
  });
}

module.exports = getQueryData;
