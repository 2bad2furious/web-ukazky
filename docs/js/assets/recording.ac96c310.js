import{r as g,X as I,ah as j,ai as C,ag as d,aj as f,ak as p,al as E,w as O,am as _,af as $}from"./index.f9d86a6f.js";const A=g(""),y=g(!0),B=I("slidev-record-mimetype","video/webm"),S={"video/webm":"webm","video/webm;codecs=h264":"mp4","video/x-matroska;codecs=avc1":"mkv"};function h(a,o){const e=new Date,n=u=>`${u}`.padStart(2,"0"),t=`${n(e.getMonth()+1)}${n(e.getDate())}-${n(e.getHours())}${n(e.getMinutes())}`,l=o?S[o]:"webm";return`${[a,A.value,t].filter(C).join("-")}.${l}`}function x(){return MediaRecorder&&typeof MediaRecorder.isTypeSupported=="function"?Object.keys(S).filter(a=>MediaRecorder.isTypeSupported(a)):[]}const z=x(),{devices:F,videoInputs:T,audioInputs:k,ensurePermissions:L}=j({onUpdated(){var a,o;d.value!=="none"&&(T.value.find(e=>e.deviceId===d.value)||(d.value=((a=T.value[0])==null?void 0:a.deviceId)||"default")),f.value!=="none"&&(k.value.find(e=>e.deviceId===f.value)||(f.value=((o=k.value[0])==null?void 0:o.deviceId)||"default"))}});function M(a,o){const e=document.createElement("a");e.setAttribute("href",o),e.setAttribute("download",a),document.body.appendChild(e),e.click(),document.body.removeChild(e)}function P(){const a=g(!1),o=g(!1),e=p(),n=p(),t=p(),l=p(),u=p(),m={type:"video",bitsPerSecond:4*256*8*1024,timeSlice:24*60*60*1e3};async function U(){d.value!=="none"&&(o.value?(o.value=!1,a.value||v(t)):(await w(),t.value&&(o.value=!!t.value)))}async function w(){if(await L(),await E(),!t.value){if(d.value==="none"&&f.value==="none")return;t.value=await navigator.mediaDevices.getUserMedia({video:d.value==="none"||y.value!==!0?!1:{deviceId:d.value},audio:f.value==="none"?!1:{deviceId:f.value}})}}O(d,async i=>{if(i==="none")v(t);else{if(a.value)return;t.value&&(v(t),await w())}});async function b(i){var c;await L();const{default:s}=await _(()=>import("./RecordRTC.396e1c8a.js").then(function(r){return r.R}),["assets/RecordRTC.396e1c8a.js","assets/_commonjsHelpers.4e997714.js"]);if(await w(),l.value=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:15,width:3840,height:2160,cursor:"motion",resizeMode:"crop-and-scale"}}),l.value.addEventListener("inactive",R),u.value=new MediaStream,l.value.getVideoTracks().forEach(r=>u.value.addTrack(r)),Object.assign(m,i),t.value){const r=(c=t.value.getAudioTracks())==null?void 0:c[0];r&&u.value.addTrack(r),e.value=new s(t.value,m),e.value.startRecording()}n.value=new s(u.value,m),n.value.startRecording(),a.value=!0}async function R(){var i,s;a.value=!1,(i=e.value)==null||i.stopRecording(()=>{if(y.value){const c=e.value.getBlob(),r=URL.createObjectURL(c);M(h("camera",m.mimeType),r),window.URL.revokeObjectURL(r)}e.value=void 0,o.value||v(t)}),(s=n.value)==null||s.stopRecording(()=>{const c=n.value.getBlob(),r=URL.createObjectURL(c);M(h("screen",m.mimeType),r),window.URL.revokeObjectURL(r),v(l),v(u),n.value=void 0})}function v(i){const s=i.value;!s||(s.getTracks().forEach(c=>{c.stop(),s.removeTrack(c)}),i.value=void 0)}function D(){a.value?R():b()}return $("beforeunload",i=>{!a.value||confirm("Recording is not saved yet, do you want to leave?")||(i.preventDefault(),i.returnValue="")}),{recording:a,showAvatar:o,toggleRecording:D,startRecording:b,stopRecording:R,toggleAvatar:U,recorderCamera:e,recorderSlides:n,streamCamera:t,streamCapture:l,streamSlides:u}}const H=P();export{A as a,y as b,T as c,k as d,S as e,L as f,h as g,B as m,H as r,z as s};
