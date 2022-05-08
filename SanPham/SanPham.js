var nutMoSanPham = document.getElementById("hinh_anh_san_pham");
var thongTinSanPham = document.getElementById("thong_tin_day_du_san_pham");

nutMoSanPham.onclick = function() {
    thongTinSanPham.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == thongTinSanPham) {
        thongTinSanPham.style.display = "none";
    }
}

function docThemMoTaSanPham() {
    var baCham = document.getElementById("ba_cham");
    var docThem = document.getElementById("doc_them");
    var nutDocThem = document.getElementById("nutDocThem");
  
    if (baCham.style.display === "none") {
      baCham.style.display = "inline";
      nutDocThem.innerHTML = "Đọc thêm"; 
      docThem.style.display = "none";
    } else {
      baCham.style.display = "none";
      nutDocThem.innerHTML = "Rút gọn"; 
      docThem.style.display = "inline";
    }
  }

function truSoLuongSanPhamMuonMua(){
    var soLuongSanPhamMua = document.getElementById("so_luong").value;
    var truSoLuong = document.getElementById("tru");
    if(truSoLuong.style.display != "none"){
        soLuongSanPhamMua -= 1;
        if(soLuongSanPhamMua>0){
            document.getElementById("so_luong").value = soLuongSanPhamMua;
        }
        else{
            alert("Số lượng sản phẩm không nhận giá trị âm");
        }
    } 
}

function congSoLuongSanPhamMuonMua(number){
    var soLuongSanPhamMua = document.getElementById("so_luong").value;
    var congSoLuong = document.getElementById("cong");
    if(congSoLuong.style.display != "none"){
        soLuongSanPhamMua ++;
        if(soLuongSanPhamMua <= number){
            document.getElementById("so_luong").value = soLuongSanPhamMua;
        }
        else{
            alert("Số lượng sản phẩm hiện không đủ");
        }
    } 
}