import{p as _,i as h,t as b,f as g,s,a as u,b as v,n as I,c as C,d as x,e as w,h as y,g as R}from"./props-mxJ3sZ8m.js";import"./ErrorMessage-CrHXvN3Z.js";import"./Button-C5MpDGMg.js";import{I as c}from"./Table-Cy-deFIe.js";import"./LinearProgress-VWDpsgX7.js";import"./Spinner-Cd56KiE6.js";import"./EmptyScreen-ZOxGX6KH.js";import{c as q,s as V,d as B}from"./create-runtime-stories-CYXRAAji.js";import"./attributes-0gey9SWK.js";import"./index-client-CNFgVtjY.js";import"./index-D-Vb1yU-.js";import"./fa-layers-text.svelte_svelte_type_style_lang-CAV2MijS.js";import"./StarIcon-Dq4uUXvV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtmeDzJ6.js";import"./index-CfOrKyLd.js";const E=(i,a,l=I)=>{let r=()=>y(a==null?void 0:a(),["_children"]);c(i,C(r,{children:(n,d)=>{var o=x();w(()=>R(o,r().content)),u(n,o)},$$slots:{default:!0}}))},D={component:c,title:"Input/Input",tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"placeholder text to show if input field is empty",defaultValue:""},value:{control:"text",description:"initial value",defaultValue:""},disabled:{control:"boolean",description:"Flag the input as being disabled",defaultValue:!1},readonly:{control:"boolean",description:"if true, the input field cannot be edited",defaultValue:!1},required:{control:"boolean",description:"if true, the input field is required",defaultValue:!1},clearable:{control:"boolean",description:"if true, the input field can be cleared with an icon",defaultValue:!1},error:{control:"text",description:"error message to show if input is invalid",defaultValue:""}},parameters:{docs:{description:{component:"These are the stories for the `Input` component.\nIt's the component used to get text/input from the user."}}}},{Story:e}=B();var T=b("<!> <!> <!> <!> <!> <!>",1);function m(i,a){_(a,!1),V(E),h();var l=T(),r=g(l);e(r,{name:"Basic",args:{placeholder:"Basic input with a default value",value:"Value predefined"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var n=s(r,2);e(n,{name:"Readonly",args:{readonly:!0,placeholder:"readonly cannot edit the input field"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var d=s(n,2);e(d,{name:"Required",args:{required:!0,placeholder:"example of required field"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var o=s(d,2);e(o,{name:"Clearable",args:{clearable:!0,placeholder:"the input field can be cleared with an icon"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var p=s(o,2);e(p,{name:"Disabled",args:{disabled:!0,placeholder:"the input field is disabled"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var f=s(p,2);e(f,{name:"Error",args:{placeholder:"Input has an error",error:"this input is being invalid"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}}),u(i,l),v()}m.__docgen={keywords:[],data:[],name:"Input.stories.svelte"};const t=q(m,D),U=["Basic","Readonly","Required","Clearable","Disabled","Error"],W=t.Basic,X=t.Readonly,Y=t.Required,Z=t.Clearable,$=t.Disabled,ee=t.Error;export{W as Basic,Z as Clearable,$ as Disabled,ee as Error,X as Readonly,Y as Required,U as __namedExportsOrder,D as default};
