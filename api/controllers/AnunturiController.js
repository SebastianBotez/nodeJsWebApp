/**
 * AnunturiController
 *
 * @description :: Server-side logic for managing anunturis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	view: function(req, res) {
		var title = 'Lista anunturi';
		res.view('pagini/lista', {title: title});
	},
	promovate: function (req, res) {
		Anunturi.find({active: '1', promovat: '1'}).sort("adaugat DESC").limit(5).exec(function (err, data){
			if (err) return res.serverError(err);

			res.json(data);
		});
	},
	toate: function(req, res) {
		Anunturi.find({active: '1', promovat: '1'}).sort("adaugat DESC").limit(5).exec(function (err, data){
			if (err) return res.serverError(err);

			res.json(data);
		});
	}
};