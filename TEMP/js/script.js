// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {

    const main = document.querySelector(".main");
    const sub = document.querySelector(".sub");

    main.addEventListener("mouseover", () => {
        sub.classList.add("active");
    });

    main.addEventListener("mouseout", () => {
        sub.classList.remove("active");
    });
    
})