/**
 * HTML highlighter
 * 
 * @param {String} string using html format
 * @param {Array} hilights array of integer couple
 */

function highlighter(string, hilights) {
	var output = "";
	var cursor = 0;

	for (var i = 0; i < hilights.length; i++) {
		var hilight = hilights[i];
		var start = hilight[0];
		var end = hilight[1];

		output += string.substring(cursor, start);
		output += "<span>";
		output += string.substring(start, end);
		output += "</span>";

		cursor = end;
	}

	output +=  string.substring(cursor);

	return output;
}
