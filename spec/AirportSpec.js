describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('Airport to instruct the plane to land', function(){
    it('prints a massage when plane landed', function(){
      spyOn(airport, 'isStormy').and.returnValue(false)
      expect(airport.land(plane)).toEqual('Plane landed')
    });

    it('updates the hangar', function(){
      spyOn(airport, 'isStormy').and.returnValue(false)
      airport.land(plane)
      expect(airport._hangar.length).toEqual(1)
    });

    it('prevents landing when stormy with a message', function(){
      spyOn(airport, 'isStormy').and.returnValue(true)
      expect(airport.land(plane)).toEqual('Sorry, stormy weather')
      expect(airport._hangar.length).toEqual(0)
    });
  });

  describe('Airport to instruct the plane to take off', function(){
    beforeEach(function(){
      airport._hangar.push(plane);
    });
    it('prints a massage when plane has taken off', function(){
      spyOn(airport, 'isStormy').and.returnValue(false)
      expect(airport.takeOff(plane)).toEqual('Plane took off')
    });

    it('updates the hangar', function(){
      spyOn(airport, 'isStormy').and.returnValue(false)
      airport.takeOff(plane)
      expect(airport._hangar.length).toEqual(0)
    });

    it('prevents take off when stormy with a message', function(){
      spyOn(airport, 'isStormy').and.returnValue(true)
      expect(airport.takeOff(plane)).toEqual('Sorry, stormy weather')
      expect(airport._hangar.length).toEqual(1)
    });
  });
});
