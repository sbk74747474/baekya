document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const sidebar = document.querySelector(".sidebar");
  const body = document.body; // body 요소 선택

  menuButton.addEventListener("click", function () {
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
      sidebar.style.display = "block";
      body.classList.add("sidebar-open"); // 사이드바 열릴 때 클래스 추가
    } else {
      sidebar.style.display = "none";
      body.classList.remove("sidebar-open"); // 사이드바 닫을 때 클래스 제거
    }
  });
});
