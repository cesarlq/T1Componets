// src/styles/global.d.ts
declare module '*.module.scss' {
    const content: { [className: string]: string };
    export default content;
  }