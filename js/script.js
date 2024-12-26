// 获取所有图片元素
var images = document.querySelectorAll('.thumbnail');
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');
var captionText = document.getElementById('caption');
var span = document.getElementsByClassName('close')[0];

// 为每个图片添加点击事件
images.forEach(function(image) {
  image.onclick = function() {
    modal.style.display = 'block'; // 显示模态框
    modalImg.src = this.src; // 设置模态框图片为点击的图片
    captionText.innerHTML = this.alt; // 设置图片说明
  }
});

// 关闭模态框
span.onclick = function() {
  modal.style.display = 'none';
}

// 当用户点击模态框外部时，也可以关闭模态框
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
