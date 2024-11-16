import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "@/../css/app.css";
import BackendLayout from "./Layout/BackendLayout";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout ||
            ((page) => <BackendLayout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
