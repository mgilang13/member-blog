let listMahasiswa = document.getElementsByTagName("ol");
listMahasiswa[0].addEventListener("click", tampilkan);

function tampilkan(e) {
    alert("Cek data Mahasiswa " + e.target.innerHTML);
}
