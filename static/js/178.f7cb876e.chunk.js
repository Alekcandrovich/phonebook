"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[178],{178:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(791),c=n(434),r=n(413),s=n(439),o=n(634),i=function(t){return t.contacts.loading},l=function(t){return t.contacts.filter},u=function(t){return t.contacts.items},m=function(t){return t.contacts.error},d="contactForm_form__3ay0L",f="contactForm_label__WakW9",h="contactForm_input__wCtae",p="contactForm_button__JixDz",_=n(382),x=n(184),b=function(){var t=(0,c.I0)(),e=(0,a.useState)(""),n=(0,s.Z)(e,2),i=n[0],l=n[1],m=(0,a.useState)(""),b=(0,s.Z)(m,2),j=b[0],v=b[1],N=(0,c.v9)(u),C=function(){l(""),v("")};return(0,x.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault(),function(e){N.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):t((0,o.uK)((0,r.Z)((0,r.Z)({},e),{},{id:(0,_.x0)()})))}({name:i,number:j}),C()},children:[(0,x.jsx)("label",{className:f,htmlFor:"nameInput",children:"Name"}),(0,x.jsx)("input",{className:h,id:"nameInput",type:"text",name:"name",value:i,onChange:function(t){l(t.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,x.jsx)("label",{className:f,htmlFor:"numberInput",children:"Number"}),(0,x.jsx)("input",{className:h,id:"numberInput",type:"tel",name:"number",value:j,onChange:function(t){v(t.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,x.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},j="contactListItem_contactsItem__PcncR",v="contactListItem_deleteButton__bbsu0",N=function(t){var e=t.contact,n=(0,c.I0)();return(0,x.jsxs)("li",{className:j,children:[e.name,": ",e.number," ",(0,x.jsx)("button",{className:v,type:"button",onClick:function(){n((0,o.GK)(e.id))},children:"Delete"})]})},C="contactList_contactsList__iMmmj",I=function(){var t=(0,c.v9)(u),e=(0,c.v9)(l),n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return n.length?(0,x.jsx)("ul",{className:C,children:n.map((function(t){return(0,x.jsx)(N,{contact:t,onDeleteContact:o.GK},t.id)}))}):(0,x.jsx)("p",{className:"contacts_not",children:"No contacts found"})},g=n(840),y="filter_filterLabel__jh4CL",L="filter_filterInput__2T6yn",F=function(){var t=(0,c.I0)(),e=(0,c.v9)(l);return(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{className:y,htmlFor:"filterInput",children:"Find contacts by name"}),(0,x.jsx)("input",{className:L,id:"filterInput",type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t((0,g.M)(n))}})]})};function w(){var t=(0,c.I0)(),e=(0,c.v9)(i),n=(0,c.v9)(m);return(0,a.useEffect)((function(){t((0,o.yF)())}),[t]),(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h1",{className:"heading",children:"Phonebook"}),(0,x.jsx)(b,{}),(0,x.jsx)("h2",{className:"contacts_title",children:"Contacts"}),e?(0,x.jsx)("p",{children:"Loading..."}):n?(0,x.jsxs)("p",{children:["Error: ",n]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(F,{}),(0,x.jsx)(I,{})]})]})}}}]);
//# sourceMappingURL=178.f7cb876e.chunk.js.map