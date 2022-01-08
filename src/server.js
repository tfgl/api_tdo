const exp = require("express");
const logger = require("morgan");
const app = exp();

const { partieRouter } = require("./routes/partie");

app.use( exp.json() );
app.use( logger('dev') );

app.use("/", partieRouter);

app.listen(4000, () => {
    console.log('hi')
});
