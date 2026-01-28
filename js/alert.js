const submitBtn = document.getElementsByClassName('submit-button')[0];
submitBtn.addEventListener('click', function (event) {
  Swal.fire({
    text: "内容をご確認の上送信ボタンを押してください。",
    showDenyButton: true,
    position: "top",
    denyButtonText: `キャンセル`,
    confirmButtonText: "送信",
    confirmButtonColor: "#00A24F",
    denyButtonColor: "#C3C3C3",
    reverseButtons: true,
    width: '60%',
    customClass: {
      htmlContainer: 'swal-text-large',
      confirmButton: 'swal-button-wide',
      denyButton: 'swal-button-wide'
    }
  }).then((result) => {
    // 送信ボタンが押された場合
    if (result.isConfirmed) {
      location.href = 'index.html';
    }
  });
})