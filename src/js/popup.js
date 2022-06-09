import createTag from "./utils/createTag.js";

export const openPopup = () => {

    const closePopup = (e) => {
        if(e.target.matches(".alert-box, .alert-box__title, .alert-box__text" )){
            return;
         }
         overlay.remove()
      }

    const overlay = createTag({
        tagName: "div",
        className: "alert-overlay",
        tagEvent: {
            name: "click",
            callback: (e) => {
                closePopup(e)
            }
          },
    });

    const alertDiv = createTag({
        tagName: "div",
        className: "alert-box",
    });

    const popupTitle = createTag({
        tagName: "h2",
        className: "alert-box__title",
        tagText: "Alert!",
    });

    const popupText = createTag({
        tagName: "p",
        className: "alert-box__text",
        tagText: `You have clicked X times to related button.`,

    });

    const closeIcon = createTag({
        tagName: "img",
        className: "alert-box__icon",
        tagAttrs: [
            { key: "src", value: "../../images/close.png" }
        ]
           
    });

    const popupBtn = createTag({
        tagName: "button",
        className: "alert-box__btn",
        tagEvent: {
            name: "click",
            callback: (e) => {
                closePopup(e)
            }
          },
    });

    overlay.appendChild(alertDiv)
    popupBtn.appendChild(closeIcon)
    alertDiv.append(popupTitle, popupText, popupBtn)  
}
