//importing the sequlize orm
import Sequelize from 'sequelize'


// connecting the app with the postgres sql instance hosted on aws with the elephannt sql platform

const sequelize = new Sequelize(
  "qowkbuxa",
  "qowkbuxa",
  "Oq3Gz-tGLYIK5mjiHwEPktcgevXg4-CC",
  {
    host: "ruby.db.elephantsql.com",
    dialect: "postgres",
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Postgres database has been connected sucessfully",
    );
  })
  .catch((err) => {
    console.error(
      "Connection failed Database not connected  error:",
      err
    );
  });



export default sequelize