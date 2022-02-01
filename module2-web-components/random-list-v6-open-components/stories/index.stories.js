import { html } from 'lit';
import '../random-listv6.js';


const fruitsList = ['Apple', 'Orange', 'Grape'];
const sodaList = ['Coca cola', 'Pepsi Max', 'Sprite', 'Fanta'];
const techList = ['HTML', 'CSS', 'Javascript', 'PHP', 'SCSS'];

export default {
    title: 'RandomListv6',
    component: 'random-listv6',
    argTypes: {
        textColor: { control: 'color' },
        staticList: { control: 'array' }
    },
};

function Template({ textColor, staticList = ['apple', 'pinapple', 'pen'] }) {
    return html `
    <random-listv6
      style="--random-listv6-text-color: ${textColor || 'black'}"
      .staticList=${staticList}
    >
      
    </random-listv6>
  `;
}

export const Regular = Template.bind({});

export const FruitsExample = Template.bind({});
FruitsExample.args = {
    staticList: fruitsList
};

export const SodaExample = Template.bind({});
SodaExample.args = {
    staticList: sodaList
};

export const TechExample = Template.bind({});
TechExample.args = {
    staticList: techList
};