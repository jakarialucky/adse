// Membuat fungsi untuk memasukkan skrip iklan ke elemen HTML
function masukkanIklan(iklanId, scriptCode) {
  var iklanElemen = document.getElementById(iklanId);
  if (iklanElemen) {
    iklanElemen.innerHTML = "ADA";
  }
}

// Memasukkan skrip iklan ke elemen-elemen HTML
masukkanIklan('iklan_banner', '<script type="text/javascript"> // Script iklan_banner </script>');
masukkanIklan('iklan_sidebar', '<script type="text/javascript"> // Script iklan_sidebar </script>');
masukkanIklan('iklan_atas_artikel', '<script type="text/javascript"> // Script iklan_atas_artikel </script>');
masukkanIklan('iklan_tengah_artikel', '<script type="text/javascript"> // Script iklan_tengah_artikel </script>');
masukkanIklan('iklan_bawah_artikel', '<script type="text/javascript"> // Script iklan_bawah_artikel </script>');
