/* global AuthServiceMock */
var chai = require('chai'),
    expect = chai.expect,
    path = '../../../../build/shared/auth/',
    AuthGuard = require(path + 'auth.guard.js').AuthGuard;

describe('AuthGuard', () => {
    var authGuard;

    beforeEach(() => {
        authGuard = new AuthGuard(AuthServiceMock);
    });

    it('checks a route can activate via the auth service', () => {
        expect(authGuard.canActivate()).to.equal(false);
    });
});

