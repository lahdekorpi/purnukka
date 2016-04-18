$(document).ready(function(){

	$('#encrypt-button').attr('disabled','disabled');

	$('#encrypt-password-repeat, #encrypt-password').on('keyup change',function(e){
		var $password = $('#encrypt-password');
		var $repeat = $('#encrypt-password-repeat');
		if($password.val()!='') {
			if($password.val()==$repeat.val()) {
				$('#encrypt-button').removeAttr('disabled');
			} else {
				$('#encrypt-button').attr('disabled','disabled');
			}
		} else {
			$('#encrypt-button').attr('disabled','disabled');
		}
	});

	if(window.location.hash!='') {
		$('#decrypt').removeClass('hidden');
		$('#encrypt').addClass('hidden');
	}

	$('#encrypt-button').click(function(e){
		e.preventDefault();
		encrypt();
	});

	$('#encrypt-password-repeat, #encrypt-password').on('keypress',function(e){
		var $password = $('#encrypt-password');
		var $repeat = $('#encrypt-password-repeat');
		if(e.keyCode==13 && $password.val()!='' && $password.val()==$repeat.val()) {
			encrypt();
		}
	});

	$('#data').on('keyup change',function(e){
		if($(this).val().length>1200) {
			$('#alert').removeClass('hidden');
		} else {
			$('#alert').addClass('hidden');
		}
	});

	function encrypt() {
		var ciphertext = CryptoJS.AES.encrypt($('#data').val(), $('#encrypt-password').val());
		var url = window.location.protocol+'//'+window.location.hostname+window.location.pathname+'#'+ciphertext;
		$('#url').val(url);
		$('#url-link').attr('href',url).removeClass('disabled');
	}

	$('#decrypt-button').click(function(e){
		e.preventDefault();
		decrypt();
	});

	$('#decrypt-password').on('keypress',function(e){
		if (e.keyCode==13) {
			decrypt();
		}
	});

	function decrypt() {
		$('#result').val();
		var bytes  = CryptoJS.AES.decrypt(window.location.hash.substr(1).toString(), $('#decrypt-password').val());
		var plaintext = bytes.toString(CryptoJS.enc.Utf8);
		$('#result').val(plaintext);
	}

});
