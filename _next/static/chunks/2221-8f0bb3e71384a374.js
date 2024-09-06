"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2221],{93363:function(e,r,a){a.d(r,{l:function(){return d}});var t=a(57437),s=a(2265),i=a(39343),n=a(31014);let d=e=>{let{onSubmit:r,children:a,useFormProps:d,validationSchema:u,fieldErrors:o,formError:c,resetValues:l,className:m,...p}=e,q=(0,i.cI)({...d,...u&&{resolver:(0,n.F)(u)}});return(0,s.useEffect)(()=>{l&&q.reset(l)},[l,q]),(0,t.jsx)("form",{noValidate:!0,onSubmit:q.handleSubmit(r),...p,className:m,children:a(q)})}},84481:function(e,r,a){var t,s,i,n,d,u;a.d(r,{OQ:function(){return t}}),(n=t||(t={})).HYDROGEN="hydrogen",n.HELIUM="helium",n.LITHIUM="lithium",n.BERYLLIUM="beryllium",n.BORON="boron",n.CARBON="carbon",(d=s||(s={})).STRIPE="STRIPE",d.COD="CASH_ON_DELIVERY",d.CASH="CASH",d.FULL_WALLET_PAYMENT="FULL_WALLET_PAYMENT",d.PAYPAL="PAYPAL",d.MOLLIE="MOLLIE",d.RAZORPAY="RAZORPAY",d.SSLCOMMERZ="SSLCOMMERZ",d.PAYSTACK="PAYSTACK",d.PAYMONGO="PAYMONGO",d.XENDIT="XENDIT",d.IYZICO="IYZICO",d.BKASH="BKASH",(u=i||(i={})).FIXED="fixed",u.PERCENTAGE="percentage",u.FREE_SHIPPING="free_shipping"},11060:function(e,r,a){a.d(r,{s:function(){return t}});let t={passwordOneUppercase:"The Password must contain at least one uppercase character",passwordOneLowercase:"The Password must contain at least one lowercase character",passwordOneNumeric:"The password must contain at least one numerical character.",passwordRequired:"Password is required",passwordLengthMin:"Password must be at least 6 characters",passwordLengthMax:"Password can't be more than 32 characters",newPasswordRequired:"New Password is required",newPasswordLength:"New Password must be at least 6 characters",confirmPasswordRequired:"Confirm password is required",passwordsDidNotMatch:"Passwords don't match",nameIsRequired:"Name is required",firstNameRequired:"First name is required",userNameIsRequired:"Username is required",phoneNumberIsRequired:"Phone Number is required",customerNameIsRequired:"Customer name is required",lastNameRequired:"Last name is required",streetIsRequired:"Street Address is required",emailIsRequired:"Email address is required",invalidEmail:"Invalid email address",roleIsRequired:"Role is required",permissionIsRequired:"Permission is required",teamIsRequired:"New member must be assigned to a team",productNameIsRequired:"Product name is required",productTypeIsRequired:"Product type is required",priceIsRequired:"Product price is required",retailPriceIsRequired:"Retail price is required",salePriceIsRequired:"Sale price is required",shippingPriceIsRequired:"Shipping price is required",cityIsRequired:"City is required",stateIsRequired:"State is required",countryIsRequired:"Country is required",addressLineOneRequired:"Address line 1 is required",zipCodeRequired:"ZIP code is required",cardHolderNameIsRequired:"Card holder name is required",cardNumberIsRequired:"Card Number is required",cardExpireIsRequired:"Expire Date is required",cvcNumberIsRequired:"CVC Number is required",catNameIsRequired:"Category name is required",slugIsRequired:"Slug is required",addressIsRequired:"Address is required",creditIsRequired:"Please enter the credit amount you want to add",creditIsInteger:"Credit amount must be an integer",creditMin:"Credit amount must be at least 1",creditMax:"Credit amount must be less than 10000",paymentMethodIsRequired:"Select a payment method to continue",createDateIsRequired:"Create Date is required",dueDateIsRequired:"Due Date is required",statusIsRequired:"Status is required",discountIsRequired:"Discount amount is required",taxIsRequired:"Tax amount is required",vatIsRequired:"VAT number is required",itemNameIsRequired:"Item Name is required",itemDescIsRequired:"Item Description is required",itemQtyIsRequired:"Item Quantity is required",itemPriceIsRequired:"Item Price is required",fullNameIsRequired:"Full name is required",propertyTypeIsRequired:"Property type is required",osTypeIsRequired:"Please select Operating System to continue",specsIsRequired:"Please select at least one machine to continue",placeTypeIsRequired:"Place type is required",amenitiesAreRequired:"Amenities are required",thisFieldIsRequired:"This Field is required",propertyNameIsRequired:"Property name is required",snippetNameIsRequired:"Snippet name is required",snippetDirIsRequired:"You must have to select a snippet folder",templateNameIsRequired:"Template name is required",templateDirIsRequired:"You must have to select a template folder",folderNameIsRequired:"Folder name is required",folderNameLengthMin:"Folder name must be at least 3 letters",productColorRequired:"Product Color is Required",productSizeRequired:"Product Size is Required",descriptionIsRequired:"Description is Required",locationIsRequired:"Location is Required",startDateIsRequired:"Start Date is required",startTimeIsRequired:"Start Time is required",endDateIsRequired:"End Date is required",endTimeIsRequired:"End Time is required",roleNameIsRequired:"Role Name is Required",roleNameLengthMin:"Role name must be at least 3 letters",errorSendingEmail:"Error sending email",emailSentSuccessfully:"Your email has been sent successfully."}},60168:function(e,r,a){a.d(r,{BJ:function(){return d},EE:function(){return o},JA:function(){return u},Qg:function(){return n}});var t,s,i=a(84481);(t=s||(s={})).DARK="dark",t.LIGHT="light";let n=Number("25000"),d="https://console.pcrental.net",u={title:"PCRental - Workspace",description:"PCRental is a platform that allows you to rent a PC for a certain period of time. You can rent a PC for a day, a week, or even a month. We have a wide range of PCs to choose from. You can choose the one that suits your needs and budget.",mode:"light",layout:i.OQ.BERYLLIUM},o=["api/user/login","api/user/create","api/user/verify-before-register","api/account/reset-password","api/user/validate-username"]},92687:function(e,r,a){a.d(r,{Z:function(){return i}});let t=async()=>(await fetch("https://restcountries.com/v3.1/all?status=true&fields=name,cca2,flags")).json();var s=a(2265);function i(){let[e,r]=(0,s.useState)([]),a=()=>t().then(e=>r(e));return(0,s.useEffect)(()=>{a()},[]),{countries:e.map(e=>({label:e.name.common,value:e.cca2,url:e.flags.png,alt:e.flags.alt}))}}},76635:function(e,r,a){a.d(r,{QW:function(){return q},R1:function(){return l},sg:function(){return m},pE:function(){return p}});var t=a(60168),s=a(62175),i=a(30998),n=a(24958);let d=async()=>(0,n.s)()?await (0,s.getServerSession)():await (0,i.getSession)();var u=a(38472),o=a(93375);let c=u.Z.create({baseURL:"https://api.pcrental.net",headers:{"Content-Type":"application/json"}});c.interceptors.request.use(async e=>{let r=e.url||"";if(t.EE.includes(r))return e;let a=await d(),s=null==a?void 0:a.jwt;s&&(e.headers.Authorization="Bearer ".concat(s));let i=(0,o.getCookie)("NEXT_LOCALE")||"en";return e.headers["Accept-Language"]=i,e},e=>Promise.reject(e)),c.interceptors.response.use(e=>e,e=>{var r;return(null==e?void 0:null===(r=e.response)||void 0===r?void 0:r.status)===401&&(window.location.href="/sign-in"),Promise.reject(e)});let l=async(e,r)=>c.get(e,r),m=async(e,r,a)=>c.post(e,r,a),p=async(e,r,a)=>c.put(e,r,a),q=async(e,r)=>c.delete(e,r)},42736:function(e,r,a){var t,s=a(92317),i=a(76635);!function(e){let r="api/user",a="api/v2/user";e.signIn=async(e,a)=>(await (0,i.sg)((0,s.Z)(r,"login"),{email:e,password:a})).data,e.verifyEmail=async e=>(await (0,i.sg)((0,s.Z)(r,"verify-before-register"),{email:e})).data,e.validateUsernameAvailable=async e=>{try{return(await (0,i.sg)((0,s.Z)(r,"validate-username"),{username:e})).data.data.valid}catch(e){return!1}},e.createUser=async e=>(await (0,i.sg)((0,s.Z)(r,"create"),e)).data,e.resentOtp=async e=>(await (0,i.sg)((0,s.Z)(a,"resent-otp"),{email:e})).data.data,e.getAuthUser=async()=>(await (0,i.R1)((0,s.Z)(r,"me"))).data.data,e.signOut=async()=>(await (0,i.sg)((0,s.Z)(r,"logout"))).data,e.changePassword=async(e,a)=>(await (0,i.sg)((0,s.Z)(r,"change-password"),{current_password:e,new_password:a})).data,e.updatesProfile=async e=>(await (0,i.sg)((0,s.Z)(r,"update-profile"),e)).data,e.getCfg=async e=>{let a=await (0,i.R1)((0,s.Z)(r,"options"));return e&&a.data.data?a.data.data[e]:a.data.data},e.setCfg=async(e,a)=>(await (0,i.sg)((0,s.Z)(r,"options"),{name:e,value:a})).data.data,e.getMasterPassword=async()=>(await (0,i.R1)((0,s.Z)(r,"master-password"))).data.data,e.getOnboard=async()=>(await (0,i.R1)((0,s.Z)(r,"onboard"))).data.data,e.getUserNotification=async()=>(await (0,i.R1)((0,s.Z)(r,"notifies","me"))).data.data,e.invitations={id:async e=>(await (0,i.R1)((0,s.Z)(a,"invitation",e))).data.data,accept:async e=>(await (0,i.sg)((0,s.Z)(a,"invitation",e,"accept"))).data.data,decline:async e=>(await (0,i.sg)((0,s.Z)(a,"invitation",e,"decline"))).data.data},e.notification={list:async()=>(await (0,i.R1)((0,s.Z)(r,"notifies","me"))).data.data,id:async e=>(await (0,i.R1)((0,s.Z)(r,"notifies",e))).data.data,read:async e=>(await (0,i.pE)((0,s.Z)(r,"notifies",e,"read"))).data.data,readAll:async()=>(await (0,i.pE)((0,s.Z)(r,"notifies","read-all"))).data.data},e.forgotPassword={requestReset:async e=>(await (0,i.sg)((0,s.Z)(a,"request-reset-password"),{email:e})).data.data,resetPassword:async(e,r,t)=>(await (0,i.sg)((0,s.Z)(a,"reset-password"),{nonce:e,password:r,email:t})).data.data}}(t||(t={})),r.Z=t},62597:function(e,r,a){a.d(r,{Z:function(){return i}});var t=a(57437),s=a(11444);function i(e){let{title:r,className:a,description:i,children:n}=e;return(0,t.jsxs)("div",{className:(0,s.Z)("grid gap-5 @3xl:grid-cols-12",a),children:[(0,t.jsxs)("div",{className:"col-span-full @4xl:col-span-4",children:[(0,t.jsx)("h4",{className:"text-base font-medium",children:r}),i&&(0,t.jsx)("p",{className:"mt-2",children:i})]}),n&&(0,t.jsx)("div",{className:"col-span-full grid gap-4 @2xl:grid-cols-2 @4xl:col-span-8 @4xl:gap-5 xl:gap-7",children:n})]})}},90580:function(e,r,a){a.d(r,{Mn:function(){return d},ZP:function(){return o}});var t=a(42736),s=a(31116),i=a(49655),n=a(11525);let d=(0,s.PH)("auth/fetchAuthUserAsync");function*u(){try{let e=yield(0,i.RE)(t.Z.getAuthUser);if(!e)throw Error("User not found");yield(0,i.gz)((0,n.QV)(e))}catch(e){yield(0,i.gz)((0,n.Gl)())}}function*o(){yield(0,i.ib)(d,u)}},11525:function(e,r,a){a.d(r,{Gl:function(){return i},QV:function(){return s}});let t=(0,a(31116).oM)({name:"auth",initialState:{current:null},reducers:{setAuth(e,r){e.current=r.payload},getAuthError(e){e.current=null},clearAuth(e){e.current=null}}}),{setAuth:s,getAuthError:i,clearAuth:n}=t.actions;r.ZP=t.reducer},11444:function(e,r,a){a.d(r,{Z:function(){return i}});var t=a(44839),s=a(96164);function i(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,s.m6)((0,t.W)(r))}},24958:function(e,r,a){a.d(r,{s:function(){return t}});let t=()=>!1},92317:function(e,r,a){a.d(r,{Z:function(){return t}});function t(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return r.map(e=>e.trim().replace(/^\/+|\/+$/g,"").replace(/\/{2,}/g,"/")).filter(e=>e.length>0).join("/")}},81146:function(e,r,a){a.d(r,{$s:function(){return u},S$:function(){return o},gW:function(){return i},oH:function(){return n},uo:function(){return d}});var t=a(59772),s=a(11060);let i=t.z.object({name:t.z.string(),url:t.z.string(),size:t.z.number()}),n=t.z.string().min(1,{message:s.s.emailIsRequired}).email({message:s.s.invalidEmail}),d=t.z.string().min(1,{message:s.s.passwordRequired}).min(6,{message:s.s.passwordLengthMin}).regex(RegExp(".*[A-Z].*"),{message:s.s.passwordOneUppercase}).regex(RegExp(".*[a-z].*"),{message:s.s.passwordOneLowercase}).regex(RegExp(".*\\d.*"),{message:s.s.passwordOneNumeric}),u=t.z.string().min(1,{message:s.s.passwordRequired}).min(6,{message:s.s.passwordLengthMin}).regex(RegExp(".*[A-Z].*"),{message:s.s.passwordOneUppercase}).regex(RegExp(".*[a-z].*"),{message:s.s.passwordOneLowercase}).regex(RegExp(".*\\d.*"),{message:s.s.passwordOneNumeric}),o=t.z.string().min(1,{message:s.s.confirmPasswordRequired})}}]);