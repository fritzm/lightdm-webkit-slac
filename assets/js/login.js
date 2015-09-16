var login = (function(lightdm, $) {

    var $user = $('#user');
    var $pass = $('#pass');

    window.authentication_complete = function() {
        if (lightdm.is_authenticated) {
            lightdm.login(
                lightdm.authentication_user,
                lightdm.default_session
            );
        }
    };

	window.show_prompt = function(e) {
		lightdm.provide_secret($pass.val());
	}

	var init = function () {
        $(function () {
            $user.trigger('focus');
            $user.on('keypress', function(e) {
                if (e.which == 13) {
                    $pass.trigger('focus');
                };
            });
            $pass.on('keypress', function(e) {
                if (e.which == 13) {
                    lightdm.cancel_timed_login();
                    lightdm.start_authentication($user.val());
                };
            });
        });
    };

    return {
        init: init
    };

} (lightdm, jQuery));

login.init();
