var caesar = function(string, amount) {
	if (amount < 0) {
    return caesar(string, amount + 26);
  }
	var output = '';
	for (var i = 0; i < string.length; i ++) {
		var c = string[i];
		var code = string.charCodeAt(i);
		if ((code >= 65) && (code <= 90)) {
      c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
    } else if ((code >= 97) && (code <= 122)) {
      c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
		output += c;
	}
	return output;
};

var decrypt = function () {
  var cyphertext = $('.cyphertext').val();
  var key = parseInt($('.current-key').html());
  $('.plaintext').html(caesar(cyphertext ? cyphertext : '', -key));
};


$(function () {

  $('.cyphertext').keyup(function () {
    decrypt();
  });

  $('.next-key').click(function () {
    var key = parseInt($('.current-key').html());
    if (++key == 26) {
      key = 0;
    }
    $('.current-key').html(key.toString());
    decrypt();
  });

  $('.current-key').html('0');
  decrypt();
});
