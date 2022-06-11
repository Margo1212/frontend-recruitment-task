import createTag from "./utils/createTag.js";
import { reset } from "./header.js";



export const openPopup = () => {

    const closePopup = (e) => {

        if(e.target.matches(".alert-box, .alert-box__title, .alert-box__text, .alert-box__hightlight")){
            return;
         }
         alert.remove()
    }

    const alert = createTag({
        tagName: "div",
        className: "alert",
        tagEvent: {
            name: "click",
            callback: (e) => {
                closePopup(e)
            }
          },
    });

    const alertBox = createTag({
        tagName: "div",
        className: "alert-box",
    });

    const alertTitle = createTag({
        tagName: "h2",
        className: "alert-box__title",
        tagText: "Alert!",
    });

    const spanElement = createTag({
        tagName: "span",
        className: "alert-box__hightlight",
        tagText: "0",
    });

    const alertText = createTag({
        tagName: "p",
        className: "alert-box__text",
        tagText: `You have clicked times to related button.`,
    });

    const alertCloseIcon = createTag({
        tagName: "img",
        className: "alert-box__icon",
        tagAttrs: [
            { key: "src", value: "../../images/close.png"},
            { key: "alt", value: "Alert close icon" }
        ]
           
    });

    const alertCloseBtn = createTag({
        tagName: "button",
        className: "alert-box__btn",
        tagEvent: {
            name: "click",
            callback: (e) => {
                closePopup(e)
            }
          },
    });

    const resetCounterBtn = createTag({
        tagName: "button",
        className: "alert-box__reset-btn-closed",
        tagText: "Reset",
        tagEvent: {
            name: "click",
            callback: (e) => {
                openPopup(e)
                reset(e)
            },
          },
    })

    alert.appendChild(alertBox)
    alertCloseBtn.appendChild(alertCloseIcon)
    alertText.appendChild(spanElement)
    alertBox.append(alertTitle, alertText, alertCloseBtn, resetCounterBtn)  
}
