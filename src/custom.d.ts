declare module "*.svg" {
    import React = require("react");
    export const RC: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}