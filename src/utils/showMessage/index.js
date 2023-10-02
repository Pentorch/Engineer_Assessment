import Swal from "sweetalert2";

const showMessage = async ({
  message,
  type = "success",
  text = "",
  timer = 2000,
  showConfirmButton = false,
  confirmButtonText = "",
  showCancelButton = false,
  cancelButtonText = "Cancel",
}) => {
  const result = await Swal.fire({
    icon: type,
    title: message,
    text,
    timer,
    showConfirmButton,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
  });

  return result.isConfirmed;
};

export default showMessage;
