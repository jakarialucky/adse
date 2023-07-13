// Membuat fungsi untuk memasukkan skrip iklan ke elemen HTML dengan kelas yang sama
function masukkanIklan(direktoriKelas, scriptCode) {
	var iklanElemen = document.querySelectorAll('.' + direktoriKelas);
	if (iklanElemen.length > 0) {
	  for (var i = 0; i < iklanElemen.length; i++) {
		iklanElemen[i].innerHTML = scriptCode;
	  }
	}
  }
  
  // Memasukkan skrip iklan ke elemen-elemen HTML dengan kelas yang sama
  var iklan_banner = '<script type="text/javascript">' +
  'atOptions = {' +
  "'key' : 'c24f1c8a7992425b6d90f9d33bfe3793'," +
  "'format' : 'iframe'," +
  "'height' : 90," +
  "'width' : 728," +
  "'params' : {}" +
  '};' +
  "document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://flickerbridge.com/c24f1c8a7992425b6d90f9d33bfe3793/invoke.js\"></scr' + 'ipt>');"
'</script>';
  masukkanIklan('iklan_banner', iklan_banner);
  masukkanIklan('iklan_sidebar', '<script type="text/javascript"> // Script iklan_sidebar </script>');
  masukkanIklan('iklan_atas_artikel', '<script type="text/javascript"> // Script iklan_atas_artikel </script>');
  masukkanIklan('iklan_tengah_artikel', '<script type="text/javascript"> // Script iklan_tengah_artikel </script>');
  masukkanIklan('iklan_bawah_artikel', '<script type="text/javascript"> // Script iklan_bawah_artikel </script>');
