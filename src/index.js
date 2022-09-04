const showBtn = document.querySelector("#show");
const dlg = document.querySelector("#dialog");

showBtn.addEventListener("click", () => {
  dlg.showModal();
});

/**
 * モーダルのどこをつかんで移動を開始したか保存する用
 */
let mouse = {
  x: 0,
  y: 0,
};

/**
 * モーダルのどこをつかんで移動を開始したか保存する
 * ドラッグ時についてくる半透明の要素を空のdivにして消す
 */
dlg.addEventListener("dragstart", (evt) => {
  mouse.y = dlg.offsetTop - evt.pageY;
  mouse.x = dlg.offsetLeft - evt.pageX;
  evt.dataTransfer.setDragImage(document.createElement("div"), 0, 0);
});

/**
 * ドラッグ時の座標を
 */
dlg.addEventListener("drag", (evt) => {
  if (evt.x === 0 && evt.y === 0) return;
  const top = evt.pageY + mouse.y;
  const left = evt.pageX + mouse.x;
  const right = window.outerWidth - evt.pageX;
  dlg.style.top = top + "px";
  dlg.style.left = left + "px";
  dlg.style.right = right + "px";
});

/**
 * モーダルのどこをつかんで移動を開始したかをリセットする
 */
dlg.addEventListener("dragend", (evt) => {
  mouse = {
    x: 0,
    y: 0,
  };
});
