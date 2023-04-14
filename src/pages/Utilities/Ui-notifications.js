import toastr from "toastr";
import "toastr/build/toastr.min.css";

const showToast = (toastType, message, title) => {
    
    toastr.options = {
      timeOut: 3000,
      extendedTimeOut: 1000,
      closeButton: true,
      progressBar: true,
      newestOnTop: true,
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      showDuration: 300,
      hideDuration: 1000,
    };

    if (toastType === "info") toastr.info(message, title);
    else if (toastType === "warning") toastr.warning(message, title);
    else if (toastType === "error") toastr.error(message, title);
    else toastr.success(message, title);
  }

  const clearToast = () => {
    toastr.clear();
  }

  export {showToast, clearToast}