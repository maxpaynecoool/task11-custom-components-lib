declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

declare module "react-dom";
