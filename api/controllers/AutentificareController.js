/**
 * AutentificareController
 *
 * @description :: Server-side logic for managing Autentificares
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/**
   * Autentificare.view()
   * @return: (html)
   */
	view: function(req, res) {
		var title = 'Autentificare - Cauta mester - Gaseste mester - Angajeaza muncitor';
		var pagina = 'login';
		res.view('pagini/login', {title: title, pagina: pagina, data: []});
	}
};
