window.onload = () => {
  modal.showModal();
};

closeModal.addEventListener("click", () => {
  modal.close();
});

datePicker.addEventListener("click", () => {
  datePickerShow.style.visibility = "unset";
});

printBtn.addEventListener("click", printHide, true);

allTh.forEach((x) => (x.oninput = showBoth));
allTh.forEach((x) => (x.onclick = showTime));
