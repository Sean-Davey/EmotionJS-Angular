import { Component } from '@angular/core';
import { css } from 'emotion';


@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css']
})
export class MessagePanelComponent {

  constructor() { }


  tierBase: string = css`
    
  padding: 2.8125rem 0 2.5rem 0;
  box-sizing: border-box;
  `

  wrapper: string = css`

  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  position: relative;
  box-sizing: border-box;
  `

  vr: string = css`
  
  margin-bottom: 1rem;
  `

  panelMessageInfo: string = css`
  
  margin: 0;
  border-radius: 8px;
  display: flex;
  padding: 1.25rem;
  position: relative;
  line-height: 1.25;
  border: 1px solid #45bce5;
  background-color: #def5fc;
  `

  flag: string = css`
  
  width: 100%;
  display: flex;
  align-items: flex-start;
  `

  flagImg: string = css`
  
  line-height: 1;
  max-width: none;
  `

  icon: string = css`
  
  display: inline-block;
  background-position: center center;
  background-size: contain;
  vertical-align: text-bottom;
  margin-top: 0.5rem;
  margin-right: 0.75rem;
  height: 30px;
  width: 30px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2040%2040%22%20enable-background%3D%22new%200%200%2040%2040%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpath%20fill%3D%22%2345bce5%22%20d%3D%22M20%200C9%200%200%209%200%2020c0%2011%209%2020%2020%2020c11%200%2020-9%2020-20C40%209%2031%200%2020%200z%20M22.4%2032.3h-5.1V14.1h5.1V32.3z%20M19.9%2012.2c-1.7%200-2.8-1.2-2.8-2.6c0-1.4%201.1-2.6%202.8-2.6c1.8%200%202.9%201.2%202.9%202.6C22.8%2010.9%2021.7%2012.2%2019.9%2012.2z%22/%3E%0A%3C/svg%3E%0A");
  background-repeat: no-repeat;
  font-style: italic;
  `

  flagBd: string = css `
  
  width: 100%;
  padding-top: 6px;
  `

  txtThick: string = css`
  
  font-weight: bold;
  `

  vList: string = css`
  
  display: block;
  `

  myaGrid: string = css`
  
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-left: -1rem;
  `

  myagrid__col__9of12__medium: string = css` 
    flex-basis: 100%;
    max-width: 100%;
    flex-shrink: 0;
    padding-left: 1rem;
  `

  myaGrid__col__3of12__medium: string = css` 
  flex-basis: 100%;
  max-width: 100%;
  flex-shrink: 0;
  padding-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: center;
  margin-top: 1rem;
`

vListFull: string = css`

display: block;
width: 100%;
`

btn: string = css`

min-height: 2.75rem;
margin: 0;
padding: 0.5625rem 1.1875rem;
border-sizing: border-box;
border-radius: 8px;
font-size: 1rem;
font-weight: 700;
text-align: center;
text-decoration: none;
cursor: pointer;
user-select: none;
transition: all 0.15s ease;
white-space: normal;
line-height: 1.5;

color: #001e60;
border: 1px solid #0033a0;
background-color: #f4f6f9;
background-image: linear-gradient(to bottom, #f4f6f9 0%, #f4f6f9 93%, #e3e9ed 94%, #e3e9ed 100%);

width: 100%;
display: block;
`
  
}
