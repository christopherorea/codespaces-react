import React from "react";

const Loading = () => {
  return (
    <div class="modal" id="modal-loading" data-backdrop="static">
      <div class="modal-dialog modal-sm">
        <div class="loading-spinner mb-2"></div>
        <div>Loading</div>
      </div>
    </div>
  )
};

export default Loading;

//taken from this codepen: https://codepen.io/webhead/pen/WNoedWG