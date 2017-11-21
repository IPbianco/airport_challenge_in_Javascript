describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('Airport to instruct the plane to land', function(){

    it('prints a massage when plane landed', function(){

      expect(airport.land(plane)).toEqual('Plane landed')
    });
  });
});
