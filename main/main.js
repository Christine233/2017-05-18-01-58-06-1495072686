module.exports = function main(a) {
  // Write your cade here
	var m = a.toString();
	var n = 0;
	for(n; m>0; m=parseInt(m/10)){
		n += m%10;
	}
	return n;
};
