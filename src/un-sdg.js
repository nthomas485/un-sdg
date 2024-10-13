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

  constructor() { //initializes properties
    super();
    this.title = "";
    this.image = "";
    this.goal = "circle";
    this.label = "";
    this.colorOnly = false;
    this.alt = null;
    this.height = "254px";
    this.width = "254px";
    this.lazy = true;
    this.fetchPriority = "low";
  }

  //where properties are defined but not used yet
  static get properties() {
    return {
      title: { type: String },
      goal: { type: String, reflect: true },
      image: { type: String },
      label: { type: String },
      colorOnly: { type: Boolean, reflect: true },
      alt: { type: String },
      lazy: { type: Boolean },
      fetchPriority: { type: String},
      height: { type: String},
      width: { type: String},
    };
  }

  static get styles() {
    return [super.styles,
    css`
      // host declares for css
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
        //width: 254px;
        //height: 254px;
        background-color: none;
        --sdg-color-1: rgb(235,28,34);
        --sdg-color-2: rgb(210,160,42);
        --sdg-color-3: rgb(44,155,72);
        --sdg-color-4: rgb(194,31,51);
        --sdg-color-5: rgb(239,64,42);
        --sdg-color-6: rgb(0,173,216);
        --sdg-color-7: rgb(253,183,19);
        --sdg-color-8: rgb(143,23,55);
        --sdg-color-9: rgb(243,109,36);
        --sdg-color-10: rgb(224,21,131);
        --sdg-color-11: rgb(249,157,37);
        --sdg-color-12: rgb(207,141,42);
        --sdg-color-13: rgb(72,119,61);
        --sdg-color-14: rgb(0,125,187);
        --sdg-color-15: rgb(63,175,73);
        --sdg-color-16: rgb(1,85,138);
        --sdg-color-17: rgb(25,54,103);
      }
      :host([goal="1"]){
        --sdg-color-1: rgb(235,28,34);
      }
      :host([goal="2"]){
        --sdg-color-2: rgb(210,160,42);
      }
      :host([goal="3"]){
        --sdg-color-3: rgb(44,155,72);
      }
      :host([goal="4"]) {
        --sdg-color-4: rgb(194,31,51);
      }
      :host([goal="5"]){
        --sdg-color-5: rgb(239,64,42);
      }
      :host([goal="6"]) {
        --sdg-color-6: rgb(0,173,216);
      }
      :host([goal="7"]){
        --sdg-color-7: rgb(253,183,19);
      }
      :host([goal="8"]){
        --sdg-color-8: rgb(143,23,55);
      }
      :host([goal="9"]){
        --sdg-color-9: rgb(243,109,36);
      }
      :host([goal="10"]) {
        --sdg-color-10: rgb(224,21,131);
      }
      :host([goal="11"]){
        --sdg-color-11: rgb(249,157,37);
      }
      :host([goal="12"]) {
        --sdg-color-12: rgb(207,141,42);
      }
      :host([goal="13"]){
        --sdg-color-13: rgb(72,119,61);
      }
      :host([goal="14"]){
        --sdg-color-14: rgb(0,125,187);
      }
      :host([goal="15"]) {
        --sdg-color-15: rgb(63,175,73);
      }
      :host([goal="16"]){
        --sdg-color-16: rgb(1,85,138);
      }
      :host([goal="17"]) {
        --sdg-color-17: rgb(25,54,103);
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
    <style> 
      :host{
        --width: ${this.width};
        --height: ${this.height};
      }
    </style>
<div class="wrapper"
style="background-color: var(--goal-${this.goal});">
  <div>${this.title}</div>
  ${this.colorOnly ? `` : html`
  <img src="${this.image}"
  alt = "${this.label}"
  loading = "${this.lazy ? "lazy" : "eager"}"
  width = ${this.width}
  height = ${this.height}
  fetchPriority = ${this.fetchPriority}
  > `} 
  <slot></slot>
</div>`;
  }

  // update label, image, and color within switch statement
  addressAssign() {
    if (this.goal != 'all' && this.goal != 'circle'){
       this.image = new URL(`../lib/svgs/goal-${this.goal}.svg`, import.meta.url).href;
    }
    var currentGoal = this.goal
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
      break;
      case "2":
        this.label = "Goal 2: Zero hunger";
      break;
      case "3": 
        this.label = "Goal 3: Good health and well-being";
      break;
      case"4": 
        this.label = "Goal 4: Quality education";
      break;
      case "5":
        this.label = "Goal 5: Gender equality";
      break;
      case "6":
        this.label = "Goal 6: Clean water and sanitation";
        break;
      case '7':
        this.label = "Goal 7: Affordable and clean energy";
        break;
      case '8':
        this.label = "Goal 8: Decent work and economic growth";
        break;
      case '9':
        this.label = "Goal 9: Industry, innovation and infrastructure";
        break;
      case '10':
        this.label = "Goal 10: Reduced inequalities";
        break;
      case '11':
        this.label = "Goal 11: Sustainable cities and communities";
        break;
      case '12':
        this.label = "Goal 12: Responsible consumption and production";
        break;
      case '13':
        this.label = "Goal 13: Climate action";
        break;
      case '14':
        this.label = "Goal 14: Life below water";
        break;
      case '15':
        this.label = "Goal 15: Life on land";
        break;
      case '16':
        this.label = "Goal 16: Peace, justice and strong institutions";
        break;
      case '17':
        this.label = "Goal 17: Partnerships for the goals";
        break; 
    }
  }
  
  //when anything changes this runs
  update(changeProperties) {
    if (changeProperties.has('goal')) {
      this.updateGoalImage();
      this.addressAssign();
    }
  }

  updateGoalImage() {
    if (this.goal === 'all' || this.goal === 'circle') {
      this.image = new URL(
        `../lib/svgs/goal-${this.goal}.svg`,
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
          `../lib/svgs/goal-${goalNumber}.svg`,
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