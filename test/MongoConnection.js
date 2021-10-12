//connection
//require mongoose
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
// const port = process.env.PORT || 3000;
const DB_CONNECT = "mongodb+srv://pavanreddy09:pavan0910@cluster0.0lyvp.mongodb.net/mangodb?retryWrites=true&w=majority";
mongoose
	.connect(DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((res) => console.log("Server Up and running"))
	.catch((err) => console.log(err));
// mongoose.connect('mongodb+srv://pavanreddy09:pavan0910@cluster0.0lyvp.mongodb.net/mangodb?retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false });