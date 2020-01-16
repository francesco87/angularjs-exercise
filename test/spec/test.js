(function () {
  'use strict';

  describe('CrossOver Project Unit Test', function() {

    describe('Get Data', function() {

      var url = 'http://localhost:9000/resource/resource.json';
      var reader = new XMLHttpRequest();

      it('App can get Data', function(done) {
        reader.open('GET', url, true);
        reader.onreadystatechange = function(res) {
          expect(res.currentTarget.status).to.equal(200);
        };
        reader.send();
        done();
      });

    });

  });

})();
