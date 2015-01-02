/*jshint -W030 */

describe("A test suite", function() {
   it('should fail', function() {
   	 expect(true).to.be.false;
   });

   it('with sinon should fail', function() {
   	 var spy = sinon.spy();
   	 expect(spy).to.have.been.called;
   });
});