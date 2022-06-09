import createTag from "./utils/createTag.js";
import { openPopup } from "./popup.js";

export const createHeaderSection = () => {
    const headerSection = createTag({
        tagName: "header",
        className: "header",
    });
    
    const headerContainer = createTag({
        tagName: "div",
        className: "container",
    });
    
    const imageElement = createTag({
        tagName: "img",
        className: "image",
        tagAttrs: [
            { key: "src", value: "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg" },
            { key: "alt", value: "Beautifull beach image" },
          ],
      });
    
    const divContent = createTag({
        tagName: "div",
        className: "content",
    });
    
    const titleElement = createTag({
        tagName: "h2",
        className: "content__title",
        tagText: "Lorem Ipsum"
    })
    
    const textElement = createTag({
        tagName: "p",
        className: "content__text",
        tagText: "Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required."
    })

    const btnElement = createTag({
        tagName: "button",
        className: "content__btn",
        tagText: "Button",
        tagEvent: {
            name: "click",
            callback: () => {
                openPopup()
            },
          },
    })
    
    
    headerSection.appendChild(headerContainer)
    headerContainer.append(imageElement, divContent)
    divContent.append(titleElement, textElement, btnElement)
}
