/**
 * AcasaController
 *
 * @description :: Server-side logic for managing Acasas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	view: function(req, res) {
		var title = 'Acasa - Cauta mester - Gaseste mester - Angajeaza muncitor';
		var pagina = 'acasa';
		res.view('pagini/acasa', {title: title, pagina: pagina});
	}
};
