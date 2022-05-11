//kiểm tra các trường nhập của đặt lại mật khẩu
function xacnhan(event){
	var giatrimatkhaucu = document.getElementById("matkhaucu").value.trim();
	var giatrimatkhaumoi = document.getElementById("matkhaumoi").value.trim();
    var giatrimatkhaumoinhaplai = document.getElementById("matkhaumoinhaplai").value.trim();
	var matkhaucu = document.getElementById("matkhaucu");
	var matkhaumoi = document.getElementById("matkhaumoi");
    var matkhaumoinhaplai = document.getElementById("matkhaumoinhaplai");

    if( giatrimatkhaucu == "" ){
        matkhaucu.style.border = "1px solid #ff8471";
        loi("loi_mat_khau_cu", "Mật khẩu không được bỏ trống");
    }
    else if( giatrimatkhaucu.length < 8 ){
        matkhaucu.style.border = "1px solid #ff8471";
        loi("loi_mat_khau_cu", "Mật khẩu phải nhiều hơn 8 kí tự");
    }
    else{
        matkhaucu.style.border = "1px solid #7b5be4";
        loi("loi_mat_khau_cu", "");
    }

    if( giatrimatkhaumoi == "" ){
        matkhaumoi.style.border = "1px solid #ff8471";
        loi("loi_mat_khau_moi", "Mật khẩu không được bỏ trống");
    }
    else if( giatrimatkhaumoi.length < 8 ){
        matkhaumoi.style.border = "1px solid #ff8471";
        loi("loi_mat_khau_moi", "Mật khẩu phải nhiều hơn 8 kí tự");
    }
    else{
        matkhaumoi.style.border = "1px solid #7b5be4";
        loi("loi_mat_khau_moi", "");
    }

    if( giatrimatkhaumoinhaplai == "" ){
        matkhaumoinhaplai.style.border = "1px solid #ff8471";
        loi("loi_mat_khau_moi_nhap_lai", "Mật khẩu không được bỏ trống");
    }
    else if( giatrimatkhaumoinhaplai.length < 8 ){
        matkhaumoinhaplai.style.border = "1px solid #ff8471";
        loi("loi_mat_khau_moi_nhap_lai", "Mật khẩu phải nhiều hơn 8 kí tự");
    }
    else if( giatrimatkhaumoinhaplai != giatrimatkhaumoi){
        matkhaumoinhaplai.style.border = "1px solid #ff8471";
        loi("loi_mat_khau_moi_nhap_lai", "Mật khẩu mới không đúng");
    }
    else{
        matkhaumoinhaplai.style.border = "1px solid #7b5be4";
        loi("loi_mat_khau_moi_nhap_lai", "");
    }

    if ( giatrimatkhaumoi == "" || giatrimatkhaucu == "" || matkhaumoinhaplai == "" ||
        giatrimatkhaumoi.length < 8 || giatrimatkhaucu.length < 8 || matkhaumoinhaplai.length < 8 || 
        giatrimatkhaumoinhaplai != giatrimatkhaumoi) {
        return false;
    }
    else{
        return true;
    }
}

function loi(id, message){
  document.getElementById(id).innerHTML = message;
}