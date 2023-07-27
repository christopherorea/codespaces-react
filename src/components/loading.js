import React from "react";
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();
  return (
    <div className="modal" id="modal-loading" data-backdrop="static">
      <div className="modal-dialog modal-sm">
        <div className="loading-spinner mb-2"></div>
        <div>{t("ld")}</div>
      </div>
    </div>
  )
};

export default Loading;

//taken from this codepen: https://codepen.io/webhead/pen/WNoedWG