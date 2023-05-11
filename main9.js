var fullName ='Nguyễn Bá Sơn';
// khai báo một biến kiểu chuỗi ra cửa sổ pobup
alert(fullName);
var age = 24;
//khai báo một biến kiểu số ra cửa sôe pobup
alert(age);
//đưa ra một chuỗi từ khóa trên cửa sổ console
console.log('Day la mot dong log');
//gắn biến vào cửa sổ console cụ thể là biến fullname
console.log(fullName);
//đưa ra một cảnh báo trên của sổ console
console.warn('warning');
//Dua ra mot cua so pobup xac nhan co muon tiep tuc truy cap trang web
confirm('Xac nhan ban du tuoi!');
//Dua ra cua so pobup ban co the nhap gia tri vao
prompt('Nhap vao so tuoi cua ban!');
//ham nay se thuc thi doan code cua minh sau mot khoang thoi gian nhat dinh
setTimeout(function () {
alert('Thong bao');
}, 5000);//sau dau , chung ta se nhap vao mot khoang thoi gian de doan code duoc chay sau mot khoang thoi gian gia tri thoi gian se la mini giay 1000 mini giay=1 giay
//ham nay cung tuong tu ham tren nhung nos se thuc hien lai sau mot khoang thoi gian
setInterval(function () {
    console.log('Day la log'+Math.random());
}, 3000)