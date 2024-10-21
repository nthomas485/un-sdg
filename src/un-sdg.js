import { LitElement, html, css } from 'lit-element';

class unSdg extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            goal: { type: String, reflect: true },
            image: { type: String },
            label: { type: String },
            colorOnly: { type: Boolean, reflect: true },
            color: { type: String },
            alt: { type: String },
            lazy: { type: Boolean },
            fetchPriority: { type: String },
            height: { type: String },
            width: { type: String },
        };
    }
    constructor() {
        super();
        this.title = "";
        this.image = "";
        this.goal = "circle";
        this.label = "";
        this.colorOnly = false;
        this.alt = null;
        this.height = "254px"; //default height
        this.width = "254px"; //default width
        this.lazy = true;
        this.fetchPriority = "low";

    }

    //styling for the component
    static get styles() {
        return css`
      // host declares for css
      :host {
        // all colors stored
        background-color: none;
      }

      div {
        padding: 0;
        margin: 0;
      }
      .image {
        width: 100%;
        height: 100%;
        object-fit: contain; //scales to fit
      }
      .wrapper{
        width: var(--width, 254px);
        height: var(--height, 254px);
        background-color: var(--goal-color);
      }
    `;
    }

    updated(changeProperties) {
        if (changeProperties.has('goal')) {
            this.addressAssign();
        }
    }


    // updates label, image, and color according to each goal
    addressAssign() {
        if (this.goal != 'all' && this.goal != 'circle') {
            this.image = new URL(`../lib/svgs/goal-${this.goal}.svg`, import.meta.url).href;
        }
        var currentGoal = this.goal
        //switch statement to handle each number 
        switch (currentGoal) {
            case "circle":
                this.label = "Sustainable developments logo";
                this.image = new URL(`../lib/svgs/${this.goal}.png`, import.meta.url).href;
                break;
            case "all":
                this.label = "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals";
                this.image = new URL(`../lib/svgs/${this.goal}.svg`, import.meta.url).href;
                break;
            case "1":
                this.label = "Goal 1: No poverty";
                this.color = "rgb(235,28,34)"
                break;
            case "2":
                this.label = "Goal 2: Zero hunger";
                this.color= "rgb(210,160,42)";
                break;
            case "3":
                this.label = "Goal 3: Good health and well-being";
                this.color = "rgb(44,155,72)";
                break;
            case "4":
                this.label = "Goal 4: Quality education";
                this.color = "rgb(194,31,51)";
                break;
            case "5":
                this.label = "Goal 5: Gender equality";
                this.color = "rgb(239,64,42)";
                break;
            case "6":
                this.label = "Goal 6: Clean water and sanitation";
                this.color = "rgb(0,173,216)";
                break;
            case '7':
                this.label = "Goal 7: Affordable and clean energy";
                this.color = "rgb(253,183,19)";
                break;
            case '8':
                this.label = "Goal 8: Decent work and economic growth";
                this.color = "rgb(143,23,55)";
                break;
            case '9':
                this.label = "Goal 9: Industry, innovation and infrastructure";
                this.color = "rgb(243,109,36)";
                break;
            case '10':
                this.label = "Goal 10: Reduced inequalities";
                this.color = "rgb(224,21,131)";
                break;
            case '11':
                this.label = "Goal 11: Sustainable cities and communities";
                this.color = "rgb(249,157,37)";
                break;
            case '12':
                this.label = "Goal 12: Responsible consumption and production";
                this.color = "rgb(207,141,42)";
                break;
            case '13':
                this.label = "Goal 13: Climate action";
                this.color = "rgb(72,119,61";
                break;
            case '14':
                this.label = "Goal 14: Life below water";
                this.color = "rgb(0,125,187)";
                break;
            case '15':
                this.label = "Goal 15: Life on land";
                this.color = "rgb(63,175,73)";
                break;
            case '16':
                this.label = "Goal 16: Peace, justice and strong institutions";
                this.color = "rgb(1,85,138)";
                break;
            case '17':
                this.label = "Goal 17: Partnerships for the goals";
                this.color = "rgb(25,54,103)";
                break;
        }
    }

    render() {
        return html`
    <div class="wrapper" style="background-color: ${this.color};">
        ${!this.colorOnly
                ? html`<img src="${this.image}" 
                alt="${this.label}" 
                loading="${this.lazy ? "lazy" : "eager"}"
                width ="${this.width}"
                height="${this.height}"
                fetchPriority="${this.fetchPriority}"
                >`
                : ``}
    </div>
    `;

    }
}

customElements.define('un-sdg', unSdg);