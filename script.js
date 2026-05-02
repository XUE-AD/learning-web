// 1. 原有的 Alert 功能
document.getElementById("btn").addEventListener("click", function() {
    alert("Welcome to my store!");
});

// 2. 模擬動態加載 (延遲 3 秒出現)
document.getElementById("load-content").addEventListener("click", function() {
    const btn = this;
    btn.innerText = "讀取中...";
    setTimeout(() => {
        document.getElementById("dynamic-msg").style.display = "block";
        btn.innerText = "加載成功";
    }, 3000);
});

// 3. 表單互動
document.getElementById("submit-name").addEventListener("click", function() {
    const name = document.getElementById("username").value;
    const greeting = document.getElementById("greeting");
    if(name) {
        greeting.innerText = "你好, " + name + "！感謝您的預約。";
    } else {
        greeting.innerText = "請先輸入姓名。";
    }
});

// 4. 加入購物車提示 (小通知)
function addToCart(itemName) {
    console.log(itemName + " 已加入購物車");
    alert(itemName + " 已成功加入購物車！");
}