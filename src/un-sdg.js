import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
//new URL('../lib/svgs/goal-1.svg', import.meta.url).href

const goalData = [
  { name: 'No Poverty', color: '#e5243b' },
  { name: 'Zero Hunger', color: '#dda63a' },
  { name: 'Good Health and Well-being', color: '#4c9f38' },
  { name: 'Quality Education', color: '#c5192d' },
  { name: 'Gender Equality', color: '#ff3a21' },
  { name: 'Clean Water and Sanitation', color: '#26bde2' },
  { name: 'Affordable and Clean Energy', color: '#fcc30b' },
  { name: 'Decent Work and Economic Growth', color: '#a21942' },
  { name: 'Industry, Innovation and Infrastructure', color: '#fd6925' },
  { name: 'Reduced Inequalities', color: '#dd1367' },
  { name: 'Sustainable Cities and Communities', color: '#fd9d24' },
  { name: 'Responsible Consumption and Production', color: '#bf8b2e' },
  { name: 'Climate Action', color: '#3f7e44' },
  { name: 'Life Below Water', color: '#0a97d9' },
  { name: 'Life on Land', color: '#56c02b' },
  { name: 'Peace, Justice and Strong Institutions', color: '#00689d' },
  { name: 'Partnerships for the Goals', color: '#19486a' },
];

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sustainable_Development_Goal_01NoPoverty.svg/1920px-Sustainable_Development_Goal_01NoPoverty.svg.png";
    this.goal = "1";
    this.label = "";
    this.colorOnly = "false";
    this.alt = null;
  }

  static get properties() {
    return {
      title: { type: String },
      goal: { type: String, reflect: true },
      image: { type: String },
      label: { type: String },
      colorOnly: { type: Boolean, reflect: true },
      alt: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
        width: 254px;
        height: 254px;
        background-color: none;
        --un-sdg-goal-1: rgb(235,28,34);
        --un-sdg-goal-2: rgb(210,160,42);
        --un-sdg-goal-3: rgb(44,155,72);
        --un-sdg-goal-4: rgb(194,31,51);
        --un-sdg-goal-5: rgb(239,64,42);
        --un-sdg-goal-6: rgb(0,173,216);
        --un-sdg-goal-7: rgb(253,183,19);
        --un-sdg-goal-8: rgb(143,23,55);
        --un-sdg-goal-9: rgb(243,109,36);
        --un-sdg-goal-10: rgb(224,21,131);
        --un-sdg-goal-11: rgb(249,157,37);
        --un-sdg-goal-12: rgb(207,141,42);
        --un-sdg-goal-13: rgb(72,119,61);
        --un-sdg-goal-14: rgb(0,125,187);
        --un-sdg-goal-15: rgb(63,175,73);
        --un-sdg-goal-16: rgb(1,85,138);
        --un-sdg-goal-17: rgb(25,54,103);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
      .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .colorOnly {
        width: 100%;
        height: 100%;
      }
    `];
  }

  render() {
    return html`
<div class="wrapper">
  <div>${this.title}</div>
  <img src=${this.image} title="Image 1"> 
  <slot></slot>
</div>`;
  }

  addressAssign() {
    var currentGoal = this.goal
    switch (currentGoal) {
      case "1": goalData[0];
      break;
      case "2": goalData[1];
      break;
      case "3": goalData[2];
      break;
      case"4": goalData[4];
      break;
    }
  }
  
  update(changeProperties) {
    if (changeProperties.has('goal')) {
      this.updateGoalImage();
    }
  }

  updateGoalImage() {
    if (this.goal === 'all' || this.goal === 'circle') {
      this.image = new URL(
        `./lib/svgs/goal-${this.goal}.svg`,
        import.meta.url
      ).href;
      this.alt =
        this.goal === 'all'
          ? 'All Sustainable Development Goals'
          : 'Sustainable Development Goals Circle';
    } else {
      const goalNumber = parseInt(this.goal);
      if (goalNumber >= 1 && goalNumber <= 17) {
        this.image = new URL(
          `./lib/svgs/goal-${goalNumber}.svg`,
          import.meta.url
        ).href;
        this.alt = `Goal ${goalNumber}: ${goalData[goalNumber - 1].name}`;
      }
    }
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);