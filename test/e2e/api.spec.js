

describe('can attempt login', function(){

    beforeEach( function(){
        browser.driver.get('http://localhost:8000');
    });

    it('user can put credentials in a login form', function(done) {

        element(by.model('credentials.username')).sendKeys('admin');
        element(by.model('credentials.password')).sendKeys('password');

        done();

        // TODO - what happens when login comes back ...
    });

});