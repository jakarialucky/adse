alert('work');
// Membuat fungsi untuk memasukkan skrip iklan ke elemen HTML
function masukkanIklan(iklanId, scriptCode) {
  var iklanElemen = document.getElementById(iklanId);
  if (iklanElemen) {
    iklanElemen.innerHTML = scriptCode;
  }
}

// Memasukkan skrip iklan ke elemen-elemen HTML
masukkanIklan('iklan_banner', "<script type='text/javascript'>atOptions={'key':'a2fa1c021faaa64dc52545dcd0d45f38','format':'iframe','height':250,'width':300,'params':{}};</script><script type='text/javascript' src='//affordedseasick.com/a2fa1c021faaa64dc52545dcd0d45f38/invoke.js'></script>");
masukkanIklan('iklan_sidebar', '<script type="text/javascript"> // Script iklan_sidebar </script>');
masukkanIklan('iklan_atas_artikel', '<script type="text/javascript"> // Script iklan_atas_artikel </script>');
masukkanIklan('iklan_tengah_artikel', '<script type="text/javascript"> // Script iklan_tengah_artikel </script>');
masukkanIklan('iklan_bawah_artikel', '<script type="text/javascript"> // Script iklan_bawah_artikel </script>');
