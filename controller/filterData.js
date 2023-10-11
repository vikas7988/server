const Json = require("../database/schema");




async function filEndYear(req, res) {
   
  
      const data = await Json.find().sort({end_year:1})

      const filterData = await  new Set(data.map((el)=>(el.end_year)).filter((el)=>(el!=null)))

      const set = [...filterData];
      

      return res.send({
        data:set
      });
   
  }
  async function filTopic(req,res){
    const data = await Json.find()

      const filterData = await  new Set(data.map((el)=>(el.topic)).filter((el)=>(el!=null && el!="")))

      const set = [...filterData].sort()
      

      return res.send({
        data:set
      });
    
  }
  async function filSector(req,res){
    const data = await Json.find();

      const filterData = await  new Set(data.map((el)=>(el.sector)).filter((el)=>(el!=null && el!="")))

      const set = [...filterData].sort();
      

      return res.send({
        data:set
      });

  }
  async function filRegion(req,res){
    const data = await Json.find();

      const filterData = await  new Set(data.map((el)=>(el.region)).filter((el)=>(el!=null && el!="")))

      const set = [...filterData].sort();
      

      return res.send({
        data:set
      });

  }
  async function filSource(req,res){
    const data = await Json.find();

      const filterData = await  new Set(data.map((el)=>(el.source)).filter((el)=>(el!=null && el!="")))

      const set = [...filterData].sort();
      

      return res.send({
        data:set
      });

  }
  async function filPestle(req,res){
    const data = await Json.find();

      const filterData = await  new Set(data.map((el)=>(el.pestle)).filter((el)=>(el!=null && el!="")))

      const set = [...filterData].sort();
      

      return res.send({
        data:set
      });

  }
  async function filCountry(req,res){
    const data = await Json.find();

      const filterData = await  new Set(data.map((el)=>(el.country)).filter((el)=>(el!=null && el!="")))

      const set = [...filterData].sort();
      

      return res.send({
        data:set
      });

  }

module.exports ={filEndYear,filCountry,filPestle,filRegion,filSector,filSource,filTopic};
