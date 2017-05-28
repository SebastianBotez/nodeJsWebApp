/**
 * UseriController
 *
 * @description :: Server-side logic for managing useris
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * Useri.login()
   * @param: (string) email
   * @param: (string) parola
   * @return: (obj) | session._id
   */
  login: function(req, res) {
    var response = {};
    Useri.findOne({
			email: req.param('email'),
			parola: req.param('parola')
		}).exec(function (err, data) {
			if (err) return res.serverError(err);

			if(! data) {
				response.error = true;
				response.errors = 'Nu s-a gasit combinatia introdusa in baza noastra de date.';
			} else {
				if (data.activ === 0) {
					response.error = true;
					response.errors = 'Contul tau este inactiv';
				}	else {
          response.error = false;
          response.success = true;
          response.message = 'Te-ai logat cu succes.';
          req.session.userID = data.id;
          sails.log(req.session);
				}
			}
      res.json(response);
		});
  },

  /**
   * Useri.register()
   * @param: (string) email
   * @param: (string) parola
   * @param: (string) rparola
   * @return: (obj)
   */
  register: function(req, res) {
    var response = {};
    if(req.param('email') === '' || req.param('parola') === '' || req.param('rparola') == '') {
      response.error = true;
      response.errors = 'Toate campurile sunt obligatorii.';
      res.json(response);
    };
    if(req.param('parola') !== req.param('rparola')) {
      response.error = true;
      response.errors = 'Parolele trebuie sa fie identice. Incearca din nou.';
      res.json(response);
    }

    Useri.find({
      email: req.param('email')
    }).exec(function (err, records) {

      if(0 == records.length) {
        Useri.create({
          email: req.param('email'),
          parola: req.param('parola'),
          activ: 1
        }).exec(function (err, records) {
          response.error = false;
          response.message = 'Bine ai venit. Finalizeaza inregistrarea accesand link-ul primit in email!';
          res.json(response);
        });
      } else {
        response.error = true;
        response.errors = 'Exista un utilizator cu acest email in baza noastra de date.';
        res.json(response);
      }

    });
  },

  /**
   * Useri.contulMeu()
   * @return: (html)
   */
  contulMeu: function(req, res) {
    var pagina = 'contul-meu';
    var socketId = sails.sockets.getId(req);
    sails.log(socketId);
    res.view('pagini/contul-meu', {pagina: pagina});
  }
};
