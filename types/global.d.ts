/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.scss" {
  const styles: any;
  export = styles;
}

declare module "*.png" {
  const content: any;
  export default content;
}

interface AppConfigI {
  API_URL: string
}

declare const APP_CONFIG: AppConfigI;
