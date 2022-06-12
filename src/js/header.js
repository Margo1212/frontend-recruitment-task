import createTag from "./utils/createTag.js";
import { openPopup } from "./popup.js";
let counter = 0;

const isBiggerThen = (number) => {
    if (counter > number) {
        const btnReset = document.querySelector('.alert-box__reset-btn-closed');
        btnReset.classList.remove('alert-box__reset-btn-closed');
        btnReset.classList.add('alert-box__reset-btn-opened');
    }
}

const clickCounter = () => {
    counter++;
    document.querySelector('.alert-box__highlight').textContent = `${counter} times`;

    isBiggerThen(5);
}

export const reset = (e) => {
    e.preventDefault();
    counter = 0;
};

export const createHeaderSection = () => {
    const headerSection = createTag({
        tagName: "header",
        className: "header",
    });
    
    const headerContainer = createTag({
        tagName: "div",
        className: "container",
    });
    
    const headerImage = createTag({
        tagName: "img",
        className: "header-image",
        tagAttrs: [
            { key: "src", value: "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg" },
            { key: "alt", value: "Beautifull beach image" },
          ],
      });
    
    const headerContentBox = createTag({
        tagName: "div",
        className: "content",
    });
    
    const headerTitle = createTag({
        tagName: "h2",
        className: "content__title",
        tagText: "Lorem Ipsum"
    })
    
    const headerText = createTag({
        tagName: "p",
        className: "content__text",
        tagText: "Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required."
    })

    const headerBtn = createTag({
        tagName: "button",
        className: "content__btn",
        tagText: "Button",
        tagEvent: {
            name: "click",
            callback: () => {
                openPopup()
                clickCounter()
            },
          },
    })
    
    headerSection.appendChild(headerContainer)
    headerContainer.append(headerImage, headerContentBox)
    headerContentBox.append(headerTitle, headerText, headerBtn)
}
