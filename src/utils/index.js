class Movie {
  constructor(title, actor = "Not specified", director = "Not specified") {
    this.title = title;
    this.actor = actor;
    this.director = director;
  };
  async add(movieCollection) {
    console.log("Entering add within index.js");
    //code to log a film to the databases
    await movieCollection.insertOne(this);
  };

};

module.exports = Movie;