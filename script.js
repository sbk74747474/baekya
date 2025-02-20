document.addEventListener("DOMContentLoaded", function() {
    // 모든 상품 및 할인가 목록 토글
    const menuToggles = document.querySelectorAll(".menu-toggle");

    menuToggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const submenu = this.nextElementSibling;
            const arrow = this.querySelector(".arrow");

            if (submenu.style.display === "none" || submenu.style.display === "") {
                submenu.style.display = "block";
                arrow.innerHTML = "▼";  // 화살표를 아래 방향으로 변경
            } else {
                submenu.style.display = "none";
                arrow.innerHTML = "▶";  // 화살표를 오른쪽 방향으로 변경
            }
        });
    });

    // 모바일에서 사이드바 토글
    const menuButton = document.querySelector(".menu-button");
    const sidebar = document.querySelector(".sidebar");

    menuButton.addEventListener("click", function() {
        if (sidebar.style.display === "none" || sidebar.style.display === "") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    });
});