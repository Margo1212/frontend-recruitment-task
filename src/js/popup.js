import createTag from "./utils/createTag.js";
import { reset } from "./header.js";



export const openPopup = () => {

    const closePopup = (e) => {

        if(e.target.matches(".alert-box, .alert-box__title, .alert-box__text" )){
            return;
         }
         overlay.remove()
      }

    // Alert

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

    const spanElement = createTag({
        tagName: "span",
        className: "alert-box__hightlight",
        tagText: "0",
    });

    const popupText = createTag({
        tagName: "p",
        className: "alert-box__text",
        tagText: `You have clicked times to related button.`,
    });

    const closeIcon = createTag({
        tagName: "img",
        className: "alert-box__icon",
        tagAttrs: [
            { key: "src", value: "../../images/close.png" }
        ]
           
    });

    const popupCloseBtn = createTag({
        tagName: "button",
        className: "alert-box__btn",
        tagEvent: {
            name: "click",
            callback: (e) => {
                closePopup(e)
            }
          },
    });

    const resetButton = createTag({
        tagName: "button",
        className: "alert-box__reset-btn",
        tagText: "Reset",
        tagEvent: {
            name: "click",
            callback: (e) => {
                openPopup(e)
                reset(e)
            },
          },
    })

    overlay.appendChild(alertDiv)
    popupCloseBtn.appendChild(closeIcon)
    popupText.appendChild(spanElement)
    alertDiv.append(popupTitle, popupText, popupCloseBtn, resetButton)  
}
